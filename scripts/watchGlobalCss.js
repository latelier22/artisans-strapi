const chokidar = require("chokidar");

require("dotenv").config({ path: "./.env.local" });
const fs = require("fs");
const path = require("path");

async function fetchStyleId() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const channel = process.env.NEXT_PUBLIC_STRAPI_CHANNEL;

  if (!apiUrl || !channel) {
    throw new Error(
      "NEXT_PUBLIC_STRAPI_URL or NEXT_PUBLIC_STRAPI_CHANNEL environment variable is not set"
    );
  }

  const url = `/api/styles?filters[channels][name][$eq]=${channel}`;

  try {
    const response = await myFetch(url, "GET", null, "styles");
    if (!response || response.data.length === 0) {
      throw new Error(`No styles found for the channel: ${channel}`);
    }
    const styleId = response.data[0].id;
    return styleId;
  } catch (error) {
    console.error("Error fetching style ID:", error);
    throw error;
  }
}

async function uploadGlobalCss(styleId) {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const filePath = path.resolve(__dirname, "../app/globals-strapi.css");
  const cssContent = fs.readFileSync(filePath, "utf8");

  // URL pour mettre à jour le CSS dans Strapi
  const url = `/api/styles/${styleId}`;

  const payload = {
    data: {
      globalCss: cssContent,
    },
  };

  try {
    const response = await myFetch(url, "PUT", payload, "styles");

    if (!response || response.error) {
      throw new Error(
        `Failed to upload CSS to Strapi: ${
          response ? response.error : "Unknown error"
        }`
      );
    }

    console.log("Global CSS uploaded to Strapi successfully.");
  } catch (error) {
    console.error("Error uploading global CSS:", error);
  }
}

async function myFetch(endpoint, method, body, entity) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: method,
      headers,
      body: body ? JSON.stringify(body) : null,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${entity}: Status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`An error occurred while fetching ${entity}:`, error);
    throw error;
  }
}

// Initialize watcher.
const watcher = chokidar.watch(
  path.resolve(__dirname, "../app/globals-strapi.css"),
  {
    persistent: true,
  }
);

// Add event listeners.
watcher
  .on("change", async () => {
    try {
      const styleId = await fetchStyleId();
      await uploadGlobalCss(styleId);
      await fetchGlobalCss();
    } catch (error) {
      console.error("Error in watcher:", error);
    }
  })
  .on("error", (error) => console.error(`Watcher error: ${error}`));

console.log("Watching for changes in global-strapi.css...");

async function fetchGlobalCss() {
  const channel = process.env.NEXT_PUBLIC_STRAPI_CHANNEL;
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!apiUrl || !channel) {
    throw new Error(
      "NEXT_PUBLIC_STRAPI_URL or NEXT_PUBLIC_STRAPI_CHANNEL environment variable is not set"
    );
  }

  try {
    let url = `/api/styles?populate=*&filters[channels][name][$eq]=${channel}`;
    const response = await myFetch(url, "GET", null, "styles");
    const cssContent = response.data?.[0]?.attributes?.globalCss;

    if (!cssContent) {
      throw new Error(
        "No CSS content found for the specified channel in the API response"
      );
    }

    const filePath = path.resolve(__dirname, "../app/globals.css");
    fs.writeFileSync(filePath, cssContent, "utf8");
    console.log("Global CSS fetched and saved successfully.");
  } catch (error) {
    console.error("Error fetching global CSS:", error);
  }
}

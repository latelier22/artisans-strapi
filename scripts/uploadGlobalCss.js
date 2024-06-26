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
  } catch (error) {
    console.error("Error uploading global CSS:", error);
  }
}

async function main() {
  try {
    const styleId = await fetchStyleId();
    await uploadGlobalCss(styleId);
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();

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

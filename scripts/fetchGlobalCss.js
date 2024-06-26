require("dotenv").config({ path: "./.env.local" });
const fs = require("fs");
const path = require("path");

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
    
  } catch (error) {
    console.error("Error fetching global CSS:", error);
  }
}

fetchGlobalCss();

async function myFetch(endpoint, method, body, entity) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const headers = {};

  // Adjust headers and body for FormData
  if (body instanceof FormData) {
    // For FormData, browser automatically sets the Content-Type to 'multipart/form-data'
    // with the boundary, so we don't manually set 'Content-Type' here.
  } else {
    headers["Content-Type"] = "application/json";
    body = body ? JSON.stringify(body) : null;
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: method,
      headers,
      body,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${entity}: Status ${response.status}`);
    }

    const data = await response.json();
  

    return data;
  } catch (error) {
    console.error(`An error occurred while fetching ${entity}:`, error);
    throw error; // It's usually good practice to handle or throw errors for the caller to decide what to do
  }
}

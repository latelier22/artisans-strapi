// MyPage.js

import React from "react";
import NavbarClient from "../NavBarClient"; // Ensure the correct import
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import Section from "../Section";
import Cards from "../Cards";
import MyLightBox from "../MyLightBox";
import { Pages, site } from "../site";
import getPages from "./../component/getPages";
import fetchPages from "../component/fetchPages";
import fetchFooter from "../component/fetchFooter";
import fetchHeader from "../component/fetchHeader";

// Metadata generation function to handle missing page data
// Metadata generation function to handle missing page data
export async function generateMetadata({
  params
}, parent) {
  const pageSlug = params.pageSlug;
  let page = Pages[pageSlug]; // Initial page data from static source
  const apiPage = await fetchPages(pageSlug); // Fetch page data from the API
  console.log("apiPage = await fetchPages(pageSlug)", apiPage);

  // If no data from API, use default values
  if (!apiPage) {
    page = {
      title: "Page en cours de construction",
      description: "",
      tags: ""
    };
  } else {
    // Update initial page data with API data if available
    page = {
      ...page,
      ...apiPage
    };
  }
  return {
    title: `${page.title} | ${site.title}`,
    // Updated title
    keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
    description: page.description ? page.description : ""
  };
}
async function MyPage({
  params
}) {
  const pageSlug = params.pageSlug;
  const page = await fetchPages(pageSlug);
  const footer = await fetchFooter();
  const header = await fetchHeader();
 
  if (!page) {
    return /*#__PURE__*/React.createElement(RootLayout, null, /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen flex flex-col justify-center items-center"
    }, /*#__PURE__*/React.createElement("h1", null, "Page ", pageSlug, " en cours de construction")));
  }
  return /*#__PURE__*/React.createElement(RootLayout, {
    pageTitle: page.title,
    pageDescription: page.description,
    pageTags: page.tags
  }, /*#__PURE__*/React.createElement(NavbarClient, null), /*#__PURE__*/React.createElement(HeaderSimple, {
    photos: page.photos,
    title: page.title,
    header: header
  }), /*#__PURE__*/React.createElement(Footer, {
    footer: footer
  }));
}
;
export default MyPage;
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
import fetchHeader from"../component/fetchHeader";
import BlockRendererClient from "../component/BlockRendererClient";

// Metadata generation function to handle missing page data
// Metadata generation function to handle missing page data
export async function generateMetadata({ params }, parent) {
  const pageSlug = params.pageSlug;
  let page = Pages[pageSlug]; // Initial page data from static source
  const apiPage = await fetchPages(pageSlug); // Fetch page data from the API
  console.log("apiPage = await fetchPages(pageSlug)",apiPage)

  // If no data from API, use default values
  if (!apiPage) {
    page = { title: "Page en cours de construction", description: "", tags: "" };
  } else {
    // Update initial page data with API data if available
    page = { ...page, ...apiPage };
  }

  return {
    title: `${page.title} | ${site.title}`, // Updated title
    keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
    description: page.description ? page.description : ""
  };
}


async function MyPage({ params }) {
  const pageSlug = params.pageSlug;
  const page = await fetchPages(pageSlug);
  const footer = await fetchFooter();
  const header = await fetchHeader();

// console.log(page.block)
  if (!page) {
    return (
      <RootLayout>
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1>Page {pageSlug} en cours de construction</h1>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout pageTitle={page.title} pageDescription={page.description} pageTags={page.tags}>
      <NavbarClient />
      <HeaderSimple photos={page.photos} title={page.title} header={header}/>

      {page.block.length > 0 && (
       <div className="pt-12 container mx-auto prose ">
          <BlockRendererClient content={page.block} />

       </div>
      )}
      {/* <MyLightBox photos={page.photos} />
      {page.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
      <div className="">
        <Cards cards={page.cards} />
      </div> */}
      <Footer footer = {footer}/> 
    </RootLayout>
  );
};

export default MyPage;

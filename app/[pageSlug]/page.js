import React from "react";
import { cards as siteCards, sections, Pages } from "../site";

import NavbarClient from "../NavBarClient";
import HeaderSimple from "../headerSimple";

import { Slider } from "@/component/Slider";

import Footer from "../Footer";
import Cards from "../Cards";
import Section from "../Section";
import Title from "../Title";
import MyLightBox from "../MyLightBox";

import fetchSite from "../component/fetchSite";
import fetchPages from "../component/fetchPages";
import fetchFooter from "../component/fetchFooter";
import fetchHeader from "../component/fetchHeader";
import BlockRendererClient from "../component/BlockRendererClient";
import fetchCards from "@/component/fetchCards";

export async function generateMetadata({ params }, parent) {
  const pageSlug = params.pageSlug;
  let page = Pages[pageSlug]; // Retrieve initial page
  const apiPage = await fetchPages(pageSlug); // Fetch page data from API

  const site = await fetchSite();

  // Check if API page data exists and is not empty
  if (apiPage) {
    const apiPageData = apiPage; // Page data from API

    // Iterate over each key in the initial page
    for (const key in page) {
      // Check if the key exists in the API page data and its value is not empty
      if (apiPageData[key] && typeof apiPageData[key] === 'string' && apiPageData[key].trim() !== "") {
        // Replace the initial page value with the API page value
        page[key] = apiPageData[key];
      } else if (apiPageData[key] && typeof apiPageData[key] === 'object' && !Array.isArray(apiPageData[key])) {
        // Handle specific objects
        page[key] = { ...page[key], ...apiPageData[key] };
      }
    }
  }

  // Check that `page` and `site` are not undefined
  if (!page || !site) {
    return {
      title: 'Page non trouvée',
      keywords: [],
      description: ''
    };
  }

  return {
    title: `${page.title} | ${site.title}`, // Return the updated title
    keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
    description: page.description ? page.description : ""
  };
}

async function MyPage({ params }) {
  const pageSlug = params.pageSlug;

  const page = await fetchPages(pageSlug);
  const footer = await fetchFooter();
  const header = await fetchHeader();

  const photos = page?.photos?.data?.length > 0 
    ? page.photos.data.map(photo => ({ id: photo.id, ...photo.attributes })) 
    : [];

  const cards = await fetchCards(pageSlug);

  const sliders = [];

  if (page?.avantApres && page.avantApres.length > 0) {
    const avant = page.avantApres[0].avant?.data?.attributes?.url;
    const apres = page.avantApres[0].apres?.data?.attributes?.url;

    if (avant) {
      sliders.push({ url: avant });
    }

    if (apres) {
      sliders.push({ url: apres });
    }
  }

  if (!page || !page.title) {
    return (
      <main>
        <NavbarClient />
        <HeaderSimple title={"Page non trouvée"} header={header} />
        <Footer footer={footer} />
      </main>
    );
  }

  return (
    <main>
      <NavbarClient />
      <HeaderSimple photos={page.photos} title={page.title} header={header} />

      {photos.length > 0 && <MyLightBox photos={photos} nombre={4} />}

      {sliders.length > 0 && <Slider photos={sliders} />}

      {page.section?.length > 0 && (
        <Section section={page.section[0]} />
      )}

      {page.block?.length > 0 && (
        <div className="pt-12 px-2 container mx-auto prose max-w-none w-3/4">
          <BlockRendererClient content={page.block} />
        </div>
      )}

      {cards.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
          <Cards cards={cards} />
        </div>
      )}

      {page.section?.length > 1 && (
        <Section section={page.section[1]} />
      )}
     
      <Footer footer={footer} />
    </main>
  );
}

export default MyPage;

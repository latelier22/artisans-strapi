import React from "react";
import { cards, sections, Pages } from "../site";

import NavbarClient from "../NavBarClient";
import HeaderSimple from "../headerSimple";

import {Slider} from "@/component/Slider"

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
  let page = Pages[pageSlug]; // Récupérer la page initiale
  const apiPage = await fetchPages(pageSlug); // Récupérer les données de la page depuis l'API

  const site = await fetchSite();

  // Vérifier si les données de la page API existent et ne sont pas vides
  if (apiPage) {
    const apiPageData = apiPage; // Données de la page depuis l'API

    // Parcourir chaque clé de la page initiale
    for (const key in page) {
      // Vérifier si la clé existe dans les données de la page API et si sa valeur n'est pas vide
      if (apiPageData[key] && typeof apiPageData[key] === 'string' && apiPageData[key].trim() !== "") {
        // Remplacer la valeur de la page initiale par la valeur de la page API
        page[key] = apiPageData[key];
      } else if (apiPageData[key] && typeof apiPageData[key] === 'object' && !Array.isArray(apiPageData[key])) {
        // Traiter les objets spécifiques
        page[key] = { ...page[key], ...apiPageData[key] };
      }
    }
  }

  // Vérifier que `page` et `site` ne sont pas undefined
  if (!page || !site) {
    return {
      title: 'Page non trouvée',
      keywords: [],
      description: ''
    };
  }

  return {
    title: `${page.title} | ${site.title}`, // Retourner le titre mis à jour
    keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
    description: page.description ? page.description : ""
  };
}

async function MyPage({ params }) {
  const pageSlug = params.pageSlug;

  const page = await fetchPages(pageSlug);
  const footer = await fetchFooter();
  const header = await fetchHeader();

  if (!page) {
    return (
      <main>
        <NavbarClient />
        <HeaderSimple title="Page en cours de construction" header={header} />
        <div className="pt-12 px-2 container mx-auto prose max-w-none w-3/4">
          <p>Cette page est actuellement en cours de construction. Veuillez revenir plus tard pour plus d'informations.</p>
        </div>
        <Footer footer={footer} />
      </main>
    );
  }

  const photos = page?.photos?.data?.length > 0 
  ? page.photos.data.map(photo => ({ id: photo.id, ...photo.attributes })) 
  : [];

  const cards = await fetchCards(pageSlug);

  const sliders = [];

  if (page?.avantApres && page?.avantApres?.length > 0) {
    const avant = page.avantApres[0].avant?.data?.attributes?.url;
    const apres = page.avantApres[0].apres?.data?.attributes?.url;

    if (avant) {
      sliders.push({ url: avant });
    }

    if (apres) {
      sliders.push({ url: apres });
    }
  }

  return (
    <main>
      <NavbarClient />
      <HeaderSimple photos={page.photos} title={page.title} header={header} />

      {photos.length > 0 ? <MyLightBox photos={photos} nombre={4} /> : null}

      {sliders.length > 0 ? <Slider photos={sliders} /> : null}

      {page.section && page.section.length > 0 && (
        <Section section={page.section[0]} />
      )}

      {page.block && page.block.length > 0 && (
        <div className="pt-12 px-2 container mx-auto prose max-w-none w-3/4">
          <BlockRendererClient content={page.block} />
        </div>
      )}

      {cards.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
          <Cards cards={cards} />
        </div>
      )}

      {page.section && page.section.length > 1 && (
        <Section section={page.section[1]} />
      )}
     
      <Footer footer={footer} />
    </main>
  );
}

export default MyPage;

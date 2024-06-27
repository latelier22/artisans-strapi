import React from "react";
import { cards, sections, Pages } from "../site";

import NavbarClient from "../NavBarClient";
import HeaderSimple from "../headerSimple";
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

export async function generateMetadata({ params }, parent) {
  const pageSlug = params.pageSlug;
  let page = Pages[pageSlug]; // Récupérer la page initiale
  const apiPage = await fetchPages(pageSlug); // Récupérer les données de la page depuis l'API
  console.log("pageSlug", apiPage);

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
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1>Page {pageSlug} en cours de construction</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <NavbarClient />
      <HeaderSimple photos={page.photos} title={page.title} header={header} />

      {page.block && page.block.length > 0 && (
        <div className="pt-12 px-2 container mx-auto prose">
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
      <Footer footer={footer} />
    </main>
  );
}

export default MyPage;

import React from "react";
import { cards, sections, Pages } from "./site";

import NavbarClient from "./NavBarClient";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Cards from "./Cards";
import Section from "./Section";
import Title from "./Title";
import MyLightBox from "./MyLightBox";

import fetchSite from "./component/fetchSite";
import fetchPages from "./component/fetchPages";
import fetchFooter from "./component/fetchFooter";
import fetchHeader from "./component/fetchHeader";

export async function generateMetadata({ params }, parent) {
  const pageSlug = "accueil"; // Pour tester
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

  return {
    title: `${page.title} | ${site.title}`, // Retourner le titre mis à jour
    keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
    description: page.description ? page.description : ""
  };
}

async function Home() {
  // Dynamic metadata for the home page

  const pageSlug = "accueil";
  let page = Pages[pageSlug];
  const apiPage = await fetchPages(pageSlug);
  page = apiPage ? apiPage : page;
  const pageTitle = page.title;
  const pageDescription = page.description;

  // Récupération des photos correctement avec id et attributes
  const photos = apiPage && apiPage.photos ? apiPage.photos.data.map(photo => ({ id: photo.id, ...photo.attributes })) : page.photos;
  const backgroundColor = "bg-teal-500";

  const footer = await fetchFooter();
  const header = await fetchHeader();

  // Trier les cards par order croissant
  const sortedCards = [...cards].sort((a, b) => a.order - b.order);

  return (
   <main>
      <NavbarClient />
      <HeaderSimple title={"Page d'accueil"} header={header} />
      <Title title="Dernières réalisations" />
      {photos ? <MyLightBox photos={photos} nombre={4} /> : null}

      <Section section={page.section.length > 0 ? page.section[0] : sections[0]} />

      <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
        <Cards cards={sortedCards} buttonColor={backgroundColor} />
      </div>

      <Section section={page.section.length > 1 ? page.section[1] : sections[1]} />

      <Footer footer={footer} />
   </main>
   
  );
};

export default Home;

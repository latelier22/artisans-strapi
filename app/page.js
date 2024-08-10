import React from "react";
import { cards, sections, Pages } from "./site";

import NavbarClient from "./NavBarClient";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";

import {Slider} from "@/component/Slider"

import Cards from "./Cards";
import Section from "./Section"; import Title from "./Title";
import MyLightBox from "./MyLightBox";

import fetchSite from "./component/fetchSite";
import fetchCards from "./component/fetchCards";

import fetchPages from "./component/fetchPages";
import fetchFooter from "./component/fetchFooter";
import fetchHeader from "./component/fetchHeader";

export async function generateMetadata({ params }, parent) {
  //   const pageSlug = "accueil"; // Pour tester
  //   let page = Pages[pageSlug]; // Récupérer la page initiale
  //   const apiPage = await fetchPages(pageSlug); // Récupérer les données de la page depuis l'API
  //   console.log(apiPage)
  //   const site = await fetchSite();
  //   console.log(site)

  //   // Vérifier si les données de la page API existent et ne sont pas vides
  //   if (apiPage) {
  //     const apiPageData = apiPage; // Données de la page depuis l'API

  //     // Parcourir chaque clé de la page initiale
  //     for (const key in page) {
  //       // Vérifier si la clé existe dans les données de la page API et si sa valeur n'est pas vide
  //       if (apiPageData[key] && typeof apiPageData[key] === 'string' && apiPageData[key].trim() !== "") {
  //         // Remplacer la valeur de la page initiale par la valeur de la page API
  //         page[key] = apiPageData[key];
  //       } else if (apiPageData[key] && typeof apiPageData[key] === 'object' && !Array.isArray(apiPageData[key])) {
  //         // Traiter les objets spécifiques
  //         page[key] = { ...page[key], ...apiPageData[key] };
  //       }
  //     }
  //   }

  //   return {
  //     title: `${page.title} | ${site.title}`, // Retourner le titre mis à jour
  //     keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
  //     description: page.description ? page.description : ""
  //   };
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
  const cards = await fetchCards("accueil");

  // Trier les cards par order croissant
  const sortedCards = [...cards].sort((a, b) => a.order - b.order);

console.log(page.avantApres)
console.log(photos)
const sliders = [];

if (page.avantApres && page.avantApres.length > 0) {
  page.avantApres.forEach(item => {
    const avant = item.avant?.data?.attributes?.url;
    const apres = item.apres?.data?.attributes?.url;

    if (avant && apres) {
      sliders.push({
        photos: [
          { url: avant },
          { url: apres },
        ],
      });
    }
  });
}
  return (
    <main>
      <NavbarClient />
      <HeaderSimple title={"Page d'accueil"} header={header} />
      <Title title="Dernières réalisations" />
      <MyLightBox photos={photos} />

      { page.avantApres && page.avantApres.length >0 ? <Slider sliders={sliders} /> : null}

      {page.section && page.section.length > 0 &&
        (
          <Section section={page.section[0]} />
        )
      }

      {cards.length > 0 && (
        <div className="cards">
          <Cards cards={cards} buttonColor={backgroundColor} />
        </div>
      )}
      {page.section && page.section.length > 1 &&
        (
          <Section section={page.section[1]} />
        )
      }

      <Footer footer={footer} />
    </main>

  );
};

export default Home;

import React from "react";
import RootLayout from "../app/layout";
import { cards, sections, Pages } from "./site";
import Navbar from "./NavBarClient";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Cards from "./Cards";
import Section from "./Section";
import Title from "./Title";
import MyLightBox from "./MyLightBox";
import fetchSite from "./component/fetchSite";
import fetchPages from "./component/fetchPages";
export async function generateMetadata({
  params
}, parent) {
  const pageSlug = "accueil"; // Pour tester
  let page = Pages[pageSlug]; // Récupérer la page initiale
  const apiPage = await fetchPages(); // Récupérer les données de la page depuis l'API

  const site = await fetchSite();

  // Vérifier si les données de la page API existent et ne sont pas vides
  if (apiPage && apiPage[pageSlug]) {
    const apiPageData = apiPage[pageSlug]; // Données de la page depuis l'API

    // Parcourir chaque clé de la page initiale
    for (const key in page) {
      // Vérifier si la clé existe dans les données de la page API et si sa valeur n'est pas vide
      if (apiPageData[key] && apiPageData[key].trim() !== "") {
        // Remplacer la valeur de la page initiale par la valeur de la page API
        page[key] = apiPageData[key];
      }
    }
  }
  return {
    title: `${page.title} | ${site.title}`,
    // Retourner le titre mis à jour
    keywords: page.tags ? page.tags.split(',').map(tag => tag.trim()) : [],
    description: page.description ? page.description : ""
  };
}

// export const metadata =
// {
//   title: Pages["accueil"].title
// }

async function Home() {
  // Dynamic metadata for the home page
  const page = Pages["accueil"];
  const pageTitle = page.title;
  const pageDescription = page.description;
  const photos = [];
  const backgroundColor = "bg-teal-500";
  return /*#__PURE__*/React.createElement(RootLayout, {
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    pageTags: page.tags
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(HeaderSimple, {
    photos: photos,
    title: "Page d'accueil"
  }), /*#__PURE__*/React.createElement(Title, {
    title: "Derni\xE8res r\xE9alisations"
  }), /*#__PURE__*/React.createElement(MyLightBox, {
    photos: page.photos,
    nombre: 4
  }), /*#__PURE__*/React.createElement(Section, {
    section: sections[0]
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-neutral-900 dark:text-gold-500"
  }, /*#__PURE__*/React.createElement(Cards, {
    cards: cards,
    buttonColor: backgroundColor
  })), /*#__PURE__*/React.createElement(Section, {
    section: sections[1]
  }), /*#__PURE__*/React.createElement(Footer, null));
}
;
export default Home;
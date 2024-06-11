import React from "react";

import RootLayout from "../app/layout";
import {cards, sections, Pages} from "./site"

import Navbar from "./NavBarClient";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Cards from "./Cards";
import Section from "./Section";
import Title from "./Title"
import MyLightBox from "./MyLightBox";

import fetchSite from "./component/fetchSite"
import fetchPages from"./component/fetchPages"

export async function generateMetadata({ params }, parent) {
  const pageSlug = "accueil"; // Pour tester
  let page = Pages[pageSlug]; // Récupérer la page initiale
  const apiPage = await fetchPages(); // Récupérer les données de la page depuis l'API

  const site = await fetchSite()

  
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
    title: `${page.title} | ${site.title}`, // Retourner le titre mis à jour
    keywords : page.tags ? page.tags.split(',').map(tag => tag.trim()) : [] ,
    description : page.description ? page.description : ""
  };
}




// export const metadata =
// {
//   title: Pages["accueil"].title
// }


async function Home () {
  // Dynamic metadata for the home page
  const page = Pages["accueil"];
  const pageTitle = page.title
  const pageDescription = page.description;

  const photos = [];

  const backgroundColor = "bg-teal-500";




  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription} pageTags={page.tags}>
      <Navbar />
      <HeaderSimple photos={photos} title={"Page d'accueil"}/>
      
      <Title title="Dernières réalisations" />
      <MyLightBox photos={page.photos} nombre={4}/>


      <Section section={sections[0]} />


      <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

      <Section section={sections[1]} />
      
      <Footer />
    </RootLayout>
  );
};

export default Home;

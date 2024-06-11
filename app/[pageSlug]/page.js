// MyPage.js

import React from "react";
import Navbar from "../NavBarClient";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import Section from "../Section";
import Cards from "../Cards";
import MyLightBox from "../MyLightBox"
import { Pages, site } from "../site";
import getPages from "./../component/getPages"

export async function generateMetadata({ params }, parent) {
  const pageSlug = params.pageSlug;
  let page = Pages[pageSlug]; // Récupérer la page initiale
  const apiPage = await getPages(); // Récupérer les données de la page depuis l'API
  
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

const MyPage = ({ params }) => {
  const pageSlug = params.pageSlug;
  const page = Pages[pageSlug];
  if (!page) {
    return (
      <RootLayout >
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1>Page non trouvée</h1>
        </div>
      </RootLayout>
    );
  }
  return (
    <RootLayout pageTitle={page.title} pageDescription={page.description} pageTags={page.tags}>

      <Navbar />

      <HeaderSimple photos={page.photos} title={page.title}/>

      {/* <ImagesBar photos={page.photos} /> */}
      <MyLightBox photos={page.photos} />

      {page.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
     

      <div className="">
        <Cards cards={page.cards}  />
      </div>

      <Footer />
    </RootLayout>
  );
};

export default MyPage;

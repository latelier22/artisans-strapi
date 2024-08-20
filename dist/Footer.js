"use client";

import React from "react";
import { useEffect } from "react";
import useMenuStore from "./store/useMenuStore";
import useSiteStore from "./store/useSiteStore";
import Title from "./TitleLine";
function Footer({
  footer
}) {
  const {
    menuItems,
    fetchAndSetMenus
  } = useMenuStore();
  const {
    site,
    fetchAndSetSite
  } = useSiteStore();
  useEffect(() => {
    fetchAndSetSite();
  }, [fetchAndSetSite]);
  useEffect(() => {
    fetchAndSetMenus();
  }, [fetchAndSetMenus]);


  // Définir un tableau d'objets pour les photos du footer
  const photoFooter = [];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-sky-600 text-center text-white dark:bg-neutral-900 dark:text-gold-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center border-neutral-200 p-6 dark:border-neutral-500 lg:justify-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-12 hidden md:block"
  }, /*#__PURE__*/React.createElement("span", null, "Restons en contact sur les r\xE9seaux sociaux")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=61556209084036",
    className: "flex flex-row mr-6 text-sky-300 dark:text-neutral-200"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  })), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, "La page facebook de ", site.title, " !")))), /*#__PURE__*/React.createElement("div", {
    className: "mx-6 pt-8 pb-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement(Title, {
    title: footer && footer.messages && footer.messages["title"] ? footer.messages["title"] : "Contactez nous !"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-white"
  }, footer && footer.messages && footer.messages["intervention"] ? footer.messages["intervention"] : "No intervention message available")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-2.5 font-bold text-gold-800 dark:text-gold-800"
  }, "Qui sommes-nous?"), /*#__PURE__*/React.createElement("ul", {
    className: "mb-0 list-none text-gold-200"
  }, /*#__PURE__*/React.createElement("li", null, site.societe), /*#__PURE__*/React.createElement("li", null, site.contact), /*#__PURE__*/React.createElement("li", null, site.adresse), /*#__PURE__*/React.createElement("li", null, site.codePostal, " ", site.ville), /*#__PURE__*/React.createElement("li", null, site.telephone), /*#__PURE__*/React.createElement("li", null, site.email), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: " text-gold-800"
  }, "N\xB0 de SIRET ", site.SIRET))), /*#__PURE__*/React.createElement("div", {
    className: "mb-6 flex-col flex items-center"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-2.5 font-bold text-yellow-500 dark:text-neutral-200"
  }), /*#__PURE__*/React.createElement("img", {
    src: site.footerImageUrl,
    className: "h-60  ",
    alt: "..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-2.5 font-bold  text-white  dark:text-gold-800"
  }, "Nos services"), /*#__PURE__*/React.createElement("ul", {
    className: "mb-0 list-none"
  }, menuItems.map((menuItem, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    href: menuItem.route,
    className: " text-white hover:dark:text-gold-800 dark:text-gold-200"
  }, menuItem.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "mb-7 flex justify-center gap-x-5"
  }, photoFooter.map((photo, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo.url,
    className: "w-full",
    alt: photo.alt
  }), /*#__PURE__*/React.createElement("a", {
    href: "#!"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2023 Copyright: "), /*#__PURE__*/React.createElement("a", {
    className: "mx-3",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp",
    className: "h-5",
    alt: "TE Logo",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("a", {
    className: "font-semibold text-neutral-600 dark:text-neutral-400",
    href: "www.latelier22.fr"
  }, "L'Atelier - Webdesign")));
}
export default Footer;
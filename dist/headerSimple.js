"use client";

import React from "react";
import { useEffect } from "react";
import Title from "./TitleLine";
import useSiteStore from './store/useSiteStore';
const HeaderSimple = ({
  photos,
  title,
  header
}) => {
  const {
    site,
    fetchAndSetSite
  } = useSiteStore();
  useEffect(() => {
    fetchAndSetSite();
  }, [fetchAndSetSite]);
  useEffect(() => {
    const init = async () => {
      const {
        Tooltip,
        initTE
      } = await import("tw-elements");
      initTE({
        Tooltip
      });
    };
    init();
  }, []);
  const grosTitre = header && header.messages && header.messages["gros titre"];
  const sousTitre = header && header.messages && header.messages["sous-titre"];
  const zoneItervention = header && header.messages && header.messages["zone intervention"];
  const grosTitreParts = grosTitre ? grosTitre.split('-') : [];
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "text-center text-neutral-200 dark:bg-neutral-900 dark:text-neutral-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col  lg:flex-row first-letter:lg:justify-around  justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:block lg:self-start mt-24"
  }, /*#__PURE__*/React.createElement("img", {
    src: site.logoUrl,
    className: " rounded-2xl mx-4  p-4 w-40 lg:w-96 h-auto ",
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", {
    className: " text-gold-200 text-2xl font-bold"
  }, zoneItervention ? zoneItervention : site.ville)), /*#__PURE__*/React.createElement("div", {
    className: "flex-col justify-between"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hidden sm:block font-bold text-transparent mt-8 text-5xl bg-clip-text bg-gradient-to-br from-gold-800 via-gold-400 to-gold-800"
  }, /*#__PURE__*/React.createElement("br", {
    className: ""
  }), grosTitre ? grosTitre.toUpperCase() : site.title), /*#__PURE__*/React.createElement("h1", {
    className: "sm:hidden font-bold text-transparent mt-8 text-5xl bg-clip-text bg-gradient-to-br from-gold-800 via-gold-400 to-gold-800"
  }, /*#__PURE__*/React.createElement("br", {
    className: ""
  }), grosTitreParts.length > 0 ? grosTitreParts.map((part, index) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: index
  }, part, index < grosTitreParts.length - 1 && /*#__PURE__*/React.createElement("br", null))) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col  justify-around items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "my-8 text-gold-200 text-3xl font-bold"
  }, sousTitre ? sousTitre : site.www), /*#__PURE__*/React.createElement("a", {
    className: "md:self-stop rounded-2xl h-16 bg-black px-6  py-3 text-2xl font-medium uppercase leading-normal text-gold-200 shadow-[0_4px_9px_-4px_#FFB200] transition duration-150 ease-in-out hover:text-black hover:bg-gold-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gold-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,0,0.3),0_4px_18px_0_rgba(59,113,0,0.2)] focus:text-gold-500 focus:outline-none focus:ring-0 active:bg-lime-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,0,0.3),0_4px_18px_0_rgba(59,113,0,0.2)]",
    "data-te-ripple-init": true,
    "data-te-ripple-color": "light",
    href: "/contact",
    role: "button"
  }, "Nous contacter")))), /*#__PURE__*/React.createElement(Title, {
    title: title
  })));
};
export default HeaderSimple;
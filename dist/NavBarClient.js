"use client";

import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import useMenuStore from './store/useMenuStore';
import useSiteStore from './store/useSiteStore';
import Dropdown from "./DropDown";
import { Eye, Star, Htag, Pen, Heart, ZoomIn, ZoomOut, Trash } from "./component/album/icons";
const NavbarClient = () => {
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
 
  useEffect(() => {
    const init = async () => {
      const {
        Collapse,
        initTE
      } = await import("tw-elements");
      initTE({
        Collapse
      });
    };
    init();
  }, []);

  // Séparer l'item ADMIN des autres items de menu
  const regularMenuItems = menuItems.filter(item => item.route !== '/admin');
  const adminMenuItem = menuItems.find(item => item.route === '/admin' || item.route === '/catalogue/non-publiees');
  const getIconForRoute = route => {
    if (route.includes("favoris")) {
      return /*#__PURE__*/React.createElement(Heart, {
        isOpen: true,
        className: "mr-2"
      });
    }
    if (route.includes("recents")) {
      return /*#__PURE__*/React.createElement(Star, {
        isOpen: true,
        className: "mr-2"
      });
    }
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "z-40 md:fixed flex w-full items-center justify-between bg-sky-600 py-2 text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-black dark:text-gold-500 md:flex-wrap",
    "data-te-navbar-ref": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full  items-center  px-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "ml-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: site.logoUrl,
    className: "h-12 w-auto logo",
    alt: "Accueil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden",
    type: "button",
    "data-te-collapse-init": true,
    "data-te-target": "#navbarSupportedContentY",
    "aria-controls": "navbarSupportedContentY",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "[&>svg]:w-5"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "h-7 w-7"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto mx-auto",
    id: "navbarSupportedContentY",
    "data-te-collapse-item": true
  }, /*#__PURE__*/React.createElement("ul", {
    className: "mx-auto flex flex-col lg:flex-row",
    "data-te-navbar-nav-ref": true
  }, regularMenuItems.map(menuItem => /*#__PURE__*/React.createElement("li", {
    key: menuItem.id,
    className: `lg:mb-0 lg:pr-2`,
    "data-te-nav-item-ref": true
  }, menuItem.children && menuItem.children.length ? /*#__PURE__*/React.createElement(Dropdown, {
    className: "",
    item: menuItem
  }) : /*#__PURE__*/React.createElement("a", {
    className: `font-lien  flex flex-row transition duration-150 text-black ease-in-out hover:text-gold-800 focus:text-gold-500 disabled:text-black/30 dark:text-gold-200 dark:hover:text-gold-800 dark:focus:text-gold-500 lg:p-2 [&.active]:text-black/90`,
    href: menuItem.route,
    "data-te-nav-link-ref": true,
    "data-te-ripple-init": true,
    "data-te-ripple-color": "light"
  }, getIconForRoute(menuItem.route), menuItem.label))))), /*#__PURE__*/React.createElement("div", {
    className: "flex ml-10 md:ml-0 flex-row items-center self:justify-end"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=61556209084036",
    className: "text-sky-300 dark:text-sky-300"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-12 w-12",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  })))))));
};
export default NavbarClient;
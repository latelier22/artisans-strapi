"use client";

import React from "react";
import { useEffect } from "react";
const ListeActionsGauche = ({
  actions,
  listeTitle,
  listeSubTitle,
  photo,
  gauche,
  children,
  bgColor
}) => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: `container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ${gauche ? "animate-slideLeft" : "animate-slideRight"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex flex-col items-center ${gauche ? bgColor : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row align-middle items-center"
  }, /*#__PURE__*/React.createElement("img", {
    alt: photo.alt,
    className: gauche ? "hidden" : "block md:h-1/3 md:w-1/3 object-cover rounded-lg",
    src: `images/${photo.url}`
  }), /*#__PURE__*/React.createElement("section", {
    className: "container mx-auto mt-8 p-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-bold text-center mb-4",
    style: {
      fontFamily: "knicknack-font"
    }
  }, listeTitle), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-2"
  }, listeSubTitle), actions.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "list-disc ml-8"
  }, actions.map((action, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, action))), children), /*#__PURE__*/React.createElement("img", {
    alt: photo.alt,
    className: !gauche ? "hidden" : "block md:h-1/3 md:w-1/3 object-cover rounded-lg",
    src: `images/${photo.url}`
  }))));
};
export default ListeActionsGauche;
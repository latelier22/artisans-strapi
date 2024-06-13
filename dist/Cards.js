"use client";

import React from "react";
import { useEffect } from "react";
import Card from "./Card";
const Cards = ({
  cards,
  buttonColor,
  syliusCard
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
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto py-2 md:py-8 md:px-12 lg:px-20 lg:py-12 animate-appear"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-5 flex flex-wrap md:-m-2 h-1/2"
  }, cards.map((card, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "flex md:mb-8 justify-center w-full md:w-1/2 lg:w-1/3 flex-wrap "
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    index: index,
    syliusCard: syliusCard,
    card: card,
    buttonColor: card.buttonColor === "" ? buttonColor : card.buttonColor
  }))))))));
};
export default Cards;
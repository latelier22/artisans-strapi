"use client";

import React from "react";
import { useEffect } from "react";
const MyCarousel = ({
  images
}) => {
  useEffect(() => {
    const init = async () => {
      const {
        initTE
      } = await import("tw-elements");
      initTE(); // Initialize TW Elements without specific components
    };
    init();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "animation-carousel",
    className: "relative w-full",
    "data-carousel": "static"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-56 overflow-hidden rounded-lg md:h-96"
  }, images.map((image, index) => {
    console.log('Image:', image); // Log each image
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "hidden duration-200 ease-linear",
      "data-carousel-item": true
    }, /*#__PURE__*/React.createElement("img", {
      src: "photo-fuite1.png",
      className: "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
      alt: image.alt
    }));
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
    "data-carousel-prev": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 6 10"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 1 1 5l4 4"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Previous"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
    "data-carousel-next": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 6 10"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m1 9 4-4-4-4"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Next"))));
};
export default MyCarousel;
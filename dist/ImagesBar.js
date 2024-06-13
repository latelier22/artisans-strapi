"use client";

import { useEffect } from "react";
const ImagesBar = ({
  photos
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
    className: "container mx-auto px-5 py-2 lg:pt-4 "
  }, /*#__PURE__*/React.createElement("div", {
    className: "-m-1 flex flex-wrap"
  }, photos.map((photo, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "flex justify-around w-1/4 flex-wrap items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("img", {
    alt: photo.alt,
    className: "picto block w-60 h-60 my-12 object-cover object-center",
    src: `images/${photo.url}`
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-green-900 text-center mt-2 "
  }, photo.text))))))));
};
export default ImagesBar;
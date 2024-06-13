"use client";

import React, { useEffect } from "react";
const MyModalFullScreen = ({
  index,
  image,
  card
}) => {
  useEffect(() => {
    const init = async () => {
      const {
        Modal,
        Ripple,
        initTE
      } = await import("tw-elements");
      initTE({
        Modal,
        Ripple
      });
    };
    init();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#!",
    className: "block relative rounded-t-lg overflow-hidden w-full h-0",
    style: {
      paddingTop: "100%"
    },
    "data-te-toggle": "modal",
    "data-te-target": `#myModalfull-${index}`
  }, /*#__PURE__*/React.createElement("img", {
    className: "absolute top-0 left-0 w-full h-full object-cover object-center cursor-pointer",
    src: image,
    alt: card.title
  })), /*#__PURE__*/React.createElement("div", {
    "data-te-modal-init": true,
    className: "fixed inset-0 z-[1055] hidden overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-90",
    id: `myModalFull-${index}`,
    tabIndex: "-1",
    "aria-labelledby": "exampleModalCenteredFullScreenLabel",
    "aria-modal": "true",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-full max-h-full"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-full h-full object-cover object-center",
    src: image,
    alt: card.title
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute top-2 right-2 p-4 text-white cursor-pointer",
    "data-te-modal-dismiss": true,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-6 w-6"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })))))));
};
export default MyModalFullScreen;
"use client";

import React from "react";
import { useEffect } from "react";
const MyModal = ({
  index,
  image,
  card,
  children,
  className
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }), /*#__PURE__*/React.createElement("div", {
    "data-te-modal-init": true,
    className: "fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none",
    id: `myModal2-${index}`,
    tabIndex: "-1",
    "aria-labelledby": "exampleModalCenteredScrollableLabel",
    "aria-modal": "true",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    "data-te-modal-dialog-ref": true,
    className: "pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200",
    id: "exampleModalCenteredScrollableLabel"
  }, card.title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
    "data-te-modal-dismiss": true,
    "aria-label": "Fermer"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "h-6 w-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "relative p-4"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-full h-full",
    src: image
  }), /*#__PURE__*/React.createElement("p", null, card.text), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, ".")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200",
    "data-te-modal-dismiss": true,
    "data-te-ripple-init": true,
    "data-te-ripple-color": "light"
  }, "Fermer"))))));
};
export default MyModal;
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";

import { useEffect } from "react";
const MyComponent = () => {
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
    className: "mt-16 flex justify-center"
  }, /*#__PURE__*/React.createElement("h1", {
    class: "mb-2 mt-0 text-5xl font-medium leading-tight text-primary"
  }, "TW elements"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg"
  }, "Hover the link to see the", /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "text-primary pl-1 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600",
    "data-te-toggle": "tooltip",
    title: "Hi! I'm tooltip"
  }, "tooltip")), /*#__PURE__*/React.createElement("img", {
    src: "https://tecdn.b-cdn.net/img/new/slides/041.jpg",
    class: "h-auto max-w-full",
    alt: "..."
  }));
};
export default MyComponent;
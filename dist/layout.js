import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './page.module.css';
import { site } from './site';
const inter = Inter({
  subsets: ['latin']
});
export default function RootLayout({
  children,
  pageTitle,
  pageDescription,
  pageTags,
  isHomePage // Ajoutez un paramètre pour indiquer si la page est la page d'accueil
}) {
  return /*#__PURE__*/React.createElement("html", {
    lang: "en",
    className: "dark"
  }, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })), /*#__PURE__*/React.createElement("body", {
    className: `${inter.className} bg-neutral-900`
  }, children));
}
;
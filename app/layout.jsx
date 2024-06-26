import React from 'react';
import fetchSite from "./component/fetchSite";
import getBaseUrl from "./component/getBaseUrl"

import './globals.css';
import './page.module.css';

export default async function RootLayout({ children }) {
  const site = await fetchSite();
  // console.log("favicon", site);

  // Assurez-vous que le chemin du favicon est correct
  const faviconUrl = site.favicon && site.favicon.data && site.favicon.data.attributes && site.favicon.data.attributes.formats && site.favicon.data.attributes.formats.thumbnail.url ? site.favicon.data.attributes.formats.thumbnail.url : 'default-favicon.ico';
 const completeFaviconUrl = getBaseUrl(faviconUrl)+faviconUrl
  console.log("favicon",completeFaviconUrl)
  return (
    <html lang="en" className={process.env.THEME}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={completeFaviconUrl} />
      </head>
      <body className={``}>
        {children}
      </body>
    </html>
  );
};

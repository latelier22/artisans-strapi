import React from 'react';
import fetchSite from "./component/fetchSite";
import getBaseUrl from "./component/getBaseUrl";

import { NextAuthProvider} from "@/utils/NextAuthProvider"
// import ReduxProvider from "./ReduxProvider";


import './globals.css';

export default async function RootLayout({  children }) {
  const site = await fetchSite();
  
 
  // Assurez-vous que le chemin du favicon est correct
  const faviconUrl = site.favicon && site.favicon.data && site.favicon.data.attributes && site.favicon.data.attributes.formats && site.favicon.data.attributes.formats.thumbnail.url ? site.favicon.data.attributes.formats.thumbnail.url : 'default-favicon.ico';
  const completeFaviconUrl = getBaseUrl(faviconUrl) + faviconUrl;
 
  const bgImageUrl = site.bgImage?.data?.attributes?.url ? getBaseUrl(site.bgImage.data.attributes.url) + site.bgImage.data.attributes.url : null;

  return (
    <html lang="en" className={process.env.THEME}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={completeFaviconUrl} />
      </head>
      <body className="relative">
        
        {bgImageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImageUrl})`,
              opacity: 0.1,
              zIndex: -1,
            }}
          ></div>
        )}
        <div className="relative">
        <NextAuthProvider>
          {children}
       </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}

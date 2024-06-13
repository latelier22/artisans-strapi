import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './page.module.css';
import { site } from './site';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  pageTitle,
  pageDescription,
  pageTags,
  isHomePage // Ajoutez un paramètre pour indiquer si la page est la page d'accueil
}) {
  

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-neutral-900`}>
        {children}
      </body>
    </html>
  );
};

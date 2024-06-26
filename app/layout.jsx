import React from 'react';

import './globals.css';
import './page.module.css';


export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={process.env.THEME}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={``}>
        {children}
      </body>
    </html>
  );
};

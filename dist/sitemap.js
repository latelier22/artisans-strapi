// app/sitemap.js

// L'URL de votre site
const URL = "https://www.ker-protec.fr";

// Vos routes statiques
const SITE_ROUTES = ["", "/contact", "/ravalement", "/peinture-decoration", "/peinture-nuancier", "/nettoyage", "/realisations"];
export default async function sitemap() {
  const routes = SITE_ROUTES.map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  //   return [...routes, ...posts]
  return [...routes];
}
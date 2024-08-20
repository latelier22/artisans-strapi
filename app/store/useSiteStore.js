import { create } from 'zustand';
import myFetch from '../component/myFetch';

const useSiteStore = create((set) => ({
  site: {},

  // Setter pour mettre à jour le site
  setSite: (site) => {
    set({ site: site });
  },

  // Récupérer et définir le site depuis l'API
  fetchAndSetSite: async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL; // Assurez-vous que cette variable est définie dans votre .env
      const channel = process.env.NEXT_PUBLIC_STRAPI_CHANNEL; // Utilisez NEXT_PUBLIC pour les variables d'environnement accessibles dans le frontend
      const endpoint = `/api/sites?populate=*&filters[channels][name][$eq]=${channel}`;
      const response = await myFetch(endpoint, 'GET', null, 'sites');
      const data = response.data[0]; // Accéder au premier élément du tableau de données

      // Extraire l'URL de la vignette du logo si elle existe
      const logoThumbnailUrl = data.attributes.logo?.data?.attributes?.formats?.thumbnail?.url
        ? `${baseUrl}${data.attributes.logo.data.attributes.formats.thumbnail.url}`
        : null;
        const logoMiniUrl = data.attributes.Logo2?.data?.attributes?.url
        ? `${baseUrl}${data.attributes.Logo2.data.attributes.url}`
        : null;
        const footerImageUrl = data.attributes.footerImage?.data?.attributes?.url
        ? `${baseUrl}${data.attributes.footerImage.data.attributes.url}`
        : null;

      const site = {
        id: data.id,
        ...data.attributes,
        logoUrl : logoThumbnailUrl,
        logoMiniUrl : logoMiniUrl,
        footerImageUrl : footerImageUrl
      };

      // Mettez à jour le store avec le site récupéré
      set({ site: site });
    } catch (error) {
      console.error('Failed to fetch site', error);
    }
  },
}));

export default useSiteStore;

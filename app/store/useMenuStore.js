import { create } from 'zustand';
import myFetch from "../component/myFetch"
const useMenuStore = create((set) => ({
  menuItems: [],

  // Setter pour mettre à jour les menus
  setMenus: (menus) => {
    set({ menuItems: menus });
  },
  
  // Récupérer et définir les menus depuis l'API
  fetchAndSetMenus: async () => {
    try {
      const channel = process.env.NEXT_PUBLIC_STRAPI_CHANNEL; // Utilisez NEXT_PUBLIC pour les variables d'environnement accessibles dans le frontend
      const endpoint = `/api/menus?populate=*&filters[channels][name][$eq]=${channel}`;
      const response = await myFetch(endpoint, 'GET', null, 'menus');
      const { data } = response;

      // Transformez les données en un format approprié
      const menus = data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }));

      console.log("menus",menus)
      // Mettez à jour le store avec les menus récupérés
      set({ menuItems: menus });
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    }
  },
}));

export default useMenuStore;

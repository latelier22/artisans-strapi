import { create } from 'zustand';
import fetchMenus from '../component/fetchMenus';

const useMenuStore = create((set) => ({
  menuItems: [],

  setMenus: (menus) => {
    set({ menuItems: menus });
  },

  fetchAndSetMenus: async () => {
    try {
      const response = await fetchMenus();
      let menuItems = response;

      // Fonction récursive pour transformer les données et ajouter les parents
      const transformMenuItem = (item) => {
        return {
          id: item.id,
          label: item.attributes?.label,
          route: item.attributes?.route,
          order: item.attributes?.order,
          children: item.attributes?.children?.data.map(transformMenuItem) || [],
          parent: item.attributes?.parent?.data?.id || null
        };
      };
  
      // Appliquer la transformation aux données du menu
      menuItems = menuItems.map(transformMenuItem);
  
      // Créer une map des éléments de menu par ID pour faciliter l'assignation des enfants aux parents
      const menuMap = {};
      menuItems.forEach(item => {
        menuMap[item.id] = item;
      });
  
      // Filtrer les éléments de menu pour ne garder que ceux sans parent
      const rootMenuItems = menuItems.filter(item => !item.parent);
  
      // Trier les éléments de menu par le champ "order"
      const sortChildren = (items) => {
        items.forEach(item => {
          if (item.children) {
            item.children.sort((a, b) => a.order - b.order);
            sortChildren(item.children);
          }
        });
      };
  
      rootMenuItems.sort((a, b) => a.order - b.order);
      sortChildren(rootMenuItems);

      set({ menuItems: rootMenuItems });
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    }
  },
}));

export default useMenuStore;

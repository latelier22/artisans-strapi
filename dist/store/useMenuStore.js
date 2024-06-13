import { create } from 'zustand';
import fetchMenus from "../component/fetchMenus";
const useMenuStore = create(set => ({
  menuItems: [],
  // Setter pour mettre à jour les menus
  setMenus: menus => {
    set({
      menuItems: menus
    });
  },
  // Récupérer et définir les menus depuis l'API
  fetchAndSetMenus: async () => {
    try {
      const response = await fetchMenus();
      let menuItems = response;

      // Fonction récursive pour transformer les données et ajouter les parents
      const transformMenuItem = item => {
        return {
          id: item.id,
          label: item.label,
          route: item.route,
          order: item.order,
          children: Array.isArray(item.children?.data) ? item.children.data.map(transformMenuItem) : [],
          parent: item.parent?.data?.length > 0 ? item.parent.data[0].id : null
        };
      };

      // Appliquer la transformation aux données du menu
      menuItems = menuItems.map(transformMenuItem);

      // Créer une map des éléments de menu par ID pour faciliter l'assignation des enfants aux parents
      const menuMap = {};
      menuItems.forEach(item => {
        menuMap[item.id] = item;
      });

      // Réassigner les enfants aux parents dans la structure de menu
      menuItems.forEach(item => {
        if (item.parent) {
          const parent = menuMap[item.parent];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push(item);
          }
        }
      });

      // Filtrer les éléments de menu pour ne garder que ceux sans parent
      const rootMenuItems = menuItems.filter(item => !item.parent);

      // Trier les éléments de menu par le champ "order"
      const sortChildren = items => {
        items.forEach(item => {
          if (item.children) {
            item.children.sort((a, b) => (a.order || 0) - (b.order || 0));
            sortChildren(item.children);
          }
        });
      };
      rootMenuItems.sort((a, b) => (a.order || 0) - (b.order || 0));
      sortChildren(rootMenuItems);
      set({
        menuItems: rootMenuItems
      });
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    }
  }
}));
export default useMenuStore;
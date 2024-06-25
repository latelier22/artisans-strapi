import myFetch from "./myFetch";
async function fetchPages(pageSlug = null) {
  const channel = process.env.NEXT_PUBLIC_STRAPI_CHANNEL;
  let url = `/api/pages?populate=*&filters[channel][name][$eq]=${channel}`;

  // If pageSlug is provided, add a filter for it
  if (pageSlug) {
    url += `&filters[slug][$eq]=${pageSlug}`;
  }
  const response = await myFetch(url, "GET", null, "pages");
  const data = response.data;
  const pages = data.map(item => {
    return {
      id: item.id,
      ...item.attributes
    };
  });

  // If a pageSlug was provided, return the specific page, otherwise return all pages
  if (pageSlug) {
    return pages.length > 0 ? pages[0] : null;
  }
  return pages;
}
export default fetchPages;

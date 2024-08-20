import myFetchStrapi from "@/component/myFetchSTRAPI";

function buildFilterQuery(filters) {
  return Object.keys(filters)
    .map((key) => `filters[${key}][$eq]=${filters[key]}`)
    .join('&');
}

async function fetchPaginatedBrands(page = 1, pageSize = 20, filters = {}) {
  const filterQuery = buildFilterQuery(filters);
  const url = `/api/brands?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&${filterQuery}`;
  return await myFetchStrapi(url, "GET", null, "fetch paginated brands");
}

export default fetchPaginatedBrands;
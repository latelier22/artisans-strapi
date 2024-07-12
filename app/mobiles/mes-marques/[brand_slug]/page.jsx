import React from "react";
import myFetchStrapi from "@/app/component/myFetchSTRAPI";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import PageClient from "./PageClient";
import Link from "next/link";

async function fetchPaginatedMobiles(pageSlug, page = 1) {
  const url = `/api/mobiles?populate=*&filters[brand][brand_slug][$eq]=${pageSlug}&filters[active][$eq]=true&pagination[page]=${page}&pagination[pageSize]=25`;
  const response = await myFetchStrapi(url, "GET", null, "mobiles");
  return response;
}

async function Page({ params, searchParams }) {
  const pageSlug = params.brand_slug;
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const response = await fetchPaginatedMobiles(pageSlug, currentPage);

  const mobiles = response.data;
  const pagination = {
    currentPage: currentPage,
    pageCount: response.meta.pagination.pageCount,
  };

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
      <Link href={`/mobiles/marques/${pageSlug}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 ">
            Voir tous les mobiles de {pageSlug}
          </button>
        </Link>
        <h1 className="text-center">Mobiles for {pageSlug}</h1>
        <PageClient mobiles={mobiles} pagination={pagination} pageSlug={pageSlug} />
      </div>
      <Footer />
    </>
  );
}

export default Page;

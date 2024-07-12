import React from "react";
import myFetchMobile from "@/component/myFetchMobile";
import myFetchStrapi from "@/component/myFetchSTRAPI";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import PageClient from "./PageClient";
import Link from "next/link";

async function Page({ params, searchParams }) {
  const pageSlug = params.brand_slug;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const url = `/brands/${pageSlug}?page=${page}`;

  const mobiles = await myFetchMobile(url, "GET", null, "doc");

  // Récupérer l'ID de la marque dans Strapi
  const brandResponse = await myFetchStrapi(`/api/brands?filters[brand_slug][$eq]=${pageSlug}`, "GET", null, "Get brand");
  const brandId = brandResponse.data[0]?.id;

  console.log("brandId", brandId)

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
        <h1 className="text-center">{mobiles.data.title}</h1>
        <Link href={`/mobiles/mes-marques/${pageSlug}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 ">
            Voir tous les mobiles sélectionnés de {pageSlug}
          </button>
        </Link>
        <PageClient
          pageSlug={pageSlug}
          mobiles={mobiles.data.phones}
          pagination={{ current_page: mobiles.data.current_page, last_page: mobiles.data.last_page }}
          brandId={brandId}
        />
      </div>
      <Footer />
    </>
  );
}

export default Page;

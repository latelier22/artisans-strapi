import React from "react";
import myFetchStrapi from "@/app/component/myFetchSTRAPI";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import PageClient from "./PageClient";
import Link from "next/link";

async function Page({ params }) {
  const pageSlug = params.brand_slug;
  const url = `/api/mobiles?populate=*&filters[brand][brand_slug][$eq]=${pageSlug}&filters[active][$eq]=true`

  const response = await myFetchStrapi(url, "GET", null, "mobiles");
  const mobiles = response.data;

  console.log("mes mobiles", mobiles)

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
        <h1 className="text-center">Mobiles for {pageSlug}</h1>
        <Link href={`/mobiles/marques/${pageSlug}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 ">
            Voir tous les mobiles de {pageSlug}
          </button>
        </Link>
        <PageClient mobiles={mobiles} />
      </div>
      <Footer />
    </>
  );
}

export default Page;

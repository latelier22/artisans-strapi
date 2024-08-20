import React from "react";
import myFetchMobile from "@/component/myFetchMobile";
import myFetchStrapi from "@/component/myFetchSTRAPI";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import PageClient from "./PageClient";
import Link from "next/link";

async function Page({ params }) {
  const pageSlug = params.mobile_slug;
  const url = `/${pageSlug}`;
  const mobile = await myFetchMobile(url, "GET", null, "doc");

  // Fetch mobile ID from Strapi
  const strapiResponse = await myFetchStrapi(`/api/mobiles?filters[slug][$eq]=${pageSlug}`, "GET", null, "Fetch mobile ID from Strapi");
  const mobileData = strapiResponse.data.length ? strapiResponse.data[0] : null;

  return (
    <>
      <Navbar />
      <PageClient mobile={mobile} />
      {mobileData && (
        <div className="container mx-auto">
          <Link href={`/mobiles/create-product/${mobileData.id}`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200">
              Create Product
            </button>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Page;

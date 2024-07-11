

import React from "react";
import myFetchMobile from "@/component/myFetchMobile";

import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import PageClient from "./PageClient";

async function Page({ params }) {
  const pageSlug = params.mobile_slug;
  const url = `/${pageSlug}`;
  const mobile = await myFetchMobile(url, "GET", null, "doc");


  return (
    <>
      <Navbar />
     <PageClient mobile={mobile}/>
      <Footer />
    </>
  );
}

export default Page;

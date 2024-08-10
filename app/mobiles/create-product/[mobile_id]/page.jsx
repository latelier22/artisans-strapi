import React from "react";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import CreateProductClient from "./CreateProductClient";
import myFetchStrapi from "@/component/myFetchSTRAPI";
import myFetchMobile from "@/component/myFetchMobile";

const CreateProductPage = async ({ params }) => {
  const mobileId = params.mobile_id;

  // Fetch mobile details from Strapi
  const strapiResponse = await myFetchStrapi(`/api/mobiles/${mobileId}`, "GET", null, "Fetch mobile details from Strapi");
  const mobileData = strapiResponse.data;

  // Fetch mobile details from external API to get images
  const mobileSlug = mobileData.attributes.slug;
  const mobile = await myFetchMobile(`/${mobileSlug}`, "GET", null, "doc");

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
        <h1 className="text-center">Create Product for {mobileData.attributes.phone_name}</h1>
        <CreateProductClient mobile={mobile} mobileId={mobileId} />
      </div>
      <Footer />
    </>
  );
};

export default CreateProductPage;

import React from "react";
import myFetchMobile from "@/component/myFetchMobile";

import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import Link from "next/link";

async function Page({ params }) {
  const pageSlug = params.brand_slug;

  const url = `/brands/${pageSlug}`;

  const mobiles = await myFetchMobile(url, "GET", null, "doc");

  console.log(mobiles);

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
        <h1 className="text-center">{mobiles.data.title}</h1>
        <div className="flex flex-wrap mx-auto">
          {mobiles.data.phones.map((phone) => (
            <div
              key={phone.slug}
              className="w-full sm:w-1/2 lg:w-1/4 p-4"
            >
              <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                <img src={phone.image} alt={phone.phone_name} className="w-full h-auto object-cover mb-4" />
                <h2 className="text-xl font-bold">{phone.phone_name}</h2>
                <Link href={`/mobiles/${phone.slug}`}
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                    Details
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;

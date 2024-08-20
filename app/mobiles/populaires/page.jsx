import React from "react";
import myFetchMobile from "@/component/myFetchMobile";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import Link from "next/link";

async function fetchMobileDetails(slug) {
  const url = `/${slug}`;
  const response = await myFetchMobile(url, "GET", null, "doc");
  return response.data.thumbnail;
}

export default async function Page() {
  const url = `/top-by-fans`;
  const response = await myFetchMobile(url, "GET", null, "doc");

  const phonesWithImages = await Promise.all(
    response.data.phones.map(async (phone) => {
      const image = await fetchMobileDetails(phone.slug);
      return { ...phone, image };
    })
  );

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
        <h1 className="text-center">Les favoris du jour ({response.data.title})</h1>
        <div className="flex flex-wrap mx-auto">
          {phonesWithImages.map((phone) => (
            <div key={phone.slug} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="mobile-card rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
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

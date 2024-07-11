import React from "react";
import myFetchMobile from "@/component/myFetchMobile";

import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import Link from "next/link";

async function Notes() {

    const url = "/brands"

    const brands = await myFetchMobile ( url, "GET", null, "doc")

    console.log(brands)
  

    return (
        <>
          <Navbar />
          <div className="pt-64 container mx-auto prose max-w-none">
            <h1 className="text-center">MOBILES</h1>
            <div className="flex flex-wrap mx-auto">
              {brands.data.map((brand) => (
                <Link
                  key={brand.brand_id}
                  href={`/mobiles/marques/${brand.brand_slug}`}
                  className="w-full sm:w-1/2 lg:w-1/4 p-4"
                >
                  <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                    <h2 className="text-xl font-bold">{brand.brand_name}</h2>
                    <p>Devices: {brand.device_count}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </>
      );
    }
    
    export default Notes;

"use client"; // Indique que ce composant est côté client

import React from "react";
import Link from "next/link";
import myFetchStrapi from "@/app/component/myFetchSTRAPI";

const BrandsPageClient = ({ brands, pagination }) => {
  const handleCheckboxChange = async (id, isActive) => {
    const url = `/api/brands/${id}`;
    const payload = {
      "data": {
        "active": isActive
      }
    };
    await myFetchStrapi(url, "PUT", payload, "toggle active");
  };

  return (
    <>
      <div className="flex flex-wrap mx-auto">
        {brands.map((brand) => (
          <div key={brand.id} className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="mobile-card rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-xl font-bold">{brand.attributes.brand_name}</h2>
              <p>Nombre de modèles: {brand.attributes.device_count}</p>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={brand.attributes.active}
                  onChange={(e) => handleCheckboxChange(brand.id, e.target.checked)}
                />
                Afficher
              </label>
              <Link href={`/mobiles/marques/${brand.attributes.brand_slug}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                  Détails
                
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls flex justify-center mt-8">
        <Link href={`?page=1`} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">First</Link>
        {pagination.page > 1 && (
          <Link href={`?page=${pagination.page - 1}`} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">Previous</Link>
        )}
        {pagination.page < pagination.pageCount && (
          <Link href={`?page=${pagination.page + 1}`} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">Next</Link>
        )}
        <Link href={`?page=${pagination.pageCount}`} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">Last</Link>
      </div>
    </>
  );
};

export default BrandsPageClient;

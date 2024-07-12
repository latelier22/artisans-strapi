"use client";

import React from "react";
import Link from "next/link";

const PageClient = ({ mobiles, pagination, pageSlug }) => {
  return (
    <div>
      <div className="flex flex-wrap mx-auto">
        {mobiles.map((phone) => (
          <div key={phone.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-[12%] p-4">
            <div className="mobile-card rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
              <img src={phone.attributes.image} alt={phone.attributes.phone_name} className="w-full h-auto object-cover mb-4" />
              <h2 className="text-xl font-bold">{phone.attributes.phone_name}</h2>
              <Link href={`/mobiles/${phone.attributes.slug}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        {pagination.currentPage > 1 && (
          <Link href={`?page=${pagination.currentPage - 1}`} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
            Précédent
          </Link>
        )}
        {pagination.currentPage < pagination.pageCount && (
          <Link href={`?page=${pagination.currentPage + 1}`} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
            Suivant
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageClient;

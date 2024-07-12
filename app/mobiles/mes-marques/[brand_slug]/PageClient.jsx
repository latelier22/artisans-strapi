"use client";

import React from "react";
import Link from "next/link";

const PageClient = ({ mobiles }) => {
  return (
    <div className="flex flex-wrap mx-auto">
      {mobiles.map((phone) => (
        <div key={phone.id} className="w-full sm:w-1/2 lg:w-1/4 p-4">
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
  );
};

export default PageClient;

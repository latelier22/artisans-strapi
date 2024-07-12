"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import myFetchStrapi from "@/component/myFetchSTRAPI";

const PageClient = ({pageSlug, mobiles, pagination, brandId }) => {
  const [mobileStates, setMobileStates] = useState([]);

  useEffect(() => {
    const fetchMobileStates = async () => {
      const existingMobiles = await Promise.all(
        mobiles.map(async (phone) => {
          const response = await myFetchStrapi(`/api/mobiles?filters[slug][$eq]=${phone.slug}`, "GET", null, "Check mobile");
          if (response.data.length > 0) {
            return { ...phone, active: response.data[0].attributes.active, exists: true, id: response.data[0].id };
          } else {
            return { ...phone, active: false, exists: false, id: null };
          }
        })
      );
      setMobileStates(existingMobiles);
    };

    fetchMobileStates();
  }, [mobiles]);

  const handleAddMobile = async (phone) => {
    const url = `/api/mobiles`;
    const payload = {
      data: {
        phone_name: phone.phone_name,
        slug: phone.slug,
        brand: {
          id: brandId
        },
        active: false,
        image: phone.image
      }
    };
    const response = await myFetchStrapi(url, "POST", payload, "Add mobile");
    setMobileStates(mobileStates.map(m => m.slug === phone.slug ? { ...m, exists: true, id: response.data.id } : m));
  };

  const handleCheckboxChange = async (id, isActive) => {
    const url = `/api/mobiles/${id}`;
    const payload = { data: { active: isActive } };
    await myFetchStrapi(url, "PUT", payload, "Toggle active");
    setMobileStates(mobileStates.map(m => m.id === id ? { ...m, active: isActive } : m));
  };

  return (
    <div>
      <div className="flex flex-wrap mx-auto">
        {mobileStates.map((phone) => (
          <div key={phone.slug} className="w-full sm:w-1/2 lg:w-1/4 p-4">
           

            <div className="mobile-card rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
              <img src={phone.image} alt={phone.phone_name} className="w-full h-auto object-cover mb-4" />
              <h2 className="text-xl font-bold">{phone.phone_name}</h2>
              <Link href={`/mobiles/${phone.slug}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                Détails
              </Link>
              {!phone.exists ? (
                <button
                  onClick={() => handleAddMobile(phone)}
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
                >
                  Add
                </button>
              ) : (
                <label className="mt-4 inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={phone.active}
                    onChange={(e) => handleCheckboxChange(phone.id, e.target.checked)}
                  />
                  <span className="ml-2">Active</span>
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        {pagination.current_page > 1 && (
          <Link href={`?page=${pagination.current_page - 1}`}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200">Précédent
          </Link>
        )}
        {pagination.current_page < pagination.last_page && (
          <Link href={`?page=${pagination.current_page + 1}`}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200">Suivant
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageClient;

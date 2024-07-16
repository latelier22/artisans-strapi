"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import myFetchStrapi from "@/component/myFetchSTRAPI";

const PageClient = ({ pageSlug, mobiles, pagination, brandId }) => {
  const { data: session } = useSession();
  const [mobileStates, setMobileStates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllMobilesFromStrapi = async () => {
      if (!session) return;

      let allMobiles = [];
      let page = 1;
      let response;

      const headers = {
        'Authorization': `Bearer ${session.jwt}`
      };

      do {
        response = await myFetchStrapi(`/api/mobiles?filters[brand][id][$eq]=${brandId}&pagination[page]=${page}&pagination[pageSize]=25`, "GET", null, "Fetch all mobiles", headers);
        allMobiles = [...allMobiles, ...response.data];
        page += 1;
      } while (page <= response.meta.pagination.pageCount);

      const existingMobiles = mobiles.map(phone => {
        const strapiMobile = allMobiles.find(m => m.attributes.slug === phone.slug);
        if (strapiMobile) {
          return { ...phone, active: strapiMobile.attributes.active, exists: true, id: strapiMobile.id };
        } else {
          return { ...phone, active: false, exists: false, id: null };
        }
      });

      setMobileStates(existingMobiles);
    };

    fetchAllMobilesFromStrapi();
  }, [mobiles, brandId, session]);

  const handleAddMobile = async (phone) => {
    if (!session) return;
    setLoading(true);
    const url = `/api/mobiles`;
    const payload = {
      data: {
        phone_name: phone.phone_name,
        slug: phone.slug,
        brand: {
          id: brandId
        },
        active: true,
        image: phone.image
      }
    };
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };
    const response = await myFetchStrapi(url, "POST", payload, "Add mobile", headers);
    setMobileStates(mobileStates.map(m => m.slug === phone.slug ? { ...m, exists: true, id: response.data.id, active: true } : m));
    setLoading(false);
  };

  const handleAddAllMobiles = async () => {
    if (!session) return;
    setLoading(true);
    const newMobiles = mobileStates.filter(phone => !phone.exists);
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    await Promise.all(newMobiles.map(async (phone) => {
      const url = `/api/mobiles`;
      const payload = {
        data: {
          phone_name: phone.phone_name,
          slug: phone.slug,
          brand: {
            id: brandId
          },
          active: true,
          image: phone.image
        }
      };
      const response = await myFetchStrapi(url, "POST", payload, "Add mobile", headers);
      phone.id = response.data.id;
      phone.exists = true;
      phone.active = true;
    }));

    setMobileStates([...mobileStates]);
    setLoading(false);
  };

  const handleActivateAllMobiles = async () => {
    if (!session) return;
    setLoading(true);
    const existingMobiles = mobileStates.filter(phone => phone.exists);
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    await Promise.all(existingMobiles.map(async (phone) => {
      const url = `/api/mobiles/${phone.id}`;
      const payload = { data: { active: true } };
      await myFetchStrapi(url, "PUT", payload, "Activate mobile", headers);
    }));

    setMobileStates(mobileStates.map(phone => (phone.exists ? { ...phone, active: true } : phone)));
    setLoading(false);
  };

  const handleDeactivateAllMobiles = async () => {
    if (!session) return;
    setLoading(true);
    const existingMobiles = mobileStates.filter(phone => phone.exists);
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    await Promise.all(existingMobiles.map(async (phone) => {
      const url = `/api/mobiles/${phone.id}`;
      const payload = { data: { active: false } };
      await myFetchStrapi(url, "PUT", payload, "Deactivate mobile", headers);
    }));

    setMobileStates(mobileStates.map(phone => (phone.exists ? { ...phone, active: false } : phone)));
    setLoading(false);
  };

  const handleCheckboxChange = async (id, isActive) => {
    if (!session) return;
    setLoading(true);
    const url = `/api/mobiles/${id}`;
    const payload = { data: { active: isActive } };
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };
    await myFetchStrapi(url, "PUT", payload, "Toggle active", headers);
    setMobileStates(mobileStates.map(m => m.id === id ? { ...m, active: isActive } : m));
    setLoading(false);
  };

  const handleDeleteMobile = async (id) => {
    if (!session) return;
    setLoading(true);
    const url = `/api/mobiles/${id}`;
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };
    await myFetchStrapi(url, "DELETE", null, "Delete mobile", headers);
    setMobileStates(mobileStates.map(m => m.id === id ? { ...m, exists: false, id: null } : m));
    setLoading(false);
  };

  const handleDeleteAllMobiles = async () => {
    if (!session) return;
    setLoading(true);
    const inactiveMobiles = mobileStates.filter(phone => phone.exists && !phone.active);
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    await Promise.all(inactiveMobiles.map(async (phone) => {
      const url = `/api/mobiles/${phone.id}`;
      await myFetchStrapi(url, "DELETE", null, "Delete mobile", headers);
    }));

    setMobileStates(mobileStates.map(phone => (phone.exists && !phone.active ? { ...phone, exists: false, id: null } : phone)));
    setLoading(false);
  };

  const allAdded = mobileStates.every(phone => phone.exists);
  const allActive = mobileStates.every(phone => phone.exists && phone.active);
  const allInactive = mobileStates.every(phone => !phone.exists || !phone.active);
  const someExists = mobileStates.some(phone => phone.exists);

  return (
    <div>
      <div className="flex justify-center space-x-4 mt-8">
        {loading && <p>Opération en cours...</p>}
        <button
          onClick={handleAddAllMobiles}
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 ${allAdded ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={allAdded || loading}
        >
          ADD ALL PAGE
        </button>
        <button
          onClick={handleActivateAllMobiles}
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 ${allActive || !someExists ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={allActive || !someExists || loading}
        >
          ACTIVATE ALL PAGE
        </button>
        <button
          onClick={handleDeactivateAllMobiles}
          className={`bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors duration-200 ${allInactive ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={allInactive || loading}
        >
          DEACTIVATE ALL PAGE
        </button>
        <button
          onClick={handleDeleteAllMobiles}
          className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 ${!allInactive || mobileStates.some(phone => !phone.exists) ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!allInactive || mobileStates.some(phone => !phone.exists) || loading}
        >
          DELETE ALL PAGE
        </button>
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
      <div className="flex flex-wrap mx-auto">
        {mobileStates.map((phone) => (
          <div key={phone.id || phone.slug} className="w-full sm:w-1/2 md:w-1/4 lg:w-[12%] p-4">
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
                  disabled={loading}
                >
                  Add
                </button>
              ) : (
                <>
                  <label className="mt-4 inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={phone.active}
                      onChange={(e) => handleCheckboxChange(phone.id, e.target.checked)}
                      disabled={loading}
                    />
                    <span className="ml-2">Active</span>
                  </label>
                  {!phone.active && (
                    <button
                      onClick={() => handleDeleteMobile(phone.id)}
                      className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
                      disabled={loading}
                    >
                      Delete
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageClient;

"use client"; // Indique que ce composant est côté client

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Utiliser useRouter pour la navigation
import { useSession } from 'next-auth/react';
import myFetchStrapi from "@/app/component/myFetchSTRAPI";
import Modal from "@/component/UI/Modal";
import Link from "next/link";

const BrandsPageClient = ({ initialBrands, pagination }) => {
  const [brands, setBrands] = useState(initialBrands);
  const [newBrandName, setNewBrandName] = useState("");
  const [newBrandOrder, setNewBrandOrder] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [editBrandId, setEditBrandId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBrandId, setUploadBrandId] = useState(null);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

  const { data: session } = useSession();
  const router = useRouter(); // Initialiser useRouter

  useEffect(() => {
    setBrands(initialBrands);
  }, [initialBrands, pagination]);

  useEffect(() => {
    if (editMode) {
      const brandToEdit = brands.find(brand => brand.id === editBrandId);
      setNewBrandName(brandToEdit?.attributes.brand_name || "");
      setNewBrandOrder(brandToEdit?.attributes.order || 0);
      setPreviewImage(brandToEdit?.attributes.logo?.data ? `${process.env.NEXT_PUBLIC_ADMIN_STRAPI_URL}${brandToEdit.attributes.logo.data.attributes.url}` : null);
    }
  }, [editMode, editBrandId, brands]);

  const handleCheckboxChange = async (id, isActive) => {
    if (!session || !session.jwt) {
      console.error("No valid session or JWT token");
      return;
    }

    const url = `/api/brands/${id}`;
    const payload = {
      "data": {
        "active": isActive
      }
    };
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };
    await myFetchStrapi(url, "PUT", payload, "toggle active", headers);

    // Mettre à jour l'état local
    setBrands(brands.map(brand => 
      brand.id === id ? { ...brand, attributes: { ...brand.attributes, active: isActive } } : brand
    ));
  };

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  const handleCreateBrand = async () => {
    if (!session || !session.jwt) {
      console.error("No valid session or JWT token");
      return;
    }

    const url = `/api/brands`;
    const payload = {
      "data": {
        "brand_name": newBrandName,
        "brand_slug": generateSlug(newBrandName),
        "order": newBrandOrder,
        "active": true
      }
    };
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    const response = await myFetchStrapi(url, "POST", payload, "create brand", headers);
    const newBrand = response.data;

    if (selectedFile) {
      const uploadedLogo = await handleLogoUpload(newBrand.id);
      newBrand.attributes.logo = { data: uploadedLogo };
    }

    // Ajouter la nouvelle marque à l'état local
    setBrands([...brands, newBrand]);
    setModalCreateIsOpen(false);
  };

  const handleDeleteBrand = async (id) => {
    if (!session || !session.jwt) {
      console.error("No valid session or JWT token");
      return;
    }

    const url = `/api/brands/${id}`;
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    await myFetchStrapi(url, "DELETE", null, "delete brand", headers);
    // Mettre à jour l'état local
    setBrands(brands.filter(brand => brand.id !== id));
  };

  const handleEditBrand = (brand) => {
    setEditBrandId(brand.id);
    setEditMode(true);
    setModalEditIsOpen(true);
  };

  const handleUpdateBrand = async () => {
    if (!session || !session.jwt) {
      console.error("No valid session or JWT token");
      return;
    }

    const url = `/api/brands/${editBrandId}`;
    const payload = {
      "data": {
        "brand_name": newBrandName,
        "order": newBrandOrder,
      }
    };
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    const response = await myFetchStrapi(url, "PUT", payload, "update brand", headers);
    const updatedBrand = response.data;

    if (selectedFile) {
      const uploadedLogo = await handleLogoUpload(editBrandId);
      updatedBrand.attributes.logo = { data: uploadedLogo };
    }

    setEditMode(false);
    setEditBrandId(null);
    setModalEditIsOpen(false);

    // Mettre à jour l'état local
    setBrands(brands.map(brand => 
      brand.id === editBrandId ? updatedBrand : brand
    ));
  };

  const handleLogoChange = (file) => {
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleLogoUpload = async (brandId) => {
    if (!session || !session.jwt || !selectedFile) {
      console.error("Missing session or file");
      return;
    }

    const formData = new FormData();
    formData.append("files", selectedFile);

    const url = `/api/upload`;
    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_STRAPI_URL}${url}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.jwt}`
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload image: Status ${response.status}`);
      }

      const data = await response.json();
      console.log('Image uploaded successfully:', data);

      // Mettre à jour le champ logo de la marque
      const logoId = data[0].id;
      const updateBrandUrl = `/api/brands/${brandId}`;
      const updatePayload = {
        "data": {
          "logo": logoId
        }
      };

      const updateResponse = await myFetchStrapi(updateBrandUrl, "PUT", updatePayload, "update brand logo", headers);
      const updatedBrand = updateResponse.data;

      // Mettre à jour l'état local avec le logo
      setBrands(brands.map(brand => 
        brand.id === brandId ? updatedBrand : brand
      ));
      return data[0]; // retourner les données de l'image téléchargée
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    // Réinitialiser l'aperçu et le fichier sélectionné
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_STRAPI_URL || "/images";

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setModalCreateIsOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
        >
          Créer une nouvelle marque
        </button>
      </div>

      <div className="flex flex-wrap mx-auto">
        {brands.map((brand) => (
          <div key={brand.id} className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="mobile-card rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
              {brand.attributes.logo?.data?.attributes?.url ? (
                <img src={`${baseUrl}${brand.attributes.logo.data.attributes.url}`} alt={brand.attributes.logo.data.attributes.name} className="mb-4" />
              ) : (
                <label>
                  Ajouter un logo:
                  <input
                    type="file"
                    onChange={(e) => { setUploadBrandId(brand.id); handleLogoChange(e.target.files[0]); }}
                  />
                </label>
              )}
              <h2 className="text-xl font-bold">{brand.attributes.brand_name}</h2>
              <label>
                <input
                  type="checkbox"
                  checked={brand.attributes.active}
                  onChange={(e) => handleCheckboxChange(brand.id, e.target.checked)}
                />
                Afficher
              </label>
              <Link href={`/mobiles/marques/${brand.attributes.brand_slug}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                Détails
              </Link>
              {brand.attributes.active ? (
                <button
                  onClick={() => handleEditBrand(brand)}
                  className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors duration-200"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => handleDeleteBrand(brand.id)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalEditIsOpen}
        onClose={() => { setModalEditIsOpen(false); setEditMode(false); }}
        title="Modifier la marque"
      >
        <input
          type="text"
          placeholder="Nom de la marque"
          value={newBrandName || ""}
          onChange={(e) => setNewBrandName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Ordre"
          value={newBrandOrder || ""}
          onChange={(e) => setNewBrandOrder(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <label>
          Modifier le logo:
          <input
            type="file"
            onChange={(e) => handleLogoChange(e.target.files[0])}
            className="border p-2 mb-4 w-full"
          />
        </label>
        {previewImage && (
          <div className="flex flex-col items-center">
            <img src={previewImage} alt="Preview" className="mb-4" />
            <button
              onClick={() => handleLogoUpload(editBrandId)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
            >
              OK
            </button>
            <button
              onClick={handleCancelUpload}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        )}
        <button
          onClick={handleUpdateBrand}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 w-full"
        >
          Modifier
        </button>
      </Modal>

      <Modal
        isOpen={modalCreateIsOpen}
        onClose={() => setModalCreateIsOpen(false)}
        title="Créer une nouvelle marque"
      >
        <input
          type="text"
          placeholder="Nom de la marque"
          value={newBrandName || ""}
          onChange={(e) => setNewBrandName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Ordre"
          value={newBrandOrder || ""}
          onChange={(e) => setNewBrandOrder(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <label>
          Ajouter un logo:
          <input
            type="file"
            onChange={(e) => handleLogoChange(e.target.files[0])}
            className="border p-2 mb-4 w-full"
          />
        </label>
        {previewImage && (
          <div className="flex flex-col items-center">
            <img src={previewImage} alt="Preview" className="mb-4" />
            <button
              onClick={() => handleLogoUpload(uploadBrandId)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
            >
              OK
            </button>
            <button
              onClick={handleCancelUpload}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        )}
        <button
          onClick={handleCreateBrand}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 w-full"
        >
          Créer
        </button>
      </Modal>

      <div className="pagination-controls flex justify-center mt-8">
        <button
          onClick={() => router.push(`?page=1`)}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
        >
          First
        </button>
        {pagination.page > 1 && (
          <button
            onClick={() => router.push(`?page=${pagination.page - 1}`)}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
          >
            Previous
          </button>
        )}
        {pagination.page < pagination.pageCount && (
          <button
            onClick={() => router.push(`?page=${pagination.page + 1}`)}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        )}
        <button
          onClick={() => router.push(`?page=${pagination.pageCount}`)}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
        >
          Last
        </button>
      </div>
    </>
  );
};

export default BrandsPageClient;

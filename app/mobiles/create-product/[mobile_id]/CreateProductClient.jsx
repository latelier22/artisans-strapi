"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import myFetchStrapi from "@/component/myFetchSTRAPI";

const CreateProductClient = ({ mobile, mobileId }) => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [reference, setReference] = useState("");
  const [etat, setEtat] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleCreateProduct = async () => {
    if (!session) return;

    setUploading(true);

    const headers = {
      'Authorization': `Bearer ${session.jwt}`
    };

    // Create product
    const productPayload = {
      data: {
        title,
        description,
        price,
        slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        status: "published",
        Reference: reference,
        Etat: etat,
        mobile: mobileId
      }
    };

    try {
      const productResponse = await myFetchStrapi(`/api/products`, "POST", productPayload, "create product", headers);
      const productId = productResponse.data.id;

      // Redirect to the product detail page
      router.push(`/products/${productId}`);
    } catch (error) {
      console.error('Error creating product:', error);
      setUploading(false);
    }
  };

  return (
    <div className="pt-64 container mx-auto prose max-w-none">
      <h1 className="text-center">Create Product</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Etat"
          value={etat}
          onChange={(e) => setEtat(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <div className="flex space-x-4 mb-4">
          {mobile.data.phone_images.map((image, index) => (
            <img key={index} src={image} alt={`mobile-image-${index}`} className="w-24 h-24 object-cover rounded-lg shadow-lg" />
          ))}
        </div>
        <button
          onClick={handleCreateProduct}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 w-full"
          disabled={uploading}
        >
          {uploading ? 'Creating...' : 'Create Product'}
        </button>
      </div>
    </div>
  );
};

export default CreateProductClient;

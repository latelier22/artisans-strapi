"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import myFetchStrapi from "@/component/myFetchSTRAPI"; // Assurez-vous que le chemin est correct

const Upload = ({ onUploadComplete }) => {
  const { data: session } = useSession();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("files", file);

    try {
      setIsUploading(true);
      setError(null);

      const token = session?.jwt || session?.accessToken;

      if (!token) {
        throw new Error("No JWT found. Please log in.");
      }

      const additionalHeaders = {
        Authorization: `Bearer ${token}`,
      };

      // Upload the image using myFetchStrapi
      const data = await myFetchStrapi('/api/upload', 'POST', formData, 'image upload', additionalHeaders);

      if (data && data.length > 0) {
        onUploadComplete(data[0]); // Return the first image data after upload
      } else {
        setError("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("An error occurred during the upload.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        disabled={isUploading}
        className="border border-gray-300 rounded p-2 w-full"
      />
      {isUploading && <p>Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Upload;

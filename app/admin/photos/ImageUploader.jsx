"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Upload from "@/component/Upload";
import myFetchStrapi from "@/component/myFetchSTRAPI";

const ImageUploader = ({ onUploadComplete, selectedPageId, existingImages }) => {
    const { data: session } = useSession();
    const [uploadedImages, setUploadedImages] = useState([]);
    const [error, setError] = useState(null);

    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

    const handleUploadComplete = (imageInfo) => {
        const imageWithBaseUrl = {
            ...imageInfo,
            url: imageInfo.url.startsWith("http") ? imageInfo.url : `${baseUrl}${imageInfo.url}`,
        };

        setUploadedImages((prevImages) => {
            // Vérification stricte pour éviter les doublons
            const isDuplicate = prevImages.some(img => img.id === imageInfo.id);
            if (isDuplicate) {
                console.log("Image déjà présente dans l'upload, évitant la duplication.");
                return prevImages;
            }

            return [...prevImages, imageWithBaseUrl];
        });

        if (onUploadComplete) {
            onUploadComplete(imageWithBaseUrl); // Notify parent component about the new photo
        }
    };

    const handleAddImagesToPage = async () => {
        if (uploadedImages.length === 0 || !selectedPageId) return;

        try {
            const token = session?.jwt || session?.accessToken;

            if (!token) {
                throw new Error("No JWT found. Please log in.");
            }

            const additionalHeaders = {
                Authorization: `Bearer ${token}`,
            };

            // Combine existing images with new uploaded images
            const updatedImages = [...(existingImages || []), ...uploadedImages.map(img => ({ id: img.id }))];

            // Send a PUT request to update the page with the new list of images
            const updatePayload = { data: { photos: updatedImages } };
            const updateResponse = await myFetchStrapi(`/api/pages/${selectedPageId}`, 'PUT', updatePayload, 'update page', additionalHeaders);

            if (updateResponse) {
                alert("Images successfully added to the page!");
                setUploadedImages([]); // Clear the uploaded images state after successful update
            } else {
                setError("Failed to add images to page");
            }
        } catch (error) {
            console.error("Error adding images to page:", error);
            setError("An error occurred while adding the images to the page.");
        }
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Upload Images and Add to Page</h2>

            {/* Image Upload */}
            <div className="mb-4">
                <Upload onUploadComplete={handleUploadComplete} />
            </div>

            {/* Display Uploaded Images */}
            {/* {uploadedImages.length > 0 && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Uploaded Images:</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {uploadedImages.map((img, index) => (
                            <img key={index} src={img.url} alt={img.alt} className="object-cover rounded-lg shadow-md" />
                        ))}
                    </div>
                </div>
            )} */}

            {/* Add Images to Page */}
            <button
                onClick={handleAddImagesToPage}
                className="bg-blue-500 text-white p-2 rounded mt-4"
                disabled={uploadedImages.length === 0 || !selectedPageId}
            >
                Add Images to Page
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default ImageUploader;

"use client";

import React, { useState, useEffect } from "react";
import PhotosGallery from "./PhotosGallery";
import ImageUploader from "./ImageUploader"; 
import myFetchStrapi from "@/component/myFetchSTRAPI";
import { useSession } from "next-auth/react";

const HomeClient = ({ pages }) => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    const [photosByPage, setPhotosByPage] = useState({});
    const { data: session } = useSession();

    // Function to extract photos from each page
    const getPagePhotos = (page) => {
        if (page.photos && page.photos.data) {
            return page.photos.data.map(photo => ({
                id: photo.id,
                url: photo.attributes.url.startsWith("http") ? photo.attributes.url : `${baseUrl}${photo.attributes.url}`,
                alt: photo.attributes.alternativeText || page.title,
            }));
        }
        return [];
    };

    // Load photos for all pages on initial load
    useEffect(() => {
        const allPhotos = {};
        pages.forEach(page => {
            allPhotos[page.id] = getPagePhotos(page);
        });
        setPhotosByPage(allPhotos);
    }, [pages]);

    const handleUploadComplete = (newPhoto, pageId) => {
        const photoWithBaseUrl = {
            ...newPhoto,
            url: newPhoto.url.startsWith("http") ? newPhoto.url : `${baseUrl}${newPhoto.url}`,
        };

        setPhotosByPage((prevPhotosByPage) => {
            const existingPhotos = prevPhotosByPage[pageId] || [];

            const isDuplicate = existingPhotos.some(photo => photo.id === newPhoto.id);
            if (isDuplicate) {
                return prevPhotosByPage;
            }

            return {
                ...prevPhotosByPage,
                [pageId]: [...existingPhotos, photoWithBaseUrl],
            };
        });
    };

    const handleDeletePhoto = async (photoId, pageId) => {
        const token = session?.jwt || session?.accessToken;

        if (!token) {
            throw new Error("No JWT found. Please log in.");
        }

        const additionalHeaders = {
            Authorization: `Bearer ${token}`,
        };

        try {
            const updatedPhotos = photosByPage[pageId].filter(photo => photo.id !== photoId);

            // Update the page on the server
            const updatePayload = { data: { photos: updatedPhotos.map(photo => ({ id: photo.id })) } };
            await myFetchStrapi(`/api/pages/${pageId}`, 'PUT', updatePayload, 'update page', additionalHeaders);

            // Update the state
            setPhotosByPage(prevPhotosByPage => ({
                ...prevPhotosByPage,
                [pageId]: updatedPhotos,
            }));

            alert("Image supprimée avec succès !");
        } catch (error) {
            console.error("Error deleting image:", error);
            alert("Une erreur s'est produite lors de la suppression de l'image.");
        }
    };

    return (
        <>
            {pages.map((page) => (
                <section key={page.id} className="mb-8 mt-24">
                    <h2 className="text-xl font-bold mb-4">{page.title}</h2>
                    {photosByPage[page.id] && (
                        <>
                            <PhotosGallery 
                                initialPhotos={photosByPage[page.id]} 
                                onDelete={(photoId) => handleDeletePhoto(photoId, page.id)} 
                            />
                            <section className="mt-4">
                                <ImageUploader 
                                    onUploadComplete={(newPhoto) => handleUploadComplete(newPhoto, page.id)} 
                                    selectedPageId={page.id} 
                                    existingImages={photosByPage[page.id]} // Pass existing images here
                                />
                            </section>
                        </>
                    )}
                </section>
            ))}
        </>
    );
};

export default HomeClient;

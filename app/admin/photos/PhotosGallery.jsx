"use client";

import React from "react";
import Image from "next/image";

const PhotosGallery = ({ initialPhotos, onDelete }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {initialPhotos.map((photo) => (
        <div key={photo.id} className="relative w-96 h-96">
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            className="object-cover rounded-lg shadow-md"
          />
          <button
            onClick={() => onDelete(photo.id)}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotosGallery;

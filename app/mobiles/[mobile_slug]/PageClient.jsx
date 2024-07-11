"use client"

import React, { useState, useEffect } from "react";


const PageClient = ({mobile}) => {

    const { brand, phone_name, thumbnail, phone_images, release_date, dimension, os, storage, specifications } = mobile.data;
    
    // État local pour l'image principale
    const [mainImage, setMainImage] = useState(thumbnail);
    
    useEffect(() => {
        setMainImage(thumbnail);
    }, [thumbnail]);
    
    return(

<div className="pt-64 container mx-auto prose max-w-none">
<h1 className="text-center text-3xl font-bold">{phone_name}</h1>
<div className="flex flex-wrap mx-auto">
  <div className="w-full lg:w-1/2 p-4">
    <img src={mainImage} alt={phone_name} className="w-1/2 h-auto mx-auto rounded-lg shadow-lg mb-4" />
    <div className="flex space-x-4">
      {phone_images.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className="w-24 h-24 object-cover rounded-lg shadow-lg cursor-pointer"
          onClick={() => setMainImage(image)}
          />
        ))}
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Specifications</h2>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Release Date:</strong> {release_date}</p>
      <p><strong>Dimensions:</strong> {dimension}</p>
      <p><strong>OS:</strong> {os}</p>
      <p><strong>Storage:</strong> {storage}</p>
      {specifications.map((spec, index) => (
          <div key={index} className="mt-4">
          <h3 className="text-xl font-semibold">{spec.title}</h3>
          {spec.specs.map((item, idx) => (
              <p key={idx}>
              <strong>{item.key}:</strong> {item.val.join(", ")}
            </p>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>
</div>)
    }


export default PageClient;
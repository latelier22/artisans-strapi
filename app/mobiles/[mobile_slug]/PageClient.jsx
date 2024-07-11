"use client"

import React, { useState, useEffect } from "react";

const translationMapping = {
  "Network": "Réseau",
  "Launch": "Lancement",
  "Body": "Corps",
  "Display": "Affichage",
  "Platform": "Plateforme",
  "Memory": "Mémoire",
  "Main Camera": "Caméra principale",
  "Selfie camera": "Caméra selfie",
  "Sound": "Son",
  "Comms": "Communications",
  "Features": "Caractéristiques",
  "Battery": "Batterie",
  "Misc": "Divers",
  "Technology": "Technologie",
  "2G bands": "Bandes 2G",
  "3G bands": "Bandes 3G",
  "4G bands": "Bandes 4G",
  "Speed": "Vitesse",
  "Announced": "Annoncé",
  "Status": "Statut",
  "Available": "Disponible",
  "Dimensions": "Dimensions",
  "Weight": "Poids",
  "SIM": "SIM",
  "Type": "Type",
  "Size": "Taille",
  "Resolution": "Résolution",
  "OS": "Système d'exploitation",
  "Chipset": "Chipset",
  "CPU": "Processeur",
  "GPU": "GPU",
  "Card slot": "Emplacement pour carte",
  "Internal": "Interne",
  "Other": "Autre",
  "Single": "Unique",
  "Dual": "Double",
  "Video": "Vidéo",
  "Loudspeaker": "Haut-parleur",
  "3.5mm jack": "Prise jack 3,5 mm",
  "WLAN": "WLAN",
  "Bluetooth": "Bluetooth",
  "Positioning": "Positionnement",
  "NFC": "NFC",
  "Radio": "Radio",
  "USB": "USB",
  "Sensors": "Capteurs",
  "Colors": "Couleurs",
  "Models": "Modèles",
  "Price": "Prix",
  "Build": "Construction",
  "Charging": "Chargement",
  "Performance": "Performance",
  "Display": "Affichage",
  "Camera": "Caméra",
  "Audio quality": "Qualité audio",
  "Battery (old)": "Batterie (ancienne)",
  "Glass front (Corning-made glass)": "Avant en verre (verre fabriqué par Corning)",
  "Glass back (Corning-made glass)": "Arrière en verre (verre fabriqué par Corning)",
  "Stainless steel frame": "Cadre en acier inoxydable",
  "Available." : "Disponible."
};

function translateSpec(spec, mapping) {
  const translatedSpec = {
    ...spec,
    title: mapping[spec.title] || spec.title,
    specs: spec.specs.map(item => ({
      key: mapping[item.key] || item.key,
      val: item.val.map(valItem => {
        // Diviser la chaîne si elle contient des virgules ou des tirets pour traiter chaque partie séparément
        return valItem.split(/, | - /).map(part => {
          const trimmedPart = part.trim();
          return mapping[trimmedPart] || trimmedPart;
        }).join(', ');
      })
    }))
  };
  return translatedSpec;
}

const PageClient = ({ mobile }) => {
  const { brand, phone_name, thumbnail, phone_images, release_date, dimension, os, storage, specifications } = mobile.data;

  // État local pour l'image principale
  const [mainImage, setMainImage] = useState(thumbnail);

  // Traduire les spécifications
  const translatedSpecifications = specifications.map(spec => translateSpec(spec, translationMapping));

  useEffect(() => {
    setMainImage(thumbnail);
  }, [thumbnail]);

  return (
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
            {translatedSpecifications.map((spec, index) => (
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
    </div>
  );
}

export default PageClient;

"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSiteStore from './store/useSiteStore';

const FormContact = () => {
  // Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { site, fetchAndSetSite } = useSiteStore();

  useEffect(() => {
    fetchAndSetSite();
  }, [fetchAndSetSite]);

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  // Méthode
  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);

      // Inclure contactEmail dans l'objet data
      const payload = {
        ...data,
        contactEmail: site.email,
      };

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
      }
    }
  };

  return (
    <div className="pt-16 pb-8 px-4 max-w-3xl mx-auto">
      <h1 className="text-center text-3xl font-semibold mb-4">
        FORMULAIRE DE CONTACT
      </h1>
      <p className="text-center text-lg mb-8">
        Vous pouvez aussi adresser un mail à{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 underline">
          {site.email ? site.email : "(voir en bas de page)"}
        </a>
      </p>

      <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
        {isSended && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
            Votre message a bien été envoyé avec succès, nous vous répondrons rapidement.
          </div>
        )}

        <div className="bg-gray-100 p-6 rounded-md space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Prénom"
                {...register("prenom", { required: true })}
              />
              {errors.prenom && (
                <small className="text-red-600">Vous devez renseigner votre prénom.</small>
              )}
            </div>
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nom"
                {...register("nom", { required: true })}
              />
              {errors.nom && (
                <small className="text-red-600">Vous devez renseigner votre nom.</small>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-sky-100"
              placeholder="Adresse email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="text-red-600">Vous devez renseigner votre adresse email.</small>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-md">
          <label htmlFor="contenu" className="block text-sm font-medium text-gray-700">
            Contenu du message
          </label>
          <textarea
            id="contenu"
            rows="6"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Votre message..."
            {...register("contenu", { required: true })}
          ></textarea>
          {errors.contenu && (
            <small className="text-red-600">Vous devez renseigner le contenu de votre message.</small>
          )}
        </div>

        <div className="flex justify-end">
          {!isLoading && (
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Envoyer
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormContact;

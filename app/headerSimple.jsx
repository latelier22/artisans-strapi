"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Title from "./TitleLine";
import useSiteStore from './store/useSiteStore';

import getBaseUrl from "./component/getBaseUrl";

const HeaderSimple = ({ photos, title, header }) => {
  const { site, fetchAndSetSite } = useSiteStore();

  console.log("site.logoUrl",site.logoUrl)

  useEffect(() => {
    fetchAndSetSite();
  }, [fetchAndSetSite]);

  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  const grosTitre = header && header.messages && header.messages["gros titre"];
  const sousTitre = header && header.messages && header.messages["sous-titre"];
  const zoneIntervention = header && header.messages && header.messages["zone intervention"];
  const grosTitreParts = grosTitre ? grosTitre.split('-') : [];



  const baseUrl = header.bgImage ? getBaseUrl(header.bgImage.url) : null;

  console.log("baseUrl",baseUrl)
  
  return (
    <header>
      <div
        className="marginSite px-2 text-center"
        style={{
          backgroundImage: header.bgImage ? `url(${baseUrl}${header.bgImage.url})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-around justify-start items-center">
          <div className="lg:self-start">
            <div className="myLogo mx-auto p-4 w-full lg:w-96 h-auto">
              {site.logoUrl && (
                <Image
                  src={site.logoUrl}
                  width={200}
                  height={200}
                  alt="logo"
                />
              )}
            </div>
            <h3 className="intervention text-2xl font-bold">
              {zoneIntervention ? zoneIntervention : site.ville}
            </h3>
      
          </div>
          <div className="flex-col justify-between">
            <h1 className="hidden sm:block font-bold  mt-8 text-5xl">
              <br />
              {grosTitre ? grosTitre.toUpperCase() : site.title}
            </h1>
            <h1 className="sm:hidden font-bold  mt-8 text-5xl">
              <br />
              {grosTitreParts.length > 0 ? (
                grosTitreParts.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < grosTitreParts.length - 1 && <br />}
                  </React.Fragment>
                ))
              ) : (
                <>
                  {site.title}
                </>
              )}
            </h1>
            <div className="flex flex-col justify-around items-center">
              <h3 className="my-8 text-3xl font-bold">
                {sousTitre ? sousTitre : site.www}
              </h3>
              <a
                className="myButton md:self-stop rounded-2xl h-16 px-6 py-3 text-2xl font-medium uppercase leading-normal   focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#FFB200] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,0,0.3),0_4px_18px_0_rgba(59,113,0,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,0,0.3),0_4px_18px_0_rgba(59,113,0,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/contact"
                role="button"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
        <Title title={title} />
      </div>
    </header>
  );
};

export default HeaderSimple;

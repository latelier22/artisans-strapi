"use client";
import React, { useEffect } from "react";

const MyLightBox = ({ photos }) => {
  useEffect(() => {
    const init = async () => {
      const { Lightbox, initTE } = await import("tw-elements");
      initTE({ Lightbox });
    };
    init();
  }, []);

  function getBaseUrl(url) {
    const baseUrl = url.startsWith('/uploads')
      ? process.env.NEXT_PUBLIC_STRAPI_URL
      : `images/`;
    return baseUrl;
  }

  return (
    <div className="flex items-center justify-center mx-auto">
      <div
        data-te-lightbox-init
        className="flex flex-col lg:flex-row flex-wrap lg:space-x-2 lg:space-y-2 justify-center"
      >
        {photos.map((photo, index) => {
          const baseUrl = getBaseUrl(photo.url);

          return (
            <div
              key={index}
              className="flex mx-auto w-full h-auto lg:w-1/5 "
            >
              <img
                src={`${baseUrl}${photo.url}`}
                data-te-img={`${baseUrl}${photo.url}`}
                alt={photo.alt || "Image"}
                className={`mb-5 w-72 h-72 object-cover object-center cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyLightBox;

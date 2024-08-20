"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import getBaseUrl from "./component/getBaseUrl";

const MyLightBox = ({ photos }) => {
  useEffect(() => {
    const init = async () => {
      const { Lightbox, initTE } = await import("tw-elements");
      initTE({ Lightbox });
    };
    init();
  }, []);

  return (
    <div className="flex items-center justify-center mx-auto">
      <div
        data-te-lightbox-init
        className="flex flex-col lg:flex-row flex-wrap w-4/5 gap-20 justify-center mx-auto"
      >
        {photos.map((photo, index) => {
          const baseUrl = getBaseUrl(photo.url);

          return (
            <div key={index} className="flex w-full h-auto lg:w-1/5 ">
              <Image
                src={`${baseUrl}${photo.url}`}
                data-te-img={`${baseUrl}${photo.url}`}
                width={300}
                height={300}
                alt={photo.alt || "Image"}
                className="mb-5  object-cover object-center cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyLightBox;

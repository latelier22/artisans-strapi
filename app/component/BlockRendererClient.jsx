"use client";
import Image from "next/Image";

import {
  BlocksRenderer
  
} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
  content
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          console.log(image);
          return (
            <div className="md:w-1/3">

            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
              />
              </div>
          );
        },
      }}
    />
  );
}
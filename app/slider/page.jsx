import React from "react";

// import photos from "../component/gallery/photos";
import fetchFiles, { transformResponse } from "../component/fetchFiles";

import {Slider} from "@/component/Slider"

async function Test() {
  const files = await fetchFiles("image");
  const photos = transformResponse(files);

  console.log(photos.slice(0,2))

  return (
    <>
      <div className="w-1/2 mx-auto">
        Slider
        <Slider photos={photos.slice(0,2)}/>

      </div>
    </>
  );
}

export default Test;

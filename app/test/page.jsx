import React from "react";
import Gallery from "../component/gallery/Gallery"
// import photos from "../component/gallery/photos";
import fetchFiles from "../component/fetchFiles"


function transformResponse(response) {
    return response.map(file => ({
      src: `http://vps.latelier22.fr:1336${file.url}`,
      width: file.width,
      height: file.height
    }));
}

async function Test () {

    

    const files = await fetchFiles("image")
    const photos = transformResponse(files);
    console.log(photos)
    


    return(
        <>
        <div className="w-1/2 mx-auto">
        Artisans
        <Gallery photos={photos}/>
        </div>
        </>
    )
}

export default Test
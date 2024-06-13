import React from "react";
import Gallery from "../component/gallery/Gallery"
import photos from "../component/gallery/photos";

const Test = () => {

    return(
        <>
        <div className="w-1/2 mx-auto">
        <Gallery photos={photos}/>
        </div>
        </>
    )
}

export default Test;


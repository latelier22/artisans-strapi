import React from "react";
import Gallery from "../component/gallery/Gallery";
// import photos from "../component/gallery/photos";
import fetchFiles, { transformResponse } from "../component/fetchFiles";
async function Test() {
  const files = await fetchFiles("image");
  const photos = transformResponse(files);
  console.log(photos);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-1/2 mx-auto"
  }, "Artisans", /*#__PURE__*/React.createElement(Gallery, {
    photos: photos
  })));
}
export default Test;
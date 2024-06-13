import React from "react";
import Gallery from "../component/gallery/Gallery";
import photos from "../component/gallery/photos";
const Test = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-1/2 mx-auto"
  }, /*#__PURE__*/React.createElement(Gallery, {
    photos: photos
  })));
};
export default Test;
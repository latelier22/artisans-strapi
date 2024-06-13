import React from "react";
const Section = ({
  title
}) => {
  return /*#__PURE__*/React.createElement("section", {
    className: "p-4 bg-gradient-to-r from-gold-800 via-gold-700 to-gold-800"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl text-black text-center font-bold "
  }, title));
};
export default Section;
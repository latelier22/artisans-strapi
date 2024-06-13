import React from "react";
const Section = ({
  title
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-grow h-0.5 bg-gradient-to-r from-gold-800 via-gold-600 to-gold-800"
  }), /*#__PURE__*/React.createElement("span", {
    className: "flex-shrink px-4 text-transparent text-3xl bg-clip-text bg-gradient-to-br from-gold-800 via-gold-400 to-gold-800 italic font-light"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow h-0.5 bg-gradient-to-r from-gold-800 via-gold-600 to-gold-800"
  })));
};
export default Section;
"use client";

import React from 'react';
import { Pen } from '../icons';
function EditableButton({
  text,
  onChange,
  onBlur,
  isEditable,
  inputRef
}) {
  return isEditable ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    className: "text-white bg-transparent text-center w-full absolute -bottom-7",
    type: "text",
    value: text,
    ref: inputRef,
    onChange: onChange,
    onBlur: onBlur
  })) : /*#__PURE__*/React.createElement("div", {
    className: "text-white bg-transparent text-center w-full absolute -bottom-5"
  }, text, " ", /*#__PURE__*/React.createElement(Pen, null));
}
export default EditableButton;
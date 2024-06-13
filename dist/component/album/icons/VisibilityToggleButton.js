"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibility } from '../../../lib/features/auth/visibleSlice'; // Assurez-vous que le chemin d'importation est correct
import { Eye } from "./index";
function VisibilityToggleButton({
  isAmin
}) {
  const isVisible = useSelector(state => state.visible.isVisible);
  const dispatch = useDispatch();
  const handleToggleVisibility = () => {
    dispatch(toggleVisibility());
  };
  return /*#__PURE__*/React.createElement("li", {
    className: "lg:mb-0 lg:pr-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleToggleVisibility
  }, /*#__PURE__*/React.createElement(Eye, {
    isOpen: isVisible
  })));
}
export default VisibilityToggleButton;
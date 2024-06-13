"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowAdmin } from '../../../lib/features/auth/showAdminSlice';
import { Pen } from "./index";
function ShowAdminToggleButton({
  isAmin
}) {
  const isShowAdmin = useSelector(state => state.showAdmin.isShowAdmin);
  const dispatch = useDispatch();
  const handleToggleVisibility = () => {
    dispatch(toggleShowAdmin());
  };
  return /*#__PURE__*/React.createElement("li", {
    className: "lg:mb-0 lg:pr-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleToggleVisibility
  }, /*#__PURE__*/React.createElement(Pen, {
    isOpen: isShowAdmin
  })));
}
export default ShowAdminToggleButton;
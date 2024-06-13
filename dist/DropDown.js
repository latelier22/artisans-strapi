import React from "react";
import { useState } from 'react';
import Link from 'next/link';
const Dropdown = ({
  item,
  isSubMenu
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item.children ? item.children : [];
  const toggle = () => {
    setIsOpen(old => !old);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `relative ${isSubMenu ? 'ml-4' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 font-lien nav-button text-gold-200 hover:text-blue-400 flex items-center",
    onClick: toggle
  }, item.label, menuItems.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ml-2"
  }, isSubMenu ? '▶' : '▼')), /*#__PURE__*/React.createElement("div", {
    className: `absolute top-8 ${isSubMenu ? 'left-full -top-2' : 'left-0'} z-30 flex flex-col py-4 bg-black rounded-md ${isOpen ? 'flex' : 'hidden'}`
  }, menuItems.map(child => child.children && child.children.length > 0 ? /*#__PURE__*/React.createElement(Dropdown, {
    key: child.id,
    item: child,
    isSubMenu: true
  }) : /*#__PURE__*/React.createElement(Link, {
    key: child.id,
    href: child.route,
    className: "hover:bg-red-800 hover:text-gold-500 px-4 py-1",
    onClick: e => {
      e.stopPropagation(); // Prevent the dropdown from closing when clicking a link
      setIsOpen(false);
    }
  }, child.label))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 right-0 bottom-0 left-0 z-20",
    onClick: toggle
  }));
};
export default Dropdown;
"use client";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Inter } from 'next/font/google';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
const inter = Inter({
  subsets: ['latin']
});
const FormContact = () => {
  // Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  // Méthode
  const onSubmitHandler = async data => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-black pt-32",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-white"
  }, "FORMULAIRE DE CONTACT:"), /*#__PURE__*/React.createElement("form", {
    style: {
      width: "500px",
      margin: "auto"
    },
    onSubmit: handleSubmit(onSubmitHandler)
  }, isSended && /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Votre message a bien \xE9t\xE9 envoy\xE9 avec succ\xE8s, nous vous r\xE9pondrons rapidement."), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f5f5f5",
      padding: "30px",
      borderRadius: "5px",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "15px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "prenom",
    className: "label text-black"
  }, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", _extends({
    className: "input border-2 border-neutral-500",
    placeholder: "Pr\xE9nom",
    id: "prenom"
  }, register("prenom", {
    required: true
  }))), errors.prenom && /*#__PURE__*/React.createElement("small", null, "Vous devez renseigner votre pr\xE9nom.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nom",
    className: "label text-black"
  }, "Nom"), /*#__PURE__*/React.createElement("input", _extends({
    className: "input border-2 border-neutral-500",
    placeholder: "Nom",
    id: "nom"
  }, register("nom", {
    required: true
  }))), errors.nom && /*#__PURE__*/React.createElement("small", null, "Vous devez renseigner votre nom."))), /*#__PURE__*/React.createElement("div", {
    className: "flex  justify-between",
    style: {
      marginTop: "15px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "label text-black"
  }, "Adresse email"), /*#__PURE__*/React.createElement("input", _extends({
    className: "input w-2/3 border-2 border-neutral-500 bg-sky-100",
    placeholder: "Adresse email",
    id: "email"
  }, register("email", {
    required: true
  }))), errors.email && /*#__PURE__*/React.createElement("small", null, "Vous devez renseigner votre adresse email."))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f5f5f5",
      padding: "30px",
      borderRadius: "5px",
      textAlign: "left",
      marginTop: "15px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "contenu",
    className: "label text-black "
  }, "Contenu du message"), /*#__PURE__*/React.createElement("textarea", _extends({
    className: "input text-black w-full border-2 border-neutral-500",
    rows: "9",
    placeholder: "Votre message..."
  }, register("contenu", {
    required: true
  }))), errors.contenu && /*#__PURE__*/React.createElement("small", null, "Vous devez renseigner le contenu de votre message."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "end",
      marginTop: "15px"
    }
  }, !isLoading && /*#__PURE__*/React.createElement("button", {
    className: "text-white",
    style: {
      padding: "5px 10px"
    }
  }, "Envoyer")))));
};
export default FormContact;
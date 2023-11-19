"use client";
import React, { useState } from "react";
import axios from "axios";
import BlackAddEmail from "./AddEmail/BlackAddEmail";

const BlackButton = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateEmail = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/email/new/route", {
        email: email,
      });

      if (response.status === 201) {
        setEmail("");
        alert("Email ajouté avec succès");
      } else {
        alert("Échec d'ajout de l'email");
        const error = new Error("Failed to create email");
        console.log(error);
      }
    } catch (error) {
      alert("Une erreur s'est produite lors de l'ajout de l'email");
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <BlackAddEmail
      email={email}
      setEmail={setEmail}
      handleCreateEmail={handleCreateEmail}
    />
  );
};

export default BlackButton;

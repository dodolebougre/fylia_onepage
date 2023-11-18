"use client";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value,
      emailPro: event.target.emailPro.value,
      phoneNumber: event.target.phoneNumber.value,
      message: event.target.message.value,
    };

    try {
      // Utilisez Axios pour la requête POST
      const response = await axios.post("/api/form/contact", data);

      if (response.status === 200) {
        alert("Message sent successfully");
        setLoading(false);
        event.target.reset();
      } else {
        alert("Error sending message");
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Error sending message");
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center m-10">
      <h1 className="text-white">Vous êtes un artiste ?</h1>
      <h2 className="text-white">Contactez-nous</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          placeholder="Votre prénom"
          className="mt-3"
          type="text"
          id="name"
          required
        />
        <input
          placeholder="Votre email"
          className="mt-3"
          type="email"
          id="emailPro"
          required
        />
        <input
          placeholder="Votre numéro"
          className="mt-3"
          type="text"
          id="phoneNumber"
          required
        />
        <textarea
          maxLength={500}
          placeholder=""
          className="mt-3"
          id="message"
        />
        <button
          type="submit" // Ajoutez ceci pour indiquer que c'est un bouton de soumission
          placeholder="Laissez nous un petit message"
          className="text-white mt-3 border-white p-3"
        >
          Envoyer ☞
        </button>
      </form>
    </div>
  );
};

export default Contact;

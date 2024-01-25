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
        alert("Email envoyé avec succés");
        setLoading(false);
        event.target.reset();
      } else {
        alert("Erreur d'envoie de message");
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Error sending message");
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-9 md:text-2xl lg:text-3xl text-center mt-10 p-2">
        Vous êtes un artiste ou un designer et êtes intéressé par une
        collaboration ?
      </h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          placeholder="Votre prénom"
          className="mt-3 p-2 w-[300px] border text-black text-sm bg-white font-light border-black"
          type="text"
          id="name"
          required
        />
        <input
          placeholder="Votre email"
          className="mt-3 p-2 w-[300px] border text-black bg-white  font-light text-sm border-black"
          type="email"
          id="emailPro"
          required
        />
        <input
          placeholder="Votre numéro"
          className="mt-3 p-2 w-[300px] border text-black bg-white font-light text-sm border-black"
          type="text"
          id="phoneNumber"
          required
        />
        <textarea
          maxLength={500}
          placeholder="Laissez nous un petit message"
          className="mt-3 w-[300px] text-black bg-white border h-[200px] p-2 font-light text-sm border-black"
          id="message"
        />
        <button
          type="submit"
          className="border p-4 font-light text-center  m-10 hover:bg-black hover:text-white border-black"
        >
          Contactez nous ☞
        </button>
      </form>
    </div>
  );
};

export default Contact;

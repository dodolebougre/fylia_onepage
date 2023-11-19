import React from "react";
import { AddEmailProps } from "../../../../types";

const BlackAddEmail = ({ email, setEmail, handleCreateEmail }: AddEmailProps) => {
  return (
    <div className="">
      <input
        type="email"
        placeholder="Votre adresse email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className=" border p-3 text-center text-black border-black"
      />
      <button
        onClick={() => handleCreateEmail()}
        className=" text-white p-3 border border-black bg-black "
      >
        Accéder en avant première ☞
      </button>
    </div>
  );
};

export default BlackAddEmail;

// /pages/api/email/new/route.tsx

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../../utils/database";
import Email from "../../../../models/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDB();

    const { email } = req.body;

    // Vérifiez si l'email existe déjà dans la base de données
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      // Si l'email existe déjà, renvoyez une réponse appropriée (par exemple, 409 Conflict)
      return res.status(409).json({ error: "L'email est déjà existant" });
    }

    const newEmail = new Email({ email });
    await newEmail.save();
    
    console.log("Email bien envoyé !");
    
    
    return res.status(201).json(newEmail);
  } catch (error) {
    console.error("Error creating new email:", error);
    // Renvoyez une réponse avec une erreur serveur
    return res.status(500).json({ error: "Failed to create a new email", details: error });
  }
}

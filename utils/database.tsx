import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "email",
    } as ConnectOptions);
    isConnected = true;
    // Met à jour l'état de connexion une fois connecté
  } catch (error) {
    console.log(error);
    isConnected = false; // Met à jour l'état de connexion en cas d'échec
  }
};

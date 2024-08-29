"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user", error);
    return null;
  }
};

export const loginUser = async (user) => {
  try {
    await connectToDatabase();

    console.log(user);

    const userFound = await User.findOne({
      registroAcademico: user.registroAcademico,
    });
    if (!userFound) {
      console.error("User not found");
      return null;
    }

    if (userFound.password !== user.password) {
      console.error("Invalid password");
      return null;
    }

    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    console.error("Error logging in user", error);
    return null;
  }
};

"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { cookies } from "next/headers";

export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    // setear cookie
    cookies.set("user", JSON.stringify(newUser), { secure: true });

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

export const forgotPassword = async (user) => {
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
    if(userFound.correo !== user.correo){
      console.error("Invalid email");
      return null;
    }
    
    userFound.password = user.password;
    await userFound.save();

    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    console.error("Error forgot password", error);
    return null;
  }
}

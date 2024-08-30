"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import cookies from "next-cookies";
import { setCookie } from "nookies";

export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    // setear cookie
    try {
      setCookie("user", JSON.stringify(newUser), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        secure: true,
      });
      console.log("Cookie set successfully");
    } catch (error) {
      console.error("Error setting cookie:", error);
    }

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    // retornar error al front
    return JSON.stringify({ error: error.message });
  }
};

export const loginUser = async (user) => {
  try {
    await connectToDatabase();

    const userFound = await User.findOne({
      registroAcademico: user.registroAcademico,
    });
    if (!userFound) {
      return JSON.stringify({ error: "User not found" });
    }

    if (userFound.password !== user.password) {
      return JSON.stringify({ error: "Password incorrect" });
    }

    console.log(userFound);

    // setear cookie
    try {
      setCookie("user", JSON.stringify(userFound), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        secure: true,
      });
      console.log("Cookie set successfully");
    } catch (error) {
      console.error("Error setting cookie:", error);
    }

    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    return JSON.stringify({ error: error.message });
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

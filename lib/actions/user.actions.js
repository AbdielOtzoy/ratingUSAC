"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    cookies().set("session", session, {
      httpOnly: true,
      secure: true,
    });

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

    cookies().set("session", session);

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
    if (userFound.correo !== user.correo) {
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
};

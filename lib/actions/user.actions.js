"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
    ignoreExpiration: true,
  });
  return payload;
}

// register user
export const createUser = async (user) => {
  try {
    await connectToDatabase();

    console.log(user);

    const newUser = await User.create(user);

    // crear sesion
    const expires = new Date(Date.now() + 20 * 60 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ id: newUser._id, expires });

    // guardar sesion en cookies
    cookies().set("session", session, {
      expires,
      httpOnly: true,
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
      return JSON.parse(JSON.stringify({ error: "Usuario no encontrado" }));
    }

    if (userFound.password !== user.password) {
      return JSON.parse(JSON.stringify({ error: "Contraseña incorrecta" }));
    }

    console.log(userFound);

    // crear sesion
    const expires = new Date(Date.now(), 20 * 60 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ id: userFound._id, expires });

    // guardar sesion en cookies
    cookies().set("session", session, {
      expires,
      httpOnly: true,
    });

    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
};

// logout user
export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

// return user logged
export async function getUserLogged() {
  const session = cookies().get("session")?.value;
  if (!session) return null;

  const { id } = await decrypt(session);
  const user = await User.findById(id);

  return JSON.parse(JSON.stringify(user));
}

export async function updateSession(request) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 20 * 60 * 24 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export const forgotPassword = async (user) => {
  try {
    await connectToDatabase();

    console.log(user);

    const userFound = await User.findOne({
      registroAcademico: user.registroAcademico,
    });
    if (!userFound) {
      return JSON.stringify({ error: "Usuario no encontrado" });
    }
    if (userFound.correo !== user.correo) {
      return JSON.stringify({ error: "Correo incorrecto" });
    }

    userFound.password = user.password;
    await userFound.save();

    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    console.error("Error forgot password", error);
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    await connectToDatabase();

    const user = await User.findById(id);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    return null;
  }
};

export const updateUserById = async (user) => {
  try {
    await connectToDatabase();

    const userFound = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    k;
    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    return JSON.parse(JSON.stringify({ message: "error while updating user" }));
  }
};

export const findUserByRegistroAcademico = async (registroAcademico) => {
  try {
    await connectToDatabase();

    const user = await User.findOne({ registroAcademico });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    return null;
  }
};

export const addCoursesToUser = async (courses) => {
  try {
    await connectToDatabase();

    const session = await getSession();
    const userFound = await User.findById(session.id);

    userFound.cursosAprobados = courses;

    await userFound.save();

    return JSON.parse(JSON.stringify(userFound));
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
};

export const getCoursesApproved = async () => {
  try {
    await connectToDatabase();

    const session = await getSession();
    const userFound = await User.findById(session.id);

    return JSON.parse(JSON.stringify(userFound.cursosAprobados));
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
}

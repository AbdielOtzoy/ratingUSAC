"use client";

import { loginUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import React from "react";

const login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      registroAcademico: e.target.registroAcademico.value,
      password: e.target.password.value,
    };

    console.log(user);

    await loginUser(user);
  };
  return (
    <div className="text-3xl font-bold p-14 border rounded-xl">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="registroAcademico"
          placeholder="Registro Academico"
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 border rounded bg-primary-500">
          Login
        </button>
      </form>

      <div className="flex justify-between">
        <Link href="/forgoten" className="text-primary-500 text-blue-400">
          Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
};

export default login;

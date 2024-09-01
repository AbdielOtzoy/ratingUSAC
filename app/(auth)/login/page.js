"use client";

import { loginUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      registroAcademico: e.target.registroAcademico.value,
      password: e.target.password.value,
    };

    const response = await loginUser(user);
    if (response.error) {
      setErrorMessage(response.error);
      return;
    }

    window.location.href = "/";
  };
  return (
    <div className="max-h-screen max-w-screen flex flex-col space-y-6 items-center justify-center text-3xl p-16">
      <h1 className="text-4xl font-bold text-center">RatingUsac</h1>
      <h2 className="text-xl font-medium text-center">
        Inicia sesión para empezar a navegar
      </h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="registroAcademico"
          required
          placeholder="Registro Academico"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Contraseña"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        {errorMessage && (
          <div className="text-red-500 text-center text-sm">{errorMessage}</div>
        )}
        <div className="flex justify-center pt-3">
          <button
            type="submit"
            className="p-3 w-48 border rounded-3xl bg-primary-200 hover:bg-secondary-200 text-white transition-all duration-500 ease-in-out shadow-lg"
          >
            Login
          </button>
        </div>
      </form>

      <div>
        <Link
          href="/forgoten"
          className="text-primary-100 font-light p-3 text-lg text-left hover:text-secondary-100 transition-all duration-300 ease-in-out"
        >
          Olvidaste tu contraseña?
        </Link>
        <br />
        <Link
          href="/register"
          className="text-primary-100 font-light p-3 text-lg text-left hover:text-secondary-100 transition-all duration-300 ease-in-out"
        >
          Registrate aqui
        </Link>
      </div>
    </div>
  );
};

export default Login;

"use client"; //Se especifica a next que es front

import Link from "next/link";

import { createUser } from "@/lib/actions/user.actions";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      registroAcademico: e.target.registroAcademico.value,
      nombres: e.target.nombres.value,
      apellidos: e.target.apellidos.value,
      correo: e.target.correo.value,
      password: e.target.password.value,
    };

    await createUser(user);

    window.location.href = "/";
  };

  return (
    <div className="max-w-screen flex flex-col space-y-6 items-center justify-center text-3xl font-bold p-16">
      <h1 className="text-4xl font-bold text-center">RatingUsac</h1>
      <h2 className="text-xl font-medium text-center">
        Registrate para navegar en RatingUsac
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="registroAcademico"
          required
          placeholder="Registro Academico"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        <input
          type="text"
          name="nombres"
          required
          placeholder="Nombres Completos"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        <input
          type="text"
          name="apellidos"
          required
          placeholder="Apellidos Completos"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        <input
          type="email"
          name="correo"
          required
          placeholder="Correo Electronico"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Contraseña"
          className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
        />
        <div className="flex justify-center pt-3">
          <button
            type="submit"
            className="p-3 w-48 border rounded-3xl bg-primary-200 hover:bg-secondary-200 text-white transition-all duration-500 ease-in-out shadow-lg"
          >
            Register
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
          href="/login"
          className="text-primary-100 font-light p-3 text-lg text-left hover:text-secondary-100 transition-all duration-300 ease-in-out"
        >
          Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
};

export default Register;

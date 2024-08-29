"use client"; //Se especifica a next que es front

import { createUser } from "@/lib/actions/user.actions";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      registroAcademico: e.target.registroAcademico.value,
      nombres: e.target.nombres.value,
      apellidos: e.target.apellidos.value,
      correo: e.target.correo.value,
      password: e.target.password.value,
    };

    console.log(user);

    // register user
    createUser(user);
  };

  return (
    <div className="text-3xl font-bo(ld p-14 border rounded-xl">
      <h1 className="text-4xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="registroAcademico"
          placeholder="Registro Academico"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="nombres"
          placeholder="Nombres Completos"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos Completos"
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo Electronico"
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 border rounded bg-primary-500">
          Register
        </button>
      </form>
    </div>
  );
};

export default page;

import ProfilePicture from "@/components/shared/ProfilePicture";
import { getUserLogged } from "@/lib/actions/user.actions";
import React from "react";

const Profile = async () => {
  const userLogged = await getUserLogged();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      nombres: e.target.nombres.value,
      apellidos: e.target.apellidos.value,
      correo: e.target.correo.value,
      password: e.target.password.value,
    };

    console.log(user);

  };

  return (
    <div className="flex flex-col items-center justify-center border w-full p-2 rounded-md">
      <div className="bg-slate-300 w-full h-28 rounded-md -mb-20"></div>
      <div className="flex flex-col items-center justify-cente">
        <ProfilePicture name={userLogged?.nombres} type={"big"} />
        <h1 className="text-4xl font-bold text-center mt-4">
          {userLogged?.nombres} {userLogged?.apellidos}
        </h1>

        <p className="text-gray-600 mt-1.5">{userLogged?.correo}</p>

        <p className="text-gray-600 mt-1.5">{userLogged?.registroAcademico}</p>
      </div>
      <div className="flex flex-col items-center justify-center pt-10">
        <form className="flex flex-col space-y-4" >
          <h1 className="text-xl font-bold text-center mt-4">
            Editar Perfil
          </h1>
          <input
            type="text"
            name="nombres"
            required
            placeholder="Nombres Completos"
            className="p-2 text-xl font-medium border rounded-lg shadow-lg"
          />
          <input
            type="text"
            name="apellidos"
            required
            placeholder="Apellidos Completos"
            className="p-2 text-xl font-medium border rounded-lg shadow-lg"
          />
          <input
            type="email"
            name="correo"
            required
            placeholder="Correo Electronico"
            className="p-2 text-xl font-medium border rounded-lg shadow-lg"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Contraseña"
            className="p-2 text-xl font-medium border rounded-lg shadow-lg"
          />
          <div className="flex justify-center pt-3">
            <button
              type="submit"
              className="p-3 w-40  border rounded-3xl bg-primary-200 hover:bg-secondary-200 text-white transition-all duration-500 ease-in-out shadow-lg text-2xl font-bold"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

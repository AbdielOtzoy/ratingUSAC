import CourseCard from "@/components/shared/CourseCard";
import ProfilePicture from "@/components/shared/ProfilePicture";
import { getUserById } from "@/lib/actions/user.actions";
import React from "react";

const Profile = async ({ params }) => {
  const user = await getUserById(params.id);

  return (
    <div className="flex flex-col items-center justify-center border w-full p-2 rounded-md">
      <div className="bg-slate-300 w-full h-28 rounded-md -mb-20"></div>
      <div className="flex flex-col items-center justify-cente space-y-3">
        <ProfilePicture name={user?.nombres} type={"big"} />
        <h1 className="text-4xl font-bold text-center mt-4">
          {user?.nombres} {user?.apellidos}
        </h1>

        <p className="text-gray-600 mt-1.5">{user?.correo}</p>

        <p className="text-gray-600 mt-1.5">{user?.registroAcademico}</p>
      </div>
      <hr className="w-full border-gray-300 mt-5" />
      <div className="flex flex-col items-center justify-center w-full my-5 mb-8 space-y-3">
        <h1 className="text-3xl font-bold text-center my-4">
          Cursos Aprobados
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full px-16 transition-all ease-in-out duration-500">
          {user?.cursosAprobados.map((curso) => (
            <CourseCard key={curso} value={curso} label={curso} type={"view"} />
          ))}
        </div>
        {user?.cursosAprobados.length === 0 && (<h1 className="text-2xl font-bold text-center mt-4 text-gray-700">Este perfil no tiene cursos aprobados.</h1>)}
      </div>
    </div>
  );
};

export default Profile;

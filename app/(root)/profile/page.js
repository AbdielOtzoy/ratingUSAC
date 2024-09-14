import ProfilePicture from "@/components/shared/ProfilePicture";
import { getUserLogged } from "@/lib/actions/user.actions";
import React from "react";
import EditProfileDialog from "@/components/shared/EditProfileDialog";
import CourseCard from "@/components/shared/CourseCard";

const Profile = async () => {
  const userLogged = await getUserLogged();

  return (
    <div className="flex flex-col items-center justify-center border w-full p-2 rounded-md">
      <div className="bg-slate-300 w-full h-28 rounded-md -mb-20"></div>
      <div className="flex flex-col items-center justify-cente space-y-3">
        <ProfilePicture name={userLogged?.nombres} type={"big"} />
        <h1 className="text-4xl font-bold text-center mt-4">
          {userLogged?.nombres} {userLogged?.apellidos}
          <EditProfileDialog user={userLogged} />
        </h1>

        <p className="text-gray-600 mt-1.5">{userLogged?.correo}</p>

        <p className="text-gray-600 mt-1.5">{userLogged?.registroAcademico}</p>
      </div>
      <hr className="w-full border-gray-300 mt-5" />
      <div className="flex flex-col items-center justify-center w-full my-2 space-y-3">
        <h1 className="text-3xl font-bold text-center mt-4">
          Cursos Aprobados
        </h1>
        <div className="flex flex-col items-center justify-center w-full mt-4 space-y-5">
          {userLogged?.cursosAprobados.map((curso) => (
            <CourseCard key={curso} value={curso} label={curso} type={"view"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

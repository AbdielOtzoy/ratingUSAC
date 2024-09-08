import ProfilePicture from "@/components/shared/ProfilePicture";
import { getUserById } from "@/lib/actions/user.actions";
import React from "react";

const Profile = async ({ params }) => {
  const user = await getUserById(params.id);

  return (
    <div className="flex flex-col items-center justify-center border w-full p-2 rounded-md">
      <div className="bg-slate-300 w-full h-28 rounded-md -mb-20"></div>
      <div className="flex flex-col items-center justify-cente">
        <ProfilePicture name={user?.nombres} type={"big"} />
        <h1 className="text-4xl font-bold text-center mt-4">
          {user?.nombres} {user?.apellidos}
        </h1>

        <p className="text-gray-600 mt-1.5">{user?.correo}</p>

        <p className="text-gray-600 mt-1.5">{user?.registroAcademico}</p>
      </div>
    </div>
  );
};

export default Profile;

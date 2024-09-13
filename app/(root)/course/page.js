import React from "react";
import CourseCard from "@/components/shared/CourseCard";
import { getUserLogged } from "@/lib/actions/user.actions";
import {cursos} from "@/constants";

const Courses = async () => {
  const user = await getUserLogged();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center py-10 px-16">
        Bienvenido a los cursos {user?.nombres}! 👋
      </h1>
      
      {/* Renderiza los cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full px-16 transition-all ease-in-out duration-500">
        {cursos.map((curso) => (
          <CourseCard key={curso.value} value={curso.value} label={curso.label} />
        ))}
      </div>
      <button className="bg-primary-500 text-white font-semibold mt-10 py-2 px-4 rounded-lg shadow-lg bg-secondary-100 hover:bg-secondary-200 transition duration-300 ease-in-out w-48">
          Guardar
      </button>
  </main>
);
};

export default Courses;

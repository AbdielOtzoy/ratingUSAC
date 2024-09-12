import React from "react";
import CourseCard from "@/components/shared/CourseCard";
import { getUserLogged } from "@/lib/actions/user.actions";
import {cursos} from "@/constants";

const Courses = async () => {
  const user = await getUserLogged();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center py-10">
        Bienvenido a los cursos {user?.nombres}! 👋
      </h1>
      
      {/* Renderiza los cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full px-16 transition-all ease-in-out duration-500">
        {cursos.map((curso) => (
          <CourseCard key={curso.valor} valor={curso.valor} label={curso.label} />
        ))}
      </div>
  </main>
);
};

export default Courses;

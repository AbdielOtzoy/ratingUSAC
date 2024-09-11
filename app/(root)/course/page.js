import React from "react";
import CourseCard from "@/components/shared/CourseCard";
import { getUserLogged } from "@/lib/actions/user.actions";

const Courses = async () => {
  const user = await getUserLogged();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center py-5">
        Bienvenido a los cursos {user?.nombres}! 👋
      </h1>
      
      {/* courses */}
      <div className="flex flex-col space-y-5 mt-4 w-full">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
  </main>
);
};

export default Courses;

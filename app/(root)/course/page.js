"use client";
import React, { useState, useEffect } from "react";
import CourseCard from "@/components/shared/CourseCard";
import { cursos } from "@/constants";
import { addCoursesToUser, getCoursesApproved } from "@/lib/actions/user.actions";

const Courses = () => {
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);
  const [cursosAprobados, setCursosAprobados] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCoursesApproved();
      setCursosAprobados(res);
      setCursosSeleccionados(res);
    };

    fetchCourses();
  }, []);

  const handleSave = async () => {
    console.log(cursosSeleccionados);

    // send to database select courses and update user
    const res = await addCoursesToUser(cursosSeleccionados);
    console.log(res);
    alert("Cursos guardados correctamente");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center py-10 px-16">
        Bienvenido a los cursos👋
      </h1>

      {/* Renderiza los cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full px-16 transition-all ease-in-out duration-500">
        {cursos.map((curso) => (
          <CourseCard
            key={curso.value}
            value={curso.value}
            label={curso.label}
            isApproved={cursosAprobados.includes(curso.value)}
            onChange={(value, checked) => {
              if (checked) {
                setCursosSeleccionados([...cursosSeleccionados, value]);
              } else {
                setCursosSeleccionados(
                  cursosSeleccionados.filter((curso) => curso !== value)
                );
              }
            }}
            type="edit"
          />
        ))}
      </div>
      <button
        className="bg-primary-500 text-white font-semibold mt-10 py-2 px-4 rounded-lg shadow-lg bg-secondary-100 hover:bg-secondary-200 transition duration-300 ease-in-out w-48"
        onClick={handleSave}
      >
        Guardar
      </button>
    </main>
  );
};

export default Courses;

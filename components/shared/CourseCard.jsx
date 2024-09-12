import React from "react";

// CourseCard.js
const CourseCard = ({ valor, label }) => {
  return (
    <div className="border border-gray-200 py-4 px-6 rounded-xl shadow-xl flex flex-col items-start bg-white">
      <h2 className="text-xl font-semibold mb-2 text-center">{label}</h2>
      <p className="text-gray-700 mb-4">{valor}</p>
      <p className="text-gray-700 mb-4">Numero de creditos: </p>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="aprobado"
          name="Aprobado"
          value="Aprobado"
          className="w-5 h-5 text-primary-300 border-gray-300 rounded focus:ring-primary-300 appearance-none checked:bg-primary-300 checked:border-transparent transition duration-200 ease-in-out hover:cursor-pointer hover:border-primary-500 border-2"
        />
        <label htmlFor="aprobado" className="text-gray-800 font-medium cursor-pointer">
          Aprobado
        </label>
      </div>
    </div>
  );
};

export default CourseCard;

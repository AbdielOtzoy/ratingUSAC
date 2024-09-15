"use client";
import React, { useState } from "react";

// CourseCard.js
const CourseCard = ({ value, label, onChange = () => {}, type, isApproved}) => {
  const [checked, setChecked] = useState(isApproved);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    onChange(value, e.target.checked);
  };
  return (
    <div
      className={`border border-gray-200 p-4 rounded-xl shadow-xl flex flex-col items-start justify-center ${
        checked ? "bg-green-200" : "bg-white "
      } transition-all duration-300 ease-in-out`}
    >
      <h2 className="text-xl font-semibold">{label}</h2>

      {type == "edit" && (
        <div className="flex items-center space-x-2 mt-5">
          <input
            type="checkbox"
            id="aprobado"
            name="Aprobado"
            value="Aprobado"
            checked={checked}
            onChange={handleCheck}
            className="w-5 h-5 text-primary-300 border-gray-300 rounded focus:ring-primary-300 appearance-none checked:bg-primary-300 checked:border-transparent transition duration-200 ease-in-out hover:cursor-pointer hover:border-primary-500 border-2"
          />
          <label
            htmlFor={`aprobado-${value}`}
            className="text-gray-800 font-medium cursor-pointer"
          >
            Aprobado
          </label>
        </div>
      )}
    </div>
  );
};

export default CourseCard;

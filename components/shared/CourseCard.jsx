'use client'
import React, {useState} from "react";

// CourseCard.js
const CourseCard = ({ value, label, onToggle }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    //onToggle(value, e.target.checked);
  }
  return (
    <div className={`border border-gray-200 py-4 px-6 rounded-xl shadow-xl flex flex-col items-start bg-white ${checked ? 'bg-green-200' : ''} transition-all duration-300 ease-in-out`}>
      <h2 className="text-xl font-semibold mb-6">{label}</h2>
      <div className="flex items-center space-x-2 ">
        <input
          type="checkbox"
          id="aprobado"
          name="Aprobado"
          value="Aprobado"
          checked={checked}
          onChange={handleCheck}
          className="w-5 h-5 text-primary-300 border-gray-300 rounded focus:ring-primary-300 appearance-none checked:bg-primary-300 checked:border-transparent transition duration-200 ease-in-out hover:cursor-pointer hover:border-primary-500 border-2"
        />
        <label htmlFor={`aprobado-${value}`}className="text-gray-800 font-medium cursor-pointer">
          Aprobado
        </label>
      </div>
    </div>
    
  );
};

export default CourseCard;

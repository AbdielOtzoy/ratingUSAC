import React from "react";

const CourseCard = ( /*course*/ ) => {
    // course = course._doc;
    //const [approved, setApproved] = React.useState(false);

    const handleAprove = () => {
        setApproved(!approved);
    };

    return (
        <div className="flex justify-center items-center w-full py-2">
          <div className="max-w-screen-lg w-1/4 bg-secondary-300 shadow-xl rounded-2xl p-5 gap-5 border transition-all ease-in-out duration-500 transform hover:scale-105">

            <h1 className="text-2xl font-bold text-white mb-4">Nombre del curso</h1>
            
            {/* Sección de aprobado/no aprobado */}
            <div className="form-check flex items-center gap-3">
              <input
                type="checkbox"
                className="form-check-input w-6 h-6 rounded"
                name="approved"
                id="approved"
                value="checkedValue"
              />
              <label htmlFor="approved" className="text-lg font-semibold text-black">
                No Aprobado
              </label>
            </div>
      
            {/* Botón adicional para confirmar */}
            <div className="mt-6 flex justify-center">
              <button className="bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 hover:shadow-lg transition duration-300">
                Confirmar
              </button>
            </div>
          </div>
        </div>
    );      
};

export default CourseCard;
    
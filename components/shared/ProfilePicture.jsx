import React from "react";

const generateColorFromInitial = (initial) => {
  // Convierte la inicial en un código de ASCII y usa ese valor para generar un color
  const charCode = initial.charCodeAt(0);
  const color = `hsl(${(charCode * 137) % 360}, 70%, 50%)`; // Genera un color HSL basado en la inicial
  return color;
};

const ProfilePicture = ({ name, type }) => {
  const initial = name ? name.charAt(0).toUpperCase() : "?"; // Obtén la inicial del nombre
  const backgroundColor = generateColorFromInitial(initial); // Genera el color basado en la inicial

  const style = {
    backgroundColor,
    color: "white",
    width: type === "big" ? "130px" : "40px",
    height: type === "big" ? "130px" : "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: type === "big" ? "3rem" : "1rem",
    textTransform: "uppercase",
  };
  return <div style={style}>{initial}</div>;
};

export default ProfilePicture;

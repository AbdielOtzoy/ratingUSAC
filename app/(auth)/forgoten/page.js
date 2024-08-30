"use client";

import { forgotPassword } from "@/lib/actions/user.actions";
import React from "react";

const forgoten = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            registroAcademico: e.target.registroAcademico.value,
            correo: e.target.email.value,
            password: e.target.password.value,
        };
    
        console.log(user);

        await forgotPassword(user);
    };
    return(
        <div className="text-3xl font-bold p-14 border rounded-xl">
            <h1 className="text-4xl font-bold text-center">Contraseña Olvidada</h1>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="registroAcademico"
                    placeholder="Registro Academico"
                    className="p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    className="p-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña Nueva"
                    className="p-2 border rounded"
                />
                <button type="submit" className="p-2 border rounded bg-primary-500">
                    Enviar
                </button>

            </form>
        </div>
    )
};

export default forgoten;

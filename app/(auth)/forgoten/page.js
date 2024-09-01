"use client";

import { forgotPassword } from "@/lib/actions/user.actions";
import React from "react";
import Link from "next/link";

const forgoten = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            registroAcademico: e.target.registroAcademico.value,
            correo: e.target.email.value,
            password: e.target.password.value,
        };

        const response = await forgotPassword(user);
        try {
            const result = JSON.parse(response);
            if (result.error) {
                alert(result.error);
                return;
            }
        } catch (error) {
            console.log(error);
        }
        
        alert("Contraseña cambiada");
        console.log(user);
    };
    return(
        <div className="max-h-screen max-w-screen flex flex-col space-y-6 items-center justify-center text-3xl font-bold p-16">
            <h1 className="text-4xl font-bold text-center">RatingUsac</h1>
            <h2 className="text-xl font-medium text-center">Recupera tu contraseña para seguir navegando</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="registroAcademico"
                    required
                    placeholder="Registro Academico"
                    className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo Electronico"
                    className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
                />
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Contraseña Nueva"
                    className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
                />
                <div className="flex justify-center pt-3">
                    <button type="submit" className="p-3 w-48 border rounded-3xl bg-primary-200 hover:bg-secondary-200 text-white transition-all duration-500 ease-in-out shadow-lg">
                        Enviar
                    </button>
                </div>
            </form>
            <div>
                <Link href="/login" className="text-primary-100 font-light p-3 text-lg text-left hover:text-secondary-100 transition-all duration-300 ease-in-out">
                    Inicia sesión aqui
                </Link><br/>
                <Link href="/register" className="text-primary-100 font-light p-3 text-lg text-left hover:text-secondary-100 transition-all duration-300 ease-in-out">
                    Registrate aqui
                </Link>
            </div>
        </div>
    )
};

export default forgoten;

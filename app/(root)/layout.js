"use client";

import Image from "next/image";
import Link from "next/link";
import { logout } from "@/lib/actions/user.actions";

const Layout = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <nav className="flex justify-between items-center p-6 bg-primary-500 text-white bg-primary-100 mb-5">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-3xl font-bold hover:text-primary-200 transition-all ease-out duration-200"
          >
            RatingUsac
          </Link>
        </div>
        <div className="flex items-center space-x-4 px-3">
          <Link
            href="/course"
            className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200"
          >
            Cursos
          </Link>
          <Link
            href="/posts/create"
            className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200"
          >
            Crear Post
          </Link>
          <Link
            href="/profile"
            className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200"
          >
            Perfil
          </Link>
          <button
            className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200"
            onClick={async () => {
              await logout();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </nav>
      {children}
      <footer className="flex justify-end items-center p-6 bg-primary-500 text-white bg-primary-100 mt-14">
        <p className="text-center text-white font-bold text-2xl">RatingUsac</p>
      </footer>
    </div>
  );
};

export default Layout;

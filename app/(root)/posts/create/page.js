"use client";

import { createPost } from "@/lib/actions/post.actions";
import { getSession, getUser } from "@/lib/actions/user.actions";
import React, {useState} from "react";

const CreatePost = () => {

  const [type, setType] = useState("curso");
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await getSession();

      let post = {
        type: e.target.type.value,
        reference: e.target.reference.value,
        content: e.target.content.value,
        user: user.id,
      };
      // convertir post a json
      post = JSON.stringify(post);
      console.log(post);

      await createPost(post);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-screen flex flex-col space-y-6 items-center justify-center text-3xl font-bold py-16">
        <h1 className="text-4xl font-bold text-center">Crear Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* toggle switch */}
          <div className="flex justify-center items-center space-x-4" onChange={handleTypeChange}>
            <label htmlFor="type" className="text-2xl font-medium">
              Preguntar por
            </label>
            <select
              name="type"
              id="type"
              className="p-2 text-2xl font-light border rounded-lg shadow-lg"
            >
              <option value="curso">Curso</option>
              <option value="catedratico">Catedratico</option>
            </select>
          </div>
          {/* Curso o Catedratico */}
          {type === "curso" ? (
            <div className="flex justify-center items-center space-x-4">
              <label className="text-xl font-medium">
                Cursos:
              </label>
              <select
                type="reference"
                name="reference"
                className="p-2 text-2xl font-light border rounded-lg shadow-lg"
              >
                <option value="Curso A">Curso A</option>
                <option value="Curso B">Curso B</option>
              </select>
            </div>
          ) : (
            <div className="flex justify-center items-center space-x-4">
              <label className="text-xl font-medium">
                Catedráticos:
              </label>
              <select
                type="reference"  
                name="reference"
                className="p-2 text-2xl font-light border rounded-lg shadow-lg"
              >
                <option value="Catedratico A">Catedratico A</option>
                <option value="Catedratico B">Catedratico B</option>
                <option value="Catedratico C">Catedratico C</option>
              </select>
            </div>
          )}

          <textarea
            name="content"
            required
            placeholder="Contenido"
            className="p-2 text-2xl border rounded-lg shadow-lg h-56 font-light"
          />
          <div className="flex justify-center pt-3">
            <button
              type="submit"
              className="p-3 w-48 border rounded-3xl bg-primary-200 hover:bg-secondary-200 text-white transition-all duration-500 ease-in-out shadow-lg"
            >
              Crear Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

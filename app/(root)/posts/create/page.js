"use client";

import ComboBox from "@/components/shared/ComboBox";
import { createPost } from "@/lib/actions/post.actions";
import { getSession, getUser } from "@/lib/actions/user.actions";
import React, { useState } from "react";

const CreatePost = () => {
  const [type, setType] = useState("curso");
  const [reference, setReference] = useState("");
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await getSession();

      let post = {
        type: e.target.type.value,
        reference: reference,
        content: e.target.content.value,
        user: user.id,
      };
      // convertir post a json
      post = JSON.stringify(post);
      console.log(post);

      await createPost(post);
      alert("Post creado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-screen flex flex-col space-y-6 items-center justify-center text-3xl font-bold py-8">
        <h1 className="text-4xl font-bold text-center">Crear Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* toggle switch */}
          <div
            className="flex justify-center items-center space-x-4"
            onChange={handleTypeChange}
          >
            <label htmlFor="type" className="text-2xl font-medium">
              Preguntar por
            </label>
            <select
              name="type"
              id="type"
              className="p-2 text-xl font-light border rounded-lg shadow-lg"
            >
              <option value="curso">Curso</option>
              <option value="catedratico">Catedratico</option>
            </select>
          </div>
          {/* Curso o Catedratico */}
          {type === "curso" ? (
            <div className="flex justify-center items-center h-[50px]">
              <ComboBox
                type="curso"
                onChange={(newValue) => {
                  // Update the reference value here
                  setReference(newValue);
                  console.log(newValue);
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center h-[50px]">
              <ComboBox
                type="catedratico"
                onChange={(newValue) => {
                  // Update the reference value here
                  setReference(newValue);
                  console.log(newValue);
                }}
              />
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
              className="py-2 w-44 border rounded-2xl bg-primary-200 hover:bg-secondary-200 text-white transition-all duration-500 ease-in-out shadow-lg text-xl"
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

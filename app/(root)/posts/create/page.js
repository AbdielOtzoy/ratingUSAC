'use client';

import React from "react";

//import {createPost} from "@/lib/actions/post.actions";

const CreatePost = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      //user: e.target.user.value,
      user: 1234,
      title: e.target.title.value,
      course: e.target.course.value,
      content: e.target.content.value,
      date: new Date(), //Crea la fecha actual
    };

    //await createPost(post);
    console.log(post);

    //window.location.href = "/posts";
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-screen flex flex-col space-y-6 items-center justify-center text-3xl font-bold py-16">
        <h1 className="text-4xl font-bold text-center">Crear Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="title"
            required
            placeholder="Titulo"
            className="p-2 text-3xl font-medium border rounded-lg shadow-lg"
          />
          <input
            type="text"
            name="course"
            required
            placeholder="Curso o Catedratico"
            className="p-2 text-2xl font-medium border rounded-lg shadow-lg"
          />
          <textarea
            name="content"
            required
            placeholder="Contenido"
            className="p-2 text-xl font-light border rounded-lg shadow-lg h-56"
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
  )
};

export default CreatePost;

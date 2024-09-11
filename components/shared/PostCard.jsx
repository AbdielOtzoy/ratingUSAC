import { formatTime } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";

const PostCard = (post) => {
  post = post._doc;

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = {
      comment: e.target.comment.value,
    };

    console.log("Comentario enviado: ", comment);
  };
  

  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-screen-lg w-2/5 bg-white shadow-xl rounded-xl p-6 gap-5 border transition-all ease-in-out duration-500">
        {/* foto del usuario, usando su inicial */}

        <Link href={`/profile/${post.user._id}`}>
          <div className="flex flex-row justify-start items-center space-x-3">
            <ProfilePicture name={post.user.nombres} type={"small"} />
            <h2 className="text-2xl font-bold">
              {post.user.nombres} {post.user.apellidos}
            </h2>
          </div>
        </Link>
        <p className="text-gray-600 mt-1.5">{formatTime(post.createdAt)}</p>
        <p
          className={
            post.type == "curso"
              ? " bg-blue-500 rounded-md text-center font-semibold text-white w-full mt-2"
              : "bg-orange-500 rounded-md text-center font-semibold text-white w-full mt-2"
          }
        >
          {post.type} : {post.reference}
        </p>
        <p className="text-gray-600 mt-2">{post.content}</p>

        {/* Comment Section */}
        <div className="flex flex-col mt-4">
          <form>
            <input
              type="text"
              placeholder="Escribe un comentario"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-primary-100 text-white font-semibold rounded-md mt-2 p-2 hover:bg-primary-200 transition-all ease-in-out duration-500"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* cantidad de comentarios */}
        <div className="flex flex-row justify-start items-center">
          <p>{post.comments.length}</p>
          <Image
            src="/icons/comment.svg"
            alt="comment"
            width={34}
            height={34}
            className="cursor-pointer hover:opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;

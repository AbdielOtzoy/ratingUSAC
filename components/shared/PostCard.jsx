import { formatTime } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";

const PostCard = (post) => {
  post = post._doc;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-screen-lg w-1/3 bg-white shadow-lg rounded-lg p-6 gap-5 border">
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
              ? " bg-orange-300 rounded-md text-center font-semibold text-white w-full mt-2"
              : "bg-blue-500 rounded-md text-center font-semibold text-white w-full mt-2"
          }
        >
          {post.type} : {post.reference}
        </p>
        <p className="text-gray-600 mt-2">{post.content}</p>

        {/* Comment Section */}

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

import { formatTime } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import { getUserLogged } from "@/lib/actions/user.actions";
import CommentCard from "./CommentCard";
import CommentSection from "./CommentSection";

const PostCard = async (post) => {
  post = post._doc;

  // obtener el usario loggeado
  const userLogged = await getUserLogged();

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div className="max-w-screen-lg w-[500px] max-w-2/5 bg-white shadow-xl rounded-xl p-6 gap-5 border transition-all ease-in-out duration-500">
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

        {/* cantidad de comentarios */}
        <div className="flex flex-row justify-start items-center mb-2">
          <p>{post.comments.length}</p>
          <CommentCard info={userLogged} post={post._id} />
        </div>
        {post.comments.length > 0 && <Separator />}

        <div className="w-full">
          {post.comments.length > 0 &&
            post.comments.map((comment) => (
              <CommentSection
                key={comment._id}
                content={comment.content}
                user={comment.user}
                createdAt={comment.createdAt}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

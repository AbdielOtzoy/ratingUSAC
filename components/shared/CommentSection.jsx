import { formatTime } from "@/lib/utils";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";

const CommentSection = ({ content, user, createdAt }) => {
  return (
    <div className="bg-white p-4 mb-4">
      <div className="flex items-center mb-2">
        <Link
          href={`/profile/${user._id}`}
          className="flex items-center space-x-2"
        >
          <ProfilePicture name={user.nombres} type={"small"} />
          <div className="mx-2">
            <p className="font-bold text-gray-700">{`${user.nombres} ${user.apellidos}`}</p>
            <p className="text-gray-500 text-sm">{formatTime(createdAt)}</p>
          </div>
        </Link>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default CommentSection;

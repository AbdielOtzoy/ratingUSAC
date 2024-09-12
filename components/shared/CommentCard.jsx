"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProfilePicture from "./ProfilePicture";
import { commentPost } from "@/lib/actions/post.actions";

const CommentCard = ({ info, post }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const newComment = {
      content: comment,
      user: info._id,
      post: post,
    };

    try {
      console.log(newComment);
      // guardar comentario
      const res = await commentPost(newComment);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src="/icons/comment.svg"
          alt="comment"
          width={34}
          height={34}
          className="cursor-pointer hover:opacity-70"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-start flex-row items-center gap-2">
              <ProfilePicture name={info.nombres} type={"small"} />
              <h2 className="text-2xl font-bold">
                {info.nombres} {info.apellidos}
              </h2>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div>
            <form onSubmit={handleSubmit}>
              <Label>
                <Input
                  name="comment"
                  type="text"
                  placeholder="Escribe un comentario..."
                  className="w-full mb-3"
                />
              </Label>
              <DialogFooter>
                <Button type="submit">Comentar</Button>
              </DialogFooter>
            </form>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CommentCard;

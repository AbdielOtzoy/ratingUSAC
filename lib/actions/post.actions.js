"use server";

import { connectToDatabase } from "../database";
import { Post, Comment } from "../database/models/post.model";
import User from "../database/models/user.model";

export const createPost = async (post) => {
  try {
    await connectToDatabase();

    // convertir post a json
    post = JSON.parse(post);

    const newPost = new Post(post);
    if (!newPost) {
      throw new Error("Post not created");
    }

    return await newPost.save();
  } catch (error) {
    return JSON.parse(JSON.stringify({ error: error.message }));
  }
};

export const getAllPosts = async () => {
  try {
    await connectToDatabase();

    // populate user and comments and return recent posts
    // populate comments
    const posts = await Post.find()
      .populate("user")
      .populate("comments")
      .sort({ createdAt: -1 });

    // poblar los comentarios con el usuario
    posts.forEach((post) => {
      post.comments.forEach(async (comment) => {
        const user = await User.findById(comment.user);
        comment.user = user;
      });
    });

    return posts;
  } catch (error) {
    return JSON.parse(JSON.stringify({ error: error.message }));
  }
};

export const commentPost = async (comment) => {
  try {
    await connectToDatabase();

    // convertir comment a json

    const newComment = new Comment(comment);
    if (!newComment) {
      throw new Error("Comment not created");
    }

    await newComment.save();

    // update post with new comment
    const updatedPost = await Post.findByIdAndUpdate(
      comment.post,
      { $push: { comments: newComment._id } },
      { new: true }
    );

    return updatedPost;
  } catch (error) {
    return JSON.parse(JSON.stringify({ error: error.message }));
  }
};

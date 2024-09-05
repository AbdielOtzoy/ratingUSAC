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

    // populate user
    return await Post.find().populate("user");
  } catch (error) {
    return JSON.parse(JSON.stringify({ error: error.message }));
  }
};

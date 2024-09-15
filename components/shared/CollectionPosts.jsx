import React from "react";
import PostCard from "./PostCard";
import { getAllPosts, getPostsByFilter } from "@/lib/actions/post.actions";

const CollectionPosts = async (filter) => {
  const posts = await getPostsByFilter(filter);
  console.log(posts);

  return (
    <div className="flex flex-col space-y-5 mt-4 w-full">
      {/* {posts.posts?.map((post) => (
        <PostCard key={post._id} {...post} />
      ))} */}
    </div>
  );
};

export default CollectionPosts;

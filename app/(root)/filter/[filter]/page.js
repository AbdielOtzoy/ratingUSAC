import Filter from "@/components/shared/Filter";
import PostCard from "@/components/shared/PostCard";
import { getPostsByFilter, getPostsByType } from "@/lib/actions/post.actions";
import { formatUrl } from "@/lib/utils";
import React from "react";

const page = async ({ params }) => {
  let posts;
  // formatear la url
  if (params.filter === "curso" || params.filter === "catedratico") {
    posts = await getPostsByType({ type: params.filter });
  } else {
    params.filter = formatUrl(params.filter);
    posts = await getPostsByFilter({ filter: params.filter });
  }

  return (
    <main className="flex flex-col items-center my-10 space-y-8  min-h-screen">
      <h1 className="text-4xl font-bold text-center mt-4">
        Busqueda por {params.filter} !
      </h1>
      {/* filter posts by Curso. Catedrático. Nombre de Curso. Nombre de Catedrático. */}
      <div className="flex items-center justify-center w-auto mt-4 space-x-5">
        <Filter />
      </div>

      {/* posts */}
      <div className="flex flex-col space-y-5 mt-4 w-full">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} {...post} />)
        ) : (
          <h4 className="text-center text-xl">No hay publicaciones.</h4>
        )}
      </div>
    </main>
  );
};

export default page;

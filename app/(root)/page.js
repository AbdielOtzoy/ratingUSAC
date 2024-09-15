import PostCard from "@/components/shared/PostCard";
import FilterComboBox from "@/components/shared/FilterComboBox";
import { getAllPosts } from "@/lib/actions/post.actions";
import { getUserLogged } from "@/lib/actions/user.actions";
import Image from "next/image";
import SearchUser from "@/components/shared/SearchUser";
import Filter from "@/components/shared/Filter";

const Home = async () => {
  const posts = await getAllPosts();
  const user = await getUserLogged();

  return (
    <main className="flex flex-col items-center justify-center my-10 space-y-8">
      <h1 className="text-4xl font-bold text-center mt-4">
        Bienvenido {user.nombres} !👋
      </h1>
      {/* filter posts by Curso. Catedrático. Nombre de Curso. Nombre de Catedrático. */}
      <div className="flex items-center justify-center w-auto mt-4 space-x-5">
        <Filter />
      </div>

      {/* posts */}
      <div className="flex flex-col space-y-5 mt-4 w-full">
        {posts?.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default Home;

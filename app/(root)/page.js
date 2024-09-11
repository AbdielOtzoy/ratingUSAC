import PostCard from "@/components/shared/PostCard";
import { getAllPosts } from "@/lib/actions/post.actions";
import { getUserLogged } from "@/lib/actions/user.actions";
import Image from "next/image";

const Home = async () => {
  const posts = await getAllPosts();
  const user = await getUserLogged();

  const filterSubmit = (e) => {
    e.preventDefault();

    const filter = {
      filterValue: e.target.filter.value,
    };

    console.log("Filtrar posts por: ", filter);
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-4">
        Bienvenido {user?.nombres}! 👋
      </h1>
      {/* filter posts by Curso. Catedrático. Nombre de Curso. Nombre de Catedrático. */}
      <div className="flex items-center justify-center w-2/5 mt-4">
        <input
          type="text"
          placeholder="Buscar por Curso, Catedrático"
          className="p-2 text-xl font-medium border rounded-lg shadow-lg w-full"
        />
        <Image
            src="/icons/search.svg"
            alt="comment"
            width={34}
            height={34}
            className="cursor-pointer hover:opacity-70"
          />
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

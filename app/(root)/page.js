import PostCard from "@/components/shared/PostCard";
import { getAllPosts } from "@/lib/actions/post.actions";
import { getUserLogged } from "@/lib/actions/user.actions";

const Home = async () => {
  const posts = await getAllPosts();
  const user = await getUserLogged();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-4">
        Bienvenido {user?.nombres}! 👋
      </h1>
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

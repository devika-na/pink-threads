import PostCard from "./components/PostCard";

const posts = [
  { id: 1, user: "devika", title: "First post", content: "This is my first post", time: "2h ago" },
  { id: 2, user: "alex", title: "Hello world", content: "Second post content here", time: "1h ago" },
  { id: 3, user: "sam", title: "Pink Threads UI", content: "Building a Reddit-style feed", time: "30m ago" },
];

export default function Home() {
  return (
    <div className="w-[360px] min-h-screen bg-pink-100 flex flex-col">

      {/* HEADER */}
      <div className="bg-pink-500 px-4 py-3">
        <h1 className="text-white text-3xl font-bold">
          Pink Threads
        </h1>
      </div>

      {/* POSTS */}
      <div className="p-4 flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

    </div>
  );
}
"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-14 bg-pink-600 flex flex-col items-center gap-6 py-6 text-white text-2xl">

      <button>🤖</button>
      <button>📢</button>

      <button onClick={() => router.push("/create-community")}>
        ➕
      </button>

      <button>👭</button>
      <button onClick={() => router.push("/messages")}>
       💌
      </button>

    </div>
  );
}
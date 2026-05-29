"use client";

import Link from "next/link";
import { useState } from "react";

export default function PostCard({ id, user, title, content, time }) {
  const [votes, setVotes] = useState(0);
  const [saved, setSaved] = useState(false);

  return (
    <Link href={`/post/${id}`}>
      <div className="bg-white rounded-3xl p-4 shadow-md cursor-pointer">

        <p className="font-bold">@{user}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>

        <div className="flex gap-3 mt-3">

          <button onClick={(e) => { e.preventDefault(); setVotes(votes + 1); }}>
            👍
          </button>

          <button onClick={(e) => { e.preventDefault(); setVotes(votes - 1); }}>
            👎
          </button>

          <span>{votes}</span>

          <button onClick={(e) => e.preventDefault()}>
            💬
          </button>

          <button onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(`http://localhost:3000/post/${id}`);
          }}>
            🔗
          </button>

          <button onClick={(e) => {
            e.preventDefault();
            setSaved(!saved);
          }}>
            {saved ? "🔖" : "📑"}
          </button>

        </div>

      </div>
    </Link>
  );
}
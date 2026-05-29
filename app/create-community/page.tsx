"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCommunity() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("TECH");
  const [type, setType] = useState("public");

  function handleCreate() {
    if (!name.trim()) return;

    console.log({
      name,
      desc,
      category,
      type,
    });

    router.push("/");
  }

  return (
    <div className="w-[360px] min-h-screen bg-pink-100 flex flex-col">

      {/* HEADER */}
      <div className="bg-pink-500 p-4 text-white font-bold text-xl">
        CREATE COMMUNITY
      </div>

      {/* SUBTEXT */}
      <p className="px-4 pt-2 text-sm text-gray-600">
        Create your own little corner of Pink Threads.
      </p>

      <div className="p-4 flex flex-col gap-4">

        {/* 1 NAME */}
        <div>
          <p className="font-bold text-pink-600">1. COMMUNITY NAME</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-3 rounded-2xl border bg-white outline-none"
            placeholder=""
          />
        </div>

        {/* 2 ICON */}
        <div>
          <p className="font-bold text-pink-600">2. COMMUNITY ICON</p>

          <div className="mt-2 border-2 border-dashed rounded-2xl bg-white p-6 text-center">
            <div className="text-2xl">➕</div>
            <p className="text-pink-500 font-bold">UPLOAD IMAGES</p>
            <p className="text-xs text-gray-500">JPEG, PNG up to 5MB</p>
          </div>
        </div>

        {/* 3 DESCRIPTION */}
        <div>
          <p className="font-bold text-pink-600">3. COMMUNITY DESCRIPTION</p>

          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full mt-2 p-3 rounded-2xl border bg-white h-24 outline-none"
            placeholder="Tell people what this space is for..."
          />
        </div>

        {/* 4 CATEGORY */}
        <div>
          <p className="font-bold text-pink-600">4. CHOOSE CATEGORY</p>

          <div className="flex gap-2 mt-2 flex-wrap">
            {["TECH", "SKINCARE", "MOVIES", "MORE"].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  category === c ? "bg-pink-500 text-white" : "bg-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 5 TYPE */}
        <div>
          <p className="font-bold text-pink-600">5. COMMUNITY TYPE</p>

          <div className="flex gap-3 mt-2">

            <button
              onClick={() => setType("public")}
              className={`flex-1 p-3 rounded-2xl border ${
                type === "public" ? "bg-pink-200" : "bg-white"
              }`}
            >
              🌍 Public
            </button>

            <button
              onClick={() => setType("private")}
              className={`flex-1 p-3 rounded-2xl border ${
                type === "private" ? "bg-pink-200" : "bg-white"
              }`}
            >
              🔒 Private
            </button>

          </div>
        </div>

        {/* CREATE BUTTON */}
        <button
          onClick={handleCreate}
          className="mt-4 bg-pink-500 text-white py-3 rounded-2xl font-bold"
        >
          Create Your Thread ✨
        </button>

      </div>
    </div>
  );
}
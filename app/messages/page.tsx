"use client";

import { useState } from "react";
import Link from "next/link";

const chats = [
  {
    id: 1,
    name: "@glowwithsora",
    message: "yes omg that toner is 🔥",
    time: "3m ago",
    unread: 2,
    type: "dm",
  },
  {
    id: 2,
    name: "Skincare Circle",
    message: "ana: has anyone tried the new...",
    time: "10m ago",
    unread: 1,
    type: "community",
  },
  {
    id: 3,
    name: "@softgirl_diaries",
    message: "okayyy thank youu ✨",
    time: "25m ago",
    unread: 7,
    type: "dm",
  },
  {
    id: 4,
    name: "Study Buddies",
    message: "rhea: uploading the notes...",
    time: "1h ago",
    unread: 0,
    type: "community",
  },
  {
    id: 5,
    name: "@thatbookgirl",
    message: "yess the plot twist was insane",
    time: "2h ago",
    unread: 4,
    type: "dm",
  },
];

export default function MessagesPage() {
  const [tab, setTab] = useState("all");
  const [showUnread, setShowUnread] = useState(false);

  const filteredChats = chats.filter((chat) => {

    if (showUnread && chat.unread === 0) {
      return false;
    }

    if (tab === "all") return true;

    if (tab === "dms") {
      return chat.type === "dm";
    }

    if (tab === "communities") {
      return chat.type === "community";
    }

    if (tab === "requests") {
      return false;
    }

    return true;
  });

  return (
    <div className="w-[360px] min-h-screen bg-pink-100">

      {/* HEADER */}
      <div className="bg-pink-500 px-4 py-3">
        <h1 className="text-white text-4xl font-bold">
          Pink Threads
        </h1>
      </div>

      {/* SEARCH */}
      <div className="p-4">
        <input
          placeholder="Search Conversation"
          className="w-full p-3 rounded-full border outline-none"
        />
      </div>

      {/* TABS */}
      <div className="flex gap-2 px-4 overflow-x-auto">

        {["all", "dms", "communities", "requests"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm capitalize ${
              tab === t
                ? "bg-pink-500 text-white"
                : "bg-pink-200 text-black"
            }`}
          >
            {t}
          </button>
        ))}

      </div>

      {/* PINNED */}
      <div className="px-4 mt-6">

        <div className="flex justify-between items-center">

          <h2 className="font-bold text-lg">
            📌 Pinned
          </h2>

          <button className="text-pink-500 text-sm">
            View all
          </button>

        </div>

        <div className="flex gap-3 overflow-x-auto mt-3">

          {chats.slice(0, 4).map((chat) => (

            <div
              key={chat.id}
              className="min-w-[80px] bg-white rounded-2xl p-2 text-center"
            >

              <div className="w-14 h-14 bg-pink-200 rounded-2xl mx-auto"></div>

              <p className="text-xs font-bold mt-2 truncate">
                {chat.name}
              </p>

              <p className="text-[10px] text-pink-500">
                {chat.unread} new
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* MESSAGES HEADER */}
      <div className="px-4 mt-6 flex justify-between items-center">

        <h2 className="font-bold text-xl">
          Messages
        </h2>

        <button
          onClick={() => setShowUnread(!showUnread)}
          className="text-pink-500 text-sm"
        >
          unread ▼
        </button>

      </div>

      {/* CHAT LIST */}
      <div className="mt-4">

        {filteredChats.map((chat) => (

          <Link
            href={`/messages/${chat.id}`}
            key={chat.id}
          >

            <div className="flex items-center gap-3 px-4 py-3 border-b border-pink-200 bg-white cursor-pointer">

              {/* AVATAR */}
              <div className="w-12 h-12 bg-pink-200 rounded-full"></div>

              {/* TEXT */}
              <div className="flex-1">

                <div className="flex justify-between">

                  <p className="font-bold text-sm">
                    {chat.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {chat.time}
                  </p>

                </div>

                <p className="text-sm text-gray-600 truncate">
                  {chat.message}
                </p>

              </div>

              {/* UNREAD */}
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {chat.unread}
                </div>
              )}

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}
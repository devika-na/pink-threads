"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ChatPage() {
  const params = useParams();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "them",
      user: "ana",
      text: "has anyone tried the new anua sunscreen?",
      time: "9:41 AM",
    },
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "me",
        user: "you",
        text: input,
        time: "now",
      },
    ]);

    setInput("");
  }

  return (
    <div className="w-[360px] h-screen bg-[#fff8fb] flex flex-col relative overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">

        <div className="flex items-center gap-3">

          <button className="text-2xl text-pink-400">
            ←
          </button>

          <div className="w-14 h-14 rounded-full bg-pink-200"></div>

          <div>
            <h1 className="font-bold text-xl text-black">
              Skincare Circle 💗
            </h1>

            <p className="text-sm text-gray-500">
              • 28 members
            </p>

            <p className="text-sm text-green-500">
              ● 8 online
            </p>
          </div>

        </div>

        <div className="flex gap-4 text-pink-400 text-2xl">
          <button>📞</button>
          <button>⋮</button>
        </div>

      </div>

      {/* PINNED */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-4 border border-pink-100">

        <div className="flex justify-between items-center">

          <div>
            <p className="text-pink-400 font-bold">
              📌 Pinned
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Let’s keep this chat kind & respectful 💕
            </p>
          </div>

          <button className="text-pink-300 text-xl">
            ›
          </button>

        </div>

      </div>

      {/* TODAY */}
      <div className="flex justify-center mt-4">
        <div className="bg-pink-100 text-pink-400 text-xs px-4 py-1 rounded-full">
          Today
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-6">

        {messages.map((msg) => (

          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {msg.sender !== "me" && (
              <div className="w-10 h-10 rounded-full bg-pink-200 mr-2"></div>
            )}

            <div>

              {msg.sender !== "me" && (
                <p className="text-pink-500 text-xs font-bold mb-1">
                  {msg.user}
                </p>
              )}

              <div
                className={`max-w-[220px] rounded-3xl px-4 py-3 ${
                  msg.sender === "me"
                    ? "bg-pink-400 text-white"
                    : "bg-white text-black shadow-sm"
                }`}
              >
                <p>{msg.text}</p>

                <p className="text-[10px] mt-2 opacity-60 text-right">
                  {msg.time}
                </p>
              </div>

              {/* REACTIONS */}
              {msg.sender !== "me" && (
                <div className="flex gap-2 mt-2 ml-2">

                  <div className="bg-white px-2 py-1 rounded-full text-xs shadow">
                    💗 12
                  </div>

                  <div className="bg-white px-2 py-1 rounded-full text-xs shadow">
                    ✨ 4
                  </div>

                </div>
              )}

            </div>

          </div>

        ))}

      </div>

      {/* INPUT BAR */}
      <div className="p-3 bg-white border-t flex items-center gap-2">

        <button className="w-10 h-10 rounded-full bg-pink-100 text-pink-500 text-2xl">
          +
        </button>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message Skincare Circle..."
          className="flex-1 bg-pink-50 rounded-full px-4 py-3 outline-none"
        />

        <button className="text-2xl text-pink-400">
          😊
        </button>

        <button className="w-10 h-10 rounded-full bg-pink-500 text-white">
          🎤
        </button>

      </div>

    </div>
  );
}
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type CommentType = {
  id: number;
  text: string;
  replies: CommentType[];
};

/* ---------------- PAGE ---------------- */

export default function PostPage() {
  const params = useParams();
  const postId = params.id;

  const [post] = useState({
    id: postId,
    title: "Sample Post",
    content: "This is a demo post content",
  });

  const [comments, setComments] = useState<CommentType[]>([]);
  const [input, setInput] = useState("");

  /* ---------- ADD TOP COMMENT ---------- */

  function addComment() {
    if (!input.trim()) return;

    const newComment: CommentType = {
      id: Date.now(),
      text: input,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setInput("");
  }

  /* ---------- RECURSIVE REPLY LOGIC ---------- */

  function addReply(
    list: CommentType[],
    parentId: number,
    text: string
  ): CommentType[] {
    return list.map((c) => {
      if (c.id === parentId) {
        return {
          ...c,
          replies: [
            ...c.replies,
            { id: Date.now(), text, replies: [] },
          ],
        };
      }

      return {
        ...c,
        replies: addReply(c.replies, parentId, text),
      };
    });
  }

  function handleReply(parentId: number, text: string) {
    setComments((prev) => addReply(prev, parentId, text));
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-pink-100 flex">

      {/* LEFT SIDE */}
      <div className="flex-1 p-4">

        {/* POST */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-gray-600 mt-2">{post.content}</p>
        </div>

        {/* COMMENT INPUT BAR */}
        <div className="flex gap-2 bg-white p-2 rounded-xl mt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 outline-none"
          />

          <button>😊</button>
          <button>GIF</button>
          <button>📷</button>

          <button
            onClick={addComment}
            className="bg-pink-500 text-white px-3 py-1 rounded"
          >
            Post
          </button>
        </div>

        {/* COMMENTS */}
        <div className="mt-4 space-y-3">
          {comments.map((c) => (
            <CommentCard
              key={c.id}
              comment={c}
              level={0}
              onReply={handleReply}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-14 bg-pink-600 flex flex-col items-center gap-6 py-6 text-white text-2xl">
        <button>🤖</button>
        <button>📢</button>
        <button>➕</button>
        <button>👭</button>
        <button>💌</button>
      </div>
    </div>
  );
}

/* ================= COMMENT COMPONENT ================= */

function CommentCard({
  comment,
  level,
  onReply,
}: {
  comment: CommentType;
  level: number;
  onReply: (parentId: number, text: string) => void;
}) {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  function submitReply() {
    if (!replyText.trim()) return;

    onReply(comment.id, replyText);
    setReplyText("");
    setShowReply(false);
  }

  return (
    <div style={{ marginLeft: level * 20 }}>

      {/* COMMENT BOX */}
      <div className="bg-white p-3 rounded-xl shadow-sm">

        <p>{comment.text}</p>

        <button
          onClick={() => setShowReply(!showReply)}
          className="text-pink-500 text-sm mt-2"
        >
          Reply
        </button>

        {/* INLINE REPLY BOX */}
        {showReply && (
          <div className="mt-2 flex gap-2">
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write reply..."
              className="flex-1 border p-1 rounded"
            />

            <button
              onClick={submitReply}
              className="bg-pink-500 text-white px-2 rounded"
            >
              Send
            </button>
          </div>
        )}
      </div>

      {/* CHILD REPLIES */}
      <div className="mt-2 space-y-2">
        {comment.replies.map((r) => (
          <CommentCard
            key={r.id}
            comment={r}
            level={level + 1}
            onReply={onReply}
          />
        ))}
      </div>
    </div>
  );
}
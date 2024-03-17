"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentField = ({ username, email, anime, title }) => {
  const [comment, setComment] = useState("");

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { username, email, anime, title, comment };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();

    if (postComment.isCreated) {
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex gap-2">
      <textarea
        id="about"
        name="about"
        rows={3}
        className="flex-1 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        value={comment}
        onChange={handleInput}
      />
      <button
        className="rounded-md bg-main-accent disabled:opacity-50 px-8 py-2 self-end font-semibold shadow-sm"
        disabled={comment.length < 3}
        onClick={handlePosting}
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentField;

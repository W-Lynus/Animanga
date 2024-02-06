"use client";
import React, { useEffect, useState } from "react";

const Bookmark = ({ user, anime, image, title }) => {
  const [bookState, setBookState] = useState(false);

  const isBookmarked = async () => {
    const response = await fetch(
      `/api/v1/collection?user=${user}&id=${anime}`,
      {
        method: "GET",
      }
    );
    const bookmark = await response.json();
    if (bookmark.isExist) setBookState(true);
    return bookmark.data;
  };

  const handleClickBookmark = async (event) => {
    event.preventDefault();

    if (bookState) {
      const bookmark = await isBookmarked();
      const response = await fetch("/api/v1/collection", {
        method: "DELETE",
        body: JSON.stringify({ id: bookmark.id }),
      });
      const removeMark = await response.json();
      if (removeMark.isRemoved) setBookState(false);
    } else {
      const animeData = {
        user_email: user,
        mal_id: anime,
        anime_title: title,
        anime_image: image,
      };
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(animeData),
      });
      const addMark = await response.json();
      if (addMark.isCreated) setBookState(true);
    }
  };

  useEffect(() => {
    isBookmarked();
  }, []);

  const renderBookmark = () =>
    bookState ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    );

  return <button onClick={handleClickBookmark}>{renderBookmark()}</button>;
};

export default Bookmark;

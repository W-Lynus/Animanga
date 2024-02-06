import Link from "next/link";
import React from "react";
import SearchField from "./SearchField";

const Menubar = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center px-6 py-3 gap-2 shadow-xl">
      <div className="flex gap-10 text-main-primary">
        <Link
          href="/anime"
          className="font-bold uppercase hover:text-main-accent"
        >
          Anime
        </Link>
        <Link
          href="/manga"
          className="font-bold uppercase hover:text-main-accent"
        >
          Manga
        </Link>
      </div>
      <SearchField />
    </div>
  );
};

export default Menubar;

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const SearchField = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef();

  const handleSearch = (event) => {
    const searchValue = searchRef.current.value;
    if (!searchValue.trim()) return;
    if (event.key === "enter" || event.type === "click") {
      event.preventDefault();
      router.push(`${pathname}/search/${searchValue}`);
    }
  };

  return (
    <form className="relative">
      <input
        placeholder={`Cari ${pathname.includes("manga") ? "Manga" : "Anime"}`}
        ref={searchRef}
        className="w-full px-4 py-2 rounded"
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-1.5 right-3"
        type="submit"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchField;

"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeaderBar = ({ title }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex gap-4">
      <button className="text-main-primary" onClick={handleBack}>
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
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <span className="text-2xl text-main-primary font-bold">{title}</span>
    </div>
  );
};

export default HeaderBar;

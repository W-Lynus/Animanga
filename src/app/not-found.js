"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="uppercase text-3xl text-main-accent">not found</div>
      <button
        onClick={() => router.back()}
        className="text-main-primary hover:text-main-accent underline"
      >
        Kembali
      </button>
    </div>
  );
};

export default Page;

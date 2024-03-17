import React from "react";
import Link from "next/link";
import { authServerSession } from "libs/auth-libs";
import prisma from "libs/prisma";
import HeaderBar from "components/HeaderBar";

const page = async () => {
  const user = await authServerSession();
  const comments = await prisma.comments.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <HeaderBar title={"My Comments"} />
      <div className="grid grid-cols-1 py-4 gap-4">
        {comments.length ? (
          comments.map((comment) => {
            return (
              <Link
                href={`/anime/detail/${comment.mal_id}`}
                key={comment.id}
                className="bg-main-primary text-main-dark p-4"
              >
                <p className="text-sm">{comment.anime_title}</p>
                <p className="italic">{comment.comment}</p>
              </Link>
            );
          })
        ) : (
          <span className="text-main-primary text-center my-8">
            Tidak Ada Komentar
          </span>
        )}
      </div>
    </section>
  );
};

export default page;

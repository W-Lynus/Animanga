import prisma from "libs/prisma";
import Image from "next/image";
import React from "react";

const CommentSection = async ({ id }) => {
  const comments = await prisma.comments.findMany({ where: { mal_id: id } });

  return (
    <div className="flex flex-col gap-4 mt-2 mb-4 max-h-32 overflow-y-auto ">
      {comments?.map((comment) => {
        return (
          <div
            key={comment.id}
            className="text-main-dark bg-main-primary rounded px-4 py-3 flex items-center gap-4"
          >
            <Image
              src={comment.user_photo}
              placeholder="blur"
              blurDataURL="https://placehold.co/600x400/png"
              alt="user"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-bold">{comment.user_name}</p>
              <p>{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;

import prisma from "libs/prisma";
import React from "react";

const CommentSection = async ({ id }) => {
  const comments = await prisma.comments.findMany({ where: { mal_id: id } });

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments?.map((comment) => {
        return (
          <div key={comment.id} className="text-main-dark bg-main-primary p-4">
            <p>{comment.user_name}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;

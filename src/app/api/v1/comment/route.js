import prisma from "libs/prisma";

export async function POST(request) {
  const { username, email, photo, anime, title, comment } =
    await request.json();
  const data = {
    mal_id: anime,
    user_email: email,
    user_name: username,
    user_photo: photo,
    anime_title: title,
    comment,
  };

  const createComment = await prisma.comments.create({ data });

  if (!createComment) return Response.json({ status: 400, isCreated: false });
  return Response.json({ status: 200, isCreated: true });
}

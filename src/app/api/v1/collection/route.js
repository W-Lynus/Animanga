import prisma from "libs/prisma";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const getCollection = await prisma.collection.findUnique({
    where: {
      user_email_mal_id: {
        user_email: searchParams.get("user"),
        mal_id: searchParams.get("id"),
      },
    },
  });
  if (!getCollection) return Response.json({ status: 400, isExist: false });
  return Response.json({ status: 200, isExist: true, data: getCollection });
}

export async function POST(request) {
  const data = await request.json();
  const createCollection = await prisma.collection.create({ data });
  if (!createCollection)
    return Response.json({ status: 400, isCreated: false });
  return Response.json({ status: 200, isCreated: true });
}

export async function DELETE(request) {
  const data = await request.json();
  const removeCollection = await prisma.collection.delete({
    where: { id: data.id },
  });
  if (!removeCollection)
    return Response.json({ status: 400, isRemoved: false });
  return Response.json({ status: 200, isRemoved: true });
}

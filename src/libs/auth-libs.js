import { authOption } from "../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const authServerSession = async () => {
  const userSession = await getServerSession(authOption);
  return userSession?.user;
};

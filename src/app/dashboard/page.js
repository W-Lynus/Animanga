import { authServerSession } from "libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authServerSession();

  return (
    <div className="m-8 text-main-primary flex flex-col gap-4 justify-center items-center">
      <h5 className="text-2xl font-bold ">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />
      <div className="flex flex-wrap gap-4">
        <Link
          href="/dashboard/collection"
          className="bg-main-accent text-main-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/dashboard/comment"
          className="bg-main-accent text-main-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;

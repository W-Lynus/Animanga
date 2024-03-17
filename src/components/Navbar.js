import { authServerSession } from "libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const user = await authServerSession();

  return (
    <header className="bg-main-accent w-full">
      <div className="flex justify-between items-center px-6 py-4 gap-2 shadow-xl">
        <Link href="/" className="font-bold text-xl uppercase">
          Animanga List
        </Link>
        <div className="flex items-center gap-4">
          {user && (
            <Link href={"/dashboard"}>
              <Image
                src={user.image}
                placeholder="blur"
                blurDataURL="https://placehold.co/600x400/png"
                alt="user"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          )}
          <Link
            href={`/api/auth/${user ? "signout" : "signin"}`}
            className="bg-main-dark text-main-accent text-center sm:px-12 px-8 py-1"
          >
            {user ? "Sign Out" : "Sign In"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

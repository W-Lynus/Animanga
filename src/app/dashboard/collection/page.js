import HeaderBar from "components/HeaderBar";
import { authServerSession } from "libs/auth-libs";
import prisma from "libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authServerSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  const renderCollectionList = (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {collection.map((collect, index) => {
        return (
          <Link
            key={index}
            href={`/anime/detail/${collect.mal_id}`}
            className="relative"
          >
            <Image
              src={collect.anime_image}
              alt={collect.anime_image}
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute flex items-center justify-center bottom-0 w-full bg-main-accent h-16">
              <h5 className="text-xl text-center">{collect.anime_title}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );

  const renderEmptyList = (
    <span className="text-main-primary text-center my-8">
      Tidak Ada Koleksi
    </span>
  );

  return (
    <section className="flex flex-col gap-4 my-4 px-4">
      <HeaderBar title={"My Collection"} />
      {collection.length ? renderCollectionList : renderEmptyList}
    </section>
  );
};

export default Page;

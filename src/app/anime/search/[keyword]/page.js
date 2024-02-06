import CardList from "components/CardList";
import HeaderList from "components/HeaderList";
import { getAnimeResponse } from "libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const findAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <HeaderList title={`Pencarian untuk : ${decodeKeyword}`} />
        <CardList list={findAnime.data} type="anime" />
      </section>
    </>
  );
};
export default Page;

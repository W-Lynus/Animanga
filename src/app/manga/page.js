import CardList from "components/CardList";
import HeaderList from "components/HeaderList";
import { getAnimeResponse, randomize } from "libs/api-libs";

const Page = async () => {
  const recommendationManga = await getAnimeResponse("recommendations/manga");
  const mapRecommendation = recommendationManga.data?.flatMap(
    (item) => item.entry
  );
  const randRecommendation = randomize(mapRecommendation, 5);
  const someTopAnime = await getAnimeResponse("top/manga", `limit=10`);
  const someFavoriteAnime = await getAnimeResponse(
    "top/manga",
    `filter=favorite&limit=5`
  );

  return (
    <div className="flex flex-col gap-4 py-4">
      <section>
        <HeaderList title="Rekomendasi" />
        <CardList list={randRecommendation} type="manga" />
      </section>
      <section>
        <HeaderList
          title="Paling Populer"
          link="/manga/popular"
          linkTitle="Lihat Semua"
        />
        <CardList list={someTopAnime.data} type="manga" />
      </section>
      <section>
        <HeaderList
          title="Top Favorite Manga"
          link="/manga/popular/favorite"
          linkTitle="Lihat Semua"
        />
        <CardList list={someFavoriteAnime.data} type="manga" />
      </section>
    </div>
  );
};
export default Page;

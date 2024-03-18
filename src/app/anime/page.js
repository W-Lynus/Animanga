import CardList from "components/CardList";
import HeaderList from "components/HeaderList";
import { getAnimeResponse, randomize } from "libs/api-libs";

const Page = async () => {
  const recommendationAnime = await getAnimeResponse("recommendations/anime");
  const mapRecommendation = recommendationAnime.data?.flatMap(
    (item) => item.entry
  );
  const randRecommendation = randomize(mapRecommendation, 5);
  const someTopAnime = await getAnimeResponse("top/anime", `limit=10`);
  const someFavoriteAnime = await getAnimeResponse(
    "top/anime",
    `filter=favorite&limit=5`
  );
  const someAiringAnime = await getAnimeResponse(
    "top/anime",
    `filter=airing&limit=5`
  );
  const someUpcomingAnime = await getAnimeResponse(
    "top/anime",
    `filter=upcoming&limit=5`
  );

  return (
    <div className="flex flex-col gap-4 py-4">
      <section>
        <HeaderList title="Rekomendasi" />
        <CardList list={randRecommendation} type="anime" />
      </section>
      <section>
        <HeaderList
          title="Paling Populer"
          link="/anime/popular"
          linkTitle="Lihat Semua"
        />
        <CardList list={someTopAnime.data} type="anime" />
      </section>
      <section>
        <HeaderList
          title="Top Favorite Anime"
          link="/anime/popular/favorite"
          linkTitle="Lihat Semua"
        />
        <CardList list={someFavoriteAnime.data} type="anime" />
      </section>
      <section>
        <HeaderList
          title="Top Airing Anime"
          link="/anime/popular/airing"
          linkTitle="Lihat Semua"
        />
        <CardList list={someAiringAnime.data} type="anime" />
      </section>
      <section>
        <HeaderList
          title="Top Upcoming Anime"
          link="/anime/popular/upcoming"
          linkTitle="Lihat Semua"
        />
        <CardList list={someUpcomingAnime.data} type="anime" />
      </section>
    </div>
  );
};
export default Page;

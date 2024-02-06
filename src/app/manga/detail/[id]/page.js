import { getAnimeResponse } from "libs/api-libs";
import VideoPlayer from "components/VideoPlayer";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;

  const { data: detailAnime } = await getAnimeResponse(`manga/${id}`);

  const renderArray = (type) =>
    detailAnime[type].map((genre, idx) => {
      return (
        <span key={idx}>
          {genre.name || genre}
          {detailAnime[type].length - idx > 1 ? ", " : " "}
        </span>
      );
    });

  return (
    <>
      <div className="text-main-primary text-2xl p-4">
        {detailAnime.title} ({detailAnime.title_english})
      </div>
      <div className="flex sm:flex-nowrap flex-wrap px-4">
        <div className="border flex-[0_0_20%] flex flex-col gap-4 p-2">
          <div className="text-main-primary text-lg">
            <Image
              src={detailAnime.images.webp.image_url}
              alt={detailAnime.images.jpg.image_url}
              width={300}
              height={350}
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <b className="text-main-primary text-lg">Alternative Title</b>
            <small className="text-main-primary">
              Synonyms: {renderArray("title_synonyms")}
            </small>
            <small className="text-main-primary">
              Japanese: {detailAnime.title_japanese}
            </small>
          </div>
        </div>
        <div className="border flex-1 flex flex-col gap-3 p-3 ">
          <div className="border rounded flex text-main-primary p-2 overflow-x-auto divide-x">
            <div className="text-center px-6 py-2">
              <small>Skor</small>
              <big className="block">{detailAnime.score}</big>
              <small>
                {parseInt(detailAnime.scored_by).toLocaleString()} pengguna
              </small>
            </div>
            <div className="p-2">
              <div className="flex gap-4 p-2">
                <div className="flex gap-2 items-center text-center">
                  <small>Peringkat</small>
                  <big>#{detailAnime.rank}</big>
                </div>
                <div className="flex gap-2 items-center text-center">
                  <small>Popularitas</small>
                  <big>#{detailAnime.popularity}</big>
                </div>
                <div className="flex gap-2 items-center text-center">
                  <small>Member</small>
                  <big>{detailAnime.members}</big>
                </div>
              </div>
              <div className="flex gap-4 p-2 divide-x">
                <small className="text-main-primary">{detailAnime.type}</small>
                <small className="text-main-primary pl-3">
                  {detailAnime.serializations[0].name || "-"}
                </small>
                <small className="text-main-primary pl-3">
                  {renderArray("authors")}
                </small>
              </div>
            </div>
          </div>
          <p className="text-main-primary">Genres: {renderArray("genres")}</p>
          <p className="text-main-primary text-justify">
            Synopsis: <br />
            {detailAnime.synopsis}
          </p>
          <p className="text-main-primary text-justify">
            Background: <br />
            {detailAnime.background}
          </p>
        </div>
      </div>
    </>
  );
};
export default Page;

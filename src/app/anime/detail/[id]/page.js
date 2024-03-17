import { getAnimeResponse } from "libs/api-libs";
import VideoPlayer from "components/VideoPlayer";
import Image from "next/image";
import Bookmark from "components/Bookmark";
import { authServerSession } from "libs/auth-libs";
import CommentField from "components/CommentField";
import CommentSection from "components/CommentSection";

const Page = async ({ params: { id } }) => {
  const user = await authServerSession();
  const { data: detailAnime } = await getAnimeResponse(`anime/${id}`);

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
      <div className="flex gap-2 text-main-primary text-2xl p-4">
        <span>
          {detailAnime.title} ({detailAnime.title_english})
        </span>
        {user?.email && (
          <Bookmark
            user={user.email}
            anime={id}
            image={detailAnime.images.webp.image_url}
            title={detailAnime.title}
          />
        )}
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
          <div className="flex flex-col gap-3">
            <b className="text-main-primary text-lg">Trailer</b>
            <VideoPlayer videoId={detailAnime.trailer.youtube_id} />
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
                <small className="text-main-primary capitalize">
                  {detailAnime.season} {detailAnime.year}
                </small>
                <small className="text-main-primary pl-3">
                  {detailAnime.type}
                </small>
                <small className="text-main-primary pl-3">
                  {renderArray("studios")}
                </small>
              </div>
            </div>
          </div>
          <p className="text-main-primary">Genres: {renderArray("genres")}</p>
          <p className="text-main-primary">
            Episode: {detailAnime.episodes} / {detailAnime.duration}
          </p>
          <p className="text-main-primary">Rating: {detailAnime.rating}</p>
          <p className="text-main-primary text-justify">
            Synopsis: <br />
            {detailAnime.synopsis}
          </p>
          <p className="text-main-primary text-justify">
            Background: <br />
            {detailAnime.background}
          </p>
          <div>
            <h3 className="text-main-primary">Komentar</h3>
            <CommentSection id={id} />
            {user && (
              <CommentField
                username={user?.name}
                email={user?.email}
                anime={id}
                title={detailAnime.title}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

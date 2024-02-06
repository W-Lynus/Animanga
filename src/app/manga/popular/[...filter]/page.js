"use client";

import { getAnimeResponse } from "libs/api-libs";
import CardList from "components/CardList";
import HeaderList from "components/HeaderList";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { filter } = params;

  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState([]);

  const fetchData = async () => {
    const topManga = await getAnimeResponse(
      "top/manga",
      filter ? `filter=${filter}&page=${page}` : `page=${page}`
    );
    setCollection(topManga);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderList title={`Anime ${filter} Terpopuler #${page}`} />
      <CardList list={collection.data} type="manga" />
      <Pagination
        page={page}
        total={collection.pagination?.last_visible_page}
        onNext={() => setPage((prev) => ++prev)}
        onPrev={() => setPage((prev) => --prev)}
      />
    </div>
  );
};

export default Page;

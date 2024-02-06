import Card from "./Card";

const CardList = async ({ list, type }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-3 px-4">
      {list?.map((data, index) => {
        return (
          <Card
            index={index}
            key={data.mal_id}
            id={data.mal_id}
            title={data.title}
            image={data.images.webp.image_url}
            type={type}
          />
        );
      })}
    </div>
  );
};

export default CardList;

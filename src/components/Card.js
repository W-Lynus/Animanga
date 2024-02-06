import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, image, index, type }) => {
  return (
    <Link
      href={`/${type}/detail/${id}`}
      className="relative h-[300px] shadow-xl overflow-hidden cursor-pointer group transition-all"
    >
      <Image
        src={image}
        alt={`${image}`}
        fill
        sizes="(max-height: 100%)"
        placeholder="blur"
        blurDataURL="https://placehold.co/600x400/png"
        className="opacity-70 group-hover:scale-105 group-hover:opacity-50 group-hover:[transition:0.3s_ease_all]"
      />
      <div className="absolute top-0 right-0 text-right p-1">
        <span className="font-bold text-md text-main-primary group-hover:text-main-accent [text-shadow:black_1px_1px_2px]">
          #{index + 1}
        </span>
      </div>
      <div className="absolute bottom-0 px-2 py-1">
        <h3 className="font-bold text-md text-main-primary group-hover:text-main-accent [text-shadow:black_1px_1px_2px]">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;

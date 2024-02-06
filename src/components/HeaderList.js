import Link from "next/link";

const HeaderList = ({ title, link, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h3 className="text-xl font-bold text-main-primary capitalize">
        {title}
      </h3>
      {link && linkTitle && (
        <Link
          href={link}
          className="underline  text-main-primary hover:text-main-accent transition-all"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
};

export default HeaderList;

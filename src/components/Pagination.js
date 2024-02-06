const Pagination = ({ page, total, onPrev, onNext }) => {
  const scrollToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleClickNext = () => {
    scrollToTop();
    onNext();
  };
  const handleClickPrev = () => {
    scrollToTop();
    onPrev();
  };

  return (
    <div className="flex justify-center items-center gap-4 p-4 text-main-primary text-xl">
      <button
        className="transition-all hover:text-main-accent disabled:hidden"
        disabled={page <= 1}
        onClick={handleClickPrev}
      >
        Prev
      </button>
      <span>
        {page} of {total}
      </span>
      <button
        className="transition-all hover:text-main-accent disabled:hidden"
        disabled={page >= total}
        onClick={handleClickNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

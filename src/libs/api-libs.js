export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  return response.json();
};

export const randomize = (data, gap) => {
  const firstNum = ~~(Math.random() * (data.length - gap) + 1);
  const secondNum = firstNum + gap;

  return data.slice(firstNum, secondNum);
};

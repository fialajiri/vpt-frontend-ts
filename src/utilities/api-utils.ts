export const getAllMembers = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/members");
  const members = await response.json();

  return members.members;
};

export const getAllNews = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/news");
  const news = await response.json();

  return news.news;
};

export const getNewsById = async (newsId: string) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/news/" + newsId
  );

  const newsItem = await response.json();

  return newsItem.news;
};

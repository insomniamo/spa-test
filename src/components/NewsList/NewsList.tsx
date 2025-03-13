import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@utils/redux/store";
import { fetchNewsThunk } from "@utils/redux/newsSlice";
import { formatDateForGrouping } from "@utils/formatDate";

import "./NewsList.style.scss";
import Card from "../Card/Card";

const NewsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsThunk());

    const interval = setInterval(() => {
      dispatch(fetchNewsThunk());
    }, 30000);

    return () => clearInterval(interval);
  }, [dispatch]);

  // Группировка новостей по дате
  const groupedNews = news.reduce<Record<string, typeof news>>((acc, article) => {
    const date = formatDateForGrouping(article.pub_date); // Форматируем дату для группировки
    if (!acc[date]) acc[date] = [];
    acc[date].push(article);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedNews).map(([date, articles]) => (
        <div className="newslist" key={date}>
          <h2 className="newslist__date">News for {date}</h2>
          <div className="newslist__wrapper">
            {articles.map((article) => (
              <Card
                key={article.web_url}
                image={article.image || "https://placehold.co/99x74"}
                title={article.source}
                content={article.abstract}
                date={new Date(article.pub_date).toLocaleString()}
                link={article.web_url}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsList;

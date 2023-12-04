
import { useEffect, useState } from "react";
import "./HomePage.scss";
import CallAPI from "../callAPI/CallAPIfunction.jsx";


const APIRequest = "https://api.spaceflightnewsapi.net/v4/articles?order=desc&sortBy=publishedAt"
export const HomePage = () => {
  const CleanDate = (trashDate) => {
    const date = new Date(trashDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  }
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await CallAPI(APIRequest);
      setArticle(result.results[0]);
    };

    fetchData();

  }, []);
  console.log(article);
  //console.log(`Results console.log home${article}`);
  return (
    // console.log(article);
    <div className="backGround flexList">
      <h1>Welcome</h1>

      {article != [] ? (
      
        <div className="articleBox">
          <h2 className="articleTitle">{article.title}</h2>
          <p className="articleSource">
            Publised : {CleanDate(article.published_at)}
          </p>
          <img className="articlePicture" src={article.image_url} alt={article.title} />
          <p className="articleDescription">{article.summary}</p>
          <a href={article.url} className="articleDescription">{article.title}</a>
        </div>
      ) : (
        <p className="articleBox">Chargement en cours...</p>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import "./HomePage.scss";
export const HomePage = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/18640/")
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'article :", error);
      });
  }, []);

  return (
    // console.log(article);
    <div className="article">
      <h1>Welcome</h1>

      {article ? (
        <div>
          <h2>{article.title}</h2>
          <p>
            Publié le : {article.published_at}
            {article.update_at}
          </p>
          <img src={article.image_url} alt={article.title} />
          <p>{article.summary}</p>
          <p>{article.url}</p>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

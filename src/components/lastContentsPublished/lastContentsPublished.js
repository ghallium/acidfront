import data from "../../data/articles.json";
import reviews from "../../data/reviews.json";
import { Link } from "react-router-dom";
import "./lastContentsPublished.css";

function LastContentsPublished() {
  const articles = data.slice(0, 10); // Sélectionne jusqu'à 10 articles, à déterminer
  const reviewSelect = reviews.slice(0, 4); // Pareil pour les tests, jusqu'à 4 articles

  return (
    <>
      <div className="last-news-area">
        <h2>Les dernières actus</h2>
        <div className="last-news-block">
          {articles.map((a, index) => (
            <Link key={a.id} to={`/article/${a.id}`}>
              <div className="new-article">
                <div className="new-article-image">

                </div>
                <div className="new-article-info">
                    <h3>{a.title}</h3>
                    <p className="new-article-date">{a.date}</p>
                    <p className="new-article-description">{a.description}</p>
                    <p className="new-article-author">{a.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="last-reviews-area">
       <div className="last-reviews-block">
            <h2>Les derniers tests</h2>
            {reviewSelect.map((r, index) => (
            <Link key={r.id} to={`/test/${r.id}`}>
                <div className="new-review">
                    <h3>{r.title}</h3>
                    <p>{r.author}</p>
                </div>
            </Link>
         ))}
        </div> 
      </div>
    </>
  );
}

export default LastContentsPublished;

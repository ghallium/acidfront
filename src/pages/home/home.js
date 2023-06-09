import Searchbar from "../../components/searchbar/searchbar.js";
import data from "../../data/articles.json";
// import { Link } from "react-router-dom";
import LastContentsPublished from "../../components/lastContentsPublished/lastContentsPublished.js";
import "./home.css";

function Home() {
  const articles = data.slice(0, 7); // Sélectionne les 7 premiers articles
  const featuredArticles = articles.filter((a) => a["article-une"]);

  return (
    <>
      <div className="homeMainBlock">
        <Searchbar />
        <div id="cards-area">
          {featuredArticles.map((a) => (
                <div className="featured-card" style={{
                  backgroundImage: `url(${a.card})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
              }}>
                  {/* Contenu de la carte en vedette */}
                  <div className="featured-card-title">{a.title}</div>
                </div>
          ))}
          
          {articles.map((a) => (
            !a["article-une"] && (                
                  <div className="card" key={a.title} style={{
                    backgroundImage: `url(${a.card})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                     {/* Contenu de la carte normale, penser à retirer le slice */}
                  <div className="card-title">{a.title.slice(0,30)}</div>
                
                </div>
            )
          ))}
        </div>
      </div>
      <div className="bottomBlock">
        <LastContentsPublished />
      </div>
    </>
  );
}

export default Home;

import Searchbar from "../../components/searchbar/searchbar.js";
import data from "../../data/articles.json";
import LastContentsPublished from "../../components/lastContentsPublished/lastContentsPublished.js";
import "./home.css";

function Home() {
  const articles = data.slice(0, 7);
  const featuredArticles = articles.filter((a) => a["article-une"]);

  const isWindowWidthBetween = (minWidth, maxWidth) => {
    return (
      window.innerWidth >= minWidth && window.innerWidth <= maxWidth
    );
  };

  const renderCards = () => {
    if (isWindowWidthBetween(350, 1024)) {
      // Rendre seulement deux éléments de la classe "card" lorsque le navigateur est entre 350px et 1024px de large
      const twoCards = articles.filter((a) => !a["article-une"]).slice(0, 2);

      return twoCards.map((a) => (
        <div
          className="card"
          key={a.title}
          style={{
            backgroundImage: `url(${a.card})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="card-title">{a.title.slice(0, 30)}</div>
        </div>
      ));
    }

    // Rendre tous les éléments de la classe "card"
    return articles.map((a) => (
      !a["article-une"] && (
        <div
          className="card"
          key={a.title}
          style={{
            backgroundImage: `url(${a.card})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="card-title">{a.title.slice(0, 30)}</div>
        </div>
      )
    ));
  };

  return (
    <>
      <div className="homeMainBlock">
        <Searchbar />
        <div id="cards-area">
          {featuredArticles.map((a) => (
            <div
              className="featured-card"
              style={{
                backgroundImage: `url(${a.card})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              key={a.title}
            >
              <div className="featured-card-title">{a.title}</div>
            </div>
          ))}

          {renderCards()}
        </div>
      </div>
      <div className="bottomBlock">
        <LastContentsPublished />
      </div>
    </>
  );
}

export default Home;
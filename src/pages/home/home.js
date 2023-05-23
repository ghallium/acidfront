import Searchbar from "../../components/searchbar/searchbar.js";
import data from "../../data/articles.json";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    const articles = data.slice(0, 7); // Sélectionne les 7 premiers articles
  
    return (
      <div className="homeMainBlock">
        <Searchbar />
        <div id="cards-area">
          {articles.map((a, index) => (
            <Link key={a.id} to={`/article/${a.id}`}>
              <div className={`card${index === 0 ? " first-card" : ""}`}>
                {/* Contenu de la carte */}
              </div>
              <div className="card-title">{a.title}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

export default Home;
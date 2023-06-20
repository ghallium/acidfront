import ArticlesData from "../../data/articles.json";
import { Link } from "react-router-dom";
import "./actu.css";

function Actu() {
    return (
        <div className="actu-pageblock">
            <h2>Toutes les dernières news</h2>
            <div className="actu-container">
                {ArticlesData.filter((adata) => adata["content-type"] === "News").map((adata) => (
                    <Link key={adata.id} to={`/article/${adata.id}`}>
                        <div className="article">
                            <div
                                className="article-minia"
                                style={{
                                    backgroundImage: `url(${adata.miniature})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                            <div className="article-info">
                                <div className="article-title">{adata.title}</div>
                                <div className="article-description">{adata.description}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Actu
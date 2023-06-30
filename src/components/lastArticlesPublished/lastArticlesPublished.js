import Articles from "../../data/articles.json";
import { Link } from "react-router-dom";
import "./lastArticlesPublished.css";

function lastArticlesPublished() {
    return(
        <div className="last-articles-component">
            <h2>Les dernières actus</h2>
            <div className="last-articles-component-block">
                {Articles.map((article, index) => (
                    <Link key={article.id} to={`/article/${article.id}`}>
                        <div className="last-article">
                            <div className="last-article-minia"
                            style={{
                                backgroundImage: `url(${article.miniature})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}></div>
                            <div className="last-article-info">
                                <h3 className="last-article-title">{article.title}</h3>
                                <p className="last-article-author">Par <span className="last-article-author-name">{article.author}</span></p>
                            </div>
                        </div>
                    </Link>
            ))}
            </div>
        </div>
    )
}

export default lastArticlesPublished;
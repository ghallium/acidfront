import { useParams } from 'react-router-dom';
import Searchbar from "../../components/searchbar/searchbar";
import Articles from "../../data/articles.json";
import AuthorBio from "../../components/author/author";
import LastArticlesPublished from "../../components/lastArticlesPublished/lastArticlesPublished";
import LastReviewsPublished from "../../components/lastReviewsPublished/lastReviewsPublished";
import "./article.css"

function Article() {

    let {id} = useParams();
    const foundArticle = Articles.find(article => article.id === id);

    if(!foundArticle) {
        return <p>La page que vous avez demandée n'existe pas</p>
    } else {

        return(
    <>  
        <Searchbar />
        <div className="article-page-area">
            <div className="article-page-block">
                <h2>{foundArticle.title}</h2>
                <div className="article-date-time-author">
                    <p>Par <span className="author-name">{foundArticle.author} </span><span className="article-date">{foundArticle.date}</span></p>
                </div>
                <div className="article-image"><img src={foundArticle.card} alt="texte placeholder à changer"/></div>
                <div className="article-intro">{foundArticle.description}</div>
                <div className="article-text">{foundArticle.text}</div>
                <div className="writer-block">
                    <AuthorBio />
                </div>
            </div>
            <div className="article-aside">
                <div className="aside-last-articles-container">
                    <LastArticlesPublished />
                </div>
                <div className="aside-last-reviews-container">
                    <LastReviewsPublished />
                </div>
            </div>
        </div>
        
    </>    
    )
    } 
}

export default Article;
import Reviews from "../../data/reviews.json";
import { Link } from "react-router-dom";

function lastReviewsPublished() {

    return (
        <div className="last-reviews-component-block">
            <h2>Les derniers tests</h2>
            {Reviews.map((review, index) => (
                <Link key={review.id} to={`/test/${review.id}`}>
                    <div className="review">
                        <div className="review-info">
                            <div className="review-title">
                                <h3>{review.title}</h3>
                            </div>
                            <p className="review-author">{review.author}</p>
                        </div>
                        <div className="review_placeholder"></div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default lastReviewsPublished;
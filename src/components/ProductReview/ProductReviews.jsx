import { useState } from "react";
import "./ProductReviews.css";

function ProductReviews({ productName, currentUser  }) {
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState("");

    const ratingLabels = [
        "Rất không hài lòng",
        "Không hài lòng",
        "Bình thường",
        "Hài lòng",
        "Rất hài lòng"
    ];
    const averageRating = reviews.length > 0 ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length : 0;

    function handleSubmit(event) {
        event.preventDefault();

        if (!currentUser?.name) {
            setError("Bạn cần đăng nhập để gửi đánh giá.");
            return;
        }

        if (rating === 0) {
            setError("Bạn hãy chọn số sao.");
            return;
        }

        if (!content.trim()) {
            setError("Bạn hãy nhập nội dung đánh giá.");
            return;
        }

        const newReview = {
            id: crypto.randomUUID(),
            userName: currentUser.name,
            rating: rating,
            content: content.trim()
        };

        setReviews((previousReviews) => [
            newReview,
            ...previousReviews
        ]);

        setError("");
        setRating(0);
        setContent("");
        setShowForm(false);
    }

    return (
        <section className="product-reviews">
            <h2 className="product-reviews-title">
                Đánh giá và bình luận
            </h2>

            <div className="product-reviews-panel">
                <div className="product-reviews-summary">
                    <div>
                        <p className="product-reviews-stars" aria-hidden="true">
                            {"★".repeat(Math.round(averageRating))}
                            {"☆".repeat(5 - Math.round(averageRating))}
                        </p>

                        <p className="product-reviews-count">
                            {reviews.length > 0 ? `${averageRating.toFixed(1)}/5 từ ${reviews.length} đánh giá` : "Chưa có đánh giá"}
                        </p>
                    </div>

                    <button type="button" className="product-reviews-write-button" aria-expanded={showForm} onClick={() => setShowForm(!showForm)} aria-controls="product-review-form">
                        {showForm ? "Đóng form đánh giá" : "Viết đánh giá"}
                    </button>
                </div>

                {showForm && (
                    <form className="product-review-form" onSubmit={handleSubmit}>
                        <h3>Đánh giá {productName}</h3>

                        {error && (
                            <p className="product-review-error" role="alert">
                                {error}
                            </p>
                        )}

                        <fieldset className="product-review-rating">
                            <legend>Mức độ hài lòng của bạn</legend>

                            <div className="product-review-star-options">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        className={value <= rating ? "is-selected" : ""}
                                        aria-label={`${value} sao: ${ratingLabels[value - 1]}`}
                                        aria-pressed={rating === value}
                                        onClick={() => setRating(value)}
                                    >
                                        <span aria-hidden="true">
                                            {value <= rating ? "★" : "☆"}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <p className="product-review-rating-text">
                                {rating > 0
                                    ? ratingLabels[rating - 1]
                                    : "Chọn số sao để đánh giá"}
                            </p>
                        </fieldset>

                        <div className="product-review-field">
                            <label htmlFor="review-content">
                                Nội dung đánh giá
                            </label>

                            <textarea
                                id="review-content"
                                name="content"
                                rows={5}
                                placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
                                value={content}
                                onChange={(event) => setContent(event.target.value)}
                                maxLength={1000}
                                required
                                aria-describedby="review-content-count"/>

                            <p className="product-review-character-count">
                                {content.length}/1000 ký tự
                            </p>
                        </div>

                        <div className="product-review-form-actions">
                            <button type="button" className="product-review-cancel-button" onClick={() => setShowForm(false)}>
                                Hủy
                            </button>

                            <button type="submit" className="product-review-submit-button">
                                Gửi đánh giá
                            </button>
                        </div>
                    </form>
                )}

                {reviews.length === 0 ? (
                    <div className="product-reviews-empty">
                        <i className="fa-regular fa-comments"></i>
                        <h3>Chưa có bình luận nào</h3>
                        <p>Hãy là người đầu tiên chia sẻ cảm nhận về sản phẩm này.</p>
                    </div>
                ) : (
                    <div className="product-reviews-list">
                        {reviews.map((review) => (
                            <article key={review.id} className="product-review-item">
                                <h3>{review.userName}</h3>
                                <p className="product-review-item-stars" aria-label={`${review.rating} trên 5 sao`}>
                                    <span aria-hidden="true">
                                        {"★".repeat(review.rating)}
                                        {"☆".repeat(5 - review.rating)}
                                    </span>
                                </p>

                                <p className="product-review-item-content">
                                    {review.content}
                                </p>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductReviews;
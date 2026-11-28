import { Link, useParams } from "react-router";
import { news, getNewsCategoryName } from "../../data/news";
import "./NewsDetail.css";

function NewsDetail() {
    const { slug } = useParams();
    const article = news.find((item) => item.slug === slug);

    if (!article) {
        return (
            <main className="news-detail-page">
                <div className="news-detail-container">
                    <h1>Không tìm thấy bài viết</h1>
                    <Link to="/tin-tuc">Quay lại Tin tức</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="news-detail-page">
            <div className="news-detail-container">
                <nav className="news-detail-breadcrumb" aria-label="Đường dẫn trang">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <Link to="/tin-tuc">Tin tức</Link>
                    <span>/</span>
                    <span>{article.title}</span>
                </nav>

                <article className="news-detail-article">
                    <p className="news-detail-meta">
                        {getNewsCategoryName(article.category)} · {article.date}
                    </p>
                    <h1>{article.title}</h1>
                    <p className="news-detail-summary">{article.summary}</p>
                    <div className="news-detail-image">
                        <img src={article.image} alt={article.title} />
                    </div>
                    <div className="news-detail-content">
                        {article.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <Link className="news-detail-back" to="/tin-tuc">← Quay lại Tin tức</Link>
                </article>
            </div>
        </main>
    );
}

export default NewsDetail;

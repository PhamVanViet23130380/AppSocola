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

    const relatedNews = news
        .filter((item) => item.category === article.category && item.id !== article.id)
        .slice(0, 2);

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

                {relatedNews.length > 0 && (
                    <section className="news-related">
                        <h2>Bài viết liên quan</h2>
                        <div className="news-related-list">
                            {relatedNews.map((item) => (
                                <Link key={item.id} to={`/tin-tuc/${item.slug}`} className="news-related-card">
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <span>{getNewsCategoryName(item.category)}</span>
                                        <h3>{item.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}

export default NewsDetail;

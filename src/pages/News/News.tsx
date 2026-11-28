import { useState } from "react";
import { Link } from "react-router";
import { news, newsCategories, getNewsCategoryName } from "../../data/news";
import "./News.css";

function News() {
    const [category, setCategory] = useState("all");
    const filteredNews = category === "all"
        ? news
        : news.filter((article) => article.category === category);

    return (
        <main className="news-page">
            <div className="news-container">
                <nav className="news-breadcrumb" aria-label="Đường dẫn trang">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <span>Tin tức</span>
                </nav>

                <div className="news-heading">
                    <p>GÓC CHOCOLUXE</p>
                    <h1>Tin tức và câu chuyện socola</h1>
                    <span>Cùng tìm hiểu về socola, cách thưởng thức và những gợi ý quà tặng.</span>
                </div>

                <div className="news-categories">
                    {newsCategories.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={category === item.id ? "news-category active" : "news-category"}
                            onClick={() => setCategory(item.id)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <p className="news-count">Có {filteredNews.length} bài viết</p>

                <div className="news-grid">
                    {filteredNews.map((article) => (
                        <article className="news-card" key={article.id}>
                            <Link to={`/tin-tuc/${article.slug}`} className="news-card-image">
                                <img src={article.image} alt={article.title} />
                            </Link>
                            <div className="news-card-body">
                                <p className="news-card-meta">
                                    {getNewsCategoryName(article.category)} · {article.date}
                                </p>
                                <h2>
                                    <Link to={`/tin-tuc/${article.slug}`}>{article.title}</Link>
                                </h2>
                                <p className="news-card-summary">{article.summary}</p>
                                <Link className="news-card-link" to={`/tin-tuc/${article.slug}`}>
                                    Đọc bài viết →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default News;

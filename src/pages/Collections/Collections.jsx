import { useState } from "react";
import { Link } from "react-router";
import { collectionCategories, collections } from "./collectionsData.js";
import "./Collections.css";

function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCollection, setExpandedCollection] = useState(null);

  const filteredCollections = selectedCategory === "all"
    ? collections
    : collections.filter((collection) => collection.category === selectedCategory);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setExpandedCollection(null);
  };

  const toggleDetails = (id) => {
    setExpandedCollection((current) => current === id ? null : id);
  };

  const formatPrice = (price) => `${new Intl.NumberFormat("vi-VN").format(price)} ₫`;

  return (
    <main className="collections-page">
      <section className="collections-hero">
        <div className="collections-container">
          <nav className="collections-breadcrumb" aria-label="Đường dẫn trang">
            <Link to="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <span>Bộ sưu tập quà tặng</span>
          </nav>
          <div className="collections-hero-grid">
            <div>
              <p className="collections-eyebrow">NGHỆ THUẬT TRAO GỬI YÊU THƯƠNG</p>
              <h1>Bộ sưu tập quà tặng – Gửi trao ngọt ngào trong từng dịp ý nghĩa</h1>
            </div>
            <div className="collections-hero-aside">
              <p>
                Một hộp socola có thể thay bạn gửi lời chúc, lời cảm ơn hay một
                thông điệp khó nói thành lời. Khám phá những bộ sưu tập gợi ý
                từ ChocoLuxe cho từng khoảnh khắc đặc biệt.
              </p>
              <div className="collections-hero-actions">
                <a href="#bo-suu-tap">Khám phá bộ sưu tập <span aria-hidden="true">↓</span></a>
                <Link to="/lien-he">Nhờ tư vấn quà tặng <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collections-main" id="bo-suu-tap" aria-labelledby="collections-heading">
        <div className="collections-container">
          <div className="collections-toolbar">
            <h2 id="collections-heading">Khám phá theo dịp tặng</h2>
            <p>Chọn dịp tặng để tìm bộ sưu tập phù hợp</p>
          </div>
          <div className="collections-filters" role="group" aria-label="Lọc bộ sưu tập theo dịp">
            {collectionCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`collections-filter ${selectedCategory === category.id ? "collections-filter-active" : ""}`}
                onClick={() => handleFilter(category.id)}
                aria-pressed={selectedCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>

          <p className="collections-results" aria-live="polite">
            Đang hiển thị {filteredCollections.length} bộ sưu tập
          </p>
          <div className="collections-list">
            {filteredCollections.map((collection, index) => (
              <article
                className={`collections-card ${index % 2 === 1 ? "collections-card-reverse" : ""}`}
                key={collection.id}
                id={`bo-suu-tap-${collection.id}`}
              >
                <div className="collections-card-image">
                  <img src={collection.image} alt={collection.imageAlt} loading="lazy" />
                  <span className="collections-image-badge">{collection.eyebrow}</span>
                </div>
                <div className="collections-card-content">
                  <p className="collections-card-index">CHOCOLUXE · QUÀ TẶNG</p>
                  <p className="collections-card-category">{collection.tagline}</p>
                  <h3>{collection.name}</h3>
                  <p className="collections-card-description">{collection.description}</p>
                  <div className="collections-tags" aria-label="Gợi ý bên trong bộ sưu tập">
                    {collection.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="collections-card-bottom">
                    <div className="collections-price">
                      <span>Giá tham khảo từ</span>
                      <strong>{formatPrice(collection.fromPrice)}</strong>
                    </div>
                    <button
                      type="button"
                      className="collections-detail-button"
                      onClick={() => toggleDetails(collection.id)}
                      aria-expanded={expandedCollection === collection.id}
                      aria-controls={`chi-tiet-${collection.id}`}
                    >
                      {expandedCollection === collection.id ? "Thu gọn" : "Xem chi tiết"}
                      <span aria-hidden="true">{expandedCollection === collection.id ? "↑" : "→"}</span>
                    </button>
                  </div>
                  {expandedCollection === collection.id && (
                    <div className="collections-detail-panel" id={`chi-tiet-${collection.id}`}>
                      <p>Điểm nổi bật</p>
                      <ul>
                        {collection.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                      <Link to="/lien-he">Liên hệ để được tư vấn <span aria-hidden="true">↗</span></Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="collections-price-note">
            Hình ảnh và giá đang là dữ liệu mẫu cho giao diện; thông tin sản phẩm thực tế sẽ được cập nhật sau.
          </p>
        </div>
      </section>

      <section className="collections-benefits">
        <div className="collections-container">
          <div className="collections-section-heading">
            <p className="collections-eyebrow">LỰA CHỌN THEO CÁCH CỦA BẠN</p>
            <h2>Chọn món quà mang dấu ấn riêng</h2>
            <p>Dù là một dịp đặc biệt hay lời cảm ơn giản dị, ChocoLuxe mong giúp bạn tìm được ý tưởng phù hợp.</p>
          </div>
          <div className="collections-benefit-grid">
            <div className="collections-benefit-card">
              <span className="collections-benefit-icon" aria-hidden="true">✦</span>
              <h3>Gợi ý theo dịp tặng</h3>
              <p>Khám phá các phong cách quà tặng khác nhau dành cho người thương, bạn bè và đồng nghiệp.</p>
            </div>
            <div className="collections-benefit-card">
              <span className="collections-benefit-icon" aria-hidden="true">♡</span>
              <h3>Chọn lời nhắn ý nghĩa</h3>
              <p>Một tấm thiệp với lời chúc phù hợp sẽ giúp món quà trở nên gần gũi và đáng nhớ hơn.</p>
            </div>
            <div className="collections-benefit-card">
              <span className="collections-benefit-icon" aria-hidden="true">⌑</span>
              <h3>Hỗ trợ lựa chọn quà</h3>
              <p>Chưa biết chọn loại nào? Hãy trao đổi với ChocoLuxe để tìm bộ quà phù hợp nhu cầu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="collections-cta">
        <div className="collections-container">
          <div className="collections-cta-inner">
            <div>
              <p>CHOCOLUXE · QUÀ TẶNG</p>
              <h2>Chưa tìm được hộp quà như ý?</h2>
              <span>Gửi lời nhắn về dịp tặng, người nhận và ngân sách; chúng mình sẽ cùng bạn tìm ý tưởng phù hợp.</span>
            </div>
            <Link to="/lien-he">Liên hệ tư vấn <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Collections;

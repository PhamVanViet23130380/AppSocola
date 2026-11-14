import {Link, useParams} from "react-router";
import { useState } from "react";
import products from "../../data/products.js";
import "./ProductDetail.css"

function ProductDetail() {
    const { slug } = useParams();
    const [expandedSlug, setExpandedSlug] = useState(null);
    const isDescriptionExpanded = expandedSlug === slug;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <main className="product-detail product-detail-empty">
                <h1>Không tìm thấy sản phẩm</h1>
                <p>Sản phẩm bạn đang tìm không tồn tại.</p>
                <Link to="/">Về trang chủ</Link>
            </main>
        );
    }

    return (
        <main className="product-detail">
            <nav className="product-detail-breadcrumb" aria-label="Đường dẫn trang">
                <Link to="/">Trang chủ</Link>
                <span aria-hidden="true">›</span>

                <Link to="/san-pham">Sản phẩm</Link>
                <span aria-hidden="true">›</span>

                <span aria-current="page">{product.name}</span>
            </nav>

            <section className="product-detail-main">
                <div className="product-detail-img">
                    <img src={product.image} alt= {product.name} />
                </div>


                <div className="product-detail-info">
                    <h1 className="product-detail-name">
                        {product.name}
                    </h1>


                    <div className="product-detail-rating">
                        <span className="product-detail-stars" aria-hidden="true">
                            ☆☆☆☆☆
                        </span>

                        <span>Chưa có đánh giá</span>
                    </div>

                    <p className="product-detail-price">
                        {product.price.toLocaleString("vi-VN")} đ
                    </p>


                    <div className="product-detail-specs">
                        <div className="product-detail-spec-row">
                            <span>Khối lượng</span>
                            <strong>{product.weightGrams}g</strong>
                        </div>

                        {product.cocoaPercent != null && (
                            <div className="product-detail-spec-row">
                                <span>Tỷ lệ cacao</span>
                                <strong>{product.cocoaPercent}%</strong>
                            </div>
                        )}
                    </div>


                    <div className="product-detail-purchase">
                        <p className="product-detail-quantity-label">
                            Số lượng
                        </p>

                        <div className="product-detail-actions">
                            <div className="product-detail-quantity-control">
                                <button type="button" aria-label="Giảm số lượng">
                                    −
                                </button>

                                <span>1</span>

                                <button type="button" aria-label="Tăng số lượng">
                                    +
                                </button>
                            </div>

                            <button type="button" className="product-detail-add-button">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>

                    <div className="product-detail-support">
                        <div className="product-detail-support-row">
                            <i className="fa-regular fa-comments" aria-hidden="true"></i>
                            <div>
                                <h3>Cần tư vấn chọn socola?</h3>
                                <p>
                                    <Link to="/lien-he">Liên hệ ChocoLuxe</Link>
                                    {" "}để được hỗ trợ chọn sản phẩm và quà tặng.
                                </p>
                            </div>
                        </div>

                        <div className="product-detail-support-row">
                            <i className="fa-solid fa-box-open" aria-hidden="true"></i>
                            <div>
                                <h3>Lưu ý bảo quản</h3>
                                <p>
                                    Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
                                    Tham khảo hướng dẫn trên bao bì sản phẩm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product-detail-description" aria-labelledby="product-description-heading">
                <h2 id="product-description-heading" className="product-detail-description-heading">
                    Mô tả chi tiết
                </h2>

                <div className="product-detail-description-panel">
                    <div id="product-description-content" className={`product-detail-description-content ${
                            isDescriptionExpanded ? "is-expanded" : ""
                        }`}>
                        {product.description.split("\n\n").map((block, index) => {
                            const [heading, ...content] = block.split("\n");

                            return (
                                <div
                                    className="product-detail-description-block"
                                    key={index}
                                >
                                    <h3>{heading}</h3>
                                    <p>{content.join("\n")}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="product-detail-description-actions">
                        <button type="button" className="product-detail-description-toggle" aria-expanded={isDescriptionExpanded} aria-controls="product-description-content"
                            onClick={() =>
                                setExpandedSlug(
                                    isDescriptionExpanded ? null : slug
                                )
                            }
                        >
                            {isDescriptionExpanded ? "Rút gọn" : "Xem thêm"}

                            <i className={`fa-solid ${isDescriptionExpanded ? "fa-chevron-up" : "fa-chevron-down"}`}
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProductDetail;
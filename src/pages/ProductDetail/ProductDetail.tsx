import {Link, useParams} from "react-router";
import { useState } from "react";
import products from "../../data/products";
import ProductReviews from "../../components/ProductReview/ProductReviews";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import "./ProductDetail.css"

type CartItem = { id: number; quantity: number };

function ProductDetail() {
    const { slug } = useParams<"slug">();
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
    const [selectedQuantity, setSelectedQuantity] = useState<{ slug: string; value: number } | null>(null);
    const [cartNotice, setCartNotice] = useState<{ slug: string; message: string } | null>(null);
    const isDescriptionExpanded = expandedSlug === slug;
    const product = products.find((item) => item.slug === slug);
    // Khi chuyển sang slug khác, số lượng hiển thị mặc định về 1.
    const quantity = selectedQuantity && selectedQuantity.slug === slug ? selectedQuantity.value : 1;
    const cartMessage = cartNotice && cartNotice.slug === slug ? cartNotice.message : "";

    if (!product) {
        return (
            <main className="product-detail product-detail-empty">
                <h1>Không tìm thấy sản phẩm</h1>
                <p>Sản phẩm bạn đang tìm không tồn tại.</p>
                <Link to="/">Về trang chủ</Link>
            </main>
        );
    }

    const changeQuantity = (amount: number) => {
        setSelectedQuantity((current) => ({
            slug: product.slug,
            value: Math.max(1, (current?.slug === product.slug ? current.value : 1) + amount),
        }));
        setCartNotice(null);
    };

    const handleAddToCart = () => {
        try {
            // Dùng cùng khóa và cấu trúc dữ liệu với ProductCard.tsx.
            const saved = JSON.parse(localStorage.getItem("chocoluxe-cart") || "[]");
            const cart: CartItem[] = Array.isArray(saved) ? saved : [];
            const existing = cart.find((item) => item.id === product.id);

            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({ id: product.id, quantity });
            }

            localStorage.setItem("chocoluxe-cart", JSON.stringify(cart));
            setCartNotice({
                slug: product.slug,
                message: `Đã thêm ${quantity} sản phẩm vào giỏ hàng`,
            });
        } catch {
            setCartNotice({ slug: product.slug, message: "Không thể lưu giỏ hàng" });
        }
    };

    const sameCategoryProducts = products.filter(
        (item) => item.category === product.category && item.id !== product.id
    );

    const otherCategoryProducts = products.filter(
        (item) => item.category !== product.category && item.id !== product.id
    );

    const recommendedProducts = [...sameCategoryProducts, ...otherCategoryProducts,].slice(0, 5);

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
                                <button
                                    type="button"
                                    aria-label="Giảm số lượng"
                                    onClick={() => changeQuantity(-1)}
                                    disabled={quantity <= 1}
                                >
                                    −
                                </button>

                                <span aria-live="polite">{quantity}</span>

                                <button
                                    type="button"
                                    aria-label="Tăng số lượng"
                                    onClick={() => changeQuantity(1)}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                type="button"
                                className="product-detail-add-button"
                                onClick={handleAddToCart}
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                        <div role="status" aria-live="polite">{cartMessage}</div>
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
                                    isDescriptionExpanded ? null : product.slug
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

            <ProductReviews
                key={product.slug}
                productName={product.name}
                currentUser={{
                    id: "demo-user",
                    name: "Tài khoản demo"
                }}
            />

            <section className="product-detail-recommendations">
                <div className="product-detail-recommendations-header">
                    <p>KHÁM PHÁ THÊM</p>
                    <h2>Có thể bạn sẽ thích</h2>
                    <span>Khám phá thêm những hương vị socola dành riêng cho bạn.</span>
                </div>

                <ProductCarousel
                    products={recommendedProducts}
                    variant="recommend"
                    showAddButton={false}
                />
            </section>
        </main>
    );
}

export default ProductDetail;
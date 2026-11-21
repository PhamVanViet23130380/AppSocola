import "./ProductCarousel.css";
import { useState } from "react";
import {Link} from "react-router";
import type {Product} from "../../data/products";

type CartItem = { id: number; quantity: number; sale?: boolean };

type ProductCarouselProps = {
    products: Product[];
    variant?: "default" | "sale" | "new" | "hot" | "recommend";
    showAddButton?: boolean;
};

function ProductCarousel({products, variant = "default", showAddButton = true,}: ProductCarouselProps) {
    const [startIndex, setStartIndex] = useState(0);
    const [messages, setMessages] = useState<Record<number, string>>({});

    const handleAddToCart = (product: Product) => {
        const isSale = variant === "sale";

        try {
            const saved: unknown = JSON.parse(localStorage.getItem("chocoluxe-cart") || "[]");
            const cart: CartItem[] = Array.isArray(saved) ? saved.filter((item): item is CartItem =>
                typeof item === "object" && item !== null &&
                typeof item.id === "number" && Number.isInteger(item.id) &&
                typeof item.quantity === "number" && Number.isInteger(item.quantity) &&
                item.quantity > 0 && (item.sale === undefined || typeof item.sale === "boolean")
            ) : [];
            const existing = cart.find((item) => item.id === product.id && Boolean(item.sale) === isSale);

            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(isSale
                    ? { id: product.id, quantity: 1, sale: true }
                    : { id: product.id, quantity: 1 });
            }

            localStorage.setItem("chocoluxe-cart", JSON.stringify(cart));
            window.dispatchEvent(new Event("chocoluxe-cart-updated"));
            setMessages((current) => ({ ...current, [product.id]: "Đã thêm vào giỏ hàng" }));
        } catch {
            setMessages((current) => ({ ...current, [product.id]: "Không thể lưu giỏ hàng" }));
        }
    };

    const visibleCount = 4;
    const maxStart = Math.max(0, products.length - visibleCount);

    const visibleProducts = products.slice(
        startIndex,
        startIndex + visibleCount
    );


    return (
        <div className={`product-carousel product-carousel--${variant}`}>
            <div className="product-carousel-grid">
                {visibleProducts.map((product) => (
                    <article className="flashsale-card" key={product.id}>
                        <div className="flashsale-card-image">
                            {variant === "sale" && (
                                <span className="flashsale-discount">-20%</span>
                            )}

                            {variant === "new" && (
                                <span className="product-new-badge">NEW</span>
                            )}

                            {variant === "hot" && (
                                <span className="product-hot-badge">HOT</span>
                            )}

                            <Link to={`/san-pham/${product.slug}`} className="product-carousel-detail-link">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />
                            </Link>
                        </div>

                        <div className="flashsale-card-info">
                            <h3>
                                <Link to={`/san-pham/${product.slug}`} className="product-carousel-detail-link">
                                    {product.name}
                                </Link>
                            </h3>

                            <div className="flashsale-price">
                                {variant === "sale" && (
                                    <>
                                        <strong>
                                            {Math.round(product.price * 0.8).toLocaleString("vi-VN")}đ
                                        </strong>
                                        <del>
                                            {product.price.toLocaleString("vi-VN")}đ
                                        </del>
                                    </>
                                )}

                                {variant !== "sale" && (
                                    <strong>
                                        {product.price.toLocaleString("vi-VN")}đ
                                    </strong>
                                )}
                            </div>

                            {showAddButton && (
                                <>
                                    <button
                                        type="button"
                                        className="flashsale-add-btn"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                    <p className="flashsale-feedback" role="status" aria-live="polite">
                                        {messages[product.id] || "\u00a0"}
                                    </p>
                                </>
                            )}
                        </div>
                    </article>
                ))}
            </div>


            <div className="product-carousel-controls">
                <button
                    type="button"
                    onClick={() => setStartIndex((current) => Math.max(0, current - 1))}
                    disabled={startIndex === 0}
                    aria-label="Xem sản phẩm trước"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={() => setStartIndex((current) => Math.min(maxStart, current + 1))}
                    disabled={startIndex === maxStart}
                    aria-label="Xem sản phẩm tiếp theo"
                >
                    →
                </button>
            </div>

        </div>
    );
}

export default ProductCarousel;
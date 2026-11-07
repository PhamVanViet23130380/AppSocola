import "./ProductCarousel.css";
import { useState } from "react";

function ProductCarousel({ products }){
    const [startIndex, setStartIndex] = useState(0);

    const visibleCount = 4;
    const maxStart = Math.max(0, products.length - visibleCount);

    const visibleProducts = products.slice(
        startIndex,
        startIndex + visibleCount
    );


    return (
        <div className="product-carousel">
            <div className="product-carousel-grid">
                {visibleProducts.map((product) => (
                    <article className="flashsale-card" key={product.id}>
                        <div className="flashsale-card-image">
                            <span className="flashsale-discount">-20%</span>

                            <img
                                src={product.image}
                                alt={product.name}
                            />
                        </div>

                        <div className="flashsale-card-info">
                            <h3>{product.name}</h3>

                            <div className="flashsale-price">
                                <strong>
                                    {(product.price * 0.8).toLocaleString("vi-VN")}đ
                                </strong>

                                <del>
                                    {product.price.toLocaleString("vi-VN")}đ
                                </del>
                            </div>

                            <button type="button" className="flashsale-add-btn">
                                Thêm vào giỏ hàng
                            </button>
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
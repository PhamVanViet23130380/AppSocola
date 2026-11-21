import "./ProductCarousel.css";
import { useState } from "react";
import ProductCard, { type ProductCardVariant } from "../ProductCard/ProductCard";
import type {Product} from "../../data/products";

type ProductCarouselProps = {
    products: Product[];
    variant?: ProductCardVariant;
    showAddButton?: boolean;
};

function ProductCarousel({products, variant = "default", showAddButton = true,}: ProductCarouselProps) {
    const [startIndex, setStartIndex] = useState(0);

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
                    <ProductCard
                        key={product.id}
                        product={product}
                        variant={variant}
                        showAddButton={showAddButton}
                    />
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
import { useState } from "react";
import "./ProductCard.css";

const formatPrice = (price) => `${Number(price).toLocaleString("vi-VN")}đ`;

function ProductCard({ product, onAddToCart }) {
  const [message, setMessage] = useState("");

  if (!product) return null;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
      setMessage("Đã thêm vào giỏ hàng");
      return;
    }

    // Dùng tạm localStorage đến khi nhóm hoàn thiện CartContext ở FE-021.
    try {
      const saved = JSON.parse(localStorage.getItem("chocoluxe-cart") || "[]");
      const cart = Array.isArray(saved) ? saved : [];
      const existing = cart.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id: product.id, quantity: 1 });
      }

      localStorage.setItem("chocoluxe-cart", JSON.stringify(cart));
      setMessage("Đã thêm vào giỏ hàng");
    } catch {
      setMessage("Không thể lưu giỏ hàng");
    }
  };

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{formatPrice(product.price)}</p>
        <button
            type="button"
            className="product-card-detail-button"
        >
          Xem chi tiết
        </button>
        <button
          type="button"
          className="product-card-button"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </button>
        <p className="product-card-feedback" role="status" aria-live="polite">
          {message || "\u00a0"}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;

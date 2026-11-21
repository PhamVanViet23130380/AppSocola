import { useState } from "react";
import {Link, useNavigate} from "react-router";
import "./ProductCard.css";
import type {Product} from "../../data/products";

export type ProductCardVariant = "default" | "sale" | "new" | "hot" | "recommend";

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  variant?: ProductCardVariant;
  showAddButton?: boolean;
};


type CartItem = {
  id: number
  quantity: number
  sale?: boolean
}

const formatPrice = (price: number) => `${Number(price).toLocaleString("vi-VN")}đ`;

function ProductCard({product, onAddToCart, variant = "default", showAddButton = true,}: ProductCardProps) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!product) return null;

  const isSale = variant === "sale";
  const price = isSale ? Math.round(product.price * 0.8) : product.price;
  const badge = isSale ? "-20%" : variant === "new" ? "NEW" : variant === "hot" ? "HOT" : "";
  const detailUrl = `/san-pham/${product.slug}`;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
      setMessage("Đã thêm vào giỏ hàng");
      return;
    }

    // Dùng tạm localStorage đến khi nhóm hoàn thiện CartContext ở FE-021.
    try {
      const saved = JSON.parse(localStorage.getItem("chocoluxe-cart") || "[]");
      const cart: CartItem[] = Array.isArray(saved) ? saved : [];
      const existing = cart.find((item) => item.id === product.id && Boolean(item.sale) === isSale
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(isSale
            ? { id: product.id, quantity: 1, sale: true }
            : { id: product.id, quantity: 1 });
      }

      localStorage.setItem("chocoluxe-cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("chocoluxe-cart-updated"));
      setMessage("Đã thêm vào giỏ hàng");
    } catch {
      setMessage("Không thể lưu giỏ hàng");
    }
  };

  return (
      <article className="product-card">
        <Link className="product-card-image" to={detailUrl}>
          <img src={product.image} alt={product.name} loading="lazy" />
          {badge && <span className="product-card-badge">{badge}</span>}
        </Link>

        <div className="product-card-info">
          <h3 className="product-card-name">
            <Link to={detailUrl}>{product.name}</Link>
          </h3>

          <p className="product-card-price">
            {formatPrice(price)}
            {isSale && <> <del>{formatPrice(product.price)}</del></>}
          </p>

          <Link className="product-card-detail-button" to={detailUrl}>
            Xem chi tiết
          </Link>

          {showAddButton && (
              <>
                <button type="button" className="product-card-button" onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </button>
                <p className="product-card-feedback" role="status" aria-live="polite">
                  {message || "\u00a0"}
                </p>
              </>
          )}
        </div>
      </article>
  );
}

export default ProductCard;

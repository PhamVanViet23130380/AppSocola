import "./ProductCard.css";

// FE-013: Thẻ sản phẩm dùng chung cho các trang React.
// Chưa thêm nút mua hàng hoặc link chi tiết vì các trang đó thuộc issue sau.
const priceFormatter = new Intl.NumberFormat("vi-VN");

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">
          {priceFormatter.format(product.price)} ₫
        </p>
      </div>
    </article>
  );
}

export default ProductCard;

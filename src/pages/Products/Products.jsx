import { useState } from "react";
import { Link } from "react-router";
import { products, productCategories } from "../../data/products.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./Products.css";

function Products() {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "all" || product.category === category;
    const matchPrice = priceRange === "all"
      || (priceRange === "under-150" && product.price < 150000)
      || (priceRange === "150-250" && product.price >= 150000 && product.price < 250000)
      || (priceRange === "over-250" && product.price >= 250000);
    return matchCategory && matchPrice;
  });

  const sortedProducts = [...filteredProducts];
  if (sortBy === "price-asc") sortedProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") sortedProducts.sort((a, b) => b.price - a.price);

  const PAGE_SIZE = 8;
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const firstIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleProducts = sortedProducts.slice(firstIndex, firstIndex + PAGE_SIZE);

  return (
    <main className="products-page">
      <div className="products-container">
        <nav className="products-breadcrumb" aria-label="Đường dẫn trang">
          <Link to="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Sản phẩm</span>
        </nav>

        <header className="products-heading">
          <p className="products-eyebrow">CHOCOLUXE</p>
          <h1>Sản phẩm socola</h1>
          <p>Khám phá những hương vị socola dành cho bạn và người thân.</p>
        </header>
        <section className="products-toolbar" aria-label="Bộ lọc sản phẩm">
          <label className="products-filter">
            <span>Danh mục</span>
            <select value={category} onChange={(event) => { setCategory(event.target.value); setPage(1); }}>
              {productCategories.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </label>

          <label className="products-filter">
            <span>Khoảng giá</span>
            <select value={priceRange} onChange={(event) => { setPriceRange(event.target.value); setPage(1); }}>
              <option value="all">Tất cả mức giá</option>
              <option value="under-150">Dưới 150.000đ</option>
              <option value="150-250">Từ 150.000đ đến dưới 250.000đ</option>
              <option value="over-250">Từ 250.000đ trở lên</option>
            </select>
          </label>

          <label className="products-filter">
            <span>Sắp xếp theo</span>
            <select value={sortBy} onChange={(event) => { setSortBy(event.target.value); setPage(1); }}>
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá thấp đến cao</option>
              <option value="price-desc">Giá cao đến thấp</option>
            </select>
          </label>

          {(category !== "all" || priceRange !== "all") && (
            <button
              type="button"
              className="products-clear-filters"
              onClick={() => { setCategory("all"); setPriceRange("all"); setPage(1); }}
            >
              Xóa bộ lọc
            </button>
          )}
        </section>

        <section className="products-list" aria-label="Danh sách sản phẩm">
          <div className="products-list-top">
            <h2>Danh sách sản phẩm</h2>
          <p className="products-count">
            {sortedProducts.length === 0
              ? "Không có sản phẩm phù hợp"
              : `Hiển thị ${firstIndex + visibleProducts.length} / ${sortedProducts.length} sản phẩm`}
          </p>
          </div>
          {visibleProducts.length > 0 ? (
            <div className="products-grid">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <p className="products-empty">Không có sản phẩm phù hợp. Bạn hãy chọn lại bộ lọc.</p>
          )}

          {totalPages > 1 && (
            <nav className="products-pagination" aria-label="Phân trang sản phẩm">
              <button type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Trước</button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                <button
                  type="button"
                  key={number}
                  className={currentPage === number ? "is-active" : ""}
                  aria-current={currentPage === number ? "page" : undefined}
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ))}
              <button type="button" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>Sau</button>
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}

export default Products;

import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Header.css"
import { useState } from "react"
import { Link } from "react-router"
import { products } from "../../data/products.js"

function Header() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchText, setSearchText] = useState("")
    const popularProducts = products.filter((product) => product.category === "gift")

    return (
        <header className="header">
            <a className="logoWeb" href="/" aria-label="ChocoLuxe - Trang chủ">
                <img src="/favicon.svg" alt="" />
                <span>ChocoLuxe</span>
            </a>

            <nav className="menuHeader" aria-label="Menu chính">
                <a href="/">Trang chủ</a>
                <a href="/gioi-thieu">Giới thiệu</a>
                <Link to="/san-pham">
                    Sản phẩm <span className="arrowMenu" aria-hidden="true"></span>
                </Link>
                <a href="/bo-suu-tap">
                    Sô cô la quà tặng <span className="arrowMenu" aria-hidden="true"></span>
                </a>
                <a href="/#valentine">Quà tặng Valentine</a>
                <a href="/#news">Tin tức</a>
            </nav>

            <div className="iconsHeader">
                <button
                    type="button"
                    aria-label={searchOpen ? "Đóng tìm kiếm" : "Mở tìm kiếm"}
                    aria-expanded={searchOpen}
                    aria-controls="searchPanel"
                    onClick={() => setSearchOpen(!searchOpen)}>
                    <i className={searchOpen ? "fa-solid fa-xmark" : "fa-solid fa-magnifying-glass"} aria-hidden="true"></i>
                </button>
                <Link to="/profile" aria-label="Thông tin cá nhân">
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                </Link>
                <button type="button" aria-label="Giỏ hàng">
                    <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                </button>
            </div>

            {searchOpen && (
                <div className="searchPanel" id="searchPanel" role="search">
                    <div className="searchHeading">
                        <h2>TÌM KIẾM</h2>
                        <button className="searchPanelClose" type="button" onClick={() => setSearchOpen(false)} aria-label="Đóng tìm kiếm">
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                        </button>
                    </div>

                    <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                        <input className="searchInput" type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Tìm kiếm..." aria-label="Nhập nội dung cần tìm"/>
                    </form>

                    {searchText.trim() ? (
                        <p className="searchEmpty" aria-live="polite">Không tìm thấy sản phẩm</p>) : (
                        <>
                            <div className="popularSearches">
                                <h3>PHỔ BIẾN</h3>
                                <button type="button" onClick={() => setSearchText("Mừng Lễ Giáng Sinh")}>Mừng Lễ Giáng Sinh</button>
                                <button type="button" onClick={() => setSearchText("Sản Phẩm Bán Chạy")}>Sản Phẩm Bán Chạy</button>
                                <button type="button" onClick={() => setSearchText("Quà Tặng")}>Quà Tặng</button>
                                <button type="button" onClick={() => setSearchText("Đạt Giải Thưởng")}>Đạt Giải Thưởng</button>
                            </div>

                            <div className="searchProducts">
                                {popularProducts.map((product) => (
                                    <article className="searchProduct" key={product.id}>
                                        <div className="searchProductImage">
                                            <span className="searchProductBadge">BÁN CHẠY</span>
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <h3>{product.name}</h3>
                                        <p>{product.price.toLocaleString("vi-VN")} Đ</p>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </header>
    )
}

export default Header

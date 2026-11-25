import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Header.css"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { products } from "../../data/products"
import Cart from "../Cart/Cart"

// Đếm tổng số lượng, bao gồm cả sản phẩm Flash Sale và sản phẩm giá thường.
// Chỉ tính những dòng giỏ hàng hợp lệ có sản phẩm trong dữ liệu mẫu.
function getCartQuantity(): number {
    try {
        const saved: unknown = JSON.parse(localStorage.getItem("chocoluxe-cart") || "[]")
        if (!Array.isArray(saved)) return 0
        const validIds = new Set(products.map((product) => product.id))

        return saved.reduce((total: number, item: unknown) => {
            if (typeof item !== "object" || item === null || !("id" in item) || !("quantity" in item)) return total
            const { id, quantity } = item
            return typeof id === "number" && validIds.has(id) &&
                typeof quantity === "number" && Number.isSafeInteger(quantity) && quantity > 0
                ? total + quantity
                : total
        }, 0)
    } catch {
        return 0
    }
}

function Header() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [cartQuantity, setCartQuantity] = useState(getCartQuantity)
    const [isHeaderHidden, setIsHeaderHidden] = useState(false)

    useEffect(() => {
        if (!searchOpen && !cartOpen) return

        const page = document.documentElement
        const oldOverflow = page.style.overflow
        page.style.overflow = "hidden"

        return () => {
            page.style.overflow = oldOverflow
        }
    }, [searchOpen, cartOpen])

    useEffect(() => {
        let lastY = window.scrollY
        const handleScroll = () => {
            const currentY = Math.max(0, window.scrollY)

            if (currentY === 0) {
                setIsHeaderHidden(false)
                lastY = 0
                return
            }

            if (Math.abs(currentY - lastY) < 6) return

            setIsHeaderHidden(currentY < lastY)
            lastY = currentY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const updateCartQuantity = () => setCartQuantity(getCartQuantity())
        const onStorageChange = (event: StorageEvent) => {
            if (event.key === "chocoluxe-cart" || event.key === null) updateCartQuantity()
        }

        // storage chỉ chạy giữa các tab; sự kiện tùy chỉnh giúp cập nhật ngay cùng tab.
        window.addEventListener("chocoluxe-cart-updated", updateCartQuantity)
        window.addEventListener("storage", onStorageChange)
        return () => {
            window.removeEventListener("chocoluxe-cart-updated", updateCartQuantity)
            window.removeEventListener("storage", onStorageChange)
        }
    }, [])
    const [searchText, setSearchText] = useState("")
    const popularProducts = products.filter((product) => product.category === "gift")

    return (
        <header className={isHeaderHidden && !searchOpen && !cartOpen ? "header header--hidden" : "header"} onFocus={() => setIsHeaderHidden(false)}>
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
                    onClick={() => {
                        setCartOpen(false)
                        setSearchOpen(!searchOpen)
                    }}>
                    <i className={searchOpen ? "fa-solid fa-xmark" : "fa-solid fa-magnifying-glass"} aria-hidden="true"></i>
                </button>
                <Link to="/profile" aria-label="Thông tin cá nhân">
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                </Link>
                <button
                    type="button"
                    className="header-cart-trigger"
                    aria-label={cartQuantity > 0 ? `Giỏ hàng, ${cartQuantity} sản phẩm` : "Giỏ hàng"}
                    onClick={() => {
                        setSearchOpen(false)
                        setCartOpen(true)}}>
                    <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                    {cartQuantity > 0 && (
                        <span className="header-cart-count" aria-hidden="true">
                            {cartQuantity > 99 ? "99+" : cartQuantity}
                        </span>
                    )}
                </button>
            </div>

            {searchOpen && (
                <button
                    className="searchBackdrop"
                    type="button"
                    aria-label="Đóng tìm kiếm"
                    onClick={() => setSearchOpen(false)}
                />)}

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
            {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
        </header>
    )
}

export default Header

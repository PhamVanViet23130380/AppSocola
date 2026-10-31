import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <a className="logoWeb" href="/" aria-label="AppSocola - Trang chủ">
                <img src="/favicon.svg" alt="" />
                <span>AppSocola</span>
            </a>

            <nav className="menuHeader" aria-label="Menu chính">
                <a href="/">Trang chủ</a>
                <a href="/gioi-thieu">Giới thiệu</a>
                <a href="/#products">
                    Sản phẩm <span className="arrowMenu" aria-hidden="true"></span>
                </a>
                <a href="/#gifts">
                    Sô cô la quà tặng <span className="arrowMenu" aria-hidden="true"></span>
                </a>
                <a href="/#valentine">Quà tặng Valentine</a>
                <a href="/#news">Tin tức</a>
            </nav>

            <div className="iconsHeader">
                <button type="button" aria-label="Tìm kiếm">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </button>
                <button type="button" aria-label="Tài khoản">
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                </button>
                <button type="button" aria-label="Giỏ hàng">
                    <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                </button>
            </div>
        </header>
    )
}

export default Header

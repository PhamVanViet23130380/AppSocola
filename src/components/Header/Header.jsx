import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Header.css"
import { useState } from "react"
import { Link } from "react-router"

function Header() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchText, setSearchText] = useState("")

    return (
        <header className="header">
            <a className="logoWeb" href="/" aria-label="ChocoLuxe - Trang chủ">
                <img src="/favicon.svg" alt="" />
                <span>ChocoLuxe</span>
            </a>

            <nav className="menuHeader" aria-label="Menu chính">
                <a href="/">Trang chủ</a>
                <a href="/gioi-thieu">Giới thiệu</a>
                <a href="/#products">
                    Sản phẩm <span className="arrowMenu" aria-hidden="true"></span>
                </a>
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
                    <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                        <input className="searchInput" type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Tìm socola, hộp quà..." aria-label="Nhập nội dung cần tìm"/>
                        {searchText && (
                            <button className="searchClose" type="button" onClick={() => setSearchText("")} aria-label="Xóa nội dung tìm kiếm">
                                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                            </button>
                        )}
                    </form>

                    {searchText.trim() && (<p className="searchEmpty" aria-live="polite">Không tìm thấy sản phẩm</p>)}
                </div>
            )}
        </header>
    )
}

export default Header

import {Link} from "react-router";
import "./Home.css";

function Home() {
    return (
        <main className="home-page">
            <section className="home-banner">
                <div className="banner-content">
                    <p className="banner-shop-name">ChocoLuxe</p>
                    <h1 className="banner-title">
                        Một chút ngọt ngào,
                        <span>Ngàn lời yêu thương.</span>
                    </h1>
                    <p className="banner-description">
                        Khám phá thế giới socola tinh tế, nơi mỗi hương vị là một câu chuyện và mỗi món quà là một cách
                        gửi trao cảm xúc.
                    </p>

                    <div className="banner-actions">
                        <a href="#" className="home-button banner-explore-btn">
                            Khám phá sản phẩm
                        </a>

                        <Link to="/bo-suu-tap" className="home-button collection-btn">
                            Bộ sưu tập quà tặng
                        </Link>
                    </div>
                </div>



                <div className="banner-visual">
                    <div className="banner-circle" />

                    <div className="banner-img">
                        <img src="/images/products/hop-socola-mix.svg" alt="Hộp socola ChocoLuxe"/>
                    </div>

                    <div className="banner-small-img">
                        <img
                            src="/images/products/socola-den-70.svg"
                            alt="Socola đen 70 phần trăm cacao"
                        />
                    </div>

                    <div className="banner-badge">
                        <span>CHOCOLUXE</span>
                        <strong>Chocolate Collection</strong>
                        <small>Made with love</small>
                    </div>

                    <span className="banner-decor banner-decor-one">
                        ✦
                    </span>
                    <span className="banner-decor banner-decor-two">
                        ✦
                    </span>
                </div>

            </section>

        </main>
    )
}

export default Home

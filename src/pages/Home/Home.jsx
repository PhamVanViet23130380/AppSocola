import {Link} from "react-router";
import "./Home.css";
import { products } from "../../data/products.js";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel.jsx";

const flashSaleProducts = products.slice(0, 5);

const newProducts = products.slice(5, 10);


const bestSellerIds = [4, 1, 7, 10, 12];

const bestSellerProducts = bestSellerIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);



const categories = [
    {
        id: "dark",
        name: "Socola đen",
        image: "/images/products/socola-den-70.svg"
    },
    {
        id: "milk",
        name: "Socola sữa",
        image: "/images/products/socola-sua-truyen-thong.svg"
    },
    {
        id: "nuts",
        name: "Socola hạt",
        image: "/images/products/socola-hanh-nhan.svg"
    },
    {
        id: "gift",
        name: "Hộp quà socola",
        image: "/images/products/hop-qua-12-vien.svg"
    }
];


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
                        <Link to="/san-pham" className="home-button banner-explore-btn">
                            Khám phá sản phẩm
                        </Link>

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



            <section className="home-category">
                <div className="category-header">
                    <p>KHÁM PHÁ CHOCOLUXE</p>
                    <h2>Danh mục sản phẩm</h2>
                    <p>Chọn hương vị socola dành riêng cho bạn</p>
                </div>

                <div className="category-grid">
                    {categories.map((category) => (
                        <article className="category-card" key={category.id}>
                            <div className="category-image">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                />
                            </div>

                            <h3>{category.name}</h3>
                            <span>Khám phá danh mục</span>
                        </article>
                    ))}
                </div>

                <div className="category-all">
                    <Link to="/san-pham" className="category-all-button">
                        Xem tất cả sản phẩm
                    </Link>
                </div>
            </section>



            <section className="home-flashsale">
                <div className="flashsale-header">
                    <div className="flashsale-heading">
                        <p>Ưu đãi giới hạn</p>
                        <h2>Flash Sale</h2>
                        <p>Ngọt ngào trong từng hương vị, nhẹ nhàng trong từng mức giá.</p>
                    </div>

                    <div className="flashsale-time">
                        <span>Kêt thúc sau</span>
                        <strong>02 : 15 : 30</strong>
                    </div>
                </div>

                <div className="flashsale-products">
                    <ProductCarousel products={flashSaleProducts}  variant="sale"/>
                </div>

            </section>




            <section className="home-new-products">
                <div className="new-products-header">
                    <p>KHÁM PHÁ HƯƠNG VỊ MỚI</p>
                    <h2>Sản phẩm mới</h2>
                    <p>Những hương vị mới, mang đến trải nghiệm ngọt ngào đầy cảm hứng.</p>
                </div>

                <ProductCarousel
                    products={newProducts}
                    variant="new"
                />
            </section>



            <section className="home-bestseller">
                <div className="bestseller-header">
                    <p>HƯƠNG VỊ ĐƯỢC YÊU THÍCH</p>
                    <h2>Sản phẩm bán chạy</h2>
                    <p>Những hương vị được yêu thích và lựa chọn nhiều nhất tại ChocoLuxe.</p>
                </div>

                <ProductCarousel
                    products={bestSellerProducts}
                    variant="hot"
                />
            </section>

        </main>
    )
}

export default Home

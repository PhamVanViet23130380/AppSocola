import "./Footer.css"

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footerContent">
                <div className="footerColumn footerBrand">
                    <h2>CHOCOLUXE</h2>
                    <p><i className="fa-solid fa-location-dot"></i> Địa chỉ: Trường ĐH Nông Lâm tp.HCM</p>
                    <p><i className="fa-solid fa-envelope"></i> Email: appsocola@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> Điện thoại: 0123 456 789</p>
                    <p><i className="fa-solid fa-globe"></i> Cửa hàng socola trực tuyến</p>
                </div>

                <div className="footerColumn">
                    <h2>SẢN PHẨM</h2>
                    <a href="/#products">Sô cô la tươi Truffle</a>
                    <a href="/#products">Sô cô la Single Origin</a>
                    <a href="/#products">Sô cô la bọc hạt</a>
                    <a href="/#products">Thanh trái cây và hạt</a>
                    <a href="/#products">Bộ quà tặng</a>
                    <a href="/#products">Bộ quà du lịch</a>
                </div>

                <div className="footerColumn">
                    <h2>GALLERY</h2>
                    <div className="gallery">
                        <img src="https://janeandsuechocolate.com/cdn/shop/files/sliders1-desktop.jpg?v=1668013071&width=1500" alt="Chocolate 1"/>
                        <img src="https://i.shgcdn.com/7a12ef6b-37f7-43a8-99f5-8bcb643a8625/-/format/auto/-/quality/normal/" alt="Chocolate 2"/>
                        <img src="https://www.callebaut.com/sites/default/files/styles/lightbox/public/2025-10/photo1700481376.jpeg?itok=DeISdrKj" alt="Chocolate 3"/>
                        <img src="https://boematelier.ro/cdn/shop/files/image-of-a-various-gourmet-chocolate-products-made-in-a-artisanal-patisserie-chocolaterie_b6e69752-0353-44db-b14b-075371f3bf4b.png?v=1762420091" alt="Chocolate 4"/>
                        <img src="https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=1000&q=80" alt="Chocolate 5"/>
                        <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80" alt="Chocolate 6"/>
                    </div>
                </div>

                <div className="footerColumn">
                    <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                    <a href="/#buyingGuide">Hướng dẫn mua hàng</a>
                    <a href="/#shippingPolicy">Chính sách giao hàng</a>
                    <a href="/#returnPolicy">Chính sách đổi trả</a>
                    <a href="/#faq">Câu hỏi thường gặp</a>
                    <a href="/lien-he">Liên hệ</a>
                </div>
            </div>

            <div className="footerBottom">
                <p>© 2026 ChocoLuxe - Socola Việt Nam</p>
                <div className="footerSocials" aria-label="Mạng xã hội">
                    <span><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></span>
                    <span><i className="fa-brands fa-pinterest-p" aria-hidden="true"></i></span>
                    <span><i className="fa-brands fa-instagram" aria-hidden="true"></i></span>
                    <span><i className="fa-brands fa-youtube" aria-hidden="true"></i></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer

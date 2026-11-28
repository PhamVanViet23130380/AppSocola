import { useEffect } from "react"
import { Link } from "react-router"
import { products } from "../../data/products"
import "./Success.css"

function formatPrice(price: number) {
    return price.toLocaleString("vi-VN") + " đ"
}

function OrderSuccess() {
    const recipientName = "Nguyễn Văn A"
    const product = products.find((item) => item.slug === "socola-hanh-nhan")
    const subtotal = product ? product.price : 0
    const shippingFee = product ? 30000 : 0
    const total = subtotal + shippingFee

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <main className="orderSuccessPage">
            <div className="orderSuccessLayout">
                <section className="orderSuccessDetails">
                    <div className="orderSuccessHeading">
                        <i className="fa-solid fa-circle-check orderSuccessIcon" aria-hidden="true"></i>
                        <h1>Cảm ơn {recipientName}!</h1>
                    </div>
                    <p className="orderSuccessCode">Mã xác nhận mẫu <strong>#10</strong></p>

                    <div className="orderSuccessAddress">
                        <p>Địa chỉ nhận hàng</p>
                        <strong>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</strong>
                    </div>

                    <h2>Đặt hàng thành công</h2>
                    <ul className="orderSuccessDelivery">
                        <li>Thanh toán khi nhận hàng (COD)</li>
                        <li>Giao hàng nhanh</li>
                        <li>Dự kiến giao trong 1–2 ngày làm việc</li>
                    </ul>

                    <div className="orderSuccessRecipient">
                        <p><strong>Người nhận:</strong> {recipientName}</p>
                        <p><strong>Số điện thoại:</strong> 0901234567</p>
                    </div>
                    <Link className="orderSuccessLink" to="/san-pham">Tiếp tục mua sắm</Link>
                </section>

                <aside className="orderSuccessSummary">
                    <h2>Tóm tắt đơn hàng</h2>

                    {product && (
                        <div className="orderSuccessProduct">
                            <img src={product.image} alt="" />
                            <div>
                                <strong>{product.name}</strong>
                                <p>Số lượng: 1</p>
                            </div>
                            <strong className="orderSuccessPrice">{formatPrice(subtotal)}</strong>
                        </div>
                    )}

                    <div className="orderSuccessPrices">
                        <div className="orderSuccessAmount">
                            <span>Tạm tính</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="orderSuccessAmount">
                            <span>Vận chuyển</span>
                            <span>{formatPrice(shippingFee)}</span>
                        </div>
                        <div className="orderSuccessAmount orderSuccessTotal">
                            <strong>Tổng</strong>
                            <strong>{formatPrice(total)}</strong>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default OrderSuccess

import { useEffect } from "react"
import { products } from "../../data/products"
import "./Checkout.css"

function formatPrice(price: number) {
    return price.toLocaleString("vi-VN") + " đ"
}

function Checkout() {
    const product = products.find((item) => item.slug === "socola-hanh-nhan")
    const productTotal = product ? product.price : 0
    const shippingFee = product ? 30000 : 0
    const total = productTotal + shippingFee

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <main className="checkoutPage">
            <div className="checkoutLayout">
                <section className="checkoutDelivery">
                    <h1>Thông tin giao hàng</h1>

                    <div className="checkoutBox checkoutAccount">
                        <span className="checkoutAvatar" aria-hidden="true">A</span>
                        <span>nguyenvana@example.com</span>
                    </div>

                    <div className="checkoutBox">
                        <h2>Vận chuyển đến</h2>
                        <strong>Nguyễn Văn A · 0901234567</strong>
                        <p className="checkoutNote">123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
                        <input className="checkoutInput" type="text" placeholder="Nhập ghi chú (nếu có)" aria-label="Ghi chú giao hàng"/>
                    </div>

                    <div className="checkoutBox">
                        <h2>Phương thức vận chuyển</h2>
                        <div className="checkoutShipping">
                            <div>
                                <strong>Giao hàng nhanh</strong>
                                <p className="checkoutNote">Dự kiến 1–2 ngày làm việc</p>
                            </div>
                            <strong className="checkoutPrice">{formatPrice(shippingFee)}</strong>
                        </div>
                    </div>

                    <fieldset className="checkoutBox checkoutPayment">
                        <legend>Thanh toán</legend>
                        <label>
                            <input type="radio" name="payment" value="vnpay" />
                            Thanh toán online qua VNPay
                        </label>
                        <label>
                            <input type="radio" name="payment" value="momo" />
                            Thanh toán online qua Momo
                        </label>
                        <label>
                            <input type="radio" name="payment" value="cod" defaultChecked />
                            Thanh toán khi nhận hàng (COD)
                        </label>
                    </fieldset>
                </section>

                <aside className="checkoutOrder">
                    <h2>Đơn hàng của bạn</h2>
                    <p className="checkoutNote">Đơn hàng mẫu</p>

                    {product && (
                        <div className="checkoutProduct">
                            <img src={product.image} alt="" />
                            <div>
                                <strong>{product.name}</strong>
                                <p className="checkoutNote">Số lượng: 1</p>
                            </div>
                            <strong className="checkoutPrice">{formatPrice(product.price)}</strong>
                        </div>
                    )}

                    <div className="checkoutDiscount">
                        <input className="checkoutInput" type="text" placeholder="Mã giảm giá sản phẩm" aria-label="Mã giảm giá sản phẩm" />
                        <input className="checkoutInput" type="text" placeholder="Mã giảm phí vận chuyển" aria-label="Mã giảm phí vận chuyển" />
                        <button className="checkoutButton checkoutApply" type="button" disabled>Áp dụng mã giảm giá</button>
                    </div>

                    <div className="checkoutBox checkoutTotals">
                        <h3>Chi tiết thanh toán</h3>
                        <div className="checkoutAmount">
                            <span>Tổng tiền sản phẩm</span>
                            <span>{formatPrice(productTotal)}</span>
                        </div>
                        <div className="checkoutAmount">
                            <span>Phí vận chuyển</span>
                            <span>{formatPrice(shippingFee)}</span>
                        </div>
                        <div className="checkoutAmount checkoutTotal">
                            <strong>Tổng thanh toán</strong>
                            <strong className="checkoutPrice">{formatPrice(total)}</strong>
                        </div>
                    </div>

                    <button className="checkoutButton" type="button" disabled>XÁC NHẬN THANH TOÁN</button>
                </aside>
            </div>
        </main>
    )
}

export default Checkout

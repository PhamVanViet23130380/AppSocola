import { useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { products } from "../../data/products"
import "../Profile/Address.css"
import "./Checkout.css"

const sampleAddresses = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        phone: "0901234567",
        address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"
    },
    {
        id: 2,
        name: "Nguyễn Văn A",
        phone: "0901234567",
        address: "25 Đường số 7, Bình Chánh, TP. Hồ Chí Minh"
    }
]

function formatPrice(price: number) {
    return price.toLocaleString("vi-VN") + " đ"
}

function Checkout() {
    const [selectedAddress, setSelectedAddress] = useState(sampleAddresses[0])
    const [showAddresses, setShowAddresses] = useState(false)
    const addressDialog = useRef<HTMLDialogElement>(null)

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
                        <button className="checkoutAddressToggle" type="button" onClick={() => setShowAddresses(!showAddresses)} aria-expanded={showAddresses}>
                            Vận chuyển đến
                            <i className={showAddresses ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} aria-hidden="true"></i>
                        </button>

                        {showAddresses ? (
                            <div className="checkoutAddressList">
                                {sampleAddresses.map((item) => (
                                    <label className={selectedAddress.id === item.id ? "checkoutAddressOption checkoutAddressSelected" : "checkoutAddressOption"} key={item.id}>
                                        <input type="radio" name="deliveryAddress" checked={selectedAddress.id === item.id} onChange={() => setSelectedAddress(item)}/>
                                        <span>
                                            <strong>{item.name} · {item.phone}</strong>
                                            <span className="checkoutAddressText">{item.address}</span>
                                            {item.id === sampleAddresses[0].id && <span className="checkoutAddressDefault">Mặc định</span>}
                                        </span>
                                    </label>
                                ))}

                                <button className="checkoutAddAddress" type="button" onClick={() => addressDialog.current?.showModal()}>
                                    <i className="fa-solid fa-plus" aria-hidden="true"></i>
                                    Sử dụng địa chỉ khác
                                </button>
                            </div>
                        ) : (<div><strong>{selectedAddress.name} · {selectedAddress.phone}</strong><p className="checkoutNote">{selectedAddress.address}</p></div>
                        )}

                        <input className="checkoutInput" type="text" placeholder="Nhập ghi chú (nếu có)" aria-label="Ghi chú giao hàng" />
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

                    <Link className="checkoutButton" to="/order/success">
                        XÁC NHẬN THANH TOÁN
                    </Link>
                </aside>
            </div>

            <dialog className="addressFormPanel checkoutAddressDialog" ref={addressDialog} aria-labelledby="checkoutAddressTitle">
                <div className="addressFormHeader">
                    <h2 id="checkoutAddressTitle">Thêm địa chỉ mới</h2>
                    <button type="button" aria-label="Đóng" onClick={() => addressDialog.current?.close()}>
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="addressFormContent">
                    <label className="addressFormField">Họ và tên người nhận <span>*</span><input type="text" />
                    </label>
                    <label className="addressFormField">Số điện thoại <span>*</span><input type="tel" />
                    </label>
                    <label className="addressFormField">Tỉnh / Thành phố <span>*</span>
                        <select>
                            <option value="">-- Chọn Tỉnh / Thành phố --</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="hochiminh">TP. Hồ Chí Minh</option>
                            <option value="danang">Đà Nẵng</option>
                        </select>
                    </label>
                    <label className="addressFormField">Quận / Huyện <span>*</span>
                        <select>
                            <option value="">-- Chọn Quận / Huyện --</option>
                            <option value="quan-1">Quận 1</option>
                            <option value="quan-3">Quận 3</option>
                            <option value="binh-thanh">Bình Thạnh</option>
                            <option value="binh-chanh">Bình Chánh</option>
                            <option value="dong-da">Đống Đa</option>
                        </select>
                    </label>
                    <label className="addressFormField">Phường / Xã <span>*</span>
                        <select>
                            <option value="">-- Chọn Phường / Xã --</option>
                            <option value="ben-nghe">Bến Nghé</option>
                            <option value="ben-thanh">Bến Thành</option>
                            <option value="thao-dien">Thảo Điền</option>
                            <option value="linh-trung">Linh Trung</option>
                            <option value="binh-chanh">Bình Chánh</option>
                            <option value="lang-ha">Láng Hạ</option>
                        </select>
                    </label>
                    <label className="addressFormField">Địa chỉ chi tiết <span>*</span><textarea />
                    </label>
                    <label className="addressDefaultCheck">
                        <input type="checkbox" />Đặt làm địa chỉ mặc định
                    </label>
                </div>

                <div className="addressFormFooter">
                    <button className="addressCancelButton" type="button" onClick={() => addressDialog.current?.close()}>Hủy</button>
                    <button className="addressSaveButton" type="button" disabled>Lưu địa chỉ</button>
                </div>
            </dialog>
        </main>
    )
}

export default Checkout

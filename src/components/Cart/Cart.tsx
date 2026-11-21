import { Link } from "react-router"
import "./Cart.css"

type CartProps = {
    onClose: () => void;
};

function Cart({ onClose }: CartProps) {
    return (
        <div className="cartOverlay">
            <button
                className="cartBackdrop"
                type="button"
                aria-label="Đóng giỏ hàng"
                onClick={onClose}></button>

            <aside className="cartPanel" id="cartPanel" role="dialog" aria-modal="true" aria-labelledby="cartTitle">
                <div className="cartHeader">
                    <div className="cartTitleRow">
                        <h2 id="cartTitle">GIỎ HÀNG</h2>
                    </div>
                    <button className="cartCloseButton" type="button" aria-label="Đóng giỏ hàng" onClick={onClose}>
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="cartEmptyState">
                    <div className="cartEmptyIcon" aria-hidden="true">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </div>
                    <p>Giỏ hàng của bạn hiện đang trống.</p>
                    <Link className="cartShopButton" to="/san-pham" onClick={onClose}>BẮT ĐẦU MUA SẮM</Link>
                </div>
            </aside>
        </div>
    )
}

export default Cart

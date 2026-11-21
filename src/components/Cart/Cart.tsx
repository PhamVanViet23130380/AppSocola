import { useState } from "react"
import { Link } from "react-router"
import { products } from "../../data/products"
import "./Cart.css"

type CartProps = {
    onClose: () => void;
};

type CartItem = { id: number; quantity: number; sale?: boolean };

function readCart(): CartItem[] {
    try {
        const saved: unknown = JSON.parse(localStorage.getItem("chocoluxe-cart") || "[]");
        if (!Array.isArray(saved)) return [];
        return saved.filter((item): item is CartItem =>
            typeof item === "object" && item !== null &&
            typeof item.id === "number" && Number.isInteger(item.id) &&
            typeof item.quantity === "number" && Number.isInteger(item.quantity) &&
            item.quantity > 0 && (item.sale === undefined || typeof item.sale === "boolean")
        );
    } catch {
        return [];
    }
}

function Cart({ onClose }: CartProps) {
    // Cart được mở lại bằng nút Header nên luôn đọc dữ liệu đã lưu mới nhất.
    const [cartItems, setCartItems] = useState<CartItem[]>(readCart);
    const [error, setError] = useState("");

    const saveCart = (next: CartItem[]) => {
        try {
            localStorage.setItem("chocoluxe-cart", JSON.stringify(next));
            window.dispatchEvent(new Event("chocoluxe-cart-updated"));
            setCartItems(next);
            setError("");
        } catch {
            setError("Không thể cập nhật giỏ hàng");
        }
    };

    const updateQuantity = (id: number, amount: number, sale: boolean) => {
        saveCart(cartItems.map((item) => item.id === id && Boolean(item.sale) === sale
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        ));
    };

    const removeItem = (id: number, sale: boolean) => {
        saveCart(cartItems.filter((item) => !(item.id === id && Boolean(item.sale) === sale)));
    };

    const displayedItems = cartItems.flatMap((item) => {
        const product = products.find((candidate) => candidate.id === item.id);
        return product ? [{
            product,
            quantity: item.quantity,
            sale: Boolean(item.sale),
            unitPrice: item.sale ? Math.round(product.price * 0.8) : product.price,
        }] : [];
    });
    const subtotal = displayedItems.reduce(
        (total, item) => total + item.unitPrice * item.quantity,
        0
    );

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

                {displayedItems.length === 0 ? (
                    <div className="cartEmptyState">
                        <div className="cartEmptyIcon" aria-hidden="true">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <p>Giỏ hàng của bạn hiện đang trống.</p>
                        <Link className="cartShopButton" to="/san-pham" onClick={onClose}>BẮT ĐẦU MUA SẮM</Link>
                    </div>
                ) : (
                    <>
                        <div className="cartItems">
                            {displayedItems.map(({ product, quantity, sale, unitPrice }) => (
                                <article className="cartItem" key={`${product.id}-${sale ? "sale" : "regular"}`}>
                                    <Link className="cartItemImage" to={`/san-pham/${product.slug}`} onClick={onClose}>
                                        <img src={product.image} alt={product.name} />
                                    </Link>
                                    <div className="cartItemInfo">
                                        <Link className="cartItemName" to={`/san-pham/${product.slug}`} onClick={onClose}>
                                            {product.name}
                                        </Link>
                                        <p className="cartItemPrice">{sale ? "Flash Sale: " : ""}{unitPrice.toLocaleString("vi-VN")} đ</p>
                                        <div className="cartItemControls">
                                            <div className="cartItemQuantity" aria-label={`Số lượng ${product.name}`}>
                                                <button type="button" onClick={() => updateQuantity(product.id, -1, sale)} disabled={quantity <= 1} aria-label={`Giảm số lượng ${product.name}`}>−</button>
                                                <span>{quantity}</span>
                                                <button type="button" onClick={() => updateQuantity(product.id, 1, sale)} aria-label={`Tăng số lượng ${product.name}`}>+</button>
                                            </div>
                                            <button type="button" className="cartItemRemove" onClick={() => removeItem(product.id, sale)} aria-label={`Xóa ${product.name} khỏi giỏ hàng`}>Xóa</button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="cartSummary">
                            <div className="cartSubtotal">
                                <span>Tạm tính</span>
                                <strong>{subtotal.toLocaleString("vi-VN")} đ</strong>
                            </div>
                            <Link className="cartContinue" to="/san-pham" onClick={onClose}>Tiếp tục mua sắm</Link>
                        </div>
                    </>
                )}
                <div role="status" aria-live="polite" className="cartError">{error}</div>
            </aside>
        </div>
    );
}

export default Cart

import {Link, useParams} from "react-router";
import products from "../../data/products.js";
import "./ProductDetail.css"

function ProductDetail() {
    const { slug } = useParams();
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <main className="product-detail">
                <h1>Không tìm thấy sản phẩm</h1>
                <p>Sản phẩm bạn đang tìm không tồn tại.</p>
                <Link to="/">Về trang chủ</Link>
            </main>
        );
    }

    return (
        <main className="product-detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </main>
    );
}

export default ProductDetail;
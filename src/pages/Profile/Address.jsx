import { Link } from "react-router"
import "./Address.css"

function Address() {
    const addresses = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            phone: "0901234567",
            address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
            isDefault: true,
        },
        {
            id: 2,
            name: "Nguyễn Văn A",
            phone: "0901234567",
            address: "25 Đường số 7, Huyện Bình Chánh, TP. Hồ Chí Minh",
            isDefault: false,
        },
        {
            id: 3,
            name: "Nguyễn Văn A",
            phone: "0901234567",
            address: "18 Láng Hạ, Quận Đống Đa, Hà Nội",
            isDefault: false,
        },
    ]

    return (
        <main className="profilePage">
            <div className="profileLayout">
                <aside className="profileMenu">
                    <h2>Tài khoản</h2>
                    <Link to="/profile" className="profileMenuLink">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                        <span>Thông tin cá nhân</span>
                    </Link>
                    <Link to="/profile/address" className="profileMenuLink profileMenuActive">
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <span>Địa chỉ của tôi</span>
                    </Link>
                </aside>

                <section className="profileContent addressContent">
                    <div className="addressHeader">
                        <h1>Địa chỉ của tôi</h1>
                        <button className="addressAddButton" type="button"><i className="fa-solid fa-plus" aria-hidden="true"></i>Thêm địa chỉ mới</button>
                    </div>

                    <div className="addressList">
                        {addresses.map((address) => (
                            <article className={address.isDefault ? "addressCard addressCardDefault" : "addressCard"} key={address.id}>
                                <div className="addressCardTop">
                                    <strong>{address.name}</strong>
                                    {address.isDefault && <span className="addressDefaultBadge">Mặc định</span>}
                                </div>
                                <p>
                                    <i className="fa-solid fa-phone" aria-hidden="true"></i>{address.phone}
                                </p>
                                <p>
                                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i>{address.address}
                                </p>
                                <div className="addressButtons">
                                    <button className="addressEditButton" type="button"><i className="fa-solid fa-pen" aria-hidden="true"></i>Sửa</button>
                                    <button className="addressDeleteButton" type="button"><i className="fa-solid fa-trash" aria-hidden="true"></i>Xóa</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Address

import { Link } from "react-router"
import "./Address.css"
import { useState } from "react"

function Address() {
    const [addresses, setAddresses] = useState([
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
    ])
    const [showAddressForm, setShowAddressForm] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null)

    function handleAdd() {
        setSelectedAddress(null)
        setShowAddressForm(true)
    }

    function handleEdit(address) {
        setSelectedAddress(address)
        setShowAddressForm(true)
    }

    function handleCloseForm() {
        setShowAddressForm(false)
        setSelectedAddress(null)
    }

    function handleSetDefault(id) {
        setAddresses(addresses.map((address) => ({...address, isDefault: address.id === id,})))
    }

    function handleDelete(id) {
        const deletedAddress = addresses.find((address) => address.id === id)
        const remainingAddresses = addresses.filter((address) => address.id !== id)

        if (deletedAddress.isDefault && remainingAddresses.length > 0) {
            remainingAddresses[0] = { ...remainingAddresses[0], isDefault: true }
        }

        setAddresses(remainingAddresses)
    }

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
                    <button className="profileMenuLink profileLogout" type="button">
                        <i className="fa-solid fa-right-from-bracket" aria-hidden="true"></i>
                        <span>Đăng xuất</span>
                    </button>
                </aside>

                <section className="profileContent addressContent">
                    <div className="addressHeader">
                        <h1>Địa chỉ của tôi</h1>
                        <button className="addressAddButton" type="button" onClick={handleAdd}>
                            <i className="fa-solid fa-plus" aria-hidden="true"></i>
                            Thêm địa chỉ mới
                        </button>
                    </div>

                    {showAddressForm && (
                        <div className="addressFormPanel" role="dialog" aria-modal="true" aria-labelledby="addressFormTitle">
                            <div className="addressFormHeader">
                                <h2 id="addressFormTitle">{selectedAddress ? "Sửa địa chỉ" : "Thêm địa chỉ mới"}</h2>
                                <button type="button" aria-label="Đóng" onClick={handleCloseForm}>
                                    <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="addressFormContent">
                                <label className="addressFormField">Họ và tên người nhận <span>*</span><input type="text" defaultValue={selectedAddress ? selectedAddress.name : ""} />
                                </label>
                                <label className="addressFormField">Số điện thoại <span>*</span><input type="text" defaultValue={selectedAddress ? selectedAddress.phone : ""} />
                                </label>
                                <label className="addressFormField">Tỉnh / Thành phố <span>*</span>
                                    <select defaultValue={selectedAddress ? selectedAddress.province : ""}>
                                        <option value="">-- Chọn Tỉnh / Thành phố --</option>
                                        <option value="hanoi">Hà Nội</option>
                                        <option value="hochiminh">TP. Hồ Chí Minh</option>
                                        <option value="danang">Đà Nẵng</option>
                                    </select>
                                </label>
                                <label className="addressFormField">
                                    Quận / Huyện <span>*</span>
                                    <select defaultValue={selectedAddress ? selectedAddress.district : ""}>
                                        <option value="">-- Chọn Quận / Huyện --</option>
                                        <option value="quan-1">Quận 1</option>
                                        <option value="quan-3">Quận 3</option>
                                        <option value="binh-thanh">Bình Thạnh</option>
                                        <option value="binh-chanh">Bình Chánh</option>
                                        <option value="dong-da">Đống Đa</option>
                                    </select>
                                </label>
                                <label className="addressFormField">
                                    Phường / Xã <span>*</span>
                                    <select defaultValue={selectedAddress ? selectedAddress.ward : ""}>
                                        <option value="">-- Chọn Phường / Xã --</option>
                                        <option value="ben-nghe">Bến Nghé</option>
                                        <option value="ben-thanh">Bến Thành</option>
                                        <option value="thao-dien">Thảo Điền</option>
                                        <option value="linh-trung">Linh Trung</option>
                                        <option value="binh-chanh">Bình Chánh</option>
                                        <option value="lang-ha">Láng Hạ</option>
                                    </select>
                                </label>
                                <label className="addressFormField">
                                    Địa chỉ chi tiết <span>*</span>
                                    <textarea defaultValue={selectedAddress ? selectedAddress.detail : ""} />
                                </label>
                                <label className="addressDefaultCheck">
                                    <input type="checkbox" defaultChecked={selectedAddress ? selectedAddress.isDefault : false} />
                                    Đặt làm địa chỉ mặc định
                                </label>
                            </div>

                            <div className="addressFormFooter">
                                <button className="addressCancelButton" type="button" onClick={handleCloseForm}>Hủy</button>
                                <button className="addressSaveButton" type="button">Lưu địa chỉ</button>
                            </div>
                        </div>
                    )}

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
                                <div className="addressButtons">{!address.isDefault && (
                                    <button className="addressDefaultButton" type="button" onClick={() => handleSetDefault(address.id)}><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Đặt làm mặc định</button>)}
                                    <button className="addressEditButton" type="button" onClick={() => handleEdit(address)}><i className="fa-solid fa-pen" aria-hidden="true"></i>Sửa</button>
                                    <button className="addressDeleteButton" type="button" onClick={() => handleDelete(address.id)}><i className="fa-solid fa-trash" aria-hidden="true"></i>Xóa</button>
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

import "./Profile.css"
import { useState } from "react"
import { Link } from "react-router"

function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const [profile, setProfile] = useState({
        name: "Nguyễn Văn A",
        phone: "0123456789",
        email: "nguyenvana@example.com",
        gender: "",
    })

    function handleChange(event) {
        setProfile({ ...profile, [event.target.name]: event.target.value })
    }

    return (
        <main className="profilePage">
            <div className="profileLayout">
                <aside className="profileMenu">
                    <h2>Tài khoản</h2>
                    <Link to="/profile" className="profileMenuLink profileMenuActive">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                        <span>Thông tin cá nhân</span>
                    </Link>
                    <Link to="/profile/address" className="profileMenuLink">
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <span>Địa chỉ của tôi</span>
                    </Link>
                </aside>

                <section className="profileContent">
                    <h1>Thông tin cá nhân</h1>

                    <div className="profileAvatarRow">
                        <div className="profileAvatar">
                            <i className="fa-solid fa-user" aria-hidden="true"></i>
                        </div>
                        <span>Ảnh đại diện</span>
                    </div>

                    <div className="profileFields">
                        <div className="profileField">
                            <span>Họ và tên</span>
                            {isEditing ? (<input className="profileInput" type="text" name="name" value={profile.name} onChange={handleChange} />) : (<p>{profile.name}</p>)}
                        </div>
                        <div className="profileField">
                            <span>Số điện thoại</span>
                            {isEditing ? (<input className="profileInput" type="text" name="phone" value={profile.phone} onChange={handleChange} />) : (<p>{profile.phone}</p>)}
                        </div>
                        <div className="profileField profileEmail">
                            <span>Email</span>
                            {isEditing ? (<input className="profileInput" type="email" name="email" value={profile.email} onChange={handleChange} />) : (<p>{profile.email}</p>)}
                        </div>
                        <div className="profileField">
                            <span>Giới tính</span>
                            <div className="genderOptions">
                                <label>
                                    <input type="radio" name="gender" value="nam" checked={profile.gender === "nam"} onChange={handleChange} disabled={!isEditing} />
                                    Nam
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="nu" checked={profile.gender === "nu"} onChange={handleChange} disabled={!isEditing} />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="profileActions">
                        <button type="button" className="profileEditButton" onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? "Lưu" : "Sửa"}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Profile

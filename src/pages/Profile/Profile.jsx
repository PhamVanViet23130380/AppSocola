import "./Profile.css"

function Profile() {
    return (
        <main className="profilePage">
            <div className="profileLayout">
                <aside className="profileMenu">
                    <h2>Tài khoản</h2>
                    <div className="profileMenuItem">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                        <span>Thông tin cá nhân</span>
                    </div>
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
                            <p>Nguyễn Văn A</p>
                        </div>
                        <div className="profileField">
                            <span>Số điện thoại</span>
                            <p>0123456789</p>
                        </div>
                        <div className="profileField profileEmail">
                            <span>Email</span>
                            <p>nguyenvana@example.com</p>
                        </div>
                        <div className="profileField">
                            <span>Giới tính</span>
                            <div className="genderOptions">
                                <label>
                                    <input type="radio" name="gender" value="nam" />
                                    Nam
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="nu" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Profile

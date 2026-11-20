import { Link } from "react-router"
import "./Profile.css"
import "./ChangePassword.css"

function ChangePassword() {
    return (
        <main className="profilePage">
            <div className="profileLayout">
                <aside className="profileMenu">
                    <h2>Tài khoản</h2>
                    <Link to="/profile" className="profileMenuLink">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                        <span>Thông tin cá nhân</span>
                    </Link>
                    <Link to="/profile/address" className="profileMenuLink">
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <span>Địa chỉ của tôi</span>
                    </Link>
                    <Link to="/profile/password" className="profileMenuLink profileMenuActive">
                        <i className="fa-solid fa-lock" aria-hidden="true"></i>
                        <span>Đổi mật khẩu</span>
                    </Link>
                    <button className="profileMenuLink profileLogout" type="button">
                        <i className="fa-solid fa-right-from-bracket" aria-hidden="true"></i>
                        <span>Đăng xuất</span>
                    </button>
                </aside>

                <section className="profileContent changePasswordContent">
                    <h1>Đổi mật khẩu</h1>

                    <div className="passwordFields">
                        <label className="passwordField">
                            Mật khẩu hiện tại
                            <input type="password" placeholder="Nhập mật khẩu cũ" />
                        </label>
                        <label className="passwordField">
                            Mật khẩu mới
                            <input type="password" placeholder="Nhập mật khẩu mới" />
                        </label>
                        <label className="passwordField">
                            Nhập lại mật khẩu mới
                            <input type="password" placeholder="Nhập lại mật khẩu mới" />
                        </label>
                    </div>

                    <div className="passwordActions">
                        <button className="passwordSaveButton" type="button">
                            Lưu mật khẩu
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ChangePassword

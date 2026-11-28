import {useState} from "react";
import "./Login.css"

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="login-page">
            <div className="login-img">
                <img src="/images/login-chocolate.png" alt="" />
            </div>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <h1 className="login-title">Đăng nhập</h1>

                <div className="login-input">
                    <label htmlFor="login-email">Email</label>
                    <input className="email" name="email" type="email" placeholder="Ví dụ: user@gmail.com" required />
                </div>

                <div className="login-input">
                    <label htmlFor="login-password">Mật khẩu</label>
                    <div className="login-password">
                        <input className="password" name="password" type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu..." required />

                        <button type="button" className="login-password-toggle"
                                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                onClick={() => setShowPassword((current) => !current)}>
                            <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}/>
                        </button>
                    </div>

                </div>

                <button className="login-submit" type="submit">
                    Đăng nhập
                </button>

            </form>
        </section>
    )
}
export default Login;
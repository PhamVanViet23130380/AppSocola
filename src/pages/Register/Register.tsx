import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import "../Login/Login.css";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const fields = new FormData(event.currentTarget);
        const passwordsMatch = fields.get("password") === fields.get("confirmPassword");

        setError(passwordsMatch ? "" : "Mật khẩu xác nhận chưa trùng khớp.");
    }

    return (
        <section className="login-page" aria-labelledby="register-title">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-title">Đăng ký</h1>

                <div className="login-input">
                    <label htmlFor="register-name">Họ và tên</label>
                    <input id="register-name" name="fullName" autoComplete="name" required />
                </div>

                <div className="login-input">
                    <label htmlFor="register-email">Email</label>
                    <input id="register-email" name="email" type="email" required/>
                </div>

                <div className="login-input">
                    <label htmlFor="register-password">Mật khẩu</label>
                    <div className="login-password">
                        <input id="register-password" name="password" type={showPassword ? "text" : "password"} onChange={() => setError("")} required/>
                        <button type="button" className="login-password-toggle" aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} onClick={() => setShowPassword((current) => !current)}>
                            <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                        </button>
                    </div>
                </div>

                <div className="login-input">
                    <label htmlFor="register-confirm-password">Xác nhận mật khẩu</label>
                    <div className="login-password">
                        <input id="register-confirm-password" name="confirmPassword" type={showConfirmPassword ? "text" : "password"}
                            aria-invalid={Boolean(error)} aria-describedby={error ? "register-password-error" : undefined} onChange={() => setError("")} required/>
                        <button type="button" className="login-password-toggle"
                            aria-label={showConfirmPassword ? "Ẩn mật khẩu xác nhận" : "Hiện mật khẩu xác nhận"}
                            onClick={() => setShowConfirmPassword((current) => !current)}>

                            <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}/>

                        </button>

                    </div>
                    {error && <p id="register-password-error" className="auth-error" role="alert">{error}</p>}
                </div>

                <button className="login-submit" type="submit">Đăng ký</button>

                <p className="auth-switch">
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
            </form>

            <div className="login-img">
                <img src="/images/register-chocolate.png" alt="" />
            </div>
        </section>
    );
}

export default Register;
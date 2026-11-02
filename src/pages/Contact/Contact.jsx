import { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const contactEmail = "appsocola@gmail.com";

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [draftReady, setDraftReady] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setDraftReady(false);
    setCopyStatus("");
  };

  const draftText = `Họ và tên: ${form.name.trim()}\nSố điện thoại: ${form.phone.trim()}\nEmail: ${form.email.trim()}\nChủ đề: ${form.subject}\n\nNội dung:\n${form.message.trim()}`;
  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(`[ChocoLuxe] ${form.subject}`)}&body=${encodeURIComponent(draftText)}`;

  const prepareEmail = (event) => {
    event.preventDefault();
    setDraftReady(true);
    setCopyStatus("");
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(draftText);
      setCopyStatus("Đã sao chép nội dung. Bạn có thể dán vào email của mình.");
    } catch {
      setCopyStatus("Trình duyệt chưa cho phép sao chép. Bạn có thể chọn Mở ứng dụng email để tiếp tục.");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container contact-hero-layout">
          <div className="contact-hero-content">
            <div className="contact-eyebrow"><span /> LẮNG NGHE TỪNG LỜI NHẮN</div>
            <h1>Kết nối cùng <strong>ChocoLuxe</strong></h1>
            <p>
              Một thắc mắc nhỏ về socola, một món quà dành cho người thương hay
              đơn hàng cần hỗ trợ? Chúng mình luôn trân trọng những lời nhắn từ bạn.
            </p>
            <a className="contact-hero-link" href="#contact-form">
              Gửi lời nhắn <i className="fa-solid fa-arrow-down" aria-hidden="true" />
            </a>
          </div>
          <div className="contact-hero-photo">
            <img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1100&q=85"
              alt="Những viên socola được trình bày như một món quà"
            />
            <div className="contact-photo-caption">Một chút ngọt ngào, một lời quan tâm.</div>
          </div>
        </div>
        <div className="contact-container contact-highlights">
          <div className="contact-highlight">
            <i className="fa-regular fa-comments" aria-hidden="true" />
            <div><strong>Tư vấn tận tình</strong><span>Giải đáp thắc mắc về sản phẩm</span></div>
          </div>
          <div className="contact-highlight">
            <i className="fa-solid fa-gift" aria-hidden="true" />
            <div><strong>Quà tặng ý nghĩa</strong><span>Gợi ý lựa chọn phù hợp</span></div>
          </div>
          <div className="contact-highlight">
            <i className="fa-solid fa-box-open" aria-hidden="true" />
            <div><strong>Hỗ trợ đơn hàng</strong><span>Trao đổi về quá trình mua sắm</span></div>
          </div>
        </div>
      </section>

      <section className="contact-main-section" id="contact-form">
        <div className="contact-container contact-main-grid">
          <div className="contact-form-card">
            <div className="contact-section-label">GỬI LỜI NHẮN</div>
            <h2>Chúng mình có thể giúp gì cho bạn?</h2>
            <p className="contact-section-intro">
              Điền thông tin bên dưới để chuẩn bị nội dung liên hệ. Bạn sẽ được
              chuyển sang ứng dụng email để tự xác nhận gửi.
            </p>

            <form onSubmit={prepareEmail} className="contact-form">
              <div className="contact-form-row">
                <label className="contact-field">
                  <span>Họ và tên <b>*</b></span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    type="text"
                    autoComplete="name"
                    placeholder="Nguyễn Văn An"
                    minLength={2}
                    maxLength={80}
                    required
                  />
                </label>
                <label className="contact-field">
                  <span>Số điện thoại <b>*</b></span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="(0[0-9]{9}|\+84[0-9]{9})"
                    title="Nhập 10 số bắt đầu bằng 0 hoặc +84 và 9 chữ số"
                    placeholder="0912345678"
                    required
                  />
                </label>
              </div>
              <label className="contact-field">
                <span>Email <b>*</b></span>
                <input
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  placeholder="ban@example.com"
                  required
                />
              </label>
              <label className="contact-field">
                <span>Chủ đề cần hỗ trợ <b>*</b></span>
                <select name="subject" value={form.subject} onChange={updateField} required>
                  <option value="">Chọn nội dung bạn quan tâm</option>
                  <option value="Tư vấn sản phẩm socola">Tư vấn sản phẩm socola</option>
                  <option value="Tư vấn hộp quà tặng">Tư vấn hộp quà tặng</option>
                  <option value="Hỗ trợ đơn hàng">Hỗ trợ đơn hàng</option>
                  <option value="Góp ý và phản hồi">Góp ý và phản hồi</option>
                  <option value="Nội dung khác">Nội dung khác</option>
                </select>
              </label>
              <label className="contact-field">
                <span>Nội dung lời nhắn <b>*</b></span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={6}
                  minLength={10}
                  maxLength={1500}
                  placeholder="Hãy chia sẻ điều bạn đang cần hỗ trợ..."
                  required
                />
                <small>{form.message.length}/1500 ký tự</small>
              </label>
              <button type="submit" className="contact-submit">
                Chuẩn bị email liên hệ <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
              <p className="contact-form-note">
                <i className="fa-solid fa-circle-info" aria-hidden="true" />
                Biểu mẫu chưa kết nối máy chủ gửi tin nhắn; không có thông tin nào được tự động gửi đi.
              </p>
              {draftReady && (
                <div className="contact-draft" role="status" aria-live="polite">
                  <strong>Nội dung đã sẵn sàng!</strong>
                  <p>Bấm mở email và xác nhận gửi trong ứng dụng của bạn, hoặc sao chép nội dung để gửi thủ công.</p>
                  <div className="contact-draft-actions">
                    <a href={mailtoLink} className="contact-mail-button">
                      <i className="fa-regular fa-envelope" aria-hidden="true" /> Mở ứng dụng email
                    </a>
                    <button type="button" className="contact-copy-button" onClick={copyMessage}>
                      <i className="fa-regular fa-copy" aria-hidden="true" /> Sao chép nội dung
                    </button>
                  </div>
                  {copyStatus && <p className="contact-copy-status">{copyStatus}</p>}
                </div>
              )}
            </form>
          </div>

          <aside className="contact-sidebar">
            <div className="contact-side-heading">
              <div className="contact-section-label">KÊNH KẾT NỐI</div>
              <h2>Thông tin liên hệ</h2>
              <p>Những thông tin hiện đang được nhóm hiển thị ở chân trang website.</p>
            </div>
            <div className="contact-detail-list">
              <div className="contact-detail">
                <span className="contact-detail-icon"><i className="fa-solid fa-location-dot" aria-hidden="true" /></span>
                <div><strong>Địa chỉ</strong><p>Trường Đại học Nông Lâm TP.HCM</p></div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon"><i className="fa-regular fa-envelope" aria-hidden="true" /></span>
                <div><strong>Email</strong><p>{contactEmail}</p></div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon"><i className="fa-solid fa-phone" aria-hidden="true" /></span>
                <div><strong>Số điện thoại</strong><p>0123 456 789</p></div>
              </div>
            </div>
            <div className="contact-notice">
              <i className="fa-solid fa-circle-exclamation" aria-hidden="true" />
              <p>Thông tin liên hệ đang là dữ liệu mẫu của nhóm. Cần xác nhận trước khi dùng cho cửa hàng thực tế.</p>
            </div>
            <div className="contact-gift-card">
              <div className="contact-gift-icon"><i className="fa-solid fa-heart" aria-hidden="true" /></div>
              <h3>Một món quà, ngàn lời yêu thương</h3>
              <p>ChocoLuxe mong mỗi hộp socola đều mang đến một khoảnh khắc đáng nhớ.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-help-section">
        <div className="contact-container">
          <div className="contact-help-title">
            <div className="contact-section-label">CHOCOLUXE ĐỒNG HÀNH CÙNG BẠN</div>
            <h2>Chọn điều bạn đang quan tâm</h2>
            <p>Chúng mình có thể hỗ trợ từ việc chọn socola đến những câu hỏi về đơn hàng.</p>
          </div>
          <div className="contact-help-grid">
            <article className="contact-help-item">
              <span>01</span>
              <i className="fa-solid fa-cookie-bite" aria-hidden="true" />
              <h3>Chọn loại socola</h3>
              <p>Tìm hiểu vị socola, thành phần và cách bảo quản phù hợp với nhu cầu.</p>
            </article>
            <article className="contact-help-item">
              <span>02</span>
              <i className="fa-solid fa-gift" aria-hidden="true" />
              <h3>Chọn quà tặng</h3>
              <p>Gợi ý món quà cho sinh nhật, kỷ niệm hoặc những dịp đặc biệt.</p>
            </article>
            <article className="contact-help-item">
              <span>03</span>
              <i className="fa-solid fa-truck-fast" aria-hidden="true" />
              <h3>Hỏi về đơn hàng</h3>
              <p>Trao đổi về đặt hàng, giao nhận và các vấn đề cần được giải đáp.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

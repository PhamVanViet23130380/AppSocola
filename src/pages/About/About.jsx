import "./About.css";
const pictures = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUVd49I9OeOEeUqiy32ynxD8_DmOPRKwFbm8PoTyfZk5t9hWRiEVFcVwFJDJJ9LLEwNERyeI2MXSNE6YVvk6FOboeZmNhJHjwfsvFNpGakMHaQ4MvH4GWyLo5338UgPlnz3kR5c94SMIopcNL8rUy0q6L9BcjnCFoqQEiEK0Nxv1g3_Jqrdisy-K4_ppENu4ztcnaAIqj5tjkill8sl87T-bNWC44s_6dDew3XKSY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC38PPFbtkV5xMXvcmF119cPiJpr8f0f9JpiF5diMwtKuzvzudf5milOk6ykLLuHjLA5zzETzxbuiZ4XdhVNAh2ZXRvLYt4XlHeSyGpHe4MRdXI219sgNvlQlaZTRaKFoDzPVnWtB1GD07ngCFqIjdk46A4L1LDN43DlNuXr3yIL43SLEoFfLysApFjHqhgbpEl-g2RL-5Smz6XB5Yywe96ySNGfGfEBJ_J4Y7Mqlc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBXZdjWYa1v5RLb7KJ9s2fcQ6XWybdsX9ENoyNVEqeB_abOZP9Q_cE6hol1shTYHz1F_wVl39w9mSAbEsBp0JtLIokuDQ_v5rTYy1h9ag3NVDAproRx-Px0ygAFu2ud3oN6f9LtoXhdCVTA0AEzDRYq1p8cNQm_oOLqjgW5eZcxKYqWQbRIdGKysZWqRN6GL7_0CMgupD64_LiOIgzHzbIk5hbZxgaFHi2QA99A9zI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIA85RvfJXT1lkICFTYylTJhHoItPuR80MDHc52ZygfkFspiDdTLpC7AS0luwZLPRynZEOj5tPe8edXlxUHx-J5ATAkHMYXMaF1ZpANmFSIfsievWKDy-L63QAKMjXaOHIAv4T8wXYH4y8GF7d2d4LF4uJHOhTxUs-hbSvjNKoyeXRIaj3JBhH7cmXqULJhHC-Uhtnf5-akbX1NUdZOUvOHnKK42ZvHxIA03bbaMk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgS84h-GDNLaOzJEDYNxNzotfKWBcIsSzh8bnCTys3mU90uFPtVJkqiD3FGtxhFplRPCdCFknQby8A2OiAeL1OtDkgJ6AZQS7-6fHx1hYC-jyQC8NR8Tavykcn98QB5gAjAOOcVaFng1wcFWuHeRR47ouhWxmvRmjnx93REFWL36aW2LTpDL8oy7eXRkTD7mh3itltwEXXzYiju0O_8daNVV_yqInnBe7SWRWNKL0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAEgfkMV_1SCF9jgaoEdD0HeMBDCT0Dmt34dAL1FZfIqcdALv8-DRUh1BPpRR0fPY7VYkgNtpV_7WDSaYXIDW8iF-LBe2qQLdkJG7R-8coQRSRgvfLkzeDEIHtntK8FubLtBH29AM88wAhkOvOaQRzlAFu8ySsn8xRKDOYFxy_ZuMhFT-pZ5fHJSpy-ha64PcEgPqoLktwGfpaVs2ogxB5aUUgZ0Hgzi7h-GlmDkkE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQj6oA9Qm0Urpok91aOis33VliQ22sV67plND_qdV3aOt1kwAghn__4UcctDszVZcrYwRaR7Q1dEU7KwI-ubuWFL-XnP05i_Cr49heFE8hMI5cDAhWO1q6Gl8YgR0UmI-auJ6mwD-_R3lg7_k57iOByw-CZOboaI7bx9Ec1dreSRgjKOfJb4NOfPFhVFyuB9kIF_UiQrXqysToj10KO2-BP8VBXk4XUV03xITAH7I",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCFf4dKeGEPqjTwEx6xxFnMnVWTVZ5E8g_OuDV4Fyu6qq56RjoScoyXJwgxSKO4MpCBQI_vF3pfZdFvRO5gMeRMVm7bXzyUmfY4C_5VF9qTxpsZoPHIwnF602DfXR_K18i0dVmrTsnk0e0Bk60_Qq9tupA7hcoyryDE4SxCtj6nTpQfV_tX543d1NZGexrP9VWoQh9c6nnvyI82603fndn65LWIACBG8Sv0kQEoMoc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD0hvEBm88lPgGNdQnVDYOqLcsSsdaciMYmH-rOzwvj0Hc0V3Q2Ln2261mQ49dWUUJsoXvcAAu2se2SYWz_hI7jGqRqoc2xzkVqKFDSeqb920RFLilEJhv2lC-uL1Iv-T_U_NMscyqI9J7Jq3EXUvWIVwg56iqYu5HKEZhdeQd4E9XkRHJT7RzXz5K8KeCe84kid06rLO0nJrqTGahnw9vAhIS979i5rOxUyr6s514"
];

const origins = [
  {
    name: "Bến Tre",
    note: "Dấu ấn miền sông nước",
    title: "Hương vị trái cây dịu dàng",
    description:
      "Vùng đất phù sa miền Tây gợi cảm hứng cho những thanh socola có hương thơm mềm mại, tươi sáng và hậu vị dễ chịu.",
    image: pictures[3],
  },
  {
    name: "Tiền Giang",
    note: "Nét đặc trưng miền nhiệt đới",
    title: "Tinh tế trong từng tầng hương",
    description:
      "Từ câu chuyện của các vùng trồng cacao Việt Nam, chúng tôi tìm kiếm sự cân bằng giữa vị đậm, vị chua thanh và nét ngọt tự nhiên.",
    image: pictures[4],
  },
  {
    name: "Đắk Lắk",
    note: "Cảm hứng từ đất đỏ bazan",
    title: "Đậm đà và sâu lắng",
    description:
      "Sắc nâu trầm của hạt cacao cùng những lớp hương phong phú là nguồn cảm hứng cho trải nghiệm thưởng thức đầy cá tính.",
    image: pictures[5],
  },
];

const steps = [
  { icon: "fa-seedling", title: "Chọn nguyên liệu", detail: "Tìm hiểu nguồn gốc cacao và cân nhắc sự hòa hợp giữa các nguyên liệu." },
  { icon: "fa-leaf", title: "Sơ chế tỉ mỉ", detail: "Mỗi công đoạn được chú trọng để giữ trọn đặc trưng của hạt cacao." },
  { icon: "fa-fire-flame-curved", title: "Rang hạt", detail: "Nhiệt độ và thời gian rang ảnh hưởng đến màu sắc, hương thơm của socola." },
  { icon: "fa-blender", title: "Nghiền mịn", detail: "Kết cấu mượt mà giúp trải nghiệm socola trở nên dễ chịu hơn." },
  { icon: "fa-cubes-stacked", title: "Tạo hình", detail: "Từng thanh socola và viên quà được tạo hình để vừa ngon vừa đẹp mắt." },
  { icon: "fa-gift", title: "Trao gửi", detail: "Hộp quà chỉn chu biến món socola thành lời nhắn tinh tế." },
];

const values = [
  { icon: "fa-heart", title: "Tận tâm", description: "Chú trọng những chi tiết nhỏ trong trải nghiệm lựa chọn và trao tặng socola." },
  { icon: "fa-seedling", title: "Cảm hứng Việt", description: "Trân trọng câu chuyện về cacao và nguồn nguyên liệu bản địa." },
  { icon: "fa-gem", title: "Tinh tế", description: "Đề cao thiết kế trang nhã, hương vị hài hòa và cảm xúc của người nhận." },
  { icon: "fa-hand-holding-heart", title: "Kết nối", description: "Tin rằng một món quà nhỏ cũng có thể làm khoảnh khắc trở nên đáng nhớ." },
];

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="about-section-intro">
      <span className="about-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-container about-hero-layout">
          <div className="about-hero-copy">
            <span className="about-hero-tag"><i className="fa-solid fa-leaf" aria-hidden="true"/> CÂU CHUYỆN THƯƠNG HIỆU</span>
            <h1 id="about-heading">Hành trình đánh thức vị giác từ hạt cacao bản địa</h1>
            <p>
              Socola không chỉ là một món ngọt. Đó còn là niềm vui được sẻ chia,
              là sự tinh tế trong từng hương vị và là cách chúng ta trao nhau những khoảnh khắc ngọt ngào.
            </p>
            <div className="about-hero-actions">
              <a className="about-button about-button-light" href="#cau-chuyen">Khám phá câu chuyện <i className="fa-solid fa-arrow-down" aria-hidden="true"/></a>
              <a className="about-text-link" href="#quy-trinh">Tìm hiểu quy trình <i className="fa-solid fa-arrow-right" aria-hidden="true"/></a>
            </div>
          </div>
          <div className="about-hero-photo">
            <img src={pictures[0]} alt="Nghệ nhân đang tạo hình socola thủ công" fetchPriority="high" />
            <div className="about-photo-note">
              <span className="about-note-quote">“</span>
              <p>Mỗi hương vị đều có một câu chuyện để kể.</p>
              <small>ChocoLuxe · Cảm hứng từ cacao</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-story" id="cau-chuyen" aria-labelledby="story-heading">
        <div className="about-container about-story-layout">
          <div className="about-story-photos">
            <img src={pictures[1]} alt="Trái cacao được thu hoạch tại vườn" loading="lazy" />
            <img src={pictures[2]} alt="Quá trình chế biến cacao thủ công" loading="lazy" />
          </div>
          <div className="about-story-copy">
            <span className="about-eyebrow">TÂM HUYẾT & CẢM HỨNG</span>
            <h2 id="story-heading">Từ tình yêu cacao đến những món quà ngọt ngào</h2>
            <p>
              Việt Nam có nhiều vùng trồng cacao mang những đặc trưng riêng về khí hậu, đất đai
              và hương vị. Câu chuyện của những hạt cacao ấy chính là cảm hứng cho ChocoLuxe.
            </p>
            <p>
              Chúng tôi mong muốn mang đến một không gian để mọi người khám phá socola, lựa chọn
              hương vị yêu thích và tìm thấy món quà phù hợp với từng dịp đặc biệt.
            </p>
            <p>
              Từ cách giới thiệu sản phẩm đến việc gói ghém lời chúc, ChocoLuxe hướng tới trải
              nghiệm mua sắm gần gũi nhưng vẫn giữ được nét tinh tế và chỉn chu.
            </p>
            <div className="about-story-points" aria-label="Ba điều chúng tôi hướng đến">
              <div><strong>01</strong><span>Hương vị<br/>đáng nhớ</span></div>
              <div><strong>02</strong><span>Món quà<br/>tinh tế</span></div>
              <div><strong>03</strong><span>Khoảnh khắc<br/>gắn kết</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-origins" id="vung-cacao" aria-labelledby="origins-heading">
        <div className="about-container">
          <SectionIntro eyebrow="HƯƠNG VỊ TỪ THIÊN NHIÊN" title="Cảm hứng từ những vùng cacao Việt Nam"
            description="Mỗi vùng đất mang một sắc thái riêng. Cùng tìm hiểu những câu chuyện hương vị gợi nên nét đặc trưng của cacao Việt." />
          <div className="about-origin-grid">
            {origins.map((origin) => (
              <article className="about-origin-card" key={origin.name}>
                <div className="about-origin-image">
                  <img src={origin.image} alt={`Hình ảnh nguyên liệu cacao gợi cảm hứng từ ${origin.name}`} loading="lazy" />
                  <span className="about-image-badge">{origin.name}</span>
                </div>
                <div className="about-origin-content">
                  <span className="about-origin-note"><i className="fa-solid fa-location-dot" aria-hidden="true" /> {origin.note}</span>
                  <h3>{origin.title}</h3>
                  <p>{origin.description}</p>
                  <span className="about-origin-foot">Cảm hứng cacao Việt Nam <i className="fa-solid fa-leaf" aria-hidden="true" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-process" id="quy-trinh" aria-labelledby="process-heading">
        <div className="about-container">
          <SectionIntro eyebrow="TỪ HẠT CACAO ĐẾN THANH SOCOLA" title="Hành trình chế tác đầy cảm hứng"
            description="Khám phá sáu công đoạn tiêu biểu trong quá trình tạo nên những thanh socola mà chúng ta yêu thích." />
          <div className="about-steps">
            {steps.map((step, index) => (
              <article className="about-step" key={step.title}>
                <span className="about-step-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="about-step-icon"><i className={`fa-solid ${step.icon}`} aria-hidden="true" /></div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-values" aria-labelledby="values-heading">
        <div className="about-container">
          <SectionIntro eyebrow="ĐIỀU CHÚNG TÔI TRÂN TRỌNG" title="Những giá trị làm nên ChocoLuxe"
            description="Sự chân thành, cảm hứng từ nguyên liệu và niềm vui trao tặng là nền tảng cho trải nghiệm mà chúng tôi hướng tới." />
          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.title}>
                <span className="about-value-icon"><i className={`fa-solid ${value.icon}`} aria-hidden="true" /></span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-quote-section" aria-label="Thông điệp từ ChocoLuxe">
        <div className="about-container about-quote-layout">
          <div className="about-quote-image"><img src={pictures[6]} alt="Nghệ nhân quan sát và thưởng thức socola" loading="lazy" /></div>
          <div className="about-quote-copy">
            <span className="about-eyebrow">CẢM HỨNG CỦA CHÚNG TÔI</span>
            <blockquote>“Socola không chỉ để nếm, đó là một cách trao gửi cảm xúc.”</blockquote>
            <p>
              Một thanh socola trong buổi chiều thư thả, một hộp quà dành cho người thương
              hay lời cảm ơn được gói ghém cẩn thận — điều đáng nhớ nằm ở cảm xúc phía sau món quà.
            </p>
            <span className="about-quote-signature">ChocoLuxe <span>· Những khoảnh khắc ngọt ngào</span></span>
          </div>
        </div>
      </section>

      <section className="about-section about-experience" aria-labelledby="experience-heading">
        <div className="about-container">
          <SectionIntro eyebrow="KHÔNG GIAN THƯỞNG THỨC" title="Socola cho từng khoảnh khắc"
            description="Dù thưởng thức một mình hay dành tặng người quan trọng, mỗi lựa chọn đều có thể mang một câu chuyện riêng." />
          <div className="about-experience-grid">
            <article className="about-experience-card">
              <img src={pictures[7]} alt="Không gian thưởng thức socola ấm áp" loading="lazy" />
              <div><span className="about-eyebrow">CHẠM VÀO VỊ GIÁC</span><h3>Một phút thư thái cho riêng mình</h3><p>Chậm lại một chút để cảm nhận hương cacao, kết cấu và dư vị ở từng miếng socola.</p></div>
            </article>
            <article className="about-experience-card">
              <img src={pictures[8]} alt="Không gian trưng bày những món quà socola" loading="lazy" />
              <div><span className="about-eyebrow">TRAO GỬI YÊU THƯƠNG</span><h3>Món quà nhỏ, lời nhắn lớn</h3><p>Chọn một hộp socola tinh tế để chúc mừng, cảm ơn hoặc đơn giản là quan tâm ai đó.</p></div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

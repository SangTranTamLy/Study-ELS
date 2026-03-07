import bgr from "../assets/bgr-study-els.png";
import './Home.css'

interface HomeProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const features = [
  {
    icon: "📚",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    title: "Vocabulary",
    desc: "Học từ vựng theo flashcard thông minh, lặp lại theo chu kỳ để nhớ lâu.",
    tab: "3",
  },
  {
    icon: "📖",
    gradient: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    title: "Dictionary",
    desc: "Tra từ điển Anh-Việt chính xác với phát âm, ví dụ và từ liên quan.",
    tab: "4",
  },
  {
    icon: "🌐",
    gradient: "linear-gradient(135deg,#10b981,#0ea5e9)",
    title: "Translator",
    desc: "Dịch thuật đa ngôn ngữ tức thì, hỗ trợ hơn 100 ngôn ngữ.",
    tab: "5",
  },
  {
    icon: "🔍",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    title: "Thesaurus",
    desc: "Khám phá từ đồng nghĩa, trái nghĩa để làm phong phú vốn từ.",
    tab: "6",
  },
  {
    icon: "✍️",
    gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)",
    title: "Quiz",
    desc: "Kiểm tra kiến thức qua bài quiz đa dạng, theo dõi tiến độ.",
    tab: "2",
  },
  {
    icon: "🤖",
    gradient: "linear-gradient(135deg,#6366f1,#ec4899)",
    title: "AI Practice",
    desc: "Luyện nói & viết với AI, nhận phân tích trình độ cá nhân hóa.",
    tab: "2",
  },
];

const steps = [
  { num: "01", title: "Tạo tài khoản miễn phí", text: "Đăng ký trong vài giây, không cần thẻ tín dụng." },
  { num: "02", title: "Chọn lộ trình học", text: "Từ cơ bản đến nâng cao, tự điều chỉnh theo tốc độ của bạn." },
  { num: "03", title: "Luyện tập mỗi ngày", text: "Bài tập ngắn, hiệu quả cao – chỉ 10 phút mỗi ngày là đủ." },
  { num: "04", title: "Theo dõi tiến độ", text: "AI phân tích điểm yếu, gợi ý bài ôn tập phù hợp nhất." },
];

const stats = [
  { value: "10K+", label: "Học viên" },
  { value: "50K+", label: "Từ vựng" },
  { value: "6", label: "Tính năng" },
  { value: "100%", label: "Miễn phí" },
];

function Home({ setTab }: HomeProps) {
  return (
    <div className="home">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />

        <div className="hero__inner">
          <div className="hero__text">
            <span className="hero__badge">✦ Nền tảng học tiếng Anh #1</span>

            <h1 className="hero__heading">
              Học tiếng Anh <span className="hero__heading-gradient">thông minh hơn</span> mỗi ngày
            </h1>

            <p className="hero__desc">
              Study ELS tích hợp AI, từ điển, quiz và flashcard — giúp bạn
              nâng cao tiếng Anh nhanh chóng, linh hoạt và hiệu quả.
            </p>

            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => setTab("3")}>
                Bắt đầu miễn phí →
              </button>
              <button className="btn btn--ghost" onClick={() => setTab("2")}>
                Làm thử Quiz
              </button>
            </div>

            <div className="hero__stats">
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__img-wrap">
              <img src={bgr} alt="Study ELS" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────── */}
      <section className="features">
        <div className="container">
          <p className="section__eyebrow">Tính năng</p>
          <h2 className="section__title">Mọi thứ bạn cần để <span className="text-gradient">giỏi tiếng Anh</span></h2>
          <p className="section__sub">Từ điển, quiz, dịch thuật đến AI luyện nói — tất cả trong một nền tảng.</p>

          <div className="features__grid">
            {features.map((f, i) => (
              <button key={i} className="feat-card" onClick={() => setTab(f.tab)}>
                <div className="feat-card__icon" style={{ background: f.gradient }}>
                  {f.icon}
                </div>
                <h3 className="feat-card__title">{f.title}</h3>
                <p className="feat-card__desc">{f.desc}</p>
                <span className="feat-card__link">Khám phá →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="how">
        <div className="container">
          <p className="section__eyebrow">Cách hoạt động</p>
          <h2 className="section__title">Bắt đầu chỉ trong<span className="text-gradient"> 4 bước</span></h2>

          <div className="how__grid">
            {steps.map((s, i) => (
              <div key={i} className="how__step">
                <div className="how__num">{s.num}</div>
                <h3 className="how__step-title">{s.title}</h3>
                <p className="how__step-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cta">
        <div className="cta__glow" />
        <div className="cta__inner">
          <h2 className="cta__title">Sẵn sàng nâng cấp tiếng Anh?</h2>
          <p className="cta__sub">Tham gia cùng hàng nghìn học viên đang học mỗi ngày với Study ELS.</p>
          <button className="btn btn--primary btn--lg" onClick={() => setTab("3")}>
            Bắt đầu ngay — Miễn phí
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;
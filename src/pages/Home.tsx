import bgr from "../assets/bgr-study-els.png";
import './Home.css'

interface HomeProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ setTab }: HomeProps) {
  return (
    <main className="home">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-container">
          
          {/* TEXT */}
          <div className="hero-text">
            <h1 className="title">
              BẠN CÓ ĐANG <br />
              HỌC TIẾNG ANH HIỆU QUẢ?
              <div className="aurora">
                <span className="aurora__item"></span>
                <span className="aurora__item"></span>
              </div>
            </h1>

            <h3 className="subtitle">Nền tảng học tiếng Anh thông minh</h3>

            <p className="description">
              Study ELS tích hợp từ vựng, từ điển, dịch thuật, quiz và AI luyện
              nghe – nói, giúp nâng cao kỹ năng tiếng Anh một cách linh hoạt.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setTab("2")}>Làm Quiz</button>
              <button className="btn btn-outline" onClick={() => setTab("3")}>Bắt đầu học</button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="hero-image">
            <img src={bgr} alt="Study ELS Background" className="home-bgr" />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">Về Study ELS</h2>
          <p className="about-text">
            Study ELS là nền tảng học tiếng Anh thông minh dành cho người Việt Nam,
            kết hợp AI và phương pháp học hiện đại, mang đến trải nghiệm cá nhân hóa.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Tính Năng Nổi Bật</h2>
          <div className="features-grid">
            {[
              { icon: "📚", title: "Vocabulary", desc: "Học từ vựng theo flashcard thông minh." },
              { icon: "📖", title: "Dictionary", desc: "Từ điển Anh-Việt chuẩn xác." },
              { icon: "🌐", title: "Translator", desc: "Dịch thuật đa ngôn ngữ chính xác." },
              { icon: "🔍", title: "Thesaurus", desc: "Khám phá từ đồng nghĩa, trái nghĩa." },
              { icon: "✍️", title: "Quiz", desc: "Kiểm tra kiến thức & theo dõi tiến độ." },
              { icon: "🤖", title: "AI Practice", desc: "Luyện nói & viết, AI phân tích level." },
            ].map((f, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-description">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="approach-section">
        <div className="section-container">
          <h2 className="section-title">Phương Pháp Học Tập</h2>
          <div className="approach-content">
            {[
              { num: "01", title: "Lộ Trình Học", text: "Từ cơ bản đến nâng cao, phù hợp mọi trình độ." },
              { num: "02", title: "Thực Hành Đều Đặn", text: "Bài tập đa dạng củng cố kiến thức." },
              { num: "03", title: "Đánh Giá & Phản Hồi", text: "AI phân tích & gợi ý học tập cá nhân hóa." },
            ].map((a, idx) => (
              <div key={idx} className="approach-item">
                <div className="approach-number">{a.num}</div>
                <div>
                  <h3 className="approach-item-title">{a.title}</h3>
                  <p className="approach-item-text">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Bắt đầu ngay</h2>
          <p className="cta-description">
            Học tiếng Anh thông minh với Study ELS – Learn smarter, not harder.
          </p>
          <button className="btn btn-cta" onClick={() => setTab("vocabulary")}>Bắt đầu học</button>
        </div>
      </section>

    </main>
  );
}

export default Home;
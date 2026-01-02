import bgr from "../assets/bgr-study-els.png";
import './Home.css'
function Home() {
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

              {/* AURORA EFFECT */}
              <div className="aurora">
                <span className="aurora__item"></span>
                <span className="aurora__item"></span>
                <span className="aurora__item"></span>
                <span className="aurora__item"></span>
              </div>
            </h1>

            <h3 className="subtitle">Nền tảng học tiếng Anh thông minh</h3>

            <p className="description">
              Study ELS là website học tiếng Anh trực tuyến, tích hợp nhiều công cụ
              học tập hiện đại như từ vựng, từ điển, dịch thuật, quiz và AI luyện
              nghe – nói, giúp người học nâng cao kỹ năng tiếng Anh một cách
              chủ động, linh hoạt và hiệu quả.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary">Làm Quiz</button>
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
            Study ELS là nền tảng học tiếng Anh thông minh được thiết kế đặc biệt cho 
            người Việt Nam. Chúng tôi kết hợp phương pháp giảng dạy hiện đại với công nghệ 
            AI để mang đến trải nghiệm học tập cá nhân hóa, hiệu quả và thú vị.
          </p>
          <p className="about-text">
            Với hơn 50,000 học viên tin tưởng, Study ELS cam kết đồng hành cùng bạn trên 
            hành trình chinh phục tiếng Anh từ cơ bản đến nâng cao.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Tính Năng Nổi Bật</h2>
          <div className="features-grid">
            {/* Feature Card 1: Vocabulary */}
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Vocabulary</h3>
              <p className="feature-description">
                Học từ vựng theo chủ đề với hệ thống flashcard thông minh, 
                giúp ghi nhớ lâu hơn và ứng dụng hiệu quả.
              </p>
            </div>

            {/* Feature Card 2: Dictionary */}
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3 className="feature-title">Dictionary</h3>
              <p className="feature-description">
                Từ điển Anh-Việt, Việt-Anh với phát âm chuẩn, ví dụ minh họa 
                và giải thích chi tiết dễ hiểu.
              </p>
            </div>

            {/* Feature Card 3: Translator */}
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Translator</h3>
              <p className="feature-description">
                Công cụ dịch thuật chính xác hỗ trợ nhiều ngôn ngữ, 
                giúp bạn hiểu ngữ cảnh và cách sử dụng từ đúng nhất.
              </p>
            </div>

            {/* Feature Card 4: Thesaurus */}
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">Thesaurus</h3>
              <p className="feature-description">
                Khám phá từ đồng nghĩa, trái nghĩa để làm phong phú vốn từ 
                và nâng cao kỹ năng viết của bạn.
              </p>
            </div>

            {/* Feature Card 5: Quiz */}
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3 className="feature-title">Quiz</h3>
              <p className="feature-description">
                Kiểm tra kiến thức với bài quiz đa dạng, 
                theo dõi tiến độ và xác định điểm cần cải thiện.
              </p>
            </div>

            {/* Feature Card 6: AI Practice */}
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI Practice</h3>
              <p className="feature-description">
                Luyện tập giao tiếp với trợ lý AI thông minh, 
                nhận phản hồi tức thì và cải thiện kỹ năng hội thoại.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="approach-section">
        <div className="section-container">
          <h2 className="section-title">Phương Pháp Học Tập</h2>
          <div className="approach-content">
            <div className="approach-item">
              <div className="approach-number">01</div>
              <h3 className="approach-item-title">Học Theo Lộ Trình</h3>
              <p className="approach-item-text">
                Chương trình học được thiết kế khoa học, từ cơ bản đến nâng cao, 
                phù hợp với mọi trình độ.
              </p>
            </div>
            <div className="approach-item">
              <div className="approach-number">02</div>
              <h3 className="approach-item-title">Thực Hành Đều Đặn</h3>
              <p className="approach-item-text">
                Luyện tập mỗi ngày với bài tập đa dạng, 
                củng cố kiến thức và phát triển kỹ năng toàn diện.
              </p>
            </div>
            <div className="approach-item">
              <div className="approach-number">03</div>
              <h3 className="approach-item-title">Đánh Giá & Phản Hồi</h3>
              <p className="approach-item-text">
                Hệ thống AI phân tích tiến độ, đưa ra đánh giá chi tiết 
                và gợi ý học tập cá nhân hóa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study ELS Section */}
      <section className="why-section">
        <div className="section-container">
          <h2 className="section-title">Tại Sao Chọn Study ELS?</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3 className="why-item-title">💡 Công Nghệ AI Tiên Tiến</h3>
              <p className="why-item-text">
                Ứng dụng trí tuệ nhân tạo để cá nhân hóa trải nghiệm học tập, 
                tối ưu hóa hiệu quả và tiết kiệm thời gian.
              </p>
            </div>
            <div className="why-item">
              <h3 className="why-item-title">🎯 Nội Dung Chất Lượng</h3>
              <p className="why-item-text">
                Tài liệu học được biên soạn bởi đội ngũ giáo viên có kinh nghiệm, 
                cập nhật liên tục theo xu hướng mới.
              </p>
            </div>
            <div className="why-item">
              <h3 className="why-item-title">📱 Học Mọi Lúc, Mọi Nơi</h3>
              <p className="why-item-text">
                Truy cập trên mọi thiết bị, học tập linh hoạt theo lịch trình 
                riêng của bạn, không bị giới hạn thời gian.
              </p>
            </div>
            <div className="why-item">
              <h3 className="why-item-title">🏆 Cộng Đồng Năng Động</h3>
              <p className="why-item-text">
                Tham gia cộng đồng học viên sôi động, trao đổi kinh nghiệm 
                và cùng nhau tiến bộ mỗi ngày.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
        <h2 className="cta-title">Get Started</h2>
          <p className="cta-description">
            Bắt đầu hành trình học tiếng Anh của bạn ngay hôm nay với
            Study ELS – Learn smarter, not harder.
          </p>
          <button className="btn btn-cta">Bắt đầu học</button>
        </div>
      </section>
    </main>
  );
}

export default Home;

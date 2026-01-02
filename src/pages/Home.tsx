import React from "react";
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
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-outline">Sign up</button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="hero-image">
            <img src={bgr} alt="Study ELS Background" className="home-bgr" />
          </div>

        </div>
      </section>

      {/* WHAT IS */}
      <section className="home-section">
        <div class="about-content">
          <h2>What is Study ELS?</h2>

          <p>Study ELS được xây dựng nhằm hỗ trợ:</p>

          <ul>
            <li>Sinh viên</li>
            <li>Người mới bắt đầu học tiếng Anh</li>
            <li>Người tự học</li>
            <li>Người muốn cải thiện giao tiếp và phản xạ tiếng Anh</li>
          </ul>

          <p>
            Nền tảng tập trung vào trải nghiệm học đơn giản, dễ tiếp cận,
            phù hợp với người học tiếng Anh tại Việt Nam.
          </p>

          {/* FEATURES */}
          <h2>Features</h2>

          <div className="feature">
            <h3>📘 Vocabulary</h3>
            <ul>
              <li>Từ vựng theo chủ đề và cấp độ</li>
              <li>Phát âm chuẩn Anh – Mỹ</li>
              <li>Ví dụ minh họa rõ ràng</li>
              <li>Hỗ trợ ôn tập giúp nhớ lâu</li>
            </ul>
          </div>
          <div className="feature">
            <h3>📖 Dictionary</h3>
            <ul>
              <li>Từ điển Anh – Việt, Anh – Anh</li>
              <li>Giải thích dễ hiểu</li>
              <li>Phiên âm và phát âm chuẩn</li>
              <li>Ví dụ thực tế</li>
            </ul>
          </div>
          <div className="feature">
            <h3>🌐 Translator</h3>
            <ul>
              <li>Dịch từ, câu và đoạn văn</li>
              <li>Phù hợp cho học tập và nghiên cứu</li>
              <li>Gợi ý cách diễn đạt tự nhiên</li>
            </ul>
          </div>
          <div className="feature">
            <h3>🧠 Thesaurus</h3>
            <ul>
              <li>Từ đồng nghĩa và trái nghĩa</li>
              <li>Phân biệt sắc thái nghĩa</li>
              <li>Tránh lặp từ khi viết và nói</li>
            </ul>
          </div>
          <div className="feature">
            <h3>📝 Quiz</h3>
            <ul>
              <li>Quiz từ vựng</li>
              <li>Quiz ngữ pháp</li>
              <li>Quiz nghe hiểu</li>
              <li>Đánh giá kết quả sau mỗi bài</li>
              <li>Gợi ý cải thiện điểm yếu</li>
            </ul>
          </div>

          <div className="feature">
            <h3>🤖 AI Practice</h3>
            <ul>
              <li>Luyện nghe theo cấp độ</li>
              <li>Luyện nói với nhận diện giọng nói</li>
              <li>AI phản hồi phát âm</li>
              <li>Mô phỏng hội thoại thực tế</li>
              <li>Cải thiện phản xạ giao tiếp</li>
            </ul>
          </div>
          {/* LEARNING APPROACH */}
          <h2>Learning Approach</h2>
          <ul>
            <li>Học từng bước, không áp lực</li>
            <li>Luyện tập đi kèm thực hành</li>
            <li>Cá nhân hóa theo trình độ người học</li>
            <li>Tập trung vào sử dụng tiếng Anh thực tế</li>
          </ul>
          {/* WHY */}
          <h2>Why Study ELS?</h2>
          <ul>
            <li>Giao diện đơn giản, dễ sử dụng</li>
            <li>Nội dung học tập rõ ràng</li>
            <li>Học mọi lúc, mọi nơi</li>
            <li>Tích hợp công nghệ AI hiện đại</li>
            <li>Phù hợp cho người học Việt Nam</li>
          </ul>
          {/* VISION */}
          <h2>Vision</h2>
          <p>
            Study ELS hướng tới việc trở thành nền tảng hỗ trợ học tiếng Anh
            đáng tin cậy, giúp người học tự tin sử dụng tiếng Anh trong học
            tập và cuộc sống.
          </p>
          {/* CTA */}
          <h2>Get Started</h2>
          <p>
            Bắt đầu hành trình học tiếng Anh của bạn ngay hôm nay với
            Study ELS – Learn smarter, not harder.
          </p>
          <button>Bắt đầu học</button>
        </div>
      </section>
    </main>
  );
}

export default Home;

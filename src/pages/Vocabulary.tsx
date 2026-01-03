// src/pages/Vocabulary.tsx

function Vocabulary() {
  return (
    <main className="page vocabulary-page">
        <section className="hero">
            <div className="hero-content">
                <h2>Vocabulary</h2>
                <p>Học từ vựng theo chủ đề với hệ thống flashcard thông minh, giúp ghi nhớ lâu và ứng dụng hiệu quả.</p>

                {/* Ví dụ danh sách từ vựng */}
                <ul>
                <li>Apple 🍎 – Quả táo</li>
                <li>Book 📖 – Sách</li>
                <li>Computer 💻 – Máy tính</li>
                <li>School 🏫 – Trường học</li>
                </ul>
            </div>
        </section>
    </main>
  );
}

export default Vocabulary;

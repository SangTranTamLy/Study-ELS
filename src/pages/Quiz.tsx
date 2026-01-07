import React, { useState } from "react";

interface QuizProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

interface Question {
  id: number;
  type: "vocabulary" | "grammar" | "listening" | "reading";
  question: string;
  options: string[];
  answer: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    type: "vocabulary",
    question: "What is the meaning of 'apple'?",
    options: ["Quả táo", "Quả cam", "Quả chuối", "Quả nho"],
    answer: "Quả táo",
  },
  {
    id: 2,
    type: "grammar",
    question: "Choose the correct form: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes",
  },
  {
    id: 3,
    type: "reading",
    question: "Select the main idea of the paragraph: 'Cats are popular pets because they are independent and playful.'",
    options: [
      "Dogs are loyal",
      "Cats are popular pets",
      "Birds can fly",
      "Fish are easy to keep",
    ],
    answer: "Cats are popular pets",
  },
  {
    id: 4,
    type: "listening",
    question: "Listen and choose the correct word: [Audio placeholder: 'Hello']",
    options: ["Hello", "Goodbye", "Thank you", "Please"],
    answer: "Hello",
  },
];

const Quiz: React.FC<QuizProps> = ({ setTab }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === mockQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < mockQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", color: "#333" }}>
      {!showResult ? (
        <>
          <h1>Quiz</h1>
          <p>Kiểm tra từ vựng, ngữ pháp, nghe, đọc</p>

          <div style={{ marginTop: "30px", background: "#f4f4f4", padding: "20px", borderRadius: "12px" }}>
            <h3>Question {currentQuestion + 1} / {mockQuestions.length}</h3>
            <p>{mockQuestions[currentQuestion].question}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              {mockQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: selectedOption === option ? "2px solid #667eea" : "1px solid #ccc",
                    background: selectedOption === option ? "#e0e7ff" : "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              style={{ marginTop: "20px", padding: "12px 24px", borderRadius: "8px", background: "#667eea", color: "#fff" }}
              onClick={handleNext}
              disabled={!selectedOption}
            >
              {currentQuestion + 1 === mockQuestions.length ? "Xem kết quả" : "Câu tiếp theo"}
            </button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Kết quả Quiz</h1>
          <p>Bạn trả lời đúng {score} / {mockQuestions.length} câu hỏi</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
            <button
              style={{ padding: "12px 24px", borderRadius: "8px", background: "#667eea", color: "#fff" }}
              onClick={handleRestart}
            >
              Làm lại
            </button>
            <button
              style={{ padding: "12px 24px", borderRadius: "8px", background: "#999", color: "#fff" }}
              onClick={() => setTab("1")}
            >
              Quay về Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index của đáp án đúng
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: 2,
  },
  {
    id: 2,
    question: "Which language is used in React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: 1,
  },
  {
    id: 3,
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main className="quiz-page">
      <h1>Quiz</h1>

      {!showResult ? (
        <div className="question-container">
          <h2>{questions[current].question}</h2>
          <div className="options">
            {questions[current].options.map((opt, idx) => (
              <label key={idx} style={{ display: "block", margin: "8px 0" }}>
                <input
                  type="radio"
                  name={`question-${current}`}
                  value={idx}
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                />
                {opt}
              </label>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={selected === null}
            style={{ marginTop: "10px" }}
          >
            {current + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="result">
          <h2>Kết quả</h2>
          <p>
            Bạn trả lời đúng {score} / {questions.length} câu.
          </p>
        </div>
      )}
    </main>
  );
}

export default Quiz;

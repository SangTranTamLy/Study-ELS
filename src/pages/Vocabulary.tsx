import React from "react";
import "./Vocabulary.css";
interface VocabularyProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

function Vocabulary({ setTab }: VocabularyProps) {
  return (
    <div className="vocabulary-page">
      <div className="voca-container">

        {/* Header */}
        <div className="voca-header">
          <h1 className="voca-title">Welcome back</h1>
          <p className="voca-desc">
            You're just a few words away from your daily goal.
          </p>
        </div>

        {/* Main layout */}
        <div className="voca-grid">

          {/* Word Card */}
          <div className="voca-word-card">
            <span className="voca-badge">WORD OF THE MOMENT</span>

            <h2 className="voca-word">Ephemeral</h2>

            <p className="voca-meaning">
              "Lasting for a very short time."
            </p>

            <div className="voca-actions">
              <button className="voca-btn">Flip Card</button>
              <button className="voca-sound">🔊</button>
            </div>
          </div>

          {/* Progress */}
          <div className="voca-progress-card">

            <h3>Daily Progress</h3>

            <div className="voca-progress-circle">
              <span>75%</span>
            </div>

            <div className="voca-progress-bars">
              <div>
                <span>Words Today</span>
                <div className="voca-bar">
                  <div style={{width:"70%"}}></div>
                </div>
              </div>

              <div>
                <span>Time Spent</span>
                <div className="voca-bar">
                  <div style={{width:"60%"}}></div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Roadmap */}
        <div className="voca-roadmap">

          <h2 className="voca-roadmap-title">
            Learning Roadmap
          </h2>

          <div className="voca-roadmap-grid">

            <div className="voca-path-card">
              <h3>Business English</h3>
              <p>Corporate vocabulary and communication.</p>
              <span>65% Done</span>
            </div>

            <div className="voca-path-card">
              <h3>IELTS Academic</h3>
              <p>High-tier vocabulary for IELTS exams.</p>
              <span>12% Done</span>
            </div>

            <div className="voca-path-card">
              <h3>Slang & Pop Culture</h3>
              <p>Modern expressions and trending language.</p>
              <span>88% Done</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Vocabulary;
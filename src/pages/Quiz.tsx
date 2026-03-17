import "./Quiz.css";
function Quiz() {
  return (
    <div className="quizzes-page">
      <div className="quizzes-container">
        <div className="quizzes-main">
          {/* Daily Challenge Banner */}
          <div className="quiz-banner">
            <div className="banner-content">
              <span className="banner-badge">DAILY CHALLENGE</span>
              <h1 className="banner-title">Advanced Idioms Mastery</h1>
              <p className="banner-desc">
                Test your knowledge of nuanced British and American expressions
                used in executive meetings and professional settings.
              </p>
              <div className="banner-info">
                <span>⏱️ 10 Mins</span>
                <span>• 15 Questions</span>
                <span>• Hard</span>
              </div>
              <button className="banner-btn">Play Now</button>
            </div>
            <div className="banner-image"></div>
          </div>
          
          {/* Right Section */}
          <div className="quizzes-right">
            
            {/* User Profile */}
            <div className="user-profile">
              <div className="profile-avatar">👤</div>
              <h3>Alex Johnson</h3>
              <p>Level 12 • Fluent Explorer</p>
            </div>

            {/* Streak */}
            <div className="streak-card">
              <div className="streak-icon">🔥</div>
              <div>
                <h4>14 Day Streak</h4>
                <p>Keep it up!</p>
              </div>
            </div>

            {/* Global Ranking */}
            <div className="ranking-card">
              <div className="ranking-header">
                <h3>🏆 Global Ranking</h3>
              </div>

              <div className="ranking-list">
                
                <div className="ranking-item">
                  <span className="rank-number">1</span>
                  <div className="rank-avatar">👤</div>
                  <div className="rank-info">
                    <h4>Mark Sterling</h4>
                    <p>12,680 XP</p>
                  </div>
                </div>

                <div className="ranking-item">
                  <span className="rank-number">2</span>
                  <div className="rank-avatar">👤</div>
                  <div className="rank-info">
                    <h4>Sarah Jenkins</h4>
                    <p>11,900 XP</p>
                  </div>
                </div>

                <div className="ranking-item">
                  <span className="rank-number">3</span>
                  <div className="rank-avatar">👤</div>
                  <div className="rank-info">
                    <h4>David Chen</h4>
                    <p>10,200 XP</p>
                  </div>
                </div>

                <div className="ranking-item you">
                  <span className="rank-number">42</span>
                  <div className="rank-avatar">👤</div>
                  <div className="rank-info">
                    <h4>You (Alex J.)</h4>
                    <p>4,820 XP</p>
                  </div>
                </div>

              </div>

              <button className="full-leaderboard-btn">FULL LEADERBOARD</button>
            </div>

            {/* Pro Tip */}
            <div className="pro-tip-card">
              <div className="tip-icon">💡</div>
              <h4>Pro Tip</h4>
              <p>"Try to read one English news article every morning. It improves contextual vocabulary by 40%."</p>
              <button className="tip-btn">GOT IT</button>
            </div>
          </div>
          {/* Left Section */}
          <div className="quizzes-left">
            
            {/* Practice Areas */}
            <div className="practice-areas">
              <div className="areas-header">
                <h2>Practice Areas</h2>
                <a href="#" className="view-all">View All →</a>
              </div>

              <div className="areas-tabs">
                <button className="area-tab active">VOCABULARY</button>
                <button className="area-tab">GRAMMAR</button>
                <button className="area-tab">READING</button>
                <button className="area-tab">LISTENING</button>
              </div>

              <div className="quiz-cards-grid">
                
                {/* Card 1 */}
                <div className="quiz-card">
                  <div className="card-image beginner"></div>
                  <span className="card-badge beginner-badge">BEGINNER</span>
                  <h3>Essential Phrasal Verbs</h3>
                  <p>Master common phrasal verbs for daily conversations.</p>
                  <div className="card-meta">
                    <span>⏱️ 12 Qs</span>
                    <span>⏲️ 5 Min</span>
                  </div>
                  <button className="card-btn">START</button>
                </div>

                {/* Card 2 */}
                <div className="quiz-card">
                  <div className="card-image advanced"></div>
                  <span className="card-badge advanced-badge">ADVANCED</span>
                  <h3>Academic Word List</h3>
                  <p>High-level vocabulary for IELTS/TOEFL preparation.</p>
                  <div className="card-meta">
                    <span>⏱️ 25 Qs</span>
                    <span>⏲️ 15 Min</span>
                  </div>
                  <button className="card-btn">START</button>
                </div>

                {/* Card 3 */}
                <div className="quiz-card">
                  <div className="card-image intermediate"></div>
                  <span className="card-badge intermediate-badge">INTERMEDIATE</span>
                  <h3>Modern Business English</h3>
                  <p>Corporate buzzwords and professional email etiquette.</p>
                  <div className="card-meta">
                    <span>⏱️ 18 Qs</span>
                    <span>⏲️ 8 Min</span>
                  </div>
                  <button className="card-btn">START</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;

import bgr from "../assets/bgr-study-els.png";
import {
  UilMicrophone,
  UilComment,
  UilClipboardAlt,
  UilHeadphones,
  UilProcessor
} from "@iconscout/react-unicons";
import "./Practice.css";
interface PracticeProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}
function Practice( { setTab }: PracticeProps) {
  return (
    <div className="practice-page">
      <div className="practice-container">
        
        {/* Header */}
        <div className="practice-header">
          <h1 className="practice-title">Practice</h1>
          <p className="practice-desc">
            Refine your language mastery through personalized exercises, real-time AI
            feedback, and curated daily challenges.
          </p>
        </div>

        {/* Daily Challenge Card */}
        <div className="practice-challenge-card">
          <div className="challenge-image">
            <div className="challenge-placeholder"><img src={bgr} alt="Study ELS" /></div>
          </div>
          
          <div className="challenge-content">
            <span className="challenge-badge">DAILY CHALLENGE</span>
            <span className="challenge-time">• 15 mins estimated</span>
            
            <h2 className="challenge-title">Daily Quiz: Mastering Connectives</h2>
            
            <p className="challenge-desc">
              Boost your score by 15% this week. Complete today's logic and
              grammar session to maintain your 5-day streak.
            </p>

            <div className="challenge-actions">
              <button className="challenge-btn" onClick={() => setTab("Quiz")}>
                Start Quiz
              </button>
              <span className="challenge-progress">14/20 Questions today</span>
            </div>
          </div>
        </div>

        {/* AI Practice Section */}
        <div className="practice-ai-section">
          <div className="ai-header">
            <h2 className="ai-title">
              <span className="ai-icon">
                <UilProcessor size="60" color="#fff" />
              </span>
              AI Practice
            </h2>
            <a href="#" className="view-library">View Library →</a>
          </div>

          <div className="practice-grid">
            
            {/* Speaking Card */}
            <div className="practice-card">
              <div className="card-icon speaking"> 
                <UilMicrophone size="30" color="#fff" />
              </div>
              <h3>Speaking</h3>
              <p>Refine your pronunciation and intonation with real-time phoneme analysis.</p>
              <button className="card-btn">Practice Now</button>
            </div>

            {/* Conversation Card */}
            <div className="practice-card">
              <div className="card-icon conversation">
                <UilComment size="30" color="#fff" />
              </div>
              <h3>Conversation</h3>
              <p>Chat with our AI tutors on situational topics ranging from travel to business.</p>
              <button className="card-btn">Start Chat</button>
            </div>

            {/* Grammar Card */}
            <div className="practice-card">
              <div className="card-icon grammar">
                <UilClipboardAlt size="30" color="#fff" />
              </div>
              <h3>Grammar</h3>
              <p>Interactive syntax exercises that adapt to your specific learning weaknesses.</p>
              <button className="card-btn">Test Skills</button>
            </div>

            {/* Listening Card */}
            <div className="practice-card">
              <div className="card-icon listening">
                <UilHeadphones size="30" color="#fff" />
              </div>
              <h3>Listening</h3>
              <p>Audio comprehension tasks using diverse accents and realistic background noise.</p>
              <button className="card-btn">Listen Now</button>
            </div>

          </div>
        </div>

        {/* Weekly Performance */}
        <div className="practice-performance">
          <div className="performance-left">
            <div className="performance-icon">🏆</div>
            <div>
              <h3>Weekly Performance</h3>
              <p>You've outperformed 82% of students in your level this week</p>
            </div>
          </div>
          
          <div className="performance-actions">
            <button className="performance-btn secondary">Share Stats</button>
            <button className="performance-btn primary">Review Mistakes</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Practice;

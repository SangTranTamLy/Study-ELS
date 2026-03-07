import { useAuth } from "@/context/AuthContext";
import { useUserStats } from "@/services/stats.service";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import "./Dashboard.css";

interface DashboardProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

/* time-ago helper */
const timeAgo = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Vừa xong";
  if (mins < 60) return `${mins} phút trước`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} giờ trước`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return "Hôm qua";
  return `${days} ngày trước`;
};

const Dashboard: React.FC<DashboardProps> = ({ setTab }) => {
  const { user, profile } = useAuth();
  const { stats, loading: statsLoading } = useUserStats(user?.uid);
  const today = new Date();
  const dateStr = today.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const statCards = [
    { icon: <MenuBookIcon />, color: "indigo", value: String(stats.wordsLearned), label: "Từ đã học" },
    { icon: <QuizIcon />, color: "green", value: String(stats.quizzesCompleted), label: "Quiz hoàn thành" },
    { icon: <WhatshotIcon />, color: "amber", value: String(stats.streak), label: "Ngày streak" },
    { icon: <EmojiEventsIcon />, color: "pink", value: `${stats.accuracy}%`, label: "Độ chính xác" },
  ];

  const progress = [
    { label: "Vocabulary", pct: stats.vocabularyPct, color: "indigo" },
    { label: "Grammar", pct: stats.grammarPct, color: "green" },
    { label: "Listening", pct: stats.listeningPct, color: "amber" },
    { label: "Speaking", pct: stats.speakingPct, color: "pink" },
  ];

  // Latest 5 activities, newest first
  const recentActivities = [...(stats.activities || [])]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .slice(0, 5);

  const quickActions = [
    { icon: "📚", bg: "linear-gradient(135deg,#6366f1,#8b5cf6)", title: "Vocabulary", desc: "Học từ vựng mới", tab: "3" },
    { icon: "✍️", bg: "linear-gradient(135deg,#10b981,#0ea5e9)", title: "Quiz", desc: "Làm bài kiểm tra", tab: "2" },
    { icon: "🌐", bg: "linear-gradient(135deg,#f59e0b,#ef4444)", title: "Translator", desc: "Dịch văn bản", tab: "5" },
    { icon: "📖", bg: "linear-gradient(135deg,#ec4899,#8b5cf6)", title: "Dictionary", desc: "Tra từ điển", tab: "4" },
  ];

  const todayIdx = (today.getDay() + 6) % 7; // Mon=0

  if (statsLoading) {
    return (
      <div className="dashboard">
        <div className="dash-container" style={{ textAlign: 'center', paddingTop: 80 }}>
          <p style={{ color: '#94a3b8' }}>Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dash-container">

        {/* Welcome */}
        <div className="dash-welcome">
          <div className="dash-welcome__info">
            <h1>
              Xin chào, <span>{profile?.name || "Bạn"}</span> 👋
            </h1>
            <p>Tiếp tục hành trình học tiếng Anh của bạn nào!</p>
          </div>
          <div className="dash-welcome__date">
            <CalendarTodayIcon />
            {dateStr}
          </div>
        </div>

        {/* Stats */}
        <div className="dash-stats">
          {statCards.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className={`stat-icon ${s.color}`}>{s.icon}</div>
              <div className="stat-content">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Streak */}
        <div className="dash-streak">
          <div className="dash-streak__info">
            <h3>🔥 Streak {stats.streak} ngày{stats.streak >= 7 ? " — Tuyệt vời!" : ""}</h3>
            <p>Hãy duy trì mỗi ngày để giữ ngọn lửa cháy mãi</p>
          </div>
          <div className="dash-streak__days">
            {weekDays.map((d, i) => (
              <div
                key={i}
                className={`streak-day ${stats.streakDays[i] ? "active" : ""} ${i === todayIdx ? "today" : ""}`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Grid: Progress + Activity */}
        <div className="dash-grid">
          <div className="dash-card">
            <div className="dash-card__header">
              <h3>📈 Tiến độ học tập</h3>
              <span className="badge">Tháng này</span>
            </div>
            <div className="progress-list">
              {progress.map((p, i) => (
                <div className="progress-item" key={i}>
                  <div className="progress-item__label">
                    <span>{p.label}</span>
                    <span>{p.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-bar__fill ${p.color}`}
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-card">
            <div className="dash-card__header">
              <h3>🕐 Hoạt động gần đây</h3>
            </div>
            <div className="activity-list">
              {recentActivities.length === 0 ? (
                <p style={{ color: '#64748b', fontSize: '0.88rem', padding: '12px 14px' }}>Chưa có hoạt động nào</p>
              ) : (
                recentActivities.map((a) => (
                  <div className="activity-item" key={a.id}>
                    <div className={`activity-dot ${a.dot}`} />
                    <div className="activity-info">
                      <p>{a.text}</p>
                      <span>{timeAgo(a.time)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dash-actions">
          {quickActions.map((q, i) => (
            <div className="action-card" key={i} onClick={() => setTab(q.tab)}>
              <div className="action-icon" style={{ background: q.bg }}>
                {q.icon}
              </div>
              <h4>{q.title}</h4>
              <p>{q.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

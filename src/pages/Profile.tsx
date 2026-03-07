import { useAuth } from "@/context/AuthContext";
import { useUserStats } from "@/services/stats.service";
import { Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ShieldIcon from "@mui/icons-material/Shield";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Profile.css";

const Profile: React.FC = () => {
  const { user, profile } = useAuth();
  const { stats, loading: statsLoading } = useUserStats(user?.uid);

  const infoRows = [
    { icon: <PersonIcon />, label: "Họ tên", value: profile?.name || "Chưa cập nhật" },
    { icon: <EmailIcon />, label: "Email", value: profile?.email || user?.email || "—" },
    { icon: <ShieldIcon />, label: "Vai trò", value: profile?.role === "admin" ? "Admin" : "Học viên" },
    { icon: <CalendarTodayIcon />, label: "Ngày tham gia", value: user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString("vi-VN") : "—" },
  ];

  const profileStats = [
    { value: String(stats.wordsLearned), label: "Từ đã học" },
    { value: String(stats.quizzesCompleted), label: "Quiz hoàn thành" },
    { value: String(stats.streak), label: "Ngày streak" },
    { value: `${stats.accuracy}%`, label: "Độ chính xác" },
  ];

  const achievements = [
    { icon: "🔥", name: "Streak 7 ngày", desc: "Học 7 ngày liên tiếp", locked: stats.streak < 7 },
    { icon: "📚", name: "Bookworm", desc: "Học 100 từ vựng", locked: stats.wordsLearned < 100 },
    { icon: "🎯", name: "Sharpshooter", desc: "Quiz 100% chính xác", locked: stats.accuracy < 100 },
    { icon: "🌍", name: "Translator", desc: "Dịch 50 đoạn văn", locked: stats.translationsCount < 50 },
    { icon: "🏆", name: "Champion", desc: "Hoàn thành 50 quiz", locked: stats.quizzesCompleted < 50 },
    { icon: "💎", name: "Diamond", desc: "Streak 30 ngày", locked: stats.streak < 30 },
  ];

  if (statsLoading) {
    return (
      <div className="profile-page">
        <div className="prof-container" style={{ textAlign: 'center', paddingTop: 80 }}>
          <p style={{ color: '#94a3b8' }}>Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="prof-container">

        {/* Hero */}
        <div className="prof-hero">
          <div className="prof-hero__banner" />
          <div className="prof-hero__content">
            <div className="prof-avatar-wrap">
              <Avatar
                src={profile?.avatar || undefined}
                alt={profile?.name}
              >
                {!profile?.avatar && (profile?.name?.charAt(0).toUpperCase() || "U")}
              </Avatar>
              <div className="online-dot" />
            </div>
            <div className="prof-info">
              <h1>{profile?.name || "User"}</h1>
              <span className="role-badge">{profile?.role || "user"}</span>
              <p>
                <EmailIcon />
                {profile?.email || user?.email}
              </p>
            </div>
            <div className="prof-hero__actions">
              <button className="prof-btn primary">
                <EditIcon sx={{ fontSize: 16 }} />
                Chỉnh sửa
              </button>
              <button className="prof-btn ghost">
                <SettingsIcon sx={{ fontSize: 16 }} />
                Cài đặt
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="prof-stats">
          {profileStats.map((s, i) => (
            <div className="prof-stat" key={i}>
              <h4>{s.value}</h4>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Grid: Info + Achievements */}
        <div className="prof-grid">
          <div className="prof-card">
            <div className="prof-card__header">
              <InfoIcon />
              <h3>Thông tin cá nhân</h3>
            </div>
            <div className="prof-info-list">
              {infoRows.map((row, i) => (
                <div className="prof-info-row" key={i}>
                  <span className="label">
                    {row.icon}
                    {row.label}
                  </span>
                  <span className="value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="prof-card">
            <div className="prof-card__header">
              <EmojiEventsIcon />
              <h3>Thành tựu</h3>
            </div>
            <div className="achievements-grid">
              {achievements.map((a, i) => (
                <div className={`achievement ${a.locked ? "locked" : ""}`} key={i}>
                  <span className="ach-icon">{a.icon}</span>
                  <span className="ach-name">{a.name}</span>
                  <span className="ach-desc">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;

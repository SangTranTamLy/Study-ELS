import { useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TranslateIcon from "@mui/icons-material/Translate";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "./Translator.css";

const languages = [
  { code: "vi", name: "Tiếng Việt" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "中文" },
  { code: "es", name: "Español" },
  { code: "th", name: "ไทย" },
  { code: "ru", name: "Русский" },
];

const features = [
  { icon: "⚡", bg: "linear-gradient(135deg,#6366f1,#8b5cf6)", title: "Dịch tức thì", desc: "Kết quả dịch nhanh chóng, chính xác" },
  { icon: "🌍", bg: "linear-gradient(135deg,#10b981,#0ea5e9)", title: "100+ ngôn ngữ", desc: "Hỗ trợ đa ngôn ngữ trên toàn cầu" },
  { icon: "🔊", bg: "linear-gradient(135deg,#f59e0b,#ef4444)", title: "Phát âm", desc: "Nghe phát âm chuẩn bản xứ" },
];

function Translator() {
  const [sourceLang, setSourceLang] = useState("vi");
  const [targetLang, setTargetLang] = useState("en");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(result);
    setResult(text);
  };

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult("");

    try {
      const langPair = `${sourceLang}|${targetLang}`;
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`
      );
      const data = await res.json();
      if (data.responseData?.translatedText) {
        setResult(data.responseData.translatedText);
      } else {
        setResult("Không thể dịch. Vui lòng thử lại.");
      }
    } catch {
      setResult("Lỗi kết nối. Vui lòng kiểm tra mạng.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (value: string) => {
    if (value) navigator.clipboard.writeText(value);
  };

  const handleSpeak = (value: string, lang: string) => {
    if (!value) return;
    const utterance = new SpeechSynthesisUtterance(value);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  const handleClear = () => {
    setText("");
    setResult("");
  };

  const getLangName = (code: string) => languages.find(l => l.code === code)?.name || code;

  return (
    <div className="translator-page">
      <div className="trans-container">

        {/* Header */}
        <div className="trans-header">
          <p className="eyebrow">Translator</p>
          <h1>Dịch thuật <span>đa ngôn ngữ</span></h1>
          <p>Dịch văn bản tức thì giữa hơn 100 ngôn ngữ trên toàn thế giới</p>
        </div>

        {/* Language selector bar */}
        <div className="trans-lang-bar">
          <div className="lang-select">
            <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>

          <button className="swap-btn" onClick={handleSwap} title="Hoán đổi ngôn ngữ">
            <SwapHorizIcon sx={{ fontSize: 20 }} />
          </button>

          <div className="lang-select">
            <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Editor */}
        <div className="trans-editor">
          {/* Source */}
          <div className="trans-panel">
            <div className="trans-panel__header">
              <span className="lang-label">{getLangName(sourceLang)}</span>
              <span className="char-count">{text.length} / 5000</span>
            </div>
            <textarea
              placeholder="Nhập văn bản cần dịch..."
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 5000))}
            />
            <div className="trans-panel__footer">
              <button className="icon-btn" onClick={() => handleSpeak(text, sourceLang)} title="Phát âm">
                <VolumeUpIcon sx={{ fontSize: 18 }} />
              </button>
              <button className="icon-btn" onClick={() => handleCopy(text)} title="Sao chép">
                <ContentCopyIcon sx={{ fontSize: 16 }} />
              </button>
              <button className="icon-btn" onClick={handleClear} title="Xóa">
                <DeleteOutlineIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
          </div>

          {/* Target */}
          <div className="trans-panel">
            <div className="trans-panel__header">
              <span className="lang-label">{getLangName(targetLang)}</span>
            </div>
            <div className={`result-text ${!result ? "placeholder" : ""}`}>
              {loading ? "Đang dịch..." : result || "Bản dịch sẽ hiển thị ở đây"}
            </div>
            <div className="trans-panel__footer">
              <button className="icon-btn" onClick={() => handleSpeak(result, targetLang)} title="Phát âm">
                <VolumeUpIcon sx={{ fontSize: 18 }} />
              </button>
              <button className="icon-btn" onClick={() => handleCopy(result)} title="Sao chép">
                <ContentCopyIcon sx={{ fontSize: 16 }} />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="trans-actions">
          <button
            className="trans-btn primary"
            onClick={handleTranslate}
            disabled={loading || !text.trim()}
          >
            {loading ? (
              <span className="trans-loader" />
            ) : (
              <TranslateIcon sx={{ fontSize: 20 }} />
            )}
            {loading ? "Đang dịch..." : "Dịch ngay"}
          </button>
          <button className="trans-btn ghost" onClick={handleClear}>
            <DeleteOutlineIcon sx={{ fontSize: 18 }} />
            Xóa tất cả
          </button>
        </div>

        {/* Features */}
        <div className="trans-features">
          {features.map((f, i) => (
            <div className="trans-feat" key={i}>
              <div className="feat-icon" style={{ background: f.bg }}>{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Translator;
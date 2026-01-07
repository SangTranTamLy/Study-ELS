import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Login_Register.css";

interface AuthModalProps {
  tab: "login" | "register" | null;
  setTab: React.Dispatch<
    React.SetStateAction<"login" | "register" | null>
  >;
}

const AuthModal: React.FC<AuthModalProps> = ({ tab, setTab }) => {
  // 👉 local state để giữ modal sống cho animation exit
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Sync state từ parent
  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
      setVisible(true);
    } else {
      // đóng có animation
      setVisible(false);
    }
  }, [tab]);

  // ESC đóng modal
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const closeModal = () => {
    setVisible(false);
    // chờ animation xong mới unmount
    setTimeout(() => {
      setTab(null);
    }, 300);
  };

  const switchTab = (next: "login" | "register" | null) => {
    if (next) {
      setActiveTab(next);
      setTab(next);
    } else {
      closeModal();
    }
  };

  // ❗ vẫn render khi đang animate out
  if (!tab && !visible) return null;

  return (
    <div
      className={`auth-overlay ${visible ? "show" : ""}`}
      onClick={closeModal}
    >
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div
          className={`form-box login ${
            activeTab === "login" ? "active" : ""
          }`}
        >
          <Login setTab={switchTab} />
        </div>

        <div
          className={`form-box register ${
            activeTab === "register" ? "active" : ""
          }`}
        >
          <Register setTab={switchTab} />
        </div>

        <div
          className={`overlay-panel ${
            activeTab === "login"
              ? "active-right"
              : "active-left"
          }`}
        >
          <h2>
            {activeTab === "login"
              ? "Welcome Back!"
              : "Hello, Friend!"}
          </h2>
          <p>
            {activeTab === "login"
              ? "Đăng nhập để tiếp tục"
              : "Tạo tài khoản mới"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

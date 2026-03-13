import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import {
  loginWithEmail,
  loginWithGoogle,
  resetPassword,
} from "@/services/auth.service";
import { saveUserToFirestore } from "@/services/user.service";

import "./Login_Register.css";

interface LoginProps {
  setTab: (tab: "login" | "register" | null) => void;
}

const Login: React.FC<LoginProps> = ({ setTab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔑 Login Email
  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await loginWithEmail(email, password);
      await saveUserToFirestore(user);
      setTab(null);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔑 Login Google
  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      await saveUserToFirestore(user);
      alert(`Xin chào ${user.displayName}`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  // 🔑 Reset password
  const handleResetPassword = async () => {
    if (!email) {
      alert("Nhập email trước");
      return;
    }

    try {
      await resetPassword(email);
      alert("Đã gửi email reset mật khẩu");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <>
      <h2 className="animate-fadeIn">Đăng nhập</h2>
      <p className="form-subtitle">Đăng nhập để tiếp tục</p>

      <div className="input-group animate-slideInUp stagger-1">
        <EmailIcon className="icon" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group animate-slideInUp stagger-2">
        <LockIcon className="icon" />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <span className="forgot animate-fadeIn stagger-3" onClick={handleResetPassword}>
        Quên mật khẩu?
      </span>

      <button className="submit-btn animate-slideInUp stagger-4" onClick={handleLogin} disabled={loading}>
        {loading ? <span className="loader" /> : "Đăng nhập"}
      </button>

      <div className="divider animate-fadeIn stagger-5">Hoặc</div>

      <div className="social-group animate-slideInUp stagger-5">
        <button className="social google" onClick={handleGoogleLogin}>
          <GoogleIcon /> Google
        </button>
        <button className="social facebook" disabled>
          <FacebookIcon /> Facebook
        </button>
      </div>

      <p className="switch">
        Chưa có tài khoản? 
        <span onClick={() => setTab("register")}> Đăng ký</span>
      </p>
    </>
  );
};

export default Login;

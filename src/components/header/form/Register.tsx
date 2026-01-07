import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { registerWithEmail } from "@/services/auth.service";
import { saveUserToFirestore } from "@/services/user.service";
import "./Login_Register.css";

interface RegisterProps {
  setTab: (tab: "login" | "register" | null) => void;
}

const Register: React.FC<RegisterProps> = ({ setTab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const user = await registerWithEmail(email, password);
      await saveUserToFirestore(user);

      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      setTab("login");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email đã tồn tại. Vui lòng đăng nhập.");
        setTab("login");
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <>
      <h2>Đăng ký</h2>

      <div className="input-group">
        <PersonIcon className="icon" />
        <input placeholder="Username" />
      </div>

      <div className="input-group">
        <EmailIcon className="icon" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <LockIcon className="icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={handleRegister}>
        Đăng ký
      </button>

      <p className="switch">
        Đã có tài khoản?{" "}
        <span onClick={() => setTab("login")}>Đăng nhập</span>
      </p>
    </>
  );
};

export default Register;

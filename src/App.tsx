import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AuthModal from "./components/header/form/AuthModal";
import Home from "./pages/Home";
import Vocabulary from "./pages/Vocabulary";
import Practice from "./pages/Practice";    
import Translator from "./pages/Translator";
import Thesaurus from "./pages/Thesaurus";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { useAuth } from "@/context/AuthContext";

function App() {
  const [tab, setTab] = React.useState("1");
  const [auth, setAuth] = React.useState<"login" | "register" | null>(null);
  const [pendingTab, setPendingTab] = React.useState<string | null>(null);

  const { user } = useAuth();

  // 🔒 Chặn tab cần login
  React.useEffect(() => {
    if (!user && ["2", "3", "7", "8"].includes(tab)) {
      setPendingTab(tab);
      setTab("1");
      setAuth("login");
    }
  }, [tab, user]);

  // ✅ Login xong → quay lại tab cũ
  React.useEffect(() => {
    if (user && pendingTab) {
      setTab(pendingTab);
      setPendingTab(null);
      setAuth(null);
    }
  }, [user, pendingTab]);

  const renderPage = () => {
    switch (tab) {
      case "1":
        return <Home setTab={setTab} />;
      case "2":
        return <Vocabulary setTab={setTab} />;
      case "3":
        return <Practice setTab={setTab} />;
      case "4":
        return <Translator />;
      case "5":
        return <Thesaurus />;
      case "6":
        return <Dashboard setTab={setTab} />;
      case "7":
        return <Profile />;
      default:
        return <Home setTab={setTab} />;
    }
  };

  return (
    <>
      <Header
        value={tab}
        setValue={setTab}
        openLogin={() => setAuth("login")}
      />

      <main>{renderPage()}</main>

      {auth && <AuthModal tab={auth} setTab={setAuth} />}

      <Footer />
    </>
  );
}

export default App;
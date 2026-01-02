import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  const [tab, setTab] = React.useState("1");

  const renderPage = () => {
    switch (tab) {
      case "1":
        return <Home />;
      case "2":
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header value={tab} setValue={setTab} />

      <main>
        {renderPage()}
      </main>

      <Footer />
    </>
  );
}

export default App;

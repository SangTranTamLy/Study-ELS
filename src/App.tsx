import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Vocabulary from "./pages/Vocabulary";
import Dictionary from "./pages/Dictionary";
import Translator from "./pages/Translator";
import Thesaurus from "./pages/Thesaurus";
function App() {
  const [tab, setTab] = React.useState("1");

  const renderPage = () => {
    switch (tab) {
      case "1":
        return <Home setTab={setTab}/>;
      case "2":
        return <Quiz />
      case "3":
        return <Vocabulary />
      case "4":
        return <Dictionary />
      case "5":
        return <Translator />
      case "6":
        return <Thesaurus />
      default:
        return <Home setTab={setTab}/>;
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

import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
/*import Course from "./pages/Course";
import Vocabulary from "./pages/Vocabulary";
import Dictionary from "./pages/Dictionary";
import Translator from "./pages/Translator";
import Thesaurus from "./pages/Thesaurus"; */

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

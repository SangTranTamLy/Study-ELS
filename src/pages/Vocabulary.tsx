import React from "react";

interface VocabularyProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const Vocabulary: React.FC<VocabularyProps> = ({ setTab }) => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Vocabulary</h1>
      <p>Học từ vựng theo chủ đề với flashcard và quiz</p>
      <button style={{ marginTop: "20px" }} onClick={() => setTab("Home")}>Quay về Home</button>
    </div>
  );
};

export default Vocabulary;

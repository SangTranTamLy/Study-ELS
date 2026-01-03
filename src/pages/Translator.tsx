import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleTranslate = () => {
    if (text.trim() === "") {
      setResult("Vui lòng nhập văn bản!");
      return;
    }
    setResult(text.split("").reverse().join(""));
  };

  return (
    <main className="translator-page">
      <h1>Translator</h1>
      <p>Công cụ dịch thuật hỗ trợ nhiều ngôn ngữ.</p>
      <textarea
        placeholder="Nhập văn bản cần dịch..."
        value={text}
        onChange={e => setText(e.target.value)}
        rows={5}
      />
      <button onClick={handleTranslate}>Dịch</button>
      {result && <p>Kết quả: {result}</p>}
    </main>
  );
}

export default Translator;

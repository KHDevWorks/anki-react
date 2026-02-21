import { useState, useEffect } from "react";

export default function CardViewer({ cards }) {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");

  const card = cards[index];

  function check(choice) {
    if (choice === card.answer) {
      setResult(`◎ 正解！\n\n${card.explain}`);
    } else {
      setResult(`✕ 不正解… 正解は ${card.answer}\n\n${card.explain}`);
    }
  }

  function next() {
    setResult("");
    setIndex((i) => (i + 1) % cards.length);
  }

  if (!card) return <p>カードがありません</p>;

  // simple fenced-code parser: split by ```lang\ncode\n```
  function renderQuestion(q) {
    if (!q.includes("```") ) return <pre className="question">{q}</pre>;

    const parts = q.split(/```/g);
    // parts: [text, lang\ncode, text, lang\ncode, ...]
    return (
      <div className="question">
        {parts.map((part, i) => {
          if (i % 2 === 0) return <div key={i}>{part}</div>;
          // code part: maybe starts with language
          const firstLineEnd = part.indexOf('\n');
          let lang = '';
          let code = part;
          if (firstLineEnd !== -1) {
            const firstLine = part.slice(0, firstLineEnd).trim();
            if (/^[a-zA-Z0-9]+$/.test(firstLine)) {
              lang = firstLine;
              code = part.slice(firstLineEnd + 1);
            }
          }
          const className = `language-${lang || 'plaintext'}`;
          return (
            <pre className="code-block" key={i}>
              <code className={className}>{code}</code>
            </pre>
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    if (window.hljs && window.hljs.highlightAll) {
      window.hljs.highlightAll();
    }
  }, [card, result]);

  return (
    <div className="card-viewer">
      {renderQuestion(card.question)}

      <button onClick={() => check("A")}>A: {card.choice1}</button>
      <button onClick={() => check("B")}>B: {card.choice2}</button>
      <button onClick={() => check("C")}>C: {card.choice3}</button>
      <button onClick={() => check("D")}>D: {card.choice4}</button>

      <pre className="result">{result}</pre>

      <button onClick={next}>次の問題へ</button>
    </div>
  );
}
import { useState } from "react";

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

  return (
    <div className="card-viewer">
      <pre className="question">{card.question}</pre>

      <button onClick={() => check("A")}>A: {card.choice1}</button>
      <button onClick={() => check("B")}>B: {card.choice2}</button>
      <button onClick={() => check("C")}>C: {card.choice3}</button>
      <button onClick={() => check("D")}>D: {card.choice4}</button>

      <pre className="result">{result}</pre>

      <button onClick={next}>次の問題へ</button>
    </div>
  );
}
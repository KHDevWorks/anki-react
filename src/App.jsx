import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db/db";
import FileButtons from "./components/FileButtons";
import CardViewer from "./components/CardViewer";

import { jsTemplates } from "./data/jsTemplates";
import { reactTemplates } from "./data/reactTemplates";
import { pythonTemplates } from "./data/pythonTemplates";
import { htmlCssTemplates } from "./data/htmlCssTemplates";
import { gitTemplates } from "./data/gitTemplates";

export default function App() {
  const cards = useLiveQuery(() => db.cards.toArray(), []);

  // ★ ランダム四択問題を100問生成する関数
 async function generateRandom100() {
  const topics = [
    { tag: "JavaScript", questions: jsTemplates },
    { tag: "React", questions: reactTemplates },
    { tag: "Python", questions: pythonTemplates },
    { tag: "HTML/CSS", questions: htmlCssTemplates },
    { tag: "Git", questions: gitTemplates }
  ];

  const generated = [];

 
  for (let i = 0; i < 100; i++) {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const q = topic.questions[Math.floor(Math.random() * topic.questions.length)];

    if (!q || !q.correct || !q.wrong || q.wrong.length < 3) {
    console.error("壊れたテンプレート発見:", q, "topic:", topic.tag);
  }

    generated.push({
      id: i + 1,
      question: q.q,
      choice1: q.correct,
      choice2: q.wrong[0],
      choice3: q.wrong[1],
      choice4: q.wrong[2],
      answer: "A",
      explain: q.correct,
      tag: topic.tag
    });
  }

   console.log(generated);
  await db.cards.clear();
  await db.cards.bulkAdd(generated);
  alert("本格的なランダム100問を生成しました！");
  }

  return (
    <div className="app">
      <h1>Anki Cards</h1>
      <FileButtons onGenerateRandom={generateRandom100} />
      {cards ? (
        <CardViewer cards={cards} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

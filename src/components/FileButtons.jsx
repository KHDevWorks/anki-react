import { db } from "../db/db";

export default function FileButtons({ reload, onGenerateRandom }) {
  let fileHandle = null;
  let fileName = null;

  async function loadJson() {
    const [handle] = await window.showOpenFilePicker({
      types: [{ description: "JSON", accept: { "application/json": [".json"] } }]
    });

    fileHandle = handle;
    const file = await handle.getFile();
    fileName = file.name;

    const text = await file.text();
    const data = JSON.parse(text);

    await db.cards.clear();
    await db.cards.bulkAdd(data);

    reload();
    alert(`${fileName} を読み込みました`);
  }

  async function saveJson() {
    if (!fileHandle) {
      alert("先にファイルを読み込んでください");
      return;
    }

    const cards = await db.cards.toArray();
    const writable = await fileHandle.createWritable();
    await writable.write(JSON.stringify(cards, null, 2));
    await writable.close();

    alert(`${fileName} に保存しました`);
  }

  return (
    <div className="file-buttons">
      <button onClick={loadJson}>JSON読み込み</button>
      <button onClick={saveJson}>JSON保存</button>

      {/* ★ 追加 */}
      <button onClick={onGenerateRandom}>ランダム100問生成</button>
    </div>
  );
}
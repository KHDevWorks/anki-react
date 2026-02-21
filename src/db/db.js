import Dexie from "dexie";

export const db = new Dexie("ankiAppReact");

db.version(1).stores({
  cards: "++id, question, choice1, choice2, choice3, choice4, answer, explain, tag"
});
# Anki React (Flashcard App)

[English](#english) | [日本語](#japanese)

---

<a name="english"></a>
## English

A flashcard application built with React and Vite, designed to run effortlessly using Docker. It uses Dexie.js for local database storage.

### Development Setup (Docker)

This project is containerized using Docker and Docker Compose. You do not need Node.js installed on your local machine to run or develop this application.

**Prerequisites:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

**How to Run:**
1. Clone the repository and open the terminal at the project root.
2. Start the development server:
   ```bash
   docker compose up -d
   ```
3. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).
4. **Hot Reloading:** The source code is mounted inside the container. Any changes you make in your local editor will automatically reflect in the browser.

**Stopping the Server:**
```bash
docker compose down
```

### How to Add Questions (Template)

Currently, you can add questions using the application UI or by importing a JSON file. If you are importing data, please use the following JSON template format:

```json
[
  {
    "front": "What is the capital of France?",
    "back": "Paris",
    "deckId": "default-deck-id", 
    "tags": ["Geography", "Europe"]
  },
  {
    "front": "What does HTTP stand for?",
    "back": "HyperText Transfer Protocol",
    "deckId": "another-deck-id",
    "tags": ["Computer Science", "Web"]
  }
]
```
*Note: Ensure the `deckId` matches an existing deck in your application.*

---

<a name="japanese"></a>
## 日本語

ReactとViteで構築された、Dockerを使用して簡単に動かせる単語帳（フラッシュカード）アプリケーションです。ローカルデータベースにはDexie.jsを使用しています。

### 開発環境のセットアップ (Docker)

このプロジェクトはDockerとDocker Composeでコンテナ化されています。開発や実行にあたり、ローカルPCにNode.jsをインストールする必要はありません。

**前提条件:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) がインストールされ、起動していること。

**実行手順:**
1. リポジトリをクローンし、プロジェクトのルートディレクトリでターミナルを開きます。
2. 開発サーバーを起動します:
   ```bash
   docker compose up -d
   ```
3. ブラウザを開き、[http://localhost:5173](http://localhost:5173) にアクセスします。
4. **ホットリロード:** ソースコードはコンテナ内にマウントされているため、ローカルのエディタで変更を保存すると、即座にブラウザへ反映されます。

**サーバーの停止:**
実行中のコンテナを停止・削除するには、以下のコマンドを実行します:
```bash
docker compose down
```

### 問題データの作成手順（テンプレート）

現在、アプリケーションのUIから直接問題を追加するか、JSONファイル形式で一括インポートすることが可能です。インポート用のデータを作成する場合は、以下のJSONテンプレートを参考にしてください。

```json
[
  {
    "front": "フランスの首都はどこですか？",
    "back": "パリ",
    "deckId": "default-deck-id", 
    "tags": ["地理", "ヨーロッパ"]
  },
  {
    "front": "HTTPの正式名称は何ですか？",
    "back": "HyperText Transfer Protocol",
    "deckId": "another-deck-id",
    "tags": ["IT", "Web"]
  }
]
```
*注：`deckId` には、アプリ内で作成済みのデッキのIDを指定してください。*

---

### Technologies Used / 使用技術
- React 19
- Vite
- Dexie.js (IndexedDB wrapper)
- Docker & Docker Compose


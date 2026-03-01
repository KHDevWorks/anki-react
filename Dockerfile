FROM node:22-alpine

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json package-lock.json ./

# パッケージのインストール
RUN npm ci

# プロジェクトの全ファイルをコピー
COPY . .

# Viteのデフォルトポートである5173を公開
EXPOSE 5173

# 開発サーバーの起動 (外部からのアクセスを許可するために --host を指定)
CMD ["npm", "run", "dev", "--", "--host"]


# React + Vite

このテンプレートは、HMR（ホットモジュールリプレースメント）や基本的な ESLint ルールを含む、Vite 上で React を動作させるための最小限のセットアップを提供します。

現在、公式のプラグインが 2 つ利用可能です:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) は Fast Refresh に [Babel](https://babeljs.io/)（または [rolldown-vite](https://vite.dev/guide/rolldown) 使用時は [oxc](https://oxc.rs)）を使用します。
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) は Fast Refresh に [SWC](https://swc.rs/) を使用します。

## React コンパイラ

このテンプレートでは React コンパイラが有効になっています。詳細は [このドキュメント](https://react.dev/learn/react-compiler) を参照してください。

注: これにより Vite の開発およびビルドのパフォーマンスに影響が出る場合があります。

## ESLint 設定の拡張

本番アプリケーションを開発する場合は、型情報を利用した ESLint ルールを有効にした TypeScript の使用を推奨します。TypeScript と `typescript-eslint` をプロジェクトに統合する方法については、[TS テンプレート](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) を参照してください。

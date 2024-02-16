## About This Repositry

このリポジトリは、ホロライブの二次創作アプリ開発用です

GitHubの草を使って、ホロライブのマスコットキャラクター達を育成?する、たまごっち的なやつです

## Getting Started

以下の手順で開発を始めて下さい (gitやnodeに慣れていないチームメンバー向けに記述しています)

```bash
git clone https://github.com/KakinokiKanta/tkg-frontend.git
npm install
```

ローカル環境で開発アプリを確認するには、以下の通り

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く

最初は`src/app/page.tsx`ページにアクセスしますが、ログインしていない場合、`src/app/(authentication)/login/page.tsx`にリダイレクトします。

## Deploy on Vercel

このWebアプリは、 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
を用いてホスティングしています。

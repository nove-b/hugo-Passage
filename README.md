Demo: [hugo-passage-demo.netlify.app/](hugo-passage-demo.netlify.app/)

# Passage - A Hugo Theme for Timelines

[![GitHub Stars](https://img.shields.io/github/stars/nove-b/hugo-Passage)](https://github.com/nove-b/hugo-Passage)

# Hugo テーマ Passage を適用してサイトを作成する方法

このドキュメントでは、Hugo を使用して個人ブログ、プロジェクトのリリースノート、貢献履歴などをクリーンなタイムライン形式で表示できるテーマ「Passage」を適用し、基本的なコンテンツを作成する方法を説明します。

**Passage について**

Passage は、開発者やコントリビューターが記事、リリース情報、コントリビュート履歴をクリーンで時系列なタイムライン上に表示するために設計された Hugo テーマです。個人のブログ、プロジェクトのリリース情報ページ、オープンソースプロジェクトの歩みをハイライトするのに最適です。

**主な機能**

- **タイムラインレイアウト:** コンテンツを時系列順に視覚的に魅力的に表示します。
- **記事サポート:** ブログ記事などの表示に最適です。
- **リリースノート:** ソフトウェアのアップデートやバージョン履歴を簡単に表示できます。
- **コントリビュート追跡:** プロジェクトへの貢献やコントリビューターをハイライトします。
- **開発者向け:** 開発者や個人開発者向けに調整された、クリーンでカスタマイズ可能なデザイン。

**現在のステータス**

このテーマは現在開発中です。改善や新機能の開発を継続的に行っています。

**コントリビュート**

コントリビュート、バグ報告、機能リクエストを歓迎します。お気軽に GitHub リポジトリ ([https://github.com/nove-b/hugo-Passage](https://github.com/nove-b/hugo-Passage)) で issue を作成するか、プルリクエストを送信してください。

**最新情報を購読**

最新のアップデートやリリース情報を受け取るために、GitHub でスター ⭐ を付けてください！ ([https://github.com/nove-b/hugo-Passage](https://github.com/nove-b/hugo-Passage))

## 1. Hugo サイトの新規作成

まず、Hugo の新しいサイトを作成します。ターミナルを開き、以下のコマンドを実行してください。

```bash
hugo new site your-blog-name
cd your-blog-name
```

`your-blog-name` は任意のサイト名に置き換えてください。

## 2\. Node.js と npm のバージョン確認

テーマの依存関係をインストールするために、Node.js と npm がインストールされている必要があります。以下のコマンドでバージョンを確認してください。

```bash
node -v
npm -v
```

推奨バージョンは以下の通りです（これより新しいバージョンでも動作する可能性があります）。

```
node -v
v22.15.0

npm -v
10.9.2
```

## 3\. テーマをサブモジュールとして追加

テーマ「Passage」を Git のサブモジュールとして追加します。以下のコマンドをサイトのルートディレクトリで実行してください。

```bash
git submodule add https://github.com/nove-b/hugo-Passage.git themes/passage
```

## 4\. テーマの依存関係をインストール

テーマが依存するモジュールをインストールします。以下のコマンドを順番に実行してください。

```bash
cd themes/passage
npm install
```

## 5\. サイトの依存モジュールをインストール

サイト自体に必要な依存モジュールをインストールします。サイトのルートディレクトリに戻り、以下のコマンドを実行してください。

```bash
cd ../../
npm init -y # デフォルト設定で package.json を作成する場合
# または
npm init     # 各項目を対話的に設定する場合
```

次に、Tailwind CSS をインストールします。Passage テーマは Tailwind CSS を使用してスタイリングされています。

```bash
npm install -D @tailwindcss/cli@^4.0.17 tailwindcss@^4.0.17
```

## 6\. Hugo 設定ファイルの作成

テーマの設定ファイルをコピーし、サイトの設定ファイルとして使用します。テーマの `config.template.toml` の内容を、サイトのルートディレクトリにある `hugo.toml` にペーストしてください。

[https://github.com/nove-b/hugo-Passage-demo/blob/main/hugo.toml](https://github.com/nove-b/hugo-Passage-demo/blob/main/hugo.toml)

必要に応じて、`hugo.toml` の設定を編集してください。

## 7\. 開発サーバーの起動

以下のコマンドで Hugo の開発サーバーを起動し、サイトをプレビューできます。

```bash
hugo -D serve
```

ブラウザで `http://localhost:1313/` にアクセスすると、サイトが表示されます。

## 8\. ユーザー画像の追加

ユーザー画像を表示するには、テーマの静的ファイルディレクトリに `sample-avatar.jpg` という名前で画像を配置します。

```
themes/passage/static/images/sample-avatar.jpg
```

この `sample-avatar.jpg` をあなたの画像ファイルに置き換えることで、サイトにユーザー画像が表示されます。

## 9\. 自己紹介文の作成

サイトのトップページに自己紹介文などのコンテンツを表示するには、サイトの `content` ディレクトリに `_index.md` ファイルを作成し、Markdown 形式で記述します。

```markdown
---
author: ["yourname"]
title: "Home"
---
### Hello Passage

Passage は、開発者やコントリビューターが記事、リリースノート、貢献履歴をクリーンで時系列的なタイムラインで表示するために設計された Hugo テーマです。個人のブログ、プロジェクトのリリースページ、オープンソースプロジェクトの歩みをハイライトするのに最適です。
```

`yourname` はあなたの名前に置き換えてください。

## 10\. 投稿コンテンツの作成

投稿コンテンツは、`content` ディレクトリ以下の以下のフォルダに作成します。

  - `contribute`: プロジェクトへの貢献に関する投稿
  - `posts`: 通常のブログ記事
  - `release`: プロジェクトのリリースノート

contribute: [例](https://github.com/nove-b/hugo-Passage-demo/blob/main/content/contribute/dark-mode.md)

posts: [例](https://github.com/nove-b/hugo-Passage-demo/blob/main/content/posts/markdown-syntax.md)

release: [例](https://github.com/nove-b/hugo-Passage-demo/blob/main/content/release/hugo-passage-v0-0-0.md)

### 貢献とリリースノートの投稿

`contribute` および `release` フォルダには、以下の形式の Markdown ファイルを作成します。

```markdown
---
author: ["yourname"]
title: "contribute(または release) のタイトル"
date: "2025-02-15"
link: "[https://github.com/nove-b/hugo-Passage](https://github.com/nove-b/hugo-Passage)"
type: "contribute" # または "release"
---
```

  - `title`: 投稿のタイトル
  - `date`: 投稿の日付
  - `link`: 貢献やリリースに関連する外部 URL (例: GitHub のプルリクエスト、リリースノートのページ)
  - `type`: 投稿のタイプ (`contribute` または `release` を指定)

### ブログ記事の投稿

`posts` フォルダには、以下の形式の Markdown ファイルを作成します。

```markdown
---
author: ["yourname"]
title: "ブログタイトル"
date: "2023-10-31"
tags: ["tag", "tag", "tag", "tag"]
ShowToc: true
draft: false
---

記事本文を書く
```

  - `title`: ブログ記事のタイトル
  - `date`: 記事の投稿日
  - `tags`: 記事に関連するタグ
  - `ShowToc`: 目次を表示するかどうか (true/false)
  - `draft`: 下書き状態かどうか (true/false)

## 11\. デプロイ方法 (Netlify)

作成した Hugo サイトを Netlify にデプロイする手順は以下の通りです。

1.  Netlify のウェブサイトで新しいサイトを作成し、あなたのリポジトリ（通常は GitHub など）を選択します。
2.  サイトのビルド設定を行います。
      - **Build command:** `hugo --gc --minify`
      - **Publish directory:** `public` (Hugo のデフォルト)
      - **Branch to deploy:** デプロイしたいブランチ (通常は `main` や `master`)
3.  **Environment variables** に以下の変数を追加します。
      - **Key:** `HUGO_VERSION`
      - **Value:** `0.137.0` (テーマの推奨 Hugo バージョンに合わせてください)

設定が完了したら、Netlify が自動的にサイトをビルドしてデプロイします。

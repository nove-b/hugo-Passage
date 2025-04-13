# Passage - A Hugo Theme for Timelines

[![GitHub Stars](https://img.shields.io/github/stars/nove-b/hugo-Passage)](https://github.com/nove-b/hugo-Passage)

**Passage** is a Hugo theme designed for developers and contributors to showcase articles, release notes, and contribution history in a clean, chronological timeline. Perfect for personal blogs, project release pages, and highlighting the journey of your open-source project.

## Installation

1.  **Add the theme as a submodule:**

    ```bash
    git submodule add [https://github.com/nove-b/hugo-Passage.git](https://github.com/nove-b/hugo-Passage.git) themes/passage
    ```

    This command adds the Passage theme to the `themes/passage` directory as a submodule.

2.  **Navigate to the theme directory and install npm packages:**

    ```bash
    cd themes/passage
    npm install
    ```

    This command installs the necessary npm packages for the theme

3.  **Install Tailwind CSS in your project:**

    The Passage theme uses Tailwind CSS. If you haven't installed Tailwind CSS in your project yet, run the following command to install it.

    ```bash
    npm install -D tailwindcss @tailwindcss/cli
    ```

    Alternatively, you can add the following to your project's `package.json` and run `npm install`.

    ```json
    {
      "devDependencies": {
        "@tailwindcss/cli": "^4.0.17",
        "tailwindcss": "^4.0.17"
      }
    }
    ```

    **Note:** Tailwind CSS needs to be installed in your Hugo project, not within the Passage theme itself.

4.  **Configure Hugo:**

    Add the following to your `config.toml` to set Hugo to use the Passage theme.

    ```toml
    theme = "passage"
    ```

    For detailed configuration options, please refer to `themes/passage/config.template.toml`.

## Key Features

* **Timeline Layout:** Visually appealing display of content in a chronological order.
* **Article Support:** Ideal for showcasing blog posts and articles.
* **Release Notes:** Easily present software updates and version history.
* **Contribution Tracking:** Highlight contributions and contributors to your project.
* **Developer-Friendly:** Clean and customizable design tailored for developers and individual creators.

## Current Status

This theme is currently under active development. We are continuously working on improvements and new features.

## Contributing

We warmly welcome contributions, bug reports, and feature requests. Please feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/nove-b/hugo-Passage).

## Stay Updated

Give us a star ⭐ on [GitHub](https://github.com/nove-b/hugo-Passage) to stay informed about the latest updates and releases!

---

# Passage - タイムライン表示に特化した Hugo テーマ

[![GitHub Stars](https://img.shields.io/github/stars/nove-b/hugo-Passage)](https://github.com/nove-b/hugo-Passage)

**Passage** は、開発者やコントリビューターが記事、リリース情報、コントリビュート履歴をクリーンで時系列なタイムライン上に表示するために設計された Hugo テーマです。個人のブログ、プロジェクトのリリース情報ページ、オープンソースプロジェクトの歩みをハイライトするのに最適です。

## インストール手順

1.  **サブモジュールとしてテーマを追加:**

    ```bash
    git submodule add [https://github.com/nove-b/hugo-Passage.git](https://github.com/nove-b/hugo-Passage.git) themes/passage
    ```

    このコマンドは、Passage テーマを `themes/passage` ディレクトリにサブモジュールとして追加します。

2.  **テーマディレクトリに移動し、npm をインストール:**

    ```bash
    cd themes/passage
    npm install
    ```

    このコマンドは、テーマに必要な npm パッケージをインストールします。

3.  **プロジェクトに Tailwind CSS をインストール:**

    Passage テーマは Tailwind CSS を使用しています。まだプロジェクトに Tailwind CSS をインストールしていない場合は、以下のコマンドを実行してインストールしてください。

    ```bash
    npm install -D tailwindcss @tailwindcss/cli
    ```

    または、プロジェクトの `package.json` に以下を追加して `npm install` を実行します。

    ```json
    {
      "devDependencies": {
        "@tailwindcss/cli": "^4.0.17",
        "tailwindcss": "^4.0.17"
      }
    }
    ```

    **注意:** Tailwind CSS は Passage テーマ自体ではなく、あなたの Hugo プロジェクトにインストールする必要があります。

4.  **Hugo の設定:**

    `config.toml` に以下を追加して、Passage テーマを使用するように Hugo を設定します。

    ```toml
    theme = "passage"
    ```

    詳細な設定オプションについては、`themes/passage/config.template.toml` を参照してください。

## 主な機能

* **タイムラインレイアウト:** コンテンツを時系列順に視覚的に魅力的に表示します。
* **記事サポート:** ブログ記事などの表示に最適です。
* **リリースノート:** ソフトウェアのアップデートやバージョン履歴を簡単に表示できます。
* **コントリビュート追跡:** プロジェクトへの貢献やコントリビューターをハイライトします。
* **開発者向け:** 開発者や個人開発者向けに調整された、クリーンでカスタマイズ可能なデザイン。

## 現在のステータス

このテーマは現在開発中です。改善や新機能の開発を継続的に行っています。

## コントリビュート

コントリビュート、バグ報告、機能リクエストを歓迎します。お気軽に GitHub リポジトリ ([https://github.com/nove-b/hugo-Passage](https://github.com/nove-b/hugo-Passage)) で issue を作成するか、プルリクエストを送信してください。

## 最新情報を購読

最新のアップデートやリリース情報を受け取るために、GitHub でスター ⭐ を付けてください！ ([https://github.com/nove-b/hugo-Passage](https://github.com/nove-b/hugo-Passage))

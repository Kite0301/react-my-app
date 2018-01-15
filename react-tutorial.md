# Reactチュートリアル

## 目次
0. はじめに
1. 環境構築
2. Reactアプリを作る
3. Component
4. props
5. state

## 0. はじめに
このチュートリアルは「Progate React入門講座」用の資料です。  
初心者向けに、初めてのReact開発の手順が書かれています。  
（この資料だけではわかりにくい箇所もあるかもしれません。）

内容は [公式のReactチュートリアル](https://reactjs.org/tutorial/tutorial.html) を参考にしています。

前提知識としては、HTMLとJavaScriptの基礎的な内容がわかっていれば大丈夫です。  
HTMLやJSの文法でわからない内容があれば、Progateで学習してみてください。

## 1. 環境構築

### Node.jsのインストール
6系以上のバージョンのNode.jsがインストールされている必要があります。  
以下のコマンドをターミナルで実行してみてください。
```
$ node -v
```
`v6.7.0` のようなバージョンが表示された場合は、すでにインストールされています。

インストールされていない場合は以下の記事を参考にしてみてください。

Mac: [Macにnode.jsをインストールする手順。 - Qiita](https://qiita.com/akakuro43/items/600e7e4695588ab2958d)  
Windows: [nodistでNode.jsをバージョン管理 - Qiita](https://qiita.com/satoyan419/items/56e0b5f35912b9374305)

### npmで「create-react-app」をインストール
npmとは、Node.jsのパッケージを管理するためのツールです。  
今回は事前に「create-react-app」というパッケージをインストールしておきます。
```
$ npm install -g create-react-app
```

これで環境構築はおしまいです。

テキストエディタはお好きなものを使っていただければ大丈夫ですが、SublimeTextだと一部上手くハイライトされない説があるので、個人的には [Atom](https://atom.io/) がお勧めです。

## 2. Reactアプリを作る

先ほどインストールした「create-react-app」を使うと、必要なファイル郡を一気に作成してくれます。  
任意のディレクトリで、以下のコマンドを実行してください。

```
$ create-react-app my-app
```

`my-app` というディレクトリが作成され、それ以下にいくつかファイルが作成されたと思います。

`src` ディレクトリ以下のファイルは一旦不要ですので、すべて消します。

```
$ cd my-app
$ rm -f src/*
```

Reactのコードを書いていくためのファイルを `index.js` という名前で、`src` ディレクトリ直下に作成してください。

作成した `index.js` 内に、以下のコードを書いてください。

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);
```

ターミナルで以下のコマンドを実行してください。
```
$ npm start
```

以下のような画面が表示されればOKです。

```
Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000/
```
ブラウザで「 http://localhost:3000/ 」にアクセスすると、「Hello World」が表示されているかと思います。

なお、ターミナルで `npm start` を実行したままにしておくことで、コードを変更するたびに自動でその変更を反映してくれます。

### 解説
ひとまず無事React開発を開始することができました。  
ここまでに書いたコードの簡単な解説です。

```js
import React from 'react';
import ReactDOM from 'react-dom';
```
追加したJSのコードの最初の2行で、Reactでの開発で必要なものを読み込んでいます。

```js
ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);
```
残りの4行の部分は、「`root`というid名をもったHTML要素の中で`<h1>Hello World</h1>`を表示する」という意味のコードです。

では、「`root`というid名をもったHTML要素」はそもそもどこにあるのでしょうか？  
それは `my-app/public/index.html` の29行目にすでに用意されています。

ブラウザで実際に表示されているHTMLはこの `index.html` であり、それにJSで要素を上書きしている、というイメージです。

## Component

ここからは「タスク管理アプリ」を作成しながら、Reactの使い方を学習していきましょう。

どのようなWebページも、様々なパーツから構成されています。  
ヘッダーや見出し、ボタンなどのパーツが組み合わさって1つのページとなります。

このようなそれぞれのパーツのことを **Component（コンポーネント）** と呼び、Reactではこのコンポーネントをいくつか用意して組み合わせることでWebページを作成していきます。

ではまずは `Main` というコンポーネントを作成してみましょう。

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <h1>タスク一覧</h1>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
```
`class`から始まる部分が1つのコンポーネントです。  
`render()` の `return` の値が実際に表示される内容です。

`ReactDOM.render` 内の `<h1>Hello World</h1>` の部分を `<Main />` と書き換えています。  
このように書くことで、`Main` コンポーネントを呼び出し、表示させることができます。

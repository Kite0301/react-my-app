# Reactチュートリアル

## 目次
1. 環境構築
2. Reactアプリの作成
3. Component ~ 表示結果を構成するパーツ ~
4. CSSの追加
5. props ~ コンポーネント間のデータの受け渡し ~
6. state ~ コンポーネント内の状態 ~
7. タスクの追加
8. タスクの削除

### はじめに
このチュートリアルは「Progate React入門講座」用の資料です。  
初心者向けに、初めてのReact開発の手順が書かれています。  
（この資料だけではわかりにくい箇所もあるかもしれません。）

Reactの基礎知識を学習しながら、**タスク管理アプリ** を作成してみましょう。

環境構築の手順等は [公式のReactチュートリアル](https://reactjs.org/tutorial/tutorial.html) を参考にしています。

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

## 2. Reactアプリの作成

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

## 3. Component ~ 表示結果を構成するパーツ ~

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

さらにコードを追加してみましょう。  
以下のように、`<h1>`タグを`<div>`タグで囲んでみましょう。
```js
render() {
  return (
    <div>
      <h1>タスク一覧</h1>
    </div>
  );
}
```
追加した`<div>`にクラス名を付けてみます。  
ただし、ここまでで書いてきたHTMLは実はHTMLではなく、HTMLによく似た **JSX** と呼ばれるものです。  
そのため、クラス名の付け方がHTMLとは少し異なります。

```js
render() {
  return (
    <div className='main'>
      <h1>タスク一覧</h1>
    </div>
  );
}
```
このように、`class`ではなく`className`とすることでクラスを付けられます。

さらにコードを追加してみましょう。  
以下のように`tasks`というクラスを持つ`<div>`を追加してください。
```js
<div className='main'>
  <h1>タスク一覧</h1>
  <div className='tasks'></div>
</div>
```

コンポーネントとは最初に説明した通り「パーツ」であり、いくつも用意することが可能です。  
ここではタスク一覧の1つ1つのリストを`List`というコンポーネントとして用意してみましょう。

コンポーネントの書き方は`Main`の時と同じです。  
`Main`コンポーネントより前に、以下のコードを追加してください。

```js
class List extends React.Component {
  render() {
    return (
      <div className='list'>
        <i className='far fa-circle' />
        トイレ掃除
      </div>
    );
  }
}
```

この`List`コンポーネントを`Main`の中で呼び出します。

```js
class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>タスク一覧</h1>
        <div className='tasks'>
          <List />
        </div>
      </div>
    );
  }
}
```

なお、`List`内の
```html
<i className='far fa-circle' />
```
の部分は
```html
<i className='far fa-circle'></i>
```
の省略した書き方です。  
このように、中身テキストがない場合には省略して書くことができます。

※ クラス名の `far fa-circle` に関しては後ほど説明します。

この時点での「index.js」のコードは [こちら](https://github.com/Kite0301/react-my-app/blob/master/src/archived/index-component.js) から確認できます。

## 4. CSSの読み込み
「タスク一覧」の大まかなHTMLを表示することができたので、そのためのCSSも追加しましょう。

まずは `my-app/public` の中に **stylesheet.css** を追加し、以下のリンク先のコードを貼り付けてください。

[stylesheet.css](https://raw.githubusercontent.com/Kite0301/react-my-app/master/public/stylesheet.css)

このチュートリアルで必要なCSSはこれで全てです。

追加したCSSを読み込むようにしましょう。  
*2. Reactアプリの作成* で説明したように、実際に表示されているHTMLファイルは「index.html」です。  
なので、「index.html」の`<head>`内にCSSを読み込むための`<link>`を追加すればOKです。

```html
<head>
  <!-- 中略 -->
  <link rel="stylesheet" href="stylesheet.css">
  <!-- 中略 -->
</head>
```

ブラウザで表示結果が変わっていることを確かめてみましょう。

また、今回はアイコンの表示で [Font Awesome](https://fontawesome.com/) を使用していますので、そのためのCSSも追加しましょう。
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.4/css/all.css">
```

なお、前の章で追加した `far fa-circle` は、Font Awesome で丸いアイコンを表示するためのクラス名です。  
[https://fontawesome.com/icons/circle?style=regular](https://fontawesome.com/icons/circle?style=regular)

## 5. props ~ コンポーネント間のデータの受け渡し ~

前の章で作成した `List` コンポーネントを使用して、複数のタスクを表示できるようにしてみましょう。

↓ `Main` コンポーネント内
```js
<div className='main'>
  <h1>タスク一覧</h1>
  <div className='tasks'>
    <List />
    <List />
  </div>
</div>
```
しかし、これでは「トイレ掃除」が2つ表示されてしまいます。

ここでは「タスクの種類だけコンポーネントを用意する」のではなく、「`List`コンポーネント内の表示を変更できる」ようにしてみましょう。

コンポーネントを呼び出す（用いる）ときには、そのコンポーネントに情報を渡すことができます。  
今回はそれぞれの`List`コンポーネントに**title**という名前の情報を渡してみましょう。  
（この名前は自分で自由に決めることができます）

```html
<div className='main'>
  <h1>タスク一覧</h1>
  <div className='tasks'>
    <List title='トイレ掃除' />
    <List title='ポチの散歩' />
  </div>
</div>
```

これで情報を「渡す」ことはできました。  
次はコンポーネント側で情報を受け取り、表示してみましょう。

コンポーネントに渡した情報は **this.props** という値に入るようになっています。  
`title` という名前をつけて渡したあたいは、`this.props.title` とすることで使用できます。

```js
return (
  <div className='list'>
    <i className='far fa-circle' />
    {this.props.title}
  </div>
);
```

上記のように、`トイレ掃除` と書かれていた部分を `{this.props.title}` に書き換えてください。  
これで上からそれぞれ「トイレ掃除」「ポチの散歩」が表示されたかと思います。

なお、このようにJSX内でJavaScriptの変数などを用いる場合には **コードを{}で囲む** 必要があります。

この時点での「index.js」のコードは [こちら](https://github.com/Kite0301/react-my-app/blob/master/src/archived/index-props.js) から確認できます。

## 6. state ~ コンポーネントの状態管理 ~

次はタスクに左側に表示されているアイコンをクリックすると、チェックマークを付けられるようにしましょう。

Reactのコンポーネントで情報を管理する方法として、「props」の他に「**state**」というものがあります。  
「props」がコンポーネント間の値の受け渡しであったのに対し、「state」はコンポーネント内で状態を管理するのに用います。

今、`List`コンポーネントは2つ呼び出されていますが、それぞれのコンポーネントが「チェックされている状態であるか？」という情報を保存しておけば、その値をもとにアイコンの表示を切り替えることが可能です。

まず、必要なコードを整えましょう。
```js
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  render() {
    // 中略
  }
}
```

上記 `constructor` という部分を追加してください。  
`constructor` はコンポーネントの初期設定を行うためのものです。

```js
this.state = {
  checked: false,
}
```

という部分では、`state` の `checked` の値は、初期状態では `false` である、ということを意味しています。

`render` 内も`state`を用いて書き換えてみましょう。

```js
render() {
  return (
    <div className='list'>
      {this.state.checked
        ? <i className='fas fa-check-circle' />
        : <i className='far fa-circle' />
      }
      {this.props.title}
    </div>
  );
}
```

このように書くことで、`this.state.checked` の値が `true` の時はチェックマークが、  
値が `false` の時は通常の◯が表示されるようになります。

---

では次は、このアイコンをクリックすると `this.state.checked` の値が `false` から `true` へ切り替わるようにしてみましょう。

まず、アイコン部分全体を `<span>` で囲みます。

```js
<span>
  {this.state.checked
    ? <i className='fas fa-check-circle' />
    : <i className='far fa-circle' />
  }
</span>
```

「<span>をクリックしたら、〇〇をする」という処理を書いてみましょう。

```js
changeChecked() {
  // ここに<span>をクリックした時の処理を書く
}

render() {
  return (
    <div className='list'>
      <span onClick={this.changeChecked.bind(this)}>
        {this.state.checked
          ? <i className='fas fa-check-circle' />
          : <i className='far fa-circle' />
        }
      </span>
      {this.props.title}
    </div>
  );
}
```

1. `<span>`に`onClick`を追加し、その値に`{this.changeChecked.bind(this)}`を指定します
2. `render`の外で`changeChecked`というメソッドを用意します

このようにすることで、`<span>` をクリックすると、`changeChecked`メソッドの中の処理が実行されるようになります。

後は、`changeChecked` の中に `this.state.checked` の値を書き換える処理を追加しましょう。

```js
changeChecked() {
  this.setState({checked: !this.state.checked})
}
```

`state` の値を書き換えるには **this.setState({名前: 値})** とします。  
今の `this.state.checked` の値とは逆にしたいので、`!this.state.checked` と先頭に `!` を付けています。

この時点での「index.js」のコードは [こちら](https://github.com/Kite0301/react-my-app/blob/master/src/archived/index-state.js) から確認できます。

## 7. フォームの扱い

最後に、フォームを追加してタスクを追加できるようにしてみましょう。

そのためにまずは、`Main`コンポーネントで各タスクのタイトルを `state` で管理するようにします。

```js
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['トイレ掃除', 'ポチの散歩'],
    }
  }
  // 省略
}
```

`tasks` という名前で、配列を用いて管理しましょう。

`render`内でも `this.state.tasks` を用いて各タスクを表示するように変えましょう。

```js
render() {
  return (
    <div className='main'>
      <h1>タスク一覧</h1>
      <div className='tasks'>
        {this.state.tasks.map((task, index) => {
          return (
            <List key={`list-${index}`} title={task} />
          )
        })}
      </div>
    </div>
  );
}
```

Reactで配列の中身を1つづつ表示するには、上記のように `map` を用いると便利です。  
`map`の中で表示する要素には、必ず `key` を指定する必要があります。

次に、フォームで新たに入力したタスク名を管理するための `inputText` という `state` を追加しましょう。

```js
constructor(props) {
  super(props);
  this.state = {
    tasks: ['トイレ掃除', 'ポチの散歩'],
    inputText: '',
  }
}
```

初期状態では空の文字列 `''` にしておきます。

実際に表示するフォームも追加しましょう。

```js
render() {
  return (
    <div className='main'>
      <h1>タスク一覧</h1>
      <div className='tasks'>
        {this.state.tasks.map((task, index) => {
          return (
            <List key={`list-${index}`} title={task} />
          )
        })}
      </div>
      <form>
        <input type='text' />
      </form>
    </div>
  );
}
```

`<form>` を追加し、その中に `<input>` を追加しましょう。

先ほどの `this.state.inputText` の値が `<input>` の値になるので、以下のように `value` を追加します。

```js
<form>
  <input
    type='text'
    value={this.state.inputText}
  />
</form>
```

しかし、この状態では `this.state.inputText` が常に `''` なので、フォームに文字を入力しても何も表示されません。  
ユーザーが文字を入力する度に、`this.state.inputText` の値が更新されるようにしましょう。

```js
handleChangeText(event) {
  this.setState({inputText: event.target.value});
}

render() {
  return (
    <div className='main'>
      <h1>タスク一覧</h1>
      <div className='tasks'>
        {this.state.tasks.map((task, index) => {
          return (
            <List key={`list-${index}`} title={task} />
          )
        })}
      </div>
      <form>
        <input
          type='text'
          value={this.state.inputText}
          onChange={this.handleChangeText.bind(this)}
        />
      </form>
    </div>
  );
}
```

前の章で学習した `onClick` の代わりに、ここでは `onChange` を用いましょう。  
`<input>`に文字を入力する度に `handleChangeText` というメソッドが呼ばれます。

メソッドの中では、`event.target.value` で入力した文字を取得することができます。

次に、値を送信した時（Enterキーを押した時）の処理を追加します。  
「送信した時」は `onSubmit` を用います。

```js
<form onSubmit={this.handleSubmit.bind(this)}>
  <input
    type='text'
    value={this.state.inputText}
    onChange={this.handleChangeText.bind(this)}
  />
</form>
```

`handleSubmit` メソッドも用意しましょう。

```js
handleSubmit(event) {
  event.preventDefault()
}
```

フォームを送信すると、自動的にページ遷移が発生してしまいます。  
これを防ぐため、`onSubmit` の処理内では `event.preventDefault()` を用いるようにします。

`inputText` の値を配列である `tasks` に追加します。
```js
handleSubmit(event) {
  event.preventDefault()

  const newTasks = this.state.tasks    // 1
  newTasks.push(this.state.inputText)  // 2
  this.setState({
    tasks: newTasks,                   // 3
    inputText: '',                     // 4
  })
}
```

やや複雑ですが、やっていることは、

1. 定数`newTasks`に`this.state.tasks`の値（配列）を代入
2. `newTasks`の末尾に`this.state.inputText`の値を追加
3. `state`の`tasks`の値を更新
4. `state`の`inputText`の値を空文字列に更新

となります。

最後に、空の状態では送信できないようにしたら完成です！

```js
handleSubmit(event) {
  event.preventDefault()

  if (this.state.inputText === '') {
    return
  }

  const newTasks = this.state.tasks
  newTasks.push(this.state.inputText)
  this.setState({
    tasks: newTasks,
    inputText: '',
  })
}
```

完成した「index.js」のコードは [こちら](https://github.com/Kite0301/react-my-app/blob/master/src/index.js) から確認できます。

---

やや急ぎ足で解説したのでわかりにくい箇所もあったかもしれませんが、これでReactの基礎を学習できたはずです。  
最後まで読んでいただきありがとうございます。

最終更新: 2018/01/18

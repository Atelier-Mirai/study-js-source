/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// ID属性が html の要素を取得する
let html = document.getElementById("html")


// (最初の) <h1>要素を取得する
let h1 = document.querySelector("h1")


// 六つの <li> 要素 全て を取得する
let lists = document.querySelectorAll("li")}


// 取得した六つの <li> 要素 全て を表示する
for (const li of lists) {
  console.log(li);
}


// DOMツリーから要素を取得
let element = document.querySelector("h1")
// マークアップコンテンツを取得する
let content = element.innerHTML
// 取得したマークアップコンテンツを表示する
console.log(content)


// DOMツリーから要素を取得
let element = document.querySelector("h1")
// マークアップコンテンツを設定する
let element.innerHTML = "JavaScript<br>練習"


// DOMツリーから要素を取得
let element = document.getElementById("javascript")
// テキスト内容を取得する
let content = element.innerText
// 取得したテキスト内容を表示する
let console.log(content)


// DOMツリーから要素を取得
let element = document.getElementById("javascript")
// テキスト内容を設定する
let element.innerText = `JavaScriptを利用すると、
HTML要素の取得や更新など、
さまざまなことが行えます。`


// DOMツリーから要素を取得
let element = document.querySelector("li:nth-child(2)")
// テキスト内容を取得する
let content = element.textContent
// 取得したテキスト内容を表示する
console.log(content)


// DOMツリーから要素を取得
let element = document.querySelector("li:nth-child(2)")
// テキスト内容を設定する
element.textContent = "エディタ (Pulsar / Zed / VS Codeなど)"


// DOMツリーから要素を取得
let element = document.getElementById("css")

// ID文字列を取得する
let idString = element.id

// 取得したID文字列を表示する
console.log(idString)


// 新しいIDを設定する
element.id = "CascadingStyleSheet"


// 要素のIDを削除する
element.removeAttribute("id")


// DOMツリーから要素を取得
let element = document.querySelector("li:first-child")

// クラス名を取得する
let name = element.className

// 取得したクラス名を表示する
console.log(name)


// 新しいクラス名を設定する
element.className = "effect"


// 新しいクラス名を「追加」設定する
element.className = `${name} effect`


// 要素のクラス名を削除する
element.removeAttribute("class")


// DOMツリーから要素を取得
let element = document.querySelector("h1")

// タイトル属性を取得する
let value = element.title

// 取得したタイトル属性を表示する
console.log(value)



// タイトル属性に新しい値を設定する
element.setAttribute("title", "千里の道も一歩から")

// タイトル属性を取得する
let value = element.title

// 取得したタイトル属性を表示する
console.log(value)


// タイトル属性を削除する
element.removeAttribute("title")


// 新しい p 要素を作成する
newParagraph = document.createElement("p")

// p 要素に 文字列を追加する
newParagraph.append("DOMの学習は完了です")

// p 要素を body に追加する
let body = document.querySelector("body")
body.append(newParagraph)



// 新しい p 要素を作成する
let newParagraph = document.createElement("p")

// p 要素に 文字列を追加する
newParagraph.append("DOMの学習は完了です")

// p 要素を body に追加する
let body = document.querySelector("body")
body.append(newParagraph)


// p 要素を取得し 削除する
let paragraph = document.querySelector('p')
paragraph.remove()

// 変数に入力することなく 繋げて書くことも出来ます (メソッドチェーン)
// p 要素を取得し 削除する
document.querySelector('p').remove()

// ol 要素を削除する
document.querySelector('ol').remove()

// ul 要素を削除する
document.querySelector('ul').remove()

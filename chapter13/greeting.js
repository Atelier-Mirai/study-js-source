// HTML中の挨拶ボタン要素を取得
const GREETING_BUTTON = document.getElementById("greeting")

// 挨拶する為の関数を定義
const GREETING = () => {
  // body 要素を取得
  const BODY = document.querySelector("body")

  // 挨拶文の為のp要素を作成
  let p = document.createElement("p")
  p.textContent = "おはよう"

  // body 要素に 生成した p 要素を追加
  BODY.append(p)
}

// 挨拶ボタンにイベントリスナを設定、
// クリックされたらGREETING関数が呼ばれ、実行される
GREETING_BUTTON.addEventListener("click", GREETING)

// HTML中の挨拶ボタン要素を取得
const greetingButton = document.getElementById("greeting")

// 挨拶ボタンにイベントリスナを設定、
// クリックされたらgreeting関数が呼ばれ、実行される
greetingButton.addEventListener("click", () => {
  // body 要素を取得
  const body = document.querySelector("body")

  // 挨拶文の為のp要素を作成
  let p = document.createElement("p")
  p.textContent = "おはよう"

  // body 要素に 生成した p 要素を追加
  body.append(p)
})

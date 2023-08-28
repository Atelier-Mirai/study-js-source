// HTML中の挨拶ボタン要素を取得
const greetingButton = document.getElementById("greeting")

// 挨拶する為の関数を定義
const greeting = () => {
  // body 要素を取得
  const body = document.querySelector("body")

  // 挨拶文の為のp要素を作成
  let p = document.createElement("p")

  // 現在時刻を取得
  let today = new Date()
  let hour  = today.getHours()

  // 時間帯に応じた挨拶にする
  if (6 <= hour && hour < 12) {
    p.textContent = "おはよう"
  } else if (12 <= hour && hour < 18) {
    p.textContent = "こんにちは"
  } else {
    p.textContent = "こんばんは"
  }

  // body 要素に 生成した p 要素を追加
  body.appendChild(p)
}

// 挨拶ボタンにイベントリスナを設定、
// クリックされたらgreeting関数が呼ばれ、実行される
greetingButton.addEventListener("click", greeting)

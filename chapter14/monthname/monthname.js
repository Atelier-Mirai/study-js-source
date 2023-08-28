// 和風月名の配列
const MONTHS = ["", "睦月", "如月", "彌生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"]

// id が next の要素(=翌月ボタン)を取得
const next = document.getElementById("next")

// 現在の月を取得
let today        = new Date()
let currentMonth = today.getMonth() + 1

// 次の月を表示する為の関数
const nextMonth = () => {
  // p要素を新規作成
  let p = document.createElement("p")
  // 和風月明の配列を用いて MONTHS[curretnMonth] とすることで
  // 現在の月の名前を取得する
  let name = MONTHS[currentMonth]
  // p要素に取得した月名を追加する
  p.append(name)

  // body要素を取得する。
  let body = document.querySelector("body")
  // 取得したbody要素に先ほど作成したp要素を追加する
  body.append(p)

  // 三項演算子を用いて、次の月へと更新する
  currentMonth = (currentMonth === 12) ? 1 : currentMonth + 1
}

// イベントリスナーの登録
// next が click されると nextMonth が実行される
next.addEventListener("click", nextMonth)

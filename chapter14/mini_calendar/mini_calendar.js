// 和風月名の配列
const MONTHS = ["", "睦月", "如月", "彌生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"]

// 現在何月を表示中か取得する
let name = document.querySelector(".name")
// let currentMonth = month.getAttribute("data-month")
// datasetプロパティを通して データ属性 data-month="1" の値を取得する
let stringMonth = name.dataset.month
// datasetプロパティを通して取得した値は文字列なので、
// 計算に用いることができるよう、Number関数により数値型に変換する
currentMonth = Number(stringMonth)

// 前月操作時の各種更新
const previousMonth = () => {
  currentMonth = (currentMonth === 1) ? 12 : currentMonth - 1
  // データ属性に更新したcurrentMonthを設定する
  name.dataset.month = currentMonth
  name.innerText = MONTHS[currentMonth]
}

// 前月操作時の各種更新
const nextMonth = () => {
  currentMonth = (currentMonth === 12) ? 1 : currentMonth + 1
  // データ属性に更新したcurrentMonthを設定する
  name.dataset.month = currentMonth
  name.innerText = MONTHS[currentMonth]
}

// イベントリスナの登録
const prev = document.querySelector(".prev")
prev.addEventListener("click", previousMonth)
const next = document.querySelector(".next")
next.addEventListener("click", nextMonth)

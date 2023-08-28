/* 暦 & 簡易ブログ のための JavaScript
-------------------------------------------------------------------------*/

// 本日
let today        = new Date()
let currentYear  = today.getFullYear()
let currentMonth = today.getMonth() + 1

// 定数宣言
const thisYear    = currentYear
const thisMonth   = currentMonth
const thisDay     = today.getDate()
const MONTHS      = ["", "睦月", "如月", "彌生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"]
const WDAYS       = ["日", "月", "火", "水", "木", "金", "土"]
const NAME_OF_DAY = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

// 暦本体の為の要素定義
const calendar  = document.getElementById("calendar")

// 前月翌月の操作盤の為の要素生成
const panel = document.createElement("div")
panel.className = "panel"
  // 前月
  const a_prev = document.createElement("a")
  a_prev.className = "prev"
  a_prev.setAttribute("title", "前月")
  a_prev.innerHTML = "&lt;"
  a_prev.addEventListener("click", previousMonth)
  // 翌月
  const a_next = document.createElement("a")
  a_next.className = "next"
  a_next.setAttribute("title", "翌月")
  a_next.innerHTML = "&gt;"
  a_next.addEventListener("click", nextMonth)
  // 月表示
  const span_month = document.createElement("span")
  span_month.className = "month"
  span_month.setAttribute("data-month", currentMonth)
  span_month.innerHTML = MONTHS[currentMonth]
panel.append(a_prev)
panel.append(a_next)
panel.append(span_month)
calendar.append(panel)

// 暦本体の為の要素生成
const table = document.createElement("table")
const thead = document.createElement("thead")
let tr = document.createElement("tr")
for (wday in WDAYS) {
  th   = document.createElement("th")
  text = `${WDAYS[wday]}`
  th.append(text)
  tr.append(th)
}
thead.append(tr)
table.append(thead)
calendar.append(table)

// 七曜表を生成
showCalendar(currentYear, currentMonth)

// 前月操作時の各種更新
function previousMonth() {
  currentMonth = (currentMonth === 1) ? 12 : currentMonth - 1
  document.querySelector("#calendar .month").setAttribute("data-month", currentMonth)
  document.querySelector("#calendar .month").innerText = MONTHS[currentMonth]
  // 七曜表生成
  showCalendar(currentYear, currentMonth)
}

// 翌月操作時の各種更新
function nextMonth() {
  currentMonth = (currentMonth === 12) ? 1 : currentMonth + 1
  document.querySelector("#calendar .month").setAttribute("data-month", currentMonth)
  document.querySelector("#calendar .month").innerText = MONTHS[currentMonth]
  // 七曜表生成
  showCalendar(currentYear, currentMonth)
}

// 当月の七曜表を生成
function showCalendar(year, month) {
  // 以前の七曜表を削除
  tbody = document.getElementById("tbody")
  if (tbody !== null) { tbody.remove() }
  // 当月の七曜表を新規作成
  tbody     = document.createElement("tbody")
  tbody.id  = "tbody"

  // 月初の空日処理
  let wday = 0
  let tr   = document.createElement("tr")

  // 今月1日は何曜日か (日曜日: 0, 土曜日: 6)
  let firstDay = zeller(year, month, 1)

  // 月が始まるまでの空日処理
  // (今月1日が土曜日なら 6つ空白が必要)
  for (let date = 1 - firstDay; date < 1; date++, wday++) {
    td = document.createElement("td")
    tr.append(td)
  }

  // 一日から末日までの処理
  for (date = 1; date <= daysInMonth(year, month); date++) {
    td = document.createElement("td")
    td.className = NAME_OF_DAY[wday]  // "sunday", "monday" など
    a = document.createElement("a")
    a.setAttribute("href", "#")
    a.append(date)
    td.append(a)
    tr.append(td)

    // 週末(土曜日)まで処理したら 翌週の行を生成
    if (wday === 6) {
      tbody.append(tr)
      tr = document.createElement("tr")
      wday = 0
    } else {
      wday++
    }
  }
  tbody.append(tr)
  table.append(tbody)
}

// その月の日数を返す
function daysInMonth(year, month) {
  if (leapYear()) {
    // 閏年     1   2   3   4   5   6   7   8   9  10  11  12月
    return [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  } else {
    // 平年
    return [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  }
}

// 閏年判定
function leapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

// ツェラーの公式
// https://ja.wikipedia.org/wiki/ツェラーの公式
function zeller(year, month, day) {
  if (month === 1 || month === 2) {
    month += 12
    year  -=  1
  }

  let d     = day
  let m     = month
  let C     = Math.floor(year/100)
  let Y     = year % 100
  let gamma = -2*C + Math.floor(C/4)

  let h     = (d + Math.floor(26*(m+1)/10) + Y + Math.floor(Y/4) + gamma) % 7
  let wday  = (h + 6) % 7
  // 曜日 日  月  火  水  木  金  土
  // h    1   2   3   4   5   6   0
  // wday 0   1   2   3   4   5   6

  return wday
}

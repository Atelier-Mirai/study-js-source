/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// HTML中の各要素を取得する
const form      = document.getElementById("form")
const inputInch = document.getElementById("inch")
const inputMm   = document.getElementById("mm")
const inputPx   = document.getElementById("px")
const calc      = document.getElementById("calc")

// イベントリスナ
// calcボタンをクリックした際の処理を登録
calc.addEventListener("click", () => {
  // FormDataクラスのインスタンスを生成すると
  // <form>内の各<input>枠に入力された値が取得しやすくなる
  const formData  = new FormData(form)

  // formDateから各枠(inch, mm, px)の入力値を取得する
  let inch = formData.get("inch")
  let mm   = formData.get("mm")
  let px   = formData.get("px")

  // 入力値は「文字列」として取得されるので
  // 計算に使えるよう NUmber関数により 数値に変換する
  inch     = Number(inch)
  mm       = Number(mm)
  px       = Number(px)

  // inch枠になにか数字が入力されていたなら
  if (inch !== 0) {
    // inchをもとにmmやpxを算出する
    mm = inch * 25.4
    px = inch * 96
  } else if (mm !== 0) {
    inch = mm / 25.4
    px   = inch * 96
  } else if (px !== 0) {
    inch = px / 96
    mm   = inch * 25.4
  }

  // 小数点以下三桁に整形する
  // 例: 9.6 -> "9.600"
  inch = pretyFormat(inch)
  mm   = pretyFormat(mm)
  px   = pretyFormat(px)

  // 各入力枠(inch, mm, px)に値を設定する
  inputInch.value = inch
  inputMm.value   = mm
  inputPx.value   = px
})

// 小数点以下三桁に整形するための関数
// 例: 9.6 -> "9.600" を返す
pretyFormat = (n) => {
  n               = n + 2000 * Number.EPSILON
  n               = Math.floor(n * 1000) / 1000
  integerPart     = Math.floor(n)
  decimalFraction = (n % 1) + 2000 * Number.EPSILON
  decimalFraction = Math.round(decimalFraction * 1000)

  if (decimalFraction < 10) {
    decimalFraction = `00${String(decimalFraction)}`
  } else if (decimalFraction < 100) {
    decimalFraction = `0${String(decimalFraction)}`
  }

  return `${integerPart}.${decimalFraction}`
}

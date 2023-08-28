/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// 年齢は20歳
let age = 20

if (age >= 18) {
  console.log("大人料金です")
}


// 年齢は10歳
let age = 10

if (age >= 18) {
  console.log("大人料金です")
} else if (age >= 12) {
  console.log("中高生料金です")
} else if (age >= 6) {
  console.log("小学生料金です")
}


// 年齢は5歳
let age = 5

if (age >= 18) {
  console.log("大人料金です")
} else if (age >= 12) {
  console.log("中高生料金です")
} else if (age >= 6) {
  console.log("小学生料金です")
} else {
  console.log("無料です")
}


// 料金の為の変数宣言
let price

age = 20
if (age >= 18) {
  price = 1000
} else {
  price = 500
}


// 条件演算子(三項演算子)
price = (age >= 18) ? 1000 : 500


// 料金の為の変数宣言
let price
// 性別は女性である
let gender = "female"
// 年齢は20歳である
let age = 20

if (age >= 18 && gender === "female") {
  // 18歳以上 かつ 性別が女性
  price = 800
} else if (age >= 18) {
  // 18歳以上
  price = 1000
} else {
  // それ以外
  price = 500
}


if (age >= 65 || gender === "female") {
  // 65歳以上 または 性別が女性
  price = 800
} else if (age >= 18) {
  // 18歳以上
  price = 1000
} else {
  // それ以外
  price = 500
}


// 入れ子になった if 文
if (isSpecialDay()) {
  // 特別日の料金処理
  if (age >= 18) {
    price = 700
  } else {
    price = 300
  }
} else {
  // 普通日の料金処理
  if (age >= 18) {
    price = 1000
  } else {
    price = 500
  }
}

// 特別日判定関数
// 特別日なら true を
// 普通日なら false を返す
function isSpecialDay() {
  let today = new Date()
  let d = today.getDate()
  if (d === 1) {
    return true
  }
  return false
}

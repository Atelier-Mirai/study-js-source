/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// 変数を使い 合計点と平均点を求める
let kokugo = 85
let sansuu = 95
let rika   = 85
let shakai = 75

let goukei = kokugo + sansuu + rika + shakai
let heikin = goukei / 4

// 配列の宣言と初期値設定
let scores = [85, 95, 85, 75]
console.log("配列表示", scores)

// 1番目の要素の値を更新(95 -> 100)
scores[1] = 100
console.log("要素更新", scores)

// 4番目に新しい要素を追加
scores[4] = 50
console.log("要素追加", scores)

// 8番目に新しい要素を追加
scores[8] = 80
console.log("要素追加", scores)

// 3番目の要素を削除
scores.splice(3, 1)
console.log("要素削除", scores)


// 点数配列を宣言 ＆ 初期データを投入
let scores = [85, 95, 85, 75]

// 合計点を、for 文を使って求める
let total = 0
for (let i = 0; i < 4; i++) {
  total = total + scores[i]
}

// 平均点を求める
let average = total / 4

// 結果を表示する
console.log(total)
console.log(average)


// 点数配列を宣言 ＆ 初期データを投入
let scores = [85, 95, 85, 75]

// 合計点を、@<code>{for...of} 文 を使って求める
let total = 0
for (const score of scores) {
  total += score
}

// 平均点を求める
let average = total / scores.length

// 結果を表示する
console.log(total)
console.log(average)

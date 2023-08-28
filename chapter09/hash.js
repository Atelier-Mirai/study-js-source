/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// 配列の宣言と初期値設定
let scores = [85, 95, 85, 75]


// 連想配列の宣言と初期値設定
let hash_scores = { kokugo: 85, sansuu: 95, rika: 85, shakai: 75 }


// 要素の取得
hash_scores["kokugo"]


// 要素の取得
hash_scores.kokugo


// 要素の更新
hash_scores["kokugo"] = 95
hash_scores.kokugo = 95


// 要素の追加
hash_scores["programming"] = 100
hash_scores.programming = 100


// 要素の削除
delete hash_scores["shakai"]
delete hash_scores.shakai


// 連想配列を宣言 ＆ 初期データを投入
let hash_scores = { kokugo: 85, sansuu: 95, rika: 85, shakai: 75 }

// 合計点を、@<code>{for...in} 文を使って求める
let total = 0
for (let key in hash_scores) {
  let value = hash_scores[key]
  total += value
}

// 平均点を求める
let count = Object.keys(hash_scores).length
let average = total / count

// 結果を表示する
console.log(total)
console.log(average)

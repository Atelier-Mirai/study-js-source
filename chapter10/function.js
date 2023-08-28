/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// 関数宣言
// 関数名は addで 仮引数は a と b
function add(a, b) {
  // 関数が呼び出されたときの処理
  // 二つの数を足して、answer という 変数に代入する。
  let answer = a + b
  // return文を使い、関数の返り値を、呼びだし元に返す。
  return answer
}

// 関数呼び出し
// 足し算を行う関数 add に 引数 5 と 27 を渡して、呼び出す。
// そして、呼び出した結果を、result という変数で受け取る。
let result = add(5, 27)
// 関数の結果を表示する
alert(result)


// アロー関数
const add = (a, b) => {
  return a + b;
}


// 従来の関数宣言
function add(a, b) {
  return a + b;
}


// 関数の呼び出しと結果の表示
const answer = add(9, 23);
alert(answer);


// 変数 add に 関数tashizanを代入する
const add = function tashizan(a, b) {
  return a + b;
}


// 関数の呼び出しと結果の表示
const answer = add(9, 23);
alert(answer);


// 変数 add に 無名関数を代入する
const add = function (a, b) {
  return a + b;
}


// アロー関数の完成
const add = (a, b) => {
  return a + b;
}

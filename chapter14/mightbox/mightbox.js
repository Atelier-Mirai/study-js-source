/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// mightboxクラス(複数ある場合は先頭要素のみ)を取得する
let mightbox = document.querySelector(".mightbox")

// イベントリスナを登録、mightboxクリック時の処理を記述する
mightbox.addEventListener("click", (event) => {
  // aタグのリンク先への遷移を停止する
  event.preventDefault()

  // 画像表示用の要素 #modal を作成
  let modal = document.createElement("div")
  modal.id = "modal"

  // img要素を作成
  let img = document.createElement("img")
  // 表示したい原画像のURLを href属性より取得し、設定する
  img.src = mightbox.getAttribute("href")

  // #modal に img 要素を追加する
  modal.append(img)
  // body に #modal要素を追加する（原画像が表示されるようになる）
  document.querySelector("body").append(modal)
  // サムネイル画像（縮小画像）が見えぬよう、hiddenクラスを追加する
  mightbox.classList.add("hidden")

  // イベントリスナを登録、#modalクリック時の処理を記述する
  modal.addEventListener("click", () => {
    // サムネイル画像（縮小画像）が見えるよう、追加したhiddenクラスを削除する
    mightbox.classList.remove("hidden")
    // #modal要素を削除する（元頁が表示されるようになる）
    modal.remove()
  })
})

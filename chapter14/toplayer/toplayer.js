// HTML中の各要素（サムネイル画像、原画像、ダイアログ要素）を取得
const THUMBNAIL_IMAGE = document.querySelector(".open-dialog")
const ORIGINAL_IMAGE  = document.querySelector(".close-dialog")
const DIALOG          = document.querySelector("dialog")

// ダイアログ(モーダルウィンドウ)を開く為の関数を定義
const OPEN_DIALOG = () => {
  DIALOG.showModal()
}

// ダイアログ(モーダルウィンドウ)を閉じる為の関数を定義
const CLOSE_DIALOG = () => {
  DIALOG.close()
}

// サムネイル画像にイベントリスナを設定、
// クリックされたらOPEN_DIALOG関数が呼ばれ、実行される
THUMBNAIL_IMAGE.addEventListener("click", OPEN_DIALOG)
// 原画像にイベントリスナを設定、
// クリックされたらCLOSE_DIALOG関数が呼ばれ、実行される
ORIGINAL_IMAGE.addEventListener("click", CLOSE_DIALOG)

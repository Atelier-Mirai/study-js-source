/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

// selectorプロパティに、
// 画像ギャラリー、説明書き、動画再生、インライン表示させたいクラス名を指定します
GLightbox({
  selector: ".glightbox"
})

GLightbox({
  selector: ".glightbox-with-description"
})

GLightbox({
  selector: ".glightbox-videos-gallery"
})

GLightbox({
  selector: ".glightbox-inline"
})

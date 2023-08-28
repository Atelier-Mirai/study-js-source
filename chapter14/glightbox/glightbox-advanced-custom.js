// 基本的な画像ギャラリー
let lightbox = GLightbox()
lightbox.on("open", (target) => {
  // 画像ギャラリーが開かれると、コンソール画面に表示します
  console.log("画像ギャラリーが開かれました")
})

// 説明付き画像ギャラリーの為のコード
let lightboxDescription = GLightbox({
  // selectorプロパティに、クラス名を指定します
  selector: ".glightbox-with-description"
})

// 動画ギャラリーの為のコード
let lightboxVideo = GLightbox({
  // selectorプロパティに、クラス名を指定します
  selector: ".glightbox-videos-gallery"
})
lightboxVideo.on("slide_changed", ({ prev, current }) => {
  console.log("前のスライド", prev)
  console.log("現在のスライド", current)
  const { slideIndex, slideNode, slideConfig, player } = current
  if (player) {
    if (!player.ready) {
      // If player is not ready
      player.on("ready", (event) => {
        // Do something when video is ready
      })
    }

    player.on("play", (event) => {
      console.log("動画再生が始まりました")
    })

    player.on("volumechange", (event) => {
      console.log("音量が変更されました")
    })

    player.on("ended", (event) => {
      console.log("動画が終了しました")
    })
  }
})

// インラインの為のコード
let lightboxInlineIframe = GLightbox({
  // selectorプロパティに、クラス名を指定します
  selector: ".glightbox-inline"
})

// let exampleApi = GLightbox({ selector: null })
// exampleApi.insertSlide({
//   href: "https://picsum.photos/1200/800",
// })
// exampleApi.insertSlide({
//   width: "500px",
//   content: "<p>Example</p>"
// })
// exampleApi.insertSlide({
//   href: "https://www.youtube.com/watch?v=WzqrwPhXmew",
// })
// exampleApi.insertSlide({
//   width: "200vw",
//   content: document.getElementById("inline-example")
// })
// exampleApi.open()

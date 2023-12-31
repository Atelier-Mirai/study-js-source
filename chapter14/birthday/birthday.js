/*=====================================================================
  index.htmlから読み込むようにする他
  ブラウザの開発者ツールを開き
  必要箇所を コンソール画面に貼り付けるなどして
  ご活用下さい
=====================================================================*/

/*=====================================================================
  日数変換に用いる各種関数の定義
=====================================================================*/

/* 和暦からグレゴリオ暦へ変換する為の関数
-------------------------------------------------------------------------*/
const Wareki2Gregorian = (gengo, year, month, date) => {
       if (gengo === "meiji")  { year += 1867 }
  else if (gengo === "taisho") { year += 1911 }
  else if (gengo === "showa")  { year += 1925 }
  else if (gengo === "heisei") { year += 1988 }
  else if (gengo === "reiwa")  { year += 2018 }

  return [year, month, date]
}

/* グレゴリオ暦から和暦へ変換する為の関数
-------------------------------------------------------------------------*/
const Gregorian2Wareki = (year, month, date) => {
  // 各元号末日の修正ユリウス日
  const MEIJI_ERA  = 19613
  const TAISHO_ERA = 24874
  const SHOWA_ERA  = 47533
  const HEISEI_ERA = 58603
  let gengo = ""

  // 修正ユリウス日を求める
  let mjd = Gregorian2MJD(year, month, date)

  // 元号とグレゴリオ暦年を求める
       if (mjd <= MEIJI_ERA)  { gengo = "meiji";  year -= 1867 }
  else if (mjd <= TAISHO_ERA) { gengo = "taisho"; year -= 1911 }
  else if (mjd <= SHOWA_ERA)  { gengo = "showa";  year -= 1925 }
  else if (mjd <= HEISEI_ERA) { gengo = "heisei"; year -= 1988 }
  else                        { gengo = "reiwa";  year -= 2018 }

  // 算出結果を返す
  return [gengo, year, month, date]
}

/* グレゴリオ暦から修正ユリウス日を返す為の関数
-------------------------------------------------------------------------*/
const Gregorian2MJD = (year, month, date) => {
  // 1月や2月は前年の13月,14月として扱う
  if (month === 1 || month === 2) {
    month += 12
    year  -= 1
  }

  // 公式に従い、修正ユリウス日mjdを求める
  let mjd = Math.floor(365.25 * year)
          + Math.floor(year / 400)
          - Math.floor(year / 100)
          + Math.floor(30.59 * (month - 2))
          + date
          - 678912

  // 算出結果を返す
  return mjd
}

/* 修正ユリウス日からグレゴリオ暦を返す為の関数
-------------------------------------------------------------------------*/
const MJD2Gregorian = (mjd) => {
  // 与えられた修正ユリウス日mjdから、公式に従い、グレゴリオ暦を求める
  n = mjd + 678881
  a = 4*n + 3 + 4*Math.floor((3.0/4.0) * Math.floor(4*(n+1)/146097 + 1))
  b = 5 * Math.floor( (a % 1461) / 4) + 2
  y = Math.floor(a / 1461)
  m = Math.floor(b / 153) + 3
  d = Math.floor((b % 153) / 5) + 1
  if (m === 13 || m === 14) {
    m = m - 12
    y = y +  1
  }

  // 算出結果を返す
  return [y, m, d]
}

/* 和暦を綺麗に整形して出力する為の関数
-------------------------------------------------------------------------*/
const pretyFormat = (gengo, year, month, date) => {
  // 変換表(変換テーブル)
  const table = { "meiji": "明治", "taisho": "大正", "showa": "昭和", "heisei": "平成", "reiwa": "令和" }

  // 令和1年ではなく、令和元年と出力する為に
  year = (year === 1) ? "元" : sprintf("%02d", year)

  // 整形結果を返す
  return `${table[gengo]}${year}年${sprintf("%02d", month)}月${sprintf("%02d", date)}日`
}

/* sprintf: 書式指定子に基づき、引数を整形して返す関数
  "%02d" で 0詰めした二桁を返す
-------------------------------------------------------------------------*/
const sprintf = (format, number) => {
  // 一桁の数なら、0詰めして返す
  if (format === "%02d" && number < 10) {
    return `0${number}`
  } else {
    return number
  }
}

/* 誕生日から今日までの日数を返す為の関数
-------------------------------------------------------------------------*/
const daysAliveFromBirthday = (year, month, date) => {
  // 誕生日の修正ユリウス日を求める
  birthdayMjd = Gregorian2MJD(year, month, date)

  // 今日の日付を取得
  let today = new Date()
  ty = today.getFullYear()
  tm = today.getMonth() + 1
  td = today.getDate()
  if (tm === 1 || tm === 2) {
    tm += 12
    ty -=  1
  }
  // 今日の修正ユリウス日を求める
  todayMjd = Gregorian2MJD(ty, tm, td)

  // 引き算をすることで、何日経過したか、判明する
  return todayMjd - birthdayMjd
}

/* 誕生日から10000日経過した記念日など日付を返す為の関数
-------------------------------------------------------------------------*/
const dateFromBirthdayToAnniversary = (year, month, date, elapsedDays) => {
  // 誕生日の修正ユリウス日を求める
  birthdayMjd = Gregorian2MJD(year, month, date)

  // 経過日数elapsedDaysを誕生日の修正ユリウス日に加えると、
  // 記念日の修正ユリウス日になる
  anniversaryMjd = birthdayMjd + elapsedDays

  // 修正ユリウス日をグレゴリオ暦に変換、日付を返す
  return MJD2Gregorian(anniversaryMjd)
}

/*=====================================================================
  入力フォームの処理
  誕生日から今日までの日数を計算する為に
=====================================================================*/

// 誕生日フォームの為の定数宣言
const formBirthday   = document.getElementById("form-birthday")
const calcBirthday   = document.getElementById("calc-birthday")
const outputBirthday = document.getElementById("output-birthday")

// 誕生日の計算するボタンの為のイベントリスナ
calcBirthday.addEventListener("click", () => {
  // form から入力された値を取得する
  let formDataBirthday = new FormData(formBirthday)
  let gengo = formDataBirthday.get("gengo")
  let year  = formDataBirthday.get("year")
  let month = formDataBirthday.get("month")
  let date  = formDataBirthday.get("date")

  // form から取得した値は文字列型なので、数値型に変換する
  year  = Number(year)
  month = Number(month)
  date  = Number(date)

  // 和暦からグレゴリオ暦に変換
  let y, m, d
  [y, m, d] = Wareki2Gregorian(gengo, year, month, date)

  // 生きてきた日数を求める
  let daysAlive = daysAliveFromBirthday(y, m, d)

  // 出力する
  outputBirthday.textContent = `今日は 生まれてから 「${daysAlive}」日目の記念日です`
})

/*=====================================================================
  入力フォームの処理
  (生まれてから10000日目など) 記念日の日付を計算する為に
=====================================================================*/

// 記念日フォームの為の定数宣言
const formAnniversary   = document.getElementById("form-anniversary")
const calcAnniversary   = document.getElementById("calc-anniversary")
const outputAnniversary = document.getElementById("output-anniversary")

// 記念日の計算するボタンの為のイベントリスナ
calcAnniversary.addEventListener("click", () => {
  // form から入力された値を取得する(誕生日)
  let formDataBirthday = new FormData(formBirthday)
  let gengo = formDataBirthday.get("gengo")
  let year  = formDataBirthday.get("year")
  let month = formDataBirthday.get("month")
  let date  = formDataBirthday.get("date")
  // form から入力された値を取得する(記念日)
  let formDataAnniversary = new FormData(formAnniversary)
  let anniversary = formDataAnniversary.get("anniversary")

  // form から取得した値は文字列型なので、数値型に変換する
  year        = Number(year)
  month       = Number(month)
  date        = Number(date)
  anniversary = Number(anniversary)

  // 和暦からグレゴリオ暦に変換
  let gy, gm, gd
  [gy, gm, gd] = Wareki2Gregorian(gengo, year, month, date)

  // 生まれてからanniversary日目の日付を求める
  let ay, am, ad
  [ay, am, ad] = dateFromBirthdayToAnniversary(gy, gm, gd, anniversary)

  // 和暦に変換する
  let wg, wy, wm, wd
  [wg, wy, wm, wd] = Gregorian2Wareki(ay, am, ad)

  // 見やすいように整形する
  let day = pretyFormat(wg, wy, wm, wd)

  // 出力する
  outputAnniversary.textContent = `生まれてから ${anniversary} 日目の記念日は「${day}」です`
})

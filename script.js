'use strict'
// Please don't delete the 'use strict' line above
const greeting = ["메리 크리스마스!", "Merry Christmas!", "Frohe Weihnachten!", "聖誕節快樂！", "С Рождеством!", "Buon Natale!", "Mutlu Noeller!", "Рождество майрамы менен!", "Vrolijk kerstfeest!", "メリークリスマス!"];


//読み込み時にランダム出力
window.onload = function(){
  let randomNum = Math.floor(Math.random() * 10);
  const h2 = document.getElementsByTagName("h2")[0];
  h2.innerHTML = greeting[randomNum];
  h2.setAttribute("class", `greeting${randomNum}`);
}
const messeage = document.getElementById("message");
document.getElementById("greetingBtn").addEventListener('click', changeCristmas);


function changeCristmas() {
  //値の初期化
  const textBox = document.querySelector(".messageArea");
  const h2 = document.getElementsByTagName("h2")[0];
  const img = document.querySelector(".mainImg");
  let randomNum = Math.floor(Math.random() * 10);
  let randomSanta = Math.floor(Math.random() * 5);
  const testWord = "メリークリスマス";

  //半角カナ変換
  function kanahenkan(str){
    var kanaMap = { "ｸ": "ク", "ｽ": "ス", "ﾏ": "マ", "ﾒ": "メ", "ﾘ": "リ", "ｰ":"ー" };
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    console.log("kanaMap: " + reg);
    return str.replace(reg, function (match) {
      console.log("ss" + kanaMap[match]);
        return kanaMap[match];
      })
  }
  let chiristmasWord = kanahenkan(messeage.value).substr(0, 8);
  //.substr(0, 8)メソッド→文字列から特定の文字を取り出す。第1引数で開始文字を指定。第2引数で取り出す文字数を指定。

  console.log("test2:" + chiristmasWord);


  //テキスト条件分岐
  if (chiristmasWord === testWord) {
    console.log(randomNum);
    console.log(greeting[randomNum]);
    h2.innerHTML = greeting[randomNum];
    h2.setAttribute("class", `greeting${randomNum}`);
    img.setAttribute("src", `images/santa${randomSanta}.png`);
    console.log(messeage.value);
    textBox.innerHTML = `サンタさん! ${messeage.value}`;

    //ランダムカラー
    const borderColors = [255, 255, 255];
    let randomBorder = 0;
    let randomBgColor = 0;
    const borderArr1 = [];
    const borderArr2 = [];
    for (let i = 0; i < borderColors.length; i++) {
      randomBorder = Math.floor(Math.random() * borderColors[i]);
      borderArr1.push(randomBorder);
      randomBgColor = Math.floor(Math.random() * borderColors[i]);
      borderArr2.push(randomBgColor);
      let rgb1 = "rgb(" + borderArr1.join() + ")";
      let rgb2 = "rgb(" + borderArr2.join() + ")";
      document.getElementsByTagName("body")[0].style.backgroundColor = rgb1;
      document.getElementsByTagName("body")[0].style.backgroundImage = `linear-gradient(0deg, ${rgb2} 50%, transparent 50%)`;
    }
          //ランダムカラー
    if (randomSanta === 4) {
      h2.innerHTML = `僕はトナカイ！<br>いい子にしていた君には<br>クリスマスにプレゼントを届けるよ★`;
    }

  } else if (!messeage.value) {
    h2.innerHTML = "メリークリスマスって<br>言ってみて!";
    h2.setAttribute("class", `greeting-again`);
  } else if (chiristmasWord !== testWord) {
    h2.innerHTML = "Pardon?";
    h2.setAttribute("class", `greeting-again`);
    textBox.innerHTML = messeage.value;
  }
}

//音楽再生
// const music = document.getElementById("music");
const music = new Audio('music/christmas.mp3');
const play = document.getElementById('playMusic');
play.addEventListener("click",function(){
 if(!music.paused){
   document.getElementById("playMusic").innerHTML = `<i class="fas fa-play"></i>`;
   music.pause();
 }else{
   document.getElementById("playMusic").innerHTML = `<i class="fas fa-pause"></i>`;
   music.play();
 }
});
music.addEventListener("ended", function(){
  music.currentTime = 0;
  music.play();
},false);




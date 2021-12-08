
// オープニング再生
var music = new Audio();
function Opening() {
    document.getElementById("StartIcon").style.display ="none";
    music.preload = "auto";
    music.src = "music/opening.mp3";
    music.load();
    music.play();
    $('#Character').fadeIn(2000)
    $('#Message_01').fadeIn(3000)
    $('#Text_1').fadeIn(3000)
    // setTimeout(() => {
    //     document.getElementById("Message_01").style.display ="block";
    // }, 2000);     
}

// ユーザーデータを取得
const UserName = localStorage.getItem("UserName");
window.onload = function(){
    test = document.getElementById("Text_9").innerHTML = UserName + "君!!";
    console.log(test);
}

// 文章の読み上げ
let Count = 2;
let Mcount = 1;
function TextReading(){
    if (Count==13){
        window.location.href='game.html';
    } else {
        console.log(Count);
        document.getElementById("Text_"+ Count).style.display="block";
        document.getElementById("Text_"+ Mcount).style.display="none";
        Count ++;
        Mcount ++;   
    }
}

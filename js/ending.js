 //ローカルストレージからデータ読み込み
const MonsterName = localStorage.getItem("MonsterName");
const UserId = localStorage.getItem("UserId");


// ユーザーがモンスターの情報を持っていた場合、連想配列で受け取る
let Monster = { };
db.ref('/users/' + UserId + '/' + MonsterName).once("value",function(snapshot) {
    const MonsterData = snapshot.val();
    if (snapshot.exists()){
        Monster["MonsterName"]= MonsterData.MonsterName;        
        Monster["MonsterImg"]= MonsterData.MonsterImg; 
        Monster["MonsterHp"]= MonsterData.MonsterHp; 
        Monster["MaxHp"]= MonsterData.MaxHp; 
        Monster["MaxScore"]= MonsterData.MaxScore; 
        Monster["FrontSkill"]= MonsterData.FrontSkill; 
        Monster["BackSkill"]= MonsterData.BackSkill; 
        Monster["InfraSkill"]= MonsterData.InfraSkill; 
        Monster["FrontScore"]= MonsterData.FrontScore; 
        Monster["BackScore"]= MonsterData.BackScore; 
        Monster["InfraScore"]= MonsterData.InfraScore;
        Monster["CreateSkill"]= MonsterData.CreateSkill;
        Monster["CreateScore"]= MonsterData.CreateScore;
        Monster["ShinkaImageA"]= MonsterData.ShinkaImageA;
        Monster["ShinkaImageB"]= MonsterData.ShinkaImageB;
        Monster["ShinkaImageC"]= MonsterData.ShinkaImageC;
        Monster["MonsterUserName"]= MonsterData.MonsterUserName;
        Monster["BackScoreBar"]= MonsterData.BackScoreBar; 
        Monster["CreateScoreBar"]= MonsterData.CreateScoreBar; 
        Monster["FrontScoreBar"]= MonsterData.FrontScoreBar; 
        Monster["InfraScoreBar"]= MonsterData.InfraScoreBar; 
        Monster["MonsterHpBar"]= MonsterData.MonsterHpBar;
        // コメント関連 
        Monster["BackComment"]= MonsterData.BackComment; 
        Monster["FrontComment"]= MonsterData.FrontComment;
        Monster["InfraComment"]= MonsterData.InfraComment;
        Monster["RestComment_1"]= MonsterData.RestComment_1;
        Monster["RestComment_2"]= MonsterData.RestComment_2;
        Monster["CreateComment_1"]= MonsterData.CreateComment_1;
        Monster["CreateComment_2"]= MonsterData.CreateComment_2;
        // エンディングコメント関連 
        Monster["Endcom_1"]= MonsterData.Endcom_1; 
        Monster["Endcom_2"]= MonsterData.Endcom_2; 
        Monster["Endcom_3"]= MonsterData.Endcom_3; 
        Monster["Endcom_4"]= MonsterData.Endcom_4;
    } else {
        db.ref('/monsters/monster06/').once("value",function(snapshot) {
        const MonsterData = snapshot.val();
        Monster["MonsterName"]= MonsterData.MonsterName;
        Monster["MonsterImg"]= MonsterData.MonsterImage; 
        Monster["MonsterHp"]= MonsterData.MonsterHp; 
        Monster["MaxHp"]= MonsterData.MaxHp; 
        Monster["MaxScore"]= MonsterData.MaxScore; 
        Monster["FrontSkill"]= MonsterData.FrontSkill; 
        Monster["BackSkill"]= MonsterData.BackSkill; 
        Monster["InfraSkill"]= MonsterData.InfraSkill; 
        Monster["FrontScore"]= MonsterData.FrontScore; 
        Monster["BackScore"]= MonsterData.BackScore; 
        Monster["InfraScore"]= MonsterData.InfraScore;
        Monster["CreateSkill"]= MonsterData.CreateSkill;
        Monster["CreateScore"]= MonsterData.CreateScore;
        Monster["ShinkaImageA"]= MonsterData.ShinkaImageA;
        Monster["ShinkaImageB"]= MonsterData.ShinkaImageB;
        Monster["ShinkaImageC"]= MonsterData.ShinkaImageC;
        Monster["MonsterUserName"]= MonsterData.MonsterUserName;
        Monster["BackScoreBar"]= MonsterData.BackScoreBar; 
        Monster["CreateScoreBar"]= MonsterData.CreateScoreBar; 
        Monster["FrontScoreBar"]= MonsterData.FrontScoreBar; 
        Monster["InfraScoreBar"]= MonsterData.InfraScoreBar; 
        Monster["MonsterHpBar"]= MonsterData.MonsterHpBar;
        // コメント関連 
        Monster["BackComment"]= MonsterData.BackComment; 
        Monster["FrontComment"]= MonsterData.FrontComment; 
        Monster["InfraComment"]= MonsterData.InfraComment;
        Monster["RestComment_1"]= MonsterData.RestComment_1;
        Monster["RestComment_2"]= MonsterData.RestComment_2;
        Monster["CreateComment_1"]= MonsterData.CreateComment_1;
        Monster["CreateComment_2"]= MonsterData.CreateComment_2;
        // エンディングコメント関連 
        Monster["Endcom_1"]= MonsterData.Endcom_1; 
        Monster["Endcom_2"]= MonsterData.Endcom_2; 
        Monster["Endcom_3"]= MonsterData.Endcom_3; 
        Monster["Endcom_4"]= MonsterData.Endcom_4;
        db.ref('/users/' + UserId + '/' + MonsterName).set(Monster);
    });
    }
});    


// 音の再生ロジック
var audio = new Audio();
function StartPlay(a) {
    audio.src = a;
    audio.play();
    }

// "▼"押下時、コメント表示のイベント発火、及びステータスの更新処理を行う。
function EndingSet(){
    StartPlay('./music/Messagebutton.mp3');
    EndingMoji();
}


function end(){
    StartPlay('../music/opening.mp3');
}


// 以下、コメント欄の挙動で必要な値
// コメント欄の文字表示のアニメーションに利用します
var i=0;
// ~~PrintMoji()にてメッセージを呼び出す際に利用します
let mi = 0;
// ~~PrintMoji()にてメッセージをいれる変数です。MessageMotion(m)の形で引き渡します。
let m ="";
var printString;

function EndingMoji() {
    switch(mi){
        case mi=0:
            m = Monster["Endcom_1"];
            if(Monster["MonsterName"]=="TDモン"){
                $('#EndBack').html('<img src="../img/ending/tdending_1.png" class="EndImg" alt="">');                
            } else if (Monster["MonsterName"]=="ザキモン"){
                $('#EndBack').html('<img src="../img/ending/zakiending_1.png" class="EndImg" alt="">');                
                $('#EndBack').css('background', 'url()');

            }
            // document.getElementById("Next").style.display="block"            
            mi++;
            break;
        case mi=1:
            m =  Monster["Endcom_2"];
            if(Monster["MonsterName"]=="TDモン"){
                $('#EndBack').html('<img src="../img/ending/tdending_2.png" class="EndImg" alt="">');                
            } else if (Monster["MonsterName"]=="ザキモン"){
                $('#EndBack').html('<img src="../img/ending/zakiending_2.png" class="EndImg" alt="">');              
            }
            mi++;
            break;
        case mi=2:
            m =  Monster["Endcom_3"];
            if(Monster["MonsterName"]=="TDモン"){
                $('#EndBack').html('<img src="../img/ending/tdending_3.png" class="EndImg" alt="">');                
            } else if (Monster["MonsterName"]=="ザキモン"){
                $('#EndBack').html('<img src="../img/ending/zakiending_3.png" class="EndImg" alt="">');              
            }
            mi++;
            break;
        case mi=3:
            m = Monster["Endcom_4"];
            if(Monster["MonsterName"]=="TDモン"){
                $('#EndBack').html('<img src="../img/ending/tdending_4.png" class="EndImg" alt="">');                
            } else if (Monster["MonsterName"]=="ザキモン"){
                $('#EndBack').html('<img src="../img/ending/zakiending_4.png" class="EndImg" alt="">');              
            }
            document.getElementById("Next").removeAttribute('onclick','EndingSet()');
            document.getElementById("Next").setAttribute('onclick','EndingMoji()');                        
            mi++;
            break;
        case mi=4:            
            m = "エンドクレジット"
            mi++; 
            break;
        case mi=5:            
            m = "キャラクターデザイン：松坂千春"
            $('#EndBack').html('<img src="../img/ending/ending_1.png" class="EndImg" alt="">');              
            mi++; 
            break;
        case mi=6:            
            m = "テクニカルアドバイザー：TEAM兼松"
            $('#EndBack').html('<img src="../img/ending/ending_2.png" class="EndImg" alt="">');              
            mi++; 
            break;
        case mi=7:            
            m = "デバックチーフ：中村凌平"
            $('#EndBack').html('<img src="../img/ending/ending_3.png" class="EndImg" alt="">');              
            mi++; 
            break;
        case mi=8:            
            m = "終わり"
            $('#EndBack').html('<img src="" class="EndImg" alt="">')
            break;                                                 
    }
    MessageMotion(m);
   }

//   メッセージのスクロールアクション ▼ボタンの処理
function MessageMotion(m){
    document.getElementById("MotionText").innerText=m.substring(0,i++);
    if(i<=m.length) {
        setTimeout("MessageMotion(m)",50);
    } else {
        i = 0;
    }
}



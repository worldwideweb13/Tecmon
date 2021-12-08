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
        MonsterDataSet();
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
        MonsterDataSet();
        db.ref('/users/' + UserId + '/' + MonsterName).set(Monster);
    });
    }
});    


// モンスターのステータスが更新するタイミングでFBのデータを更新
function UpdateStatus(){
    db.ref('/users/' + UserId + '/' + MonsterName).update(Monster);
};

// ブラジャーモンのデータを受け取る
let BuraArry = {};
db.ref('/monsters/monster03').once("value",function(snapshot) {
    const MonsterData = snapshot.val();
    BuraArry.MonsterName= MonsterData.MonsterName;        
    BuraArry.MonsterImg= MonsterData.MonsterImage; 
    BuraArry.ShinkaImageA= MonsterData.ShinkaImageA;
    BuraArry.ShinkaImageB= MonsterData.ShinkaImageB;
    BuraArry.ShinkaImageC= MonsterData.ShinkaImageC;
    BuraArry.BackSkill= MonsterData.BackSkill;
    BuraArry.CreateSkill= MonsterData.CreateSkill;
    BuraArry.FrontSkill= MonsterData.FrontSkill; 
    BuraArry.MaxHp= MonsterData.MaxHp; 
    BuraArry.MaxScore= MonsterData.MaxScore;
    // コメント関連 
    BuraArry.BackComment= MonsterData.BackComment; 
    BuraArry.FrontComment= MonsterData.FrontComment; 
    BuraArry.InfraComment= MonsterData.InfraComment;
    BuraArry.RestComment_1= MonsterData.RestComment_1;
    BuraArry.RestComment_2= MonsterData.RestComment_2;
    BuraArry.CreateComment_1= MonsterData.CreateComment_1;
    BuraArry.CreateComment_2= MonsterData.CreateComment_2;
    // エンディングコメント関連 
    BuraArry.Endcom_1= MonsterData.Endcom_1; 
    BuraArry.Endcom_2= MonsterData.Endcom_2; 
    BuraArry.Endcom_3= MonsterData.Endcom_3; 
    BuraArry.Endcom_4= MonsterData.Endcom_4;     
});

// チャラモンのデータを受け取る
let CharaArry = {};
db.ref('/monsters/monster01').once("value",function(snapshot) {
    const MonsterData = snapshot.val();
    CharaArry.MonsterName= MonsterData.MonsterName;        
    CharaArry.MonsterImg= MonsterData.MonsterImage; 
    CharaArry.ShinkaImageA= MonsterData.ShinkaImageA;
    CharaArry.ShinkaImageB= MonsterData.ShinkaImageB;
    CharaArry.ShinkaImageC= MonsterData.ShinkaImageC;
    CharaArry.BackSkill= MonsterData.BackSkill;
    CharaArry.CreateSkill= MonsterData.CreateSkill;
    CharaArry.FrontSkill= MonsterData.FrontSkill; 
    CharaArry.MaxHp= MonsterData.MaxHp; 
    CharaArry.MaxScore= MonsterData.MaxScore;
    // コメント関連 
    CharaArry.BackComment= MonsterData.BackComment; 
    CharaArry.FrontComment= MonsterData.FrontComment; 
    CharaArry.InfraComment= MonsterData.InfraComment;
    CharaArry.RestComment_1= MonsterData.RestComment_1;
    CharaArry.RestComment_2= MonsterData.RestComment_2;
    CharaArry.CreateComment_1= MonsterData.CreateComment_1;
    CharaArry.CreateComment_2= MonsterData.CreateComment_2;    
    // エンディングコメント関連 
    CharaArry.Endcom_1= MonsterData.Endcom_1; 
    CharaArry.Endcom_2= MonsterData.Endcom_2; 
    CharaArry.Endcom_3= MonsterData.Endcom_3; 
    CharaArry.Endcom_4= MonsterData.Endcom_4;    
});


// カネモンモンのデータを受け取る
let KaneArry = {};
db.ref('/monsters/monster02').once("value",function(snapshot) {
    const MonsterData = snapshot.val();
    KaneArry.MonsterName= MonsterData.MonsterName;        
    KaneArry.MonsterImg= MonsterData.MonsterImage; 
    KaneArry.ShinkaImageA= MonsterData.ShinkaImageA;
    KaneArry.ShinkaImageB= MonsterData.ShinkaImageB;
    KaneArry.ShinkaImageC= MonsterData.ShinkaImageC;
    KaneArry.BackSkill= MonsterData.BackSkill;
    KaneArry.CreateSkill= MonsterData.CreateSkill;
    KaneArry.FrontSkill= MonsterData.FrontSkill; 
    KaneArry.MaxHp= MonsterData.MaxHp; 
    KaneArry.MaxScore= MonsterData.MaxScore;    
    // コメント関連 
    KaneArry.BackComment= MonsterData.BackComment; 
    KaneArry.FrontComment= MonsterData.FrontComment; 
    KaneArry.InfraComment= MonsterData.InfraComment;
    KaneArry.RestComment_1= MonsterData.RestComment_1;
    KaneArry.RestComment_2= MonsterData.RestComment_2;
    KaneArry.CreateComment_1= MonsterData.CreateComment_1;
    KaneArry.CreateComment_2= MonsterData.CreateComment_2;      
    // エンディングコメント関連 
    KaneArry.Endcom_1= MonsterData.Endcom_1; 
    KaneArry.Endcom_2= MonsterData.Endcom_2; 
    KaneArry.Endcom_3= MonsterData.Endcom_3; 
    KaneArry.Endcom_4= MonsterData.Endcom_4;    
});



// 進化後のモンスターデータを配列で取得
let EvoMon =[];
let monsterArray = [1,2,3];
const KaneMethod = (num) => {
    db.ref('/monsters/monster0' + num).once("value",function(snapshot) {
        if (snapshot.exists()){
            const EvoMonData = snapshot.val();
            const name = EvoMonData.MonsterName;
            const img = EvoMonData.MonsterImage;
            EvoMon.push(name);
            EvoMon.push(img);
        }    
    });
};
monsterArray.forEach(num => {
    KaneMethod(num);
});

// 進化後のモンスターデータをユーザーのモンスターデータに適応
function EvoUpadate(data){
    db.ref('/users/' + UserId + '/' + MonsterName).update(data);
}


// 音の再生ロジック
var audio = new Audio();
function StartPlay(a) {
    audio.src = a;
    audio.play();
    }


// ID値「mitarashi」に対してCSSアニメ―ション「purun」を600ミリ秒の間隔を空けてループ再生
// looopAnimation("MonsterImage", "purun", 600);

// プロモンの動きの制御
const MonsterMotion = document.getElementById("MonsterImage").animate(
    [{transform: "scale(1.0, 1.0)", translate:"(0%, 0%)", offset: 0},
     {transform: "scale(0.9, 0.9)", translate:"(0%, 5%)", offset:0.2},
     {transform: "scale(1.3, 0.8)", translate:"(0%, 10%)", offset:0.4},    
     {transform: "scale(0.8, 1.3)", translate:"(0%, -10%)", offset:0.6},    
     {transform: "scale(1.1, 0.9)", translate:"(0%, 5%)", offset:0.8},
     {transform: "scale(1.0, 1.0)",translate:"(0%, 0%)" , offset: 1},
    ],
     {duration: 2500,
      iterations: Infinity}
);

// プロモン進化時の動きの制御
// ブラモン進化時の画像モーション
var flag = "false";
var pici = 0;
function BuraSlideShow(){
    if(flag == "true"){
        var pics_src = new Array(Monster["MonsterImg"],Monster["ShinkaImageC"]);
        if(pici == 2){
            pici = 0;            
        }
        document.getElementById("MonsterImage").src=pics_src[pici];
        pici ++;
        setTimeout("BuraSlideShow()",500);
    } else{
        return
    }
}

// チャラモン進化時の画像モーション
function CharaSlideShow(){
    if(flag == "true"){
        var pics_src = new Array(Monster["MonsterImg"],Monster["ShinkaImageA"]);
        if(pici == 2){
            pici = 0;            
        }
        document.getElementById("MonsterImage").src=pics_src[pici];
        pici ++;
        setTimeout("CharaSlideShow()",500);
    } else{
        return
    }
}

// カネモン進化時の画像モーション
function KaneSlideShow(){
    if(flag == "true"){
        var pics_src = new Array(Monster["MonsterImg"],Monster["ShinkaImageB"]);
        if(pici == 2){
            pici = 0;            
        }
        document.getElementById("MonsterImage").src=pics_src[pici];
        pici ++;
        setTimeout("KaneSlideShow()",500);
    } else{
        return
    }
}

// ステータスのカウントスコア
function InsertText(id, status){
    document.getElementById(id).textContent = status;
}
// ステータスの最大値を取得して画面に表示
function InsertPoint(MaxScore, status){
    var SetMaxPoint =document.querySelectorAll('.'+ MaxScore);
    SetMaxPoint.forEach(function(Mscore){
        Mscore.innerHTML = status;
    });
}

// ステータスバーを取得して画面に表示
function InsertStatusBar(id,status){
    document.getElementById(id).style.width = status + "%";    
}


// キャラクターの各種要素の当て込み
function MonsterDataSet(){
    //キャラクター画像の当て込み    
    document.getElementById('MonsterImage').src = Monster['MonsterImg'];
    // キャラクターの各ステータスの当て込み
    InsertText("MonsterName", Monster["MonsterName"]+"のステータス");
    InsertText("CurrentHp", Monster["MonsterHp"]);
    InsertText("MaxHp", Monster["MaxHp"]);
    InsertText("CurrentFrontScore", Monster["FrontScore"]);
    InsertText("CurrentBackScore", Monster["BackScore"]);
    InsertText("CurrentInfraScore", Monster["InfraScore"]);    
    InsertPoint("MaxScore", Monster["MaxScore"]);
    // キャラクターのステータスバーの値を当て込み
    InsertStatusBar("MonsterHpBar",Monster["MonsterHpBar"]);
    InsertStatusBar("FrontScoreBar",Monster["FrontScoreBar"]);
    InsertStatusBar("InfraScoreBar",Monster["InfraScoreBar"]);
    InsertStatusBar("BackScoreBar",Monster["BackScoreBar"]);
}



// アクション時のスコア計算
const SkillRange = 0.1;
let SkillUpPoint;
function SkillCalc(Skill){
    const MaxPoint = Skill * (1 + SkillRange);
    const MinPoint = Skill * (1 - SkillRange);
    const SkillPoint = Math.floor(Math.random() * (MaxPoint - MinPoint) * MinPoint);
    SkillUpPoint = SkillPoint
    return SkillPoint;
}


// "HTML,CSSを学ぶ"押下時、コメント表示のイベント発火、及びステータスの更新処理を行う。
document.getElementById("FrontButton").addEventListener("click",function(){
    StartPlay('./music/Messagebutton.mp3');
    // ボタン制御
    var SetClass =document.querySelectorAll('.btn');
    SetClass.forEach(function(sc){
        sc.classList.add("deactive");
    });
    Monster["MonsterHp"] -= 20;
    let Calc = Monster["FrontScore"] + SkillCalc(Monster["FrontSkill"]);
    Monster["FrontScore"] = Calc;
    // updateData;
    InsertText("CurrentHp", Monster["MonsterHp"]);
    InsertText("CurrentFrontScore", Monster["FrontScore"]);
    FrontPrintMoji();
    // HPバーのステータス更新
    let mc = (Monster["MonsterHp"]/(Monster["MaxHp"]) *100);
    Monster["MonsterHpBar"] = mc;
    document.getElementById("MonsterHpBar").style.width = mc + "%";
     // フロントステータスバーのステータス更新   
    let fc = Math.floor(Monster["FrontScore"]/(Monster["MaxScore"]) *100);
    Monster["FrontScoreBar"] = fc;   
    document.getElementById("FrontScoreBar").style.width = fc + "%";
    // FBデータ更新     
    db.ref('/users/' + UserId + '/' + MonsterName).update(Monster);
});

// バックエンドを学ぶ押下時、コメント表示のイベント発火、及びステータスの更新処理を行う
document.getElementById("BackButton").addEventListener("click",function(){
    StartPlay('./music/Messagebutton.mp3');
    // ボタン制御
    var SetClass =document.querySelectorAll('.btn');
    SetClass.forEach(function(sc){
        sc.classList.add("deactive");
    });
    Monster["MonsterHp"] -= 10;
    let Calc = Monster["BackScore"] + SkillCalc(Monster["BackSkill"]);
    Monster["BackScore"] = Calc;
    InsertText("CurrentHp", Monster["MonsterHp"]);
    InsertText("CurrentBackScore", Monster["BackScore"]);
    //コメント欄の呼び出し 
    BackPrintMoji();
    // HPバーのステータス更新
    let mc = (Monster["MonsterHp"]/(Monster["MaxHp"]) *100);
    Monster["MonsterHpBar"] = mc;
    document.getElementById("MonsterHpBar").style.width = mc + "%";
    // バックエンドスキルバーの更新
    let bc = Math.floor(Monster["BackScore"]/(Monster["MaxScore"]) *100);
    Monster["BackScoreBar"] = bc;
    document.getElementById("BackScoreBar").style.width = bc + "%";
    // FBデータ更新     
    db.ref('/users/' + UserId + '/' + MonsterName).update(Monster);
});

// "インフラスキル"を学ぶ押下時、コメント表示のイベント発火、及びステータスの更新処理を行う
document.getElementById("InfraButton").addEventListener("click",function(){
    StartPlay('./music/Messagebutton.mp3');
    // ボタン制御
    var SetClass =document.querySelectorAll('.btn');
    SetClass.forEach(function(sc){
        sc.classList.add("deactive");
    });
    Monster["MonsterHp"] -= 10;
    let Calc = Monster["InfraScore"] + SkillCalc(Monster["InfraSkill"]);
    Monster["InfraScore"] = Calc;
    InsertText("CurrentHp", Monster["MonsterHp"]);
    InsertText("CurrentInfraScore", Monster["InfraScore"]);
    //コメント欄の呼び出し 
    InfraPrintMoji();
    // HPバーのステータス更新
    let mc = (Monster["MonsterHp"]/(Monster["MaxHp"]) *100);
    Monster["MonsterHpBar"] = mc;
    document.getElementById("MonsterHpBar").style.width = mc + "%";
    // インフラスコアバーの更新
    let ic = Math.floor(Monster["InfraScore"]/(Monster["MaxScore"]) *100);
    Monster["InfraScoreBar"] = ic;
    document.getElementById("InfraScoreBar").style.width = (Monster["InfraScore"]/(Monster["MaxScore"]) *100) + "%";
    // FBデータ更新
    db.ref('/users/' + UserId + '/' + MonsterName).update(Monster);
});

// "モンスターを休ませる"押下時、コメント表示のイベント発火、及びステータスの更新処理を行う
document.getElementById("RestButton").addEventListener("click",function(){
    StartPlay('./music/Messagebutton.mp3');
    // ボタン制御
    var SetClass =document.querySelectorAll('.btn');
    SetClass.forEach(function(sc){
        sc.classList.add("deactive");
    });
    if (Monster["MonsterHp"]>=80){
        Monster["MonsterHp"]=100;
    } else {
        Monster["MonsterHp"] += 30;
    }
    InsertText("CurrentHp", Monster["MonsterHp"]);
    //コメント欄の呼び出し     
    RestPrintMoji();
    const t = document.getElementById("MonsterHpBar").style.width = (Monster["MonsterHp"]/(Monster["MaxHp"]) *100) + "%";
});



// 以下、コメント欄の挙動で必要な値
// コメント欄の文字表示のアニメーションに利用します
var i=0;
// ~~PrintMoji()にてメッセージを呼び出す際に利用します
let mi = 0;
// ~~PrintMoji()にてメッセージをいれる変数です。MessageMotion(m)の形で引き渡します。
let m;
var printString;

// フロントボタン押下時のコメント欄
function FrontPrintMoji() {
    switch(mi){
        case mi=0:
            m = MonsterName + "はHTMLとCSSを勉強し始めた！";
            document.getElementById("Next").setAttribute('onclick','FrontPrintMoji(); TextReading()');
            document.getElementById("Next").style.display="block"            
            mi++;
            break;
        case mi=1:
            console.log(Monster);
            m = MonsterName + Monster["FrontComment"];
            mi++;
            break;
        case mi=2:
            m = MonsterName + "のフロントスキルが" + SkillUpPoint +"に上がった！" + 
                MonsterName + "の体力が" + Monster["MonsterHp"] +"に減った。";
            mi++;
            break;
        case mi=3:
            if(Monster["MonsterHp"] == 0){
                document.getElementById("RestButton").classList.remove("deactive");
            } else {
                var SetClass =document.querySelectorAll('.btn');
                SetClass.forEach(function(sc){
                    sc.classList.remove("deactive");
                });
            }
            m = MonsterName + "に何をさせる？";
            document.getElementById("Next").style.display="none";
            document.getElementById("Next").removeAttribute('onclick','FrontPrintMoji()');
            mi=0;
            Evolution();
            break;           
    }
    MessageMotion(m);
   }

// バックエンド押下時のコメント欄
function BackPrintMoji() {
    switch(mi){
        case mi=0:
            m = MonsterName + "はPHPとMySQLを学習し始めた！";
            document.getElementById("Next").setAttribute('onclick','BackPrintMoji(); TextReading()')
            document.getElementById("Next").style.display="block"            
            mi++;
            break;
        case mi=1:
            m = MonsterName + Monster["BackComment"];
            mi++;
            break;
        case mi=2:
            m = MonsterName + "のバックエンドスキルが" + SkillUpPoint +"に上がった！" + 
                MonsterName + "の体力が" + Monster["MonsterHp"] +"に減った。";
            mi++;
            break;
        case mi=3:
            if(Monster["MonsterHp"] == 0){
                document.getElementById("RestButton").classList.remove("deactive");
            } else {
                var SetClass =document.querySelectorAll('.btn');
                SetClass.forEach(function(sc){
                    sc.classList.remove("deactive");
                });
            }
            document.getElementById("Next").style.display="none";
            m = MonsterName + "に何をさせる？";
            document.getElementById("Next").removeAttribute('onclick','FrontPrintMoji()');
            mi=0;
            Evolution();           
            break;        
    }
    MessageMotion(m);
}

// インフラ押下時のコメント欄
function InfraPrintMoji() {
switch(mi){
    case mi=0:
        m = MonsterName + "はAWSとAzureを学習し始めた！";
        document.getElementById("Next").setAttribute('onclick','InfraPrintMoji(); TextReading()');
        document.getElementById("Next").style.display="block"            
        mi++;
        break;
    case mi=1:
        m = MonsterName + Monster["InfraComment"];
        mi++;
        break;
    case mi=2:
        m = MonsterName + "のインフラスキルが" + SkillUpPoint +"だけ上がった。" + 
        MonsterName + "の体力が" + Monster["MonsterHp"] +"に減った。";
        mi++;
        break;
    case mi=3:
        if(Monster["MonsterHp"] == 0){
            document.getElementById("RestButton").classList.remove("deactive");
        } else {
            var SetClass =document.querySelectorAll('.btn');
            SetClass.forEach(function(sc){
                sc.classList.remove("deactive");
            });
            document.getElementById("Next").style.display="none";
        }
        m = MonsterName + "に何をさせる？";
        document.getElementById("Next").removeAttribute('onclick','InfraPrintMoji()');
        mi=0;
        Evolution();
        break;           
}
MessageMotion(m);
}

// モンスターを休ませる押下時のコメント欄
function RestPrintMoji() {
    switch(mi){
        case mi=0:
            m = MonsterName + Monster["RestComment_1"];
            document.getElementById("Next").setAttribute('onclick','RestPrintMoji(); TextReading()');
            document.getElementById("Next").style.display="block";
            mi++;
            break;
        case mi=1:
            m = MonsterName + Monster["RestComment_2"];
            mi++;
            break;
        case mi=2:
            m = MonsterName + "の体力" + Monster["MonsterHp"] +"に回復した。";
            mi++;
            break;
        case mi=3:
            m = MonsterName + "に何をさせる？";
            document.getElementById("Next").removeAttribute('onclick','RestPrintMoji()');
            document.getElementById("Next").style.display="none";
            var SetClass =document.querySelectorAll('.btn');
            SetClass.forEach(function(sc){
                sc.classList.remove("deactive");
            });
            mi=0;
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
        i=0;
    }
}

function TextReading(){
    StartPlay('./music/Messagebutton.mp3');
}

// 進化イベント（ブラジャーモン）
function BuraShinka() {
    MonsterMotion.pause();   
    switch(mi){
        case mi=0:
            setTimeout(() => {
                StartPlay('../music/shinka.mp3');        
            }, 1000);
            var SetClass =document.querySelectorAll('.btn');
            SetClass.forEach(function(sc){
                sc.classList.add("deactive");
            });                        
            m = "おや。。。？"  + MonsterName + "の様子が。。？";
            document.getElementById("Next").setAttribute('onclick','BuraShinka(); TextReading()');
            document.getElementById("Next").style.display="block";
            break;
        case mi=1:
            setTimeout(() => {
                StartPlay('../music/shinka.mp3');        
            }, 100);
            // 画像の差し替えイベントフラグ
            flag = "true";             
            BuraSlideShow();
            m = MonsterName + "が不思議な動きをしているぞ。。！？";
            break;
        case mi=2:
            // 画像の差し替えイベントフラグの切り替え
            flag = "false";
            setTimeout(() => {
                StartPlay('../music/shinkago.mp3');        
            }, 500);             
            document.getElementById('MonsterImage').src = EvoMon[1];
            m = "おめでとう！" + MonsterName + "はブラジャーモンに進化した！";
            document.getElementById("Next").removeAttribute('onclick','BuraShinka()');
            // FBのデータ更新
            EvoUpadate(BuraArry);
            // ページ遷移
            setTimeout(() => {
                window.location.href='shinka_1.html';
            }, 4000);
            break;


    }
    MessageMotion(m);   
    mi++;
   }

// 進化イベント（チャラモン）
function CharaShinka() {
    MonsterMotion.pause();   
    switch(mi){
        case mi=0:
            setTimeout(() => {
                StartPlay('../music/shinka.mp3');        
            }, 1000);
            var SetClass =document.querySelectorAll('.btn');
            SetClass.forEach(function(sc){
                sc.classList.add("deactive");
            });                        
            m = "おや。。。？"  + MonsterName + "の様子が。。？";
            document.getElementById("Next").setAttribute('onclick','CharaShinka(); TextReading()');
            document.getElementById("Next").style.display="block";
            break;
        case mi=1:
            setTimeout(() => {
                StartPlay('../music/shinka.mp3');        
            }, 100);
            // 画像の差し替えイベントフラグ
            flag = "true";             
            CharaSlideShow();
            m = MonsterName + "が不思議な動きをしているぞ。。！？";
            break;
        case mi=2:
            // 画像の差し替えイベントフラグの切り替え
            flag = "false";
            setTimeout(() => {
                StartPlay('../music/shinkago.mp3');        
            }, 500);             
            document.getElementById('MonsterImage').src = EvoMon[3];
            m = "おめでとう！" + MonsterName + "はチャラモンに進化した！";
            document.getElementById("Next").removeAttribute('onclick','CharaShinka()');
            // FBのデータ更新
            EvoUpadate(CharaArry);
            // ページ遷移
            setTimeout(() => {
                window.location.href='shinka_1.html';
            }, 4000);            
            break;
}
    MessageMotion(m);   
    mi++;
   }

// 進化イベント（カネモン）
function KaneShinka() {
    MonsterMotion.pause();   
    switch(mi){
        case mi=0:
            setTimeout(() => {
                StartPlay('../music/shinka.mp3');        
            }, 1000);            
            m = "おや。。。？"  + MonsterName + "の様子が。。？";
            var SetClass =document.querySelectorAll('.btn');
            SetClass.forEach(function(sc){
                sc.classList.add("deactive");
            });            
            document.getElementById("Next").setAttribute('onclick','KaneShinka(); TextReading()');
            document.getElementById("Next").style.display="block";
            break;
        case mi=1:
            setTimeout(() => {
                StartPlay('../music/shinka.mp3');        
            }, 100);
            // 画像の差し替えイベントフラグ
            flag = "true";             
            KaneSlideShow();
            m = MonsterName + "が不思議な動きをしているぞ。。！？";
            break;
        case mi=2:
            // 画像の差し替えイベントフラグの切り替え
            flag = "false";
            setTimeout(() => {
                StartPlay('../music/shinkago.mp3');        
            }, 500);             
            document.getElementById('MonsterImage').src = EvoMon[5];
            m = "おめでとう！" + MonsterName + "はカネモンに進化した！";
            document.getElementById("Next").removeAttribute('onclick','KaneShinka()');
            // FBのデータ更新
            EvoUpadate(KaneArry);
            // ページ遷移
            setTimeout(() => {
                window.location.href='shinka_1.html';
            }, 4000);            
            break;
    }
    MessageMotion(m);   
    mi++;
}


// 進化後アクション
function Evolution(){
    if(Monster["FrontScore"]>=30){
        BuraShinka();
    } else if (Monster["FrontScore"]>=20 && Monster["BackScore"]>=20){
        CharaShinka();
    } else if (Monster["InfraScore"]>=20 && Monster["BackScore"]>=20){
        KaneShinka();
    }
}

# テクモンアドベンチャー

[![IMAGE ALT TEXT HERE](thumbnailImage.png)](https://youtu.be/0sLqy5UFSpA)

* 制作期間: 2020年11月~　7日間
* 使用言語: HTML,CSS,JavaScript, GoogleFireBase
* プロダクト紹介映像：
https://youtu.be/0sLqy5UFSpA

### 概要
「進化」をテーマにデジモン風の育成ゲームを作成しました。進化アクションや音声エフェクトをライブラリー使わずに全てゼロから実装したため、書いたコードが1000行を越え、可読性がめちゃくちゃ落ちました。。ですが、この経験を通じてデータベース、JS、HTMLの書き方を体感できたため、ここから自分でコードを書けるようになりました。

### 利用環境/再現手順
* firebasejs 8.0で製作したため、最新のfirebase環境では動作をしない可能性が高いです。　[register.html](https://github.com/worldwideweb13/Tecmon/blob/964ab9d44a910598bf5044aefaebd1712053673f/register.html) の23行目付近からFireBaseへの接続を行っています。コメントアウトの記述" //Your web app's Firebase configuration" 以下の部分からはご自身のfirebase利用環境の設定を書き込んで下さい。
* データベースはrealtimeデータベースを利用しています。[tecmon-RealtimeDatabase-export.json](https://github.com/worldwideweb13/Tecmon/blob/964ab9d44a910598bf5044aefaebd1712053673f/tecmon-RealtimeDatabase-export.json)　にゲームデータをjson形式で記載しておりますのでこのファイルを　realtimedatabaseにアップロードして下さい。
 
### 開発の苦労した点



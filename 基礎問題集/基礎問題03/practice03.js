'use strict';
//
// 基礎問題03
//
function main(){
    // HTMLより必要な情報を取得する
    // プルダウンで選択した結果の格納先
    var calemdar =  document.getElementById("calendar").value;
    
    // 判定結果の格納先変数
    var result = document.getElementById("result");
    // この上は触らない

    // ここを編集する
    result.textContent = "そんな月はありません";
    // ここまで
    
}

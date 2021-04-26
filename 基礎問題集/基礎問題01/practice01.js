'use strict';
//
// 基礎問題01
//
function main(){
    // HTMLより必要な情報を取得する
    // 午前のテスト結果の格納先変数
    var am =  parseInt( document.getElementById("input_am").value);

    //午後のテスト結果の格納先変数
    var pm =  parseInt( document.getElementById("input_pm").value);

    // 判定結果の格納先変数
    var result = document.getElementById("result");
    // この上は触らない

    // ここを編集する
    result.textContent = "不合格";
    // ここまで
}
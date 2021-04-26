'use strict';
//
// 基礎問題05
//
function main(){
    // HTMLより必要な情報を取得する
    // 初年度売上高
    var firstsales =  parseInt( document.getElementById("sales").value);

    // 成長率
    var rate =  parseInt( document.getElementById("rate").value);

    // 目標売上高
    var targetsales =  parseInt( document.getElementById("targetsales").value);

    // 判定結果の格納先変数
    var result = document.getElementById("result");
    // この上は触らない


    // ここを編集する
    result.textContent = 0;
    // ここまで
}
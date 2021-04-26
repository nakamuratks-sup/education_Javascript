'use strict';

function main(){
    // 午前のテスト結果の格納先変数
    var am =  parseInt( document.getElementById("input_am").value);

    //午後のテスト結果の格納先変数
    var pm =  parseInt( document.getElementById("input_pm").value);

    // 判定結果の格納先変数
    var result = document.getElementById("result");

    // ここを編集する
    if( (60 <= am) && (60 <= pm)){
        result.textContent = "合格";
    }else{
        result.textContent = "不合格";
    }
    // ここまで
}
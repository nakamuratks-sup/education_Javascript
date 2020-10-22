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
    console.log('クリックされました！ DOM');
    // ここまで
}

$(function(){
    $("#lv_am").click(function(){
        alert("Hello! World");
    });
});

// scriptタグをheadに書く場合はreadyで囲む必要がある
// $(document).ready(function () {
    $('#btn1').click(function(){
        // 入力欄から値を取得
        let jq_am = parseInt($("#input_am").val());
        let jq_pm = parseInt($("#input_pm").val());

        // 出力先のオブジェクトを取得
        let reslt_jq = $("#result");

        // ここを編集する
        $("#result").empty;
        if( (60 <= jq_am) && (60 <= jq_pm)){
            // 値の設定その１
            reslt_jq.text("合格");
        }else{
            // 値の設定その２
            $("#result").text("不合格");
        }
        console.log('クリックされました！ JQ');
    });
// })
function main(){
    // 入力値の格納先変数
    var num =  parseInt( document.getElementById("input_num").value);

    // 判定結果の格納先変数
    var result = document.getElementById("result");
    var tmp = 0;

    // ここを編集する
    for(var cnt = 0; cnt <=num; cnt++){
        tmp += cnt;
    }
    result.textContent = tmp;
    // ここまで
}
function main(){
    // 整数値
    var input_num =  parseInt( document.getElementById("input_num").value);

    

    // 判定結果の格納先変数
    var result = document.getElementById("result");
    var tmp = 0;

    // ここを編集する
    var type;
    if(input_num > 0){
        type = "正";
    }else{
        type = "負";
    }

    var type2;
    if((Math.abs(input_num) % 2) > 0){
        type2 = "奇数";
    }else{
        type2 = "偶数";
    }
    tmp = "入力された値は" + type + "の" + type2 + "です。"

    result.textContent = tmp;
    // ここまで
}
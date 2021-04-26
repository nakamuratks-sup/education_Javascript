function main(){
    // 初年度売上高
    var firstsales =  parseInt( document.getElementById("sales").value);

    // 成長率
    var rate =  parseInt( document.getElementById("rate").value);

    // 目標売上高
    var targetsales =  parseInt( document.getElementById("targetsales").value);

    // 判定結果の格納先変数
    var result = document.getElementById("result");
    var tmp = 0;

    // ここを編集する
    // 成長率を100分率に変換
    rate = rate / 100;
    var sales = firstsales;

    while(sales <= targetsales){
        sales = sales + (sales * rate);
        tmp++;
    }

    result.textContent = tmp;
    // ここまで
}
function main(){
        // プルダウンで選択した結果の格納先
        var calemdar =  document.getElementById("calendar").value;
       
        // 判定結果の格納先変数
        var result = document.getElementById("result");
        var tmp;
        // ここを編集する
        switch(calemdar){
            case "1月" : tmp = "睦月";break;
            case "2月" : tmp = "如月";break;
            case "3月" : tmp = "弥生";break;
            case "4月" : tmp = "卯月";break;
            case "5月" : tmp = "皐月";break;
            case "6月" : tmp = "水無月";break;
            case "7月" : tmp = "文月";break;
            case "8月" : tmp = "葉月";break;
            case "9月" : tmp = "長月";break;
            case "10月" : tmp = "神無月";break;
            case "11月" : tmp = "霜月";break;
            case "12月" : tmp = "師走";break;
            default: tmp = "そんな月はありません";
        }
        result.textContent = tmp;
        // ここまで
        
}

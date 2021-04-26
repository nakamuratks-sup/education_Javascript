function main(){
        // 午前のテスト結果の格納先変数
        var am =  parseInt( document.getElementById("input_am").value);

        //午後のテスト結果の格納先変数
        var pm =  parseInt( document.getElementById("input_pm").value);
    
        // 判定結果の格納先変数
        var result = document.getElementById("result");
    
        // ここを編集する
        // if( (80 <= am) && (80 <= pm)){
        //     result.textContent = "優";
        // }else if( ( (60 <= am) && (60 <= pm) ) && ( (80 <= am) || (80 <= pm) ) ){
        //     result.textContent = "良";
        // }else if( ( (60 <= am) && (60 <= pm) ) && ( (80 > am) && (80 > pm) ) ){
        //     result.textContent = "可";
        // }
        // else{
        //     result.textContent = "不可";
        // }
        var w_am = sub01(am);
        var w_pm = sub01(pm);
        result.textContent = sub02(w_am, w_pm);
        // ここまで
        
}

function sub01(point){
    if(80 <= point){
        return "良";
    }else if( (60 <= point) && (80 > point)){
        return "可"
    }else{
        return "不可";
    }
}

function sub02(res_am, res_pm){
    if( res_am == "良" && res_pm == "良"){
        return "優良";
    }else if( res_am == "不可" || res_pm == "不可"){
        return "不可";
    }else if( res_am == "可" && res_pm == "可"){
        return "可"
    }else{
        return "良"
    }
}
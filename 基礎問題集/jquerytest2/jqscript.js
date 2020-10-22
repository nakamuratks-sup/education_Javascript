'use strict';

$('#btn1').click(function(){
    // hogehoge
    $("#tblForm1 tbody tr:first-child").clone(true).appendTo("#tblForm1 tbody");

    // 複製後に表示させる
  $("#tblForm1 tbody tr:last-child").css("display", "table-row");
});

$('#btn2').click(function(){
    // hogehoge
    let first = $("#tblForm1 tbody tr:first-child");
    let last = $("#tblForm1 tbody tr:last-child");
    let len = $("#tblForm1 tbody tr").length;
    if(len != 1){
        $("#tblForm1 tbody tr:last-child").remove();
    }
});

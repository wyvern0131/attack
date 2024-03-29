var w = 1;
var t = 0;
document.getElementById("puls").addEventListener("click",function(){
    var inc = document.getElementById("turn");
    inc.value = parseInt(inc.value) + 1;
    changeTableColor();
})

document.getElementById("minus").addEventListener("click", function(){
    var dec = document.getElementById("turn");
    dec.value = parseInt(dec.value) - 1;
    t--;
    changeTableColor();
})

function changeTableColor(){
    var table = document.getElementById("syclesTable");
    var rows = table.rows;
    var rowIndex = parseInt(document.getElementById("turn").value - 1);
    var number = rows.length; // 行の数を取得

    var err = parseInt(document.getElementById("turn").value);
    var cnt = parseInt(document.getElementById("count").value);

    
    if (err > cnt){
        if (t == cnt){
            w++;
            t = 0;
        }
        t++;
        rowIndex = err - cnt * w - 1;
    }else{
        t = 0;
        w = 1;
    }
    console.log("t="+t);
    console.log("w="+w);
    console.log("ind="+rowIndex);

    for (var i = 0; i < number; i++) {
        var cells = rows[i].cells;
        if (i === rowIndex) {
            for (var j = 0; j < cells.length; j++) {
                cells[j].style.backgroundColor = 'red'; // 指定された行のセルの背景色を赤に変更
            }
        } else {
            for (var j = 0; j < cells.length; j++) {
                cells[j].style.backgroundColor = ''; // 他の行のセルの背景色をクリア
            }
        }
    }
}
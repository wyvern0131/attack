document.getElementById("btn").addEventListener('click', function(){
    var table = document.getElementById('syclesTable')
    var row = table.rows[0];
    var number = document.getElementById("count");
    addColumns(number.value);
})

function addColumns(number){
    for (var i = 1; i <= number; i++){
        var newRow = document.createElement('tr');
        for(var j = 0; j < 2; j++){
            var newCell = document.createElement('td');
            if (j == 0){
                newCell.textContent = number + "x +" + i;
            }else{
                newCell.textContent = "新しいテキスト";
            }
            newRow.appendChild(newCell);
        }
        //列を追加
        document.getElementById('syclesTable').appendChild(newRow);
    }
    document.querySelectorAll('table td').forEach(elm =>{
        elm.contentEditable = true;
    })
}

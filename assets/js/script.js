// 

var val = document.getElementById('displayValue');

function btnValue(v) {
    val.value += v;
}
function btnEquals() {
    val.value = eval(val.value);
}

function btnAllClear() {
    val.value = " ";
}

function btnDel() {
    val.value = val.value.substr(0, val.value.length-1);
}
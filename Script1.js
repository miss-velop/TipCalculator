document.getElementById('container').onchange = function () {
    var bill = Number(document.getElementById('billtotal').value);
    var tipPercent = document.getElementById('tipInput').value;
    var Split = document.getElementById('splitInput').value;
    var tipvalue = bill * (tipPercent / 100);
    var newBilleach = (bill + tipvalue) / Split;
    var tipEach = tipvalue / Split;
    document.getElementById('tipOutput').innerHTML = tipPercent + ' %';
    document.getElementById('SplitOutput').innerHTML = Split;
    document.getElementById('newBill').innerHTML = "R" + newBilleach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "R" + tipEach.toFixed(2);
}// JavaScript source code

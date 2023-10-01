function somar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    total = n1 + n2;
    document.getElementById("total").innerHTML = total;
}

function subtrair(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    total = n1 - n2;
    document.getElementById("total").innerHTML = total;
 }

 function multiplicar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    total = n1 * n2;
    document.getElementById("total").innerHTML = total;
 }

 function dividir(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    total = n1 / n2;
    document.getElementById("total").innerHTML = total;
 }
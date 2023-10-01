var produtos = [];
produtos[0] = ["Escova", "casa de banho", 1.99];
produtos[1] = ["Rato", "Escritorio", 20];
produtos[2] = ["Teclado", "Escritorio", 30];
var lista  = document.getElementById('lista');
var i;
var lista;

for (i = 0; i < produtos.length; i++){
    
    document.writeln(produtos[i]);
    document.write("<br>");

}
/*
for (i=0; i<3; i++){
    lista = produtos[i];
    console.log(lista);
    
}
*/
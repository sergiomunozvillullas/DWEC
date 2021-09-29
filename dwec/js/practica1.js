window.onload=inicio;
function inicio(){
document.formulario.area=primos();
}


function primos(){
var cont=0;
for(var i=1;i<100;i++){
for(var j = 1; j <= i; j++){
if(i % j == 0){
cont++;
}
}
if(cont == 2){
document.formulario.area.value+=i + "|";
}
cont = 0;
}
}

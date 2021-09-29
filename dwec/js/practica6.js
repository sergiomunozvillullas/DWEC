window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
let copia=document.formulario.v.value;
document.formulario.m=cont(inicial,copia);
}

function cont(inicial,copia){
 var cont = 0;
 var cadena2=copia;
 var cadena = inicial;
 if(cadena2==cadena){
cont++;
}
 	 	for (var i = 0; i < cadena.length; i++) {
if(cadena2==cadena.charAt(i)){
cont++;
}
}
document.formulario.m.value+=cont;
}


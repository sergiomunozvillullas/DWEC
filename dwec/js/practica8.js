window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.m.value=nombre(inicial);
}

function nombre(inicial){
 var cadena = inicial;
  var split;
  var cont=0;
 split=cadena.split('/');

	if(split[1].toString=2){
	cont++;
	
}
return cont;
}

window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.d.value;
document.formulario.b=binario(inicial);
document.formulario.o=octal(inicial);
document.formulario.h+=hexa(inicial);
}

function binario(inicial){
var ini= new Number (inicial);
var binary=ini.toString(2);
document.formulario.b.value+=binary;
}

function octal(inicial){
var ini= new Number (inicial);
var octal=ini.toString(8);
document.formulario.o.value+=octal;
}

function hexa(inicial){
var ini= new Number (inicial);
var hexa=ini.toString(16);
document.formulario.h.value+=hexa;
}

	






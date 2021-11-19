window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.m.value=html(inicial);
}

function html(inicial){
var cadena =inicial.toLowerCase().replace(/\s+/g, '');
      return cadena == cadena. split('').reverse().join('');
  }

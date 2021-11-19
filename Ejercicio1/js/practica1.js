window.onload=inicio;

function inicio(){
  document.formulario.cadena.onblur=mostrarmedia;
}

function mostrarmedia(){
  var elemento=document.formulario.cadena.value;
  var dato=media(elemento);
  document.formulario.m.value=dato;
}

function media (inicial){
var numero=inicial;
if (numero=='') {
  return '0';
}else {

  var suma=0;
  var cont=0;
var  media=0;
  var partes = numero.split(' ');
  for (var i = 0; i < partes.length; i++) {
suma=(suma+(parseInt(partes[i])));
cont++;
  }
media=suma/cont;
return media;
}
}

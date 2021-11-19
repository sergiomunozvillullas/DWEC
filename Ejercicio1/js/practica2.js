window.onload=inicio;

function inicio(){
  document.formulario.cadena.onblur=mostrarmedia;
}

function mostrarmedia(){
  var elemento=document.formulario.cadena.value;
    var elemento2=document.formulario.m.value;
      var elemento3=document.formulario.m2.value;
  var dato=maximos(elemento,elemento2,elemento3);
}

function maximos (max1,m1,m2){
var numero=max1;

  var partes = numero.split(' ');
  for (var i = 0; i < partes.length; i++) {
var maximo1=Math.max((parseInt(partes[i])));
document.formulario.m.value=maximo1;
if (maximo1==(parseInt(partes[i]))) {
  var i = partes.indexOf(i);
   partes.splice( i, 1 );
     for (var i = 0; i < partes.length; i++) {
   var maximo2=Math.max((parseInt(partes[i])));
document.formulario.m2.value=maximo2;
}
}

}


}

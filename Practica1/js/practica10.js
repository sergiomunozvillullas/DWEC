window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.m.value=html(inicial);
}

function html(inicial){
 var cadena = inicial;
 var split;
 var split1;
 var solucion="";
 let letras= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ';
 let guion= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ0123456789-';
 let numeros= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ0123456789';
 split=cadena.split('//');
var cont=0;
var cont1=0;
var cadena1=split[0];
var cadena2=split[1];
 split1=cadena2.split('.');
var cadena3=split1[1];
var cadena4=split1[2];
if(cadena.includes('http:')|| cadena.includes('https:')){
  if(cadena2.includes('www.') && cadena2.charAt(3)==('.')){
    if(letras.indexOf(cadena3[0])!==-1){
for (var i = 1; i < cadena3.length; i++) {
      cont++;
      if(guion.indexOf(cadena3[i])!==-1){
        if(numeros.indexOf(cadena3[cont])!==-1){
for(var j=0;j<cadena4.length;j++){
    cont1++;


    }
    if (cont1==2 || cont1==3 || cont1==4){
      solucion="correcto";
      return solucion;

    }else {
      solucion="error";
      return solucion;
    }
}
        }else {
          solucion="error";
          return solucion;
        }
}
    }else {
      solucion="error";
      return solucion;
    }
  }else {
    solucion="error";
    return solucion;
  }
}else {
  solucion="error";
  return solucion;
}



}

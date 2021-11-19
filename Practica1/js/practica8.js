window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.m.value=fecha(inicial);
}

function fecha(inicial){
var fecha1=inicial;
var fechaf=fecha1.split('/');
var dia= fechaf[0];
var mes= fechaf[1];
var ano= fechaf[2];
var correcto=false;
var resultadofinal;
//miro el mes
if (mes<=0 || mes>12) {
  correcto==false;
  resultadofinal="El mes es incorrecto";
    return resultadofinal;
}
//enero
if ((dia<1 || dia>31) && mes==1) {
  correcto==false;
  resultadofinal="Error en Enero";
  return resultadofinal;
}
//marzo
if ((dia<1 || dia>31) && mes==3) {
  correcto==false;
  resultadofinal="Error en Marzo";
  return resultadofinal;
}
//abril
if ((dia<1 || dia>30) && mes==4) {
  correcto==false;
  resultadofinal="Error en Abril";
  return resultadofinal;
}
//mayo
if ((dia<1 ||dia>31) && mes==5) {
  correcto==false;
  resultadofinal="Error en Mayo";
  return resultadofinal;
}
//junio
if ((dia<1 || dia>30) && mes==6) {
  correcto==false;
  resultadofinal="Error en Junio";
  return resultadofinal;
}
//julio
if ((dia<1 || dia>31) && mes==7) {
  correcto==false;
  resultadofinal="Error en Julio";
return resultadofinal;
}
//agosto
if ((dia<1 || dia>31) && mes==8) {
  correcto==false;
  resultadofinal="Error en Agosto";
  return resultadofinal;
}
//septiembre
if ((dia<1 || dia>30) && mes==9) {
  correcto==false;
  resultadofinal="Error en Septiembre";
  return resultadofinal;
}
//octubre
if ((dia<1 || dia>31) && mes==10) {
  correcto==false;
  resultadofinal="Error en Octubre";
  return resultadofinal;
}
//noviembre
if ((dia<1 || dia>30) && mes==11) {
  correcto==false;
  resultadofinal="Error en Noviembre";
  return resultadofinal;
}
//diciembre
if ((dia<1 || dia>31) && mes==12) {
  correcto==false;
  resultadofinal="Error en Diciembre";
  return resultadofinal;
}
//los años multiplos de 4 son bisiestos 2024,2028,2032, febrero tiene 29 dias
//si el año es divisible entre 4 y no divisible entre 100 = SI
//entre 400 siempre es bisiestos
if (ano%400==0) {
  if (mes==2 && (dia==29)) {
    correcto==true;
    resultadofinal="Fecha correcta";
  }
}
else if (ano%4==0 && ano%100!=0) {
  if (mes==2 && (dia==29)) {
    correcto==true;
    resultadofinal="Fecha correcta";
  }
}else{
  correcto==false;
  resultadofinal="Fecha incorrecta";
}
//febrero
if ((dia>=1 && dia<=28) && mes==2) {
  correcto==true;
  resultadofinal="Fecha correcta";
  return resultadofinal;
}else{
  resultadofinal="Fecha incorrecta";
  return resultadofinal;
}
if (correcto==true) {
  resultadofinal="La fecha es válida";
  return resultadofinal;
}
}

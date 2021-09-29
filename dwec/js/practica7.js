window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.m.value=nombre(inicial);
}

function nombre(inicial){
var cadena=inicial;
var mensaje=true;
var resultadofinal;
var longitudminima=0;
let todosvalores= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZºª- ';
for (var i = 0; i < cadena.length; i++) {
  if (todosvalores.indexOf(cadena[i]) !== -1) {
  longitudminima++;
  }

}
	if (cadena.length <3 || cadena.length>27) {
  	mensaje==false;
 	 resultadofinal="Menor de 3 o mayor de 27 letras";
 	 return resultadofinal;
	}
		if (  longitudminima<cadena.length) {
  		mensaje==false;
 		 resultadofinal="Carácter inválido";
  		return resultadofinal;
		}
			if (mensaje==true) {
 			 resultadofinal="El nombre es válido";
 			 return resultadofinal;
			}
}

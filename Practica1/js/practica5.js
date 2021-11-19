window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.v=cont(inicial);


}

function cont(inicial){
 var contv = 0;
  var contc = 0;
 var cadena = inicial;
 	for (var i = 0; i < cadena.length; i++) {

		if (cadena.charAt(i) == "a" || 
		cadena.charAt(i) == "e" || 
		cadena.charAt(i) == "i" || 
		cadena.charAt(i) == "o" || 
		cadena.charAt(i) == "u") {
      		contv++;

    		}else{
    		contc++;
    		}
	}
document.formulario.v.value+=contv;
document.formulario.c.value+=contc;
}








window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.cadena.value;
document.formulario.m.value=nombre(inicial);
}

function nombre(inicial){
var resultadofinal;
 var split;
  var split2;
 var cadena = inicial;
 split=cadena.split('@');
  split2=cadena.split('.');
 var cont=0;
  var count=0;
 var cont2=0;
let valores= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ';
let todosvalores= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ0123456789-.';
let valores2= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ0123456789';
for (var i = 0; i < cadena.length; i++) {

  if (valores.indexOf(cadena[0]) !== -1) {
  var parte1= split[0];
  var parte2= split[1];
	for (var k = 1; k < parte1.length-1; k++) {
		if(todosvalores.indexOf(parte1[k])!== -1){	
			for (var j = 0; j < parte1.length; j++) {
			cont++;
		
				
	  		
		}
  		}
  		if(valores2.indexOf(parte1[cont])!== -1){
  		
  		if (valores.indexOf(parte2[0]) !== -1) {
  		
  		 
	for (var k = 1; k < parte2.length-1; k++) {
		if(todosvalores.indexOf(parte2[k])!== -1){	
			for (var j = 0; j < parte2.length; j++) {
			cont2++;
		
				
	  		
		}
  		}
  		if(valores2.indexOf(parte2[cont2])!== -1){
  		
  		for (var i=0; i < cadena.lenght; i++){
  		if (split2[i]!== 'undefined'){
  		count++;
  		}
  		  var partepunto= split2[count];
  		if (valores.indexOf(partepunto[i])!==-1 && partepunto.lenght>=2 ||partepunto.lenght<=4){
				 resultadofinal="correcto";
  		return resultadofinal;
  		
  		
  		
  		}
  		}
  		}
		}
		}
		}

}
}
}
}


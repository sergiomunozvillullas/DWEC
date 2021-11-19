window.onload=inicio;

function inicio(){
document.formulario.boton.onclick=calcula;
}

function calcula(){

let inicial=document.formulario.ini.value;
let final=document.formulario.fin.value;
document.formulario.area+=primo(inicial,final);

}

function primo(inicial,final){
var cont=0;
	for(var i=inicial; inicial<final;inicial++){
		for(var j = 1; j <= inicial; j++){
			if(inicial % j == 0){
			cont++;
			}
		}
			if(cont == 2){
			document.formulario.area.value+=inicial + "|";
			}
		cont = 0;
	}
	}






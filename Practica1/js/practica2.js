window.onload=primos;



function primos(){
	var con=0;
	var num=1;
	var escribir=true;

	while(con<100){
		if(esPrimo(num)){
		con++;
		document.formulario.area.value+=num+"|";
		}
		num++;
	} //while


}//function
function esPrimo(numero){
var primo=true;
	for(var i=2; i<numero; i++){
		if(numero%i==0){
		primo=false;
		}
	}
return primo;
}



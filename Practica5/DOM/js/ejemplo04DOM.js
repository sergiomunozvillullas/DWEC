if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	let boton=document.getElementById("anyadir");
	if ( document.addEventListener)
		boton.addEventListener("click",nuevo)
	else if (document.attachEvent)
		boton.attachEvent("onclick",nuevo);
}

function nuevo(){
	let padre=document.getElementById("paises");
	let vpais=document.getElementById("caja").value;
	let todosli=padre.getElementsByTagName("li");
	let inexistente=true;
	let indice=0;
	while (inexistente && indice < todosli.length){
		if (vpais == todosli.item(indice).textContent)
			inexistente=false
		else if (vpais > todosli.item(indice).textContent){
			let nuevoli=document.createElement("li");
			let textoli=document.createTextNode(vpais);
			nuevoli.appendChild(textoli);
			padre.insertBefore(nuevoli,todosli.item(indice));
			inexistente=false;
		}
		indice+=1;
	}
	if (inexistente){
		let nuevoli=document.createElement("li");
		let textoli=document.createTextNode(vpais);
		nuevoli.appendChild(textoli);
		padre.appendChild(nuevoli);
	}
}

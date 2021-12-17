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
	let nuevoli=document.createElement("li");
	let vpais=document.getElementById("palabra").value;
	let textoli=document.createTextNode(vpais);
	nuevoli.appendChild(textoli);
	padre.appendChild(nuevoli);
}

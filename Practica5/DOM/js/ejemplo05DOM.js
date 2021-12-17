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
	let padre=document.querySelector("#paises>tbody");
	let vpais=document.getElementById("caja1").value.trim();
	let vpobla=document.getElementById("caja2").value.trim();
	if (vpais!="" && vpobla!=""){
		let nlinea=document.createElement("tr");
		let npais=document.createElement("td");
		let npob=document.createElement("td");
		let nvpais=document.createTextNode(vpais);
		let nvpob=document.createTextNode(vpobla);
		npais.append(nvpais);
		npob.append(nvpob);
		nlinea.append(npais);
		nlinea.append(npob);
		padre.append(nlinea);
		let pie=document.querySelector("#paises>tfoot");
		let lipie=pie.querySelector("tr");
		let colpi=lipie.querySelectorAll("td");
		let valor=colpi.item(1).textContent;
		let valnumpob=parseInt(vpobla,10);
		let valtot=parseInt(valor,10);
		valtot+=valnumpob;
		colpi.item(1).textContent=valtot;
	}
}
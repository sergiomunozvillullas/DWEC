if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	var BtnMostrar=document.getElementById("mostrar");
	var BtnOcultar=document.getElementById("ocultar");
	if (document.addEventListener) {
		BtnMostrar.addEventListener("click",muestra);
		BtnOcultar.addEventListener("click",oculta);
	} else if (document.attachEvent) {
		BtnMostrar.attachEvent("onclick",muestra);
		BtnOcultar.attachEvent("onclick",oculta);
	}
}
function muestra(){
	document.getElementById("forma").showModal();
}

function oculta(){
	document.getElementById("forma").close();
}

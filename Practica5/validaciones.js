if (document.addEventListener)
window.addEventListener("load",inicio)
else if (document.attachEvent)
window.attachEvent("onload",inicio);

function inicio(){
  var BtnRegistrar=document.getElementById("registrarse");
  var BtnEntrar=document.getElementById("entrar");

  var BtnCancelar=document.getElementById("cancelar");

  if (document.addEventListener) {
    BtnRegistrar.addEventListener("click",muestra);
    BtnEntrar.addEventListener("click",muestra2);
    BtnCancelar.addEventListener("click",cancela);
  } else if (document.attachEvent) {
    BtnRegistrar.attachEvent("onclick",muestra);
    BtnEntrar.attachEvent("onclick",muestra2);
    BtnCancelar.attachEvent("onclick",cancela);
  }

}


function muestra(){
  var BtnAceptar=document.getElementById("aceptar");
  if (document.addEventListener) {
    BtnAceptar.addEventListener("click",acepta);
  } else if (document.attachEvent) {
    BtnAceptar.attachEvent("onclick",acepta);
  }
  var dialogo=document.getElementById("usuario");
  dialogo.setAttribute("open",true);

}

function muestra2(){
  var BtnAceptar=document.getElementById("aceptar");
  if (document.addEventListener) {
    BtnAceptar.addEventListener("click",acepta2);
  } else if (document.attachEvent) {
    BtnAceptar.attachEvent("onclick",acepta2);
  }
  var dialogo=document.getElementById("usuario");
  dialogo.setAttribute("open",true);

}

function acepta(){
  validarusuario();
  validarcontrasena();
  var dialogo=document.getElementById("usuario");
  dialogo.removeAttribute("open");
  crearcookie();
  var BtnAceptar=document.getElementById("aceptar");
  BtnAceptar.removeEventListener("click",acepta);
}


function acepta2(){
  var dialogo=document.getElementById("usuario");
  dialogo.removeAttribute("open");
  var nombreusuario=document.getElementById("nombre").value;
  if (validarcookie(nombreusuario)) {
    var BtnAceptar=document.getElementById("aceptar");

    BtnAceptar.removeEventListener("click",acepta2);
    alert("Usuario correcto, entrando...");
    //cambiar boton de entrar por salir
    var uno = document.getElementById('entrar');
    var nombreusu = document.getElementById('usu');
    if (uno.textContent == 'salir'){

      uno.textContent = 'entrar';

    }else {

      uno.textContent = 'salir';

    }

    //ESTAMOS REGISTRADOS
    if (uno.textContent == 'salir') {
      if (nombreusu.textContent == 'Usuario: '+nombreusuario){
        nombreusu.textContent = 'Usuario';

      }else {
        nombreusu.textContent = 'Usuario: '+nombreusuario;
        //esto pone el boton añadir mensaje en enabled para añadir mensajes
        var mensaje = document.getElementById('anadirmensaje');
        mensaje.removeAttribute("disabled");
        //añadir mensajes EN LISTA DE DEFINICIONES
        let boton1=document.getElementById("anadirdefinicion");
        let boton2=document.getElementById("localidad"); //localidad
        if ( document.addEventListener){
      		boton1.addEventListener("click",nuevomensaje);
          boton2.addEventListener("click",nuevalocalidad);
      }	else if (document.attachEvent){
      		boton1.attachEvent("onclick",nuevomensaje);
          boton2.attachEvent("onclick",nuevalocalidad);
}
      }
    }

    // NO ESTAMOS REGISTRADOS
    if (uno.textContent == 'entrar') {
      //esto es para poner disabled al darle al salir
      var mensaje = document.getElementById('anadirmensaje');
      mensaje.setAttribute("disabled","");
    }



  }
}

function nuevomensaje(){
  let ul=document.getElementById("contenidomensaje1");
  let nuevoli=document.createElement("p");
  let contenido1=document.getElementById("palabra").value;
  let contenido2=document.getElementById("concepto").value;
  let textoli=document.createTextNode(contenido1+": "+contenido2);
	nuevoli.appendChild(textoli);
	ul.appendChild(nuevoli);
}

function nuevalocalidad(){
  let padre=document.getElementById("localidades"); //localidades
	let vpais=document.getElementById("contenidolocalidad").value; //localidad
	let todosli=padre.getElementsByTagName("li");
	let inexistente=true;
	let indice=0;
	while (inexistente && indice < todosli.length){
		if (vpais == todosli.item(indice).textContent)
			inexistente=false
		else if (vpais < todosli.item(indice).textContent){
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



function cancela(){
  var dialogo=document.getElementById("usuario");
  dialogo.removeAttribute("open");

}


function validarusuario(){
  var nombreusuario=document.getElementById("nombre").value;

  let expReg1=/^[a-zñáéíóúü]{3}[a-zñáéíóúü0-9]{5,9}/;
  mensaje="";
  enviar=false;
  if (!expReg1.test(nombreusuario)) {
    //error
    enviar=false;
    mensaje=" Error en el usuario";
  }else {
    enviar=true;
    mensaje="Nombre del usuario correcto";

  }
  //  alert(mensaje)
  return  enviar;
}

function validarcontrasena(){
  var contrasena=document.getElementById("contra").value;

  let expReg1=/^[a-zñáéíóúü]{2}[a-zñáéíóúü0-9\_]{5,11}[a-zñáéíóúü0-9]$/;
  mensaje="";
  enviar=false;
  if (!expReg1.test(contrasena)) {
    //error
    enviar=false;
    mensaje=" Error en la contraseña";
  }else {
    enviar=true;
    mensaje="Accediendo";
  }
  // alert(mensaje)
  return  enviar;
}

function validarcookie(nombre){
  var contrasena=document.getElementById("contra").value;
  let correcto=false;
  let resultado="";
  let cadena=document.cookie;
  if (document.cookie.length >= 0 ) {
    let posicion=cadena.indexOf(nombre+"=");
    if (posicion!=-1) {
      if (posicion!=0)
      posicion=cadena.indexOf("; "+nombre+"=");
      if (posicion!=-1){
        let pos2=cadena.indexOf("=",posicion+1);
        let pos3=cadena.indexOf(";",pos2+1);
        if (pos3==-1) {
          pos3=cadena.length;
        }
        resultado= cadena.substring(pos2+1,pos3);
        correcto=(resultado==contrasena);
      }
    }
  }
  return correcto;
}

function crearcookie(){
  validarcontrasena();
  validarusuario();

  if (validarusuario()==false ||validarcontrasena()==false) {
    alert("ERROR EN LA CREACION DE USUARIO");
  }else {
    alert("CREANDO USUARIO");
    var nombreusuario=document.getElementById("nombre").value;
    var contrasena=document.getElementById("contra").value;
    document.cookie= nombreusuario+"="+contrasena+";expires=true, 30 Jan 2030 00:00:00 GMT;";
  }

}

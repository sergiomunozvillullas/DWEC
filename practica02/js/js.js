window.onload=inicio;
function inicio(){

document.primero.onsubmit=enviado;

  document.primero.nif.onfocus=activar;
  document.primero.nombre.onfocus=activar;
  document.primero.apellidos.onfocus=activar;
  document.primero.domicilio.onfocus=activar;
  document.primero.localidad.onfocus=activar;
  document.primero.cp.onfocus=activar;
  document.primero.provincia.onfocus=activar;

  document.primero.nif.onblur=desactivar;
  document.primero.nombre.onblur=desactivar;
  document.primero.apellidos.onblur=desactivar;
  document.primero.domicilio.onblur=desactivar;
  document.primero.localidad.onblur=desactivar;
  document.primero.cp.onblur=desactivar;
  document.primero.provincia.onblur=desactivar;

  // cuando se le de al boton enviar comprobar HAY QUE CAMBIARLO
  // document.primero.cp.onchange=cambiarcodigopostal;
  // document.primero.localidad.onchange=cambiarlocalidad;
  // document.primero.apellidos.onchange=cambiarapellidos;
  // document.primero.nombre.onchange=cambiarnombre;
  // document.primero.domicilio.onchange=cambiardomicilio;
  // document.primero.nif.onchange=esNif;



  document.body.onkeyup=pulsartecla;
  document.primero.provin[0].onclick=imgprovin;
  document.primero.provin[1].onclick=imgprovin;
  document.primero.provin[2].onclick=imgprovin;
  document.primero.provin[3].onclick=imgprovin;

  document.primero.viajar.onchange=imgafic;
  document.primero.leer.onchange=imgafic;
  document.primero.musica.onchange=imgafic;
  document.primero.cine.onchange=imgafic;
  document.primero.deporte.onchange=imgafic;
  document.primero.cena.onchange=imgafic;

  window.alert("Bienvenido");

  // document.primero.nombre.onchange=sololetras;
  // document.primero.apellidos.onchange=sololetras;
  // document.primero.localidad.onchange=sololetras;

  document.primero.limpiar=limpiar;


}
function activar(elemento){
  let nombre=elemento || window.event;
  elemento.target.style.backgroundColor="red";
}
function desactivar(elemento){
  let nombre=elemento || window.event;
  elemento.target.style.backgroundColor="white";
}
function cambiarcodigopostal (){
  var codigo=document.primero.cp.value;
  var nombre=codigo.substr(0,2);
  if (codigo<1000 || codigo>52999) {
    document.primero.cp.value="CP Error";
  }
  if(isNaN(nombre) || parseInt(nombre)<1 || parseInt(nombre)>52){
    document.primero.provincia.value="No es un numero";
  }
  else{
    switch (nombre) {
      case "01":
      document.primero.provincia.value="Araba/Álava";
      break;
      case "02":
      document.primero.provincia.value="Albacete";
      break;
      case "03":
      document.primero.provincia.value="Alicante/Alacant";
      break;
      case "04":
      document.primero.provincia.value="Almería";
      break;
      case "05":
      document.primero.provincia.value="Ávila";
      break;
      case "06":
      document.primero.provincia.value="Badajoz";
      break;
      case "07":
      document.primero.provincia.value="Baleares";
      break;
      case "08":
      document.primero.provincia.value="Barcelona";
      break;
      case "09":
      document.primero.provincia.value="Burgos";
      break;
      case "10":
      document.primero.provincia.value="Cáceres";
      break;
      case "11":
      document.primero.provincia.value="Cádiz";
      break;
      case "12":
      document.primero.provincia.value="Castellón";
      break;
      case "13":
      document.primero.provincia.value="Ciudad Real";
      break;
      case "14":
      document.primero.provincia.value="Córdoba";
      break;
      case "15":
      document.primero.provincia.value="A Coruña";
      break;
      case "16":
      document.primero.provincia.value="Cuenca";
      break;
      case "17":
      document.primero.provincia.value="Gerona";
      break;
      case "18":
      document.primero.provincia.value="Granada";
      break;
      case "19":
      document.primero.provincia.value="Guadalajara";
      break;
      case "20":
      document.primero.provincia.value="Guipuzkoa";
      break;
      case "21":
      document.primero.provincia.value="Huelva";
      break;
      case "22":
      document.primero.provincia.value="Huesca";
      break;
      case "23":
      document.primero.provincia.value="Jaén";
      break;
      case "24":
      document.primero.provincia.value="León";
      break;
      case "25":
      document.primero.provincia.value="Lérida";
      break;
      case "26":
      document.primero.provincia.value="La Rioja";
      break;
      case "27":
      document.primero.provincia.value="Lugo";
      break;
      case "28":
      document.primero.provincia.value="Madrid";
      break;
      case "29":
      document.primero.provincia.value="Málaga";
      break;
      case "30":
      document.primero.provincia.value="Murcia";
      break;
      case "31":
      document.primero.provincia.value="Navarra";
      break;
      case "32":
      document.primero.provincia.value="Orense";
      break;
      case "33":
      document.primero.provincia.value="Asturias";
      break;
      case "34":
      document.primero.provincia.value="Palencia";
      break;
      case "35":
      document.primero.provincia.value="Las Palmas";
      break;
      case "36":
      document.primero.provincia.value="Pontevedra";
      break;
      case "37":
      document.primero.provincia.value="Salamanca";
      break;
      case "38":
      document.primero.provincia.value="Santa Cruz de Tenerife";
      break;
      case "39":
      document.primero.provincia.value="Cantabria";
      case "40":
      document.primero.provincia.value="Segovia";
      break;
      case "41":
      document.primero.provincia.value="Sevilla";
      break;
      case "42":
      document.primero.provincia.value="Soria";
      break;
      case "43":
      document.primero.provincia.value="Tarragona";
      break;
      case "44":
      document.primero.provincia.value="Teruel";
      break;
      case "45":
      document.primero.provincia.value="Toledo";
      break;
      case "46":
      document.primero.provincia.value="Valencia";
      break;
      case "47":
      document.primero.provincia.value="Valladolid";
      break;
      case "48":
      document.primero.provincia.value="Vizcaya";
      break;
      case "49":
      document.primero.provincia.value="Zamora";
      break;
      case "50":
      document.primero.provincia.value="Zaragoza";
      break;
      case "51":
      document.primero.provincia.value="Ceuta";
      break;
      case "52":
      document.primero.provincia.value="Melilla";
      break;
      default:
      document.primero.provincia.value="";
    }
  }//de else
}// de function

var cont=1;
function pulsartecla(elemento){

  if(elemento.keyCode==114 && elemento.ctrlKey && cont==1 ){
    document.body.style.backgroundImage= "url(imagenes/Paris.jpg)";
    cont++;

  }else if (elemento.keyCode==114 && elemento.ctrlKey && cont==2) {
    cont++;
    document.body.style.backgroundImage= "url(imagenes/Venecia.jpg)";
  }else if (elemento.keyCode==114 && elemento.ctrlKey && cont==3) {
    cont++;
    document.body.style.backgroundImage= "url(imagenes/lisboa.jpg)";
  }else if (elemento.keyCode==114 && elemento.ctrlKey && cont==4) {
    cont++;
    document.body.style.backgroundImage= "url(imagenes/atena.jpg)";
  }else if (elemento.keyCode==114 && elemento.ctrlKey && cont==5) {
    cont++;
    document.body.style.backgroundImage= "url(imagenes/roma.jpg)";
    cont=1;
  }
}

function imgprovin(evento){
  if (evento.target.value=="cordoba") {
    document.imgprovincia.src= "imagenes/cordoba.jpg";
  }
  if (evento.target.value=="leon") {
    document.imgprovincia.src= "imagenes/leon.jpg";
  }
  if (evento.target.value=="segovia") {
    document.imgprovincia.src= "imagenes/segovia.jpg";
  }
  if (evento.target.value=="sevilla") {
    document.imgprovincia.src= "imagenes/sevilla.jpg";
  }
}

  var arrayimagenes=[];
function imgafic(evento){

   arrayimagenes=[];
  if (document.primero.viajar.checked) {
    arrayimagenes.push("imagenes/viajar.jpg");
  }
  if (document.primero.leer.checked) {
    arrayimagenes.push("imagenes/leer.jpg");
  }
  if (document.primero.musica.checked) {
    arrayimagenes.push("imagenes/musica.jpg");
  }
  if (document.primero.cine.checked) {
    arrayimagenes.push("imagenes/cine.jpg");
  }
  if (document.primero.deporte.checked) {
    arrayimagenes.push("imagenes/deporte.jpg");
  }
  if (document.primero.cena.checked) {
    arrayimagenes.push("imagenes/cenar.jpg");
  }
  mostrarimagen(arrayimagenes);
}
var pausar;
function mostrarimagen(arrayimagenes){

    clearInterval(pausar);

  //cada 10 segundos llamar a funcion
  var aleatorio=Math.floor(Math.random()*arrayimagenes.length );

  pausar=setInterval(recorrerimagen ,10000);
}
function recorrerimagen() {
  var aleatorio=Math.floor(Math.random()*arrayimagenes.length );
  document.primero.img_aficion.src=arrayimagenes[aleatorio];
}

function limpiar(){
  document.getElementById('primero').reset();
}

function cambiarlocalidad (){
  let errorlocalidad="";
  let letras= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ';
  let espacios= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ ';
  var localidad=document.primero.localidad.value;
  var localidad1=localidad.toLowerCase();
  if (localidad1.length<10 || localidad1.length>30) {
    errorlocalidad="Error longitud localidad";
  }
  for (var i = 0; i < 3; i++) {
    if(letras.indexOf(localidad1[i])!==-1) {
      for (var j = 2; j < localidad1.length-3; j++) {
        if (espacios.indexOf(localidad1[j])!==-1) {
          for (var k = localidad1.length-3; k < localidad1.length; k++) {
            if (letras.indexOf(localidad1[k])!==-1){
              document.primero.localidad.value=document.primero.localidad.value;
            }else {
              errorlocalidad="Error al final localidad";
            }
          }
        }else {
          errorlocalidad="Error intermedio localidad";
        }
      }
    }else {
      errorlocalidad="Error al inicio localidad";
    }
  }//primer for
  return errorlocalidad;
}//funcion


function cambiarapellidos (){
  let errorapellidos="";
  let letras= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ';
  let espacios= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ ';
  var apellido=document.primero.apellidos.value;
  var apellido1=apellido.toLowerCase();
  if (apellido1.length<12 || apellido1.length>35) {
    errorapellidos="Longitud incorrecta apellidos";
  }
  for (var i = 0; i < 4; i++) {
    if(letras.indexOf(apellido1[i])!==-1) {
      for (var j = 2; j < apellido1.length-5; j++) {
        if (espacios.indexOf(apellido1[j])!==-1) {
          for (var k = apellido1.length-5; k < apellido1.length; k++) {
            if (letras.indexOf(apellido1[k])!==-1){
              document.primero.apellidos.value=document.primero.apellidos.value;
            }else {
              errorapellidos="Error al final apellidos";
            }
          }
        }else {
          errorapellidos="Error intermedio apellidos";
        }
      }
    }else {
      errorapellidos="Error al inicio apellidos";
    }
  }//primer for
  return errorapellidos;
}//funcion

function cambiarnombre (){
  let errornombre="";
  let letras= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ';
  let espacios= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ ';
  var nombre=document.primero.nombre.value;
  var nombre1=nombre.toLowerCase();
  if (nombre1.length<6 || nombre1.length>20) {
    errornombre="Longitud incorrecta Nombre";
  }
  for (var i = 0; i < 3; i++) {
    if(letras.indexOf(nombre1[i])!==-1) {
      for (var j = 3; j < nombre1.length-2; j++) {
        if (espacios.indexOf(nombre1[j])!==-1) {
          for (var k = nombre1.length-2; k < nombre1.length; k++) {
            if (letras.indexOf(nombre1[k])!==-1){
              document.primero.nombre.value=document.primero.nombre.value;
            }else {
              errornombre="Error al final nombre";
            }
          }
        }else {
          errornombre="Error intermedio nombre";
        }
      }
    }else {
      errornombre="Error al inicio nombre";
    }
  }//primer for
  return errornombre;
}//funcion

function cambiardomicilio (){
  let errordomicilio="";
  let letras= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ';
  let espacios= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ,.º ';
  var domicilio=document.primero.domicilio.value;
  var domicilio1=domicilio.toLowerCase();
  if (domicilio1.length<6 || domicilio1.length>20) {
    errordomicilio="Longitud incorrecta domicilio";
  }
  for (var i = 0; i < 3; i++) {
    if(letras.indexOf(domicilio1[i])!==-1) {
      for (var j = 3; j < domicilio1.length-1; j++) {
        if (espacios.indexOf(domicilio1[j])!==-1) {
          for (var k = domicilio1.length-1; k < domicilio1.length; k++) {
            if (letras.indexOf(domicilio1[k])!==-1){
              document.primero.domicilio.value=document.primero.domicilio.value;
            }else {
              errordomicilio="Error al final domicilio";
            }
          }
        }else {
          errordomicilio="Error intermedio domicilio";
        }
      }
    }else {
      errordomicilio="Error al inicio domicilio";
    }
  }//primer for
  return errordomicilio;
}//funcion

function esNif(){
  let errornif="";
  var nif=document.primero.nif.value;
  var nif1=nif.substr(0,8);
  var letra=nif.substr(8,1);
  if (nif1<100000) {
    errornif="El nif es <100000";
  }
  var resto=nif1%23;
  let letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
      if (letra==letras[resto]) {
          document.primero.nif.value=  document.primero.nif.value;
      }else{
          errornif="Error DNI";
      }
      return errornif;
}

function enviado() {
  let mensaje="";
  let enviar=true;
  let llamarlocalidad=cambiarlocalidad();
  let llamarnombre=cambiarnombre();
    let llamarapellidos=cambiarapellidos();
      let llamardomicilio=cambiardomicilio();
            let llamarnif=esNif();
  if (llamarlocalidad!="") {
    mensaje+=llamarlocalidad+"\n";
    enviar=false;
  }
  if (llamarnombre!="") {
    mensaje+=llamarnombre+"\n";
    enviar=false;
  }
  if (llamarapellidos!="") {
    mensaje+=llamarapellidos+"\n";
    enviar=false;
  }
  if (llamardomicilio!="") {
    mensaje+=llamardomicilio+"\n";
    enviar=false;
}
  if (llamarnif!="") {
    mensaje+=llamarnif+"\n";
    enviar=false;
  }


  if (!enviar) {
    window.alert(mensaje);
  }
  return enviar;
}

window.onload=inicio;
function inicio(){
  document.primero.nif.onblur=irnif;
  document.primero.comprobacion.onblur=ircif;
  document.primero.nifcif.onblur=irnifcif;
  document.primero.numcuenta.onblur=ircuenta;
  document.primero.iban.onblur=ircomprobariban2;
  document.primero.comprobariban.onblur=ircomprobariban;
  document.primero.rs.onblur=irrazonsocial;
  document.primero.codemp.onblur=ircodigoempresa;
  document.primero.direccion.onblur=irdireccion;
  document.primero.localidad.onblur=irlocalidad;
  document.primero.cp.onblur=ircodigopostal;
  document.primero.telf.onblur=irtelefono;
  document.primero.fax.onblur=irfax;
  document.primero.fecha.onblur=irfecha;
  document.primero.persona.onload=ircomprobarpersona;
  document.primero.sececon.onblur=ircomprobarsector;
  document.primero.empresa.onblur=ircomprobarempresa;
  document.primero.comunidad1.onblur=ircomprobarcomunidad1;
  document.primero.codbanco.onblur=ircomprobarcodbanc;
  document.primero.codof.onblur=ircomprobarcodof;
  document.primero.numcuenta.onblur=ircomprobarnumcuenta;
  document.primero.codcontrol.onblur=ircodigocontrol;
}

function ircomprobariban2(){
  var elemento=document.primero.iban.value;
  var dato=comprobariban2(elemento);
  alert(dato);

}

function ircomprobarcodbanc(){
  var elemento=document.primero.codbanco.value;
  var dato=numeros(elemento);
  alert(dato);
}

function ircomprobarcodof(){
  var elemento=document.primero.codof.value;
  var dato=numeros(elemento);
  alert(dato);
}

function ircodigocontrol(){
  var elemento=document.primero.codcontrol.value;
  var dato=numeros2(elemento);
  alert(dato);
}

function irnif(){
  var elemento=document.primero.nif.value;
  var dato=esNif(elemento);
  alert(dato);
}

function ircif(){
  var elemento=document.primero.comprobacion.value;
  var dato=esCif(elemento);
  alert(dato);
}

function irnifcif(){
  var elemento=document.primero.nifcif.value;
  var dato=nifcif(elemento);
  alert(dato);
}

function ircuenta(){
  var elemento=document.primero.numcuenta.value;
  var elemento1=elemento.substr(0,2);
  var elemento2=elemento.substr(0,2);
  var elemento3=elemento.substr(0,2);
  var dato=codigosControl(elemento1,elemento2,elemento3);
  alert(dato);
}

function iriban(){
  var elemento=document.primero.iban.value;
  var dato=calculoIBANEspanya(elemento);
  alert(dato);
}

function ircomprobariban(){
  var elemento=document.primero.comprobariban.value;
  var dato=comprobarIBAN(elemento);
  alert(dato);
}

function irrazonsocial(){
  var elemento=document.primero.rs.value;
  var dato=razonsocial(elemento);
  alert(dato);
}

function ircodigoempresa(){
  var elemento=document.primero.codemp.value;
  var dato=codigoempresa(elemento);
  alert(dato);
}

function irdireccion(){
  var elemento=document.primero.direccion.value;
  var dato=direccion(elemento);
  alert(dato);
}

function irlocalidad(){
  var elemento=document.primero.localidad.value;
  var dato=localidad(elemento);
  alert(dato);
}

function ircodigopostal(){
var elemento=document.primero.cp.value;
var dato=codigopostal(elemento);
}

function irtelefono(){
var elemento=document.primero.telf.value;
var dato=telefono(elemento);
  alert(dato);
}
function irfax(){
var elemento=document.primero.fax.value;
var dato=fax(elemento);
  alert(dato);
}

function irfecha(){
var elemento=document.primero.fecha.value;
var dato=fecha(elemento);
  alert(dato);
}

function ircomprobarpersona(){
  var elemento=document.primero.persona.value;
  var dato=comprobarpersona(elemento);
    alert(dato);
}

function ircomprobarsector(){
  var elemento=document.primero.sececon.value;
  var dato=comprobarsector(elemento);
    alert(dato);
}

function ircomprobarempresa(){
  var elemento=document.primero.empresa.value;
  var dato=comprobarempresa(elemento);
    alert(dato);
}

function ircomprobarcomunidad1(){
  var elemento=document.primero.comunidad1.value;
  var dato=comprobarcomunidad1(elemento);
    alert(dato);
}

function ircomprobarnumero1(){
var elemento=document.primero.codbanco.value;
var dato=comprobarnumeros(elemento);
alert(dato);
}
function ircomprobarnumero2(){
var elemento=document.primero.codof.value;
var dato=comprobarnumeros(elemento);
alert(dato);
}

function ircomprobarnumcuenta() {
  var elemento=document.primero.numcuenta.value;
  var dato=comprobarnumcuenta(elemento);
  alert(dato);
}

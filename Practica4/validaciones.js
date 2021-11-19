
function esNif(elemento){
  let errornif="";
  var nif1=elemento.substr(0,8);
  var letra=elemento.substr(8,1);
  let arraynumeros = ["0","1","2","3","4","5","6","7","8","9"];
  if (nif1<100000) {
    errornif="3";
  }
  if (elemento.length>9 || elemento.length<9) {
    errornif="0";
  }
  if (arraynumeros.includes(nif1)==-1) {
    errornif="0";
  }
  var resto=nif1%23;
  let letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
  if (letra==letras[resto]) {
    errornif= "1";
  }else{
    errornif= "2";
  }
  return errornif;
}
//  el return
function esCif(elemento){
  var comprobacion=elemento;
  var letrainicial=comprobacion.substr(0,1);//primera letra
  var numeros1=comprobacion.substr(1,8);//numeros despues de la letra inicial
  let todo= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZ0123456789';
  //7 o 8
  //A H J U V - nO al final
  // P Q R S W - si, al final
  var cont=0;
  var cont1letras=0;  var cont2letras=0;  var cont3letras=0;
  let arrayletras = ["A","B","C","D","E","F","G","H","J","U","V"];
  if (arrayletras.includes(letrainicial)) {
    cont++;
    cont1letras++;
    // document.primero.comprobacion.value="1";
  }else if (todo.includes(comprobacion)==-1) {
    //si no tiene ni letras ni numeros
    cont2letras++;
    // document.primero.comprobacion.value="0";
  }else {
    //2 = LETRA INCORRECTA
    cont3letras++;
    // document.primero.comprobacion.value=arrayletras[i];
  }

  //textos
  if (cont1letras==1) {
    return 1;
  }
  if (cont2letras==1) {
    return 0;
  }
  if (cont3letras==1) {
    return 2;
  }

  var numeros2=comprobacion.substr(1,7);
  var letrafinal=comprobacion.substr(8,1);
  var cont2=0;
  var cont3=0;

  if (cont==0) {
    //recorremos los impares
    for (var i = 0; i < numeros2.toString().length; i+=2) {
      var numeritos=parseInt(numeros2.substr(i,1));
      cont2=numeritos*2;
      if (cont2>9) {
        var sumadigitos=cont2.toString().substr(0,1);
        var sumadigitos2=cont2.toString().substr(1,1);
        cont3+=parseInt(sumadigitos)+parseInt(sumadigitos2);
      }else{
        cont3+=cont2;
      }
      cont2=0;
    }
    var cont4=0;
    for (var i = 1; i < numeros2.toString().length; i+=2) {
      cont4+=parseInt(numeros2.substr(i,1));
    }
    var totalconts=cont3+cont4;
    var resto=totalconts%10;
    var letranumero=10-resto;
    let arrayletras2 = ["J","A","B","C","D","E","F","G","H","I"];
    for (var i = 0; i < arrayletras2.length; i++) {
      if (letranumero==i) {
        if (arrayletras2.includes(letrafinal)) {
          return 1;
        }else if (todo.includes(comprobacion)==-1) {
          //si no tiene ni letras ni numeros
          return 0;
        }else {
          //2 = LETRA final INCORRECTA
          return 2;
        }
      }
    }

  }//no es letra inicial cont==0

}// es cif

function nifcif(elemento){
  // var elemento=document.primero.nifcif.value;
  var primeraletra=elemento.substr(0,1);
  let arrayletras = ["A","B","C","D","E","F","G","H","J","U","V"];
  let arraynumeros = ["0","1","2","3","4","5","6","7","8","9"];
  var devuelta="";
  if (arraynumeros.includes(primeraletra)) {
    devuelta=esNif(elemento);
    if (devuelta==1){
      return "N1";
    }
    if (devuelta==3) {
      return "N3";
    }
    if (devuelta==2) {
      return "N2";
    }
  }

  if (arrayletras.includes(primeraletra)) {
    devuelta2=esCif(elemento);
    //es un cif 100% y lo verificamos
    if (devuelta2==1) {
      return "C1";
    }
    if (devuelta2==2) {
      return "C2";
    }
    if (devuelta2==0) {
      return 0;
    }
  }
}

function codigosControl(elemento1,elemento2,elemento3){
  var codigobanco=elemento1;
  var numsucursal=elemento2;
  var numcuenta=elemento3;
  //codigo banco, numero1
  var pricifra=codigobanco.substr(0,1);
  var segcifra=codigobanco.substr(1,1);
  var tercifra=codigobanco.substr(2,1);
  var cuarcifra=codigobanco.substr(3,1);
  var numero1=((pricifra*4)+(segcifra*8)+(tercifra*5)+(cuarcifra*10));

  //numero sucursal , numero 2
  var numero2=(numsucursal.substr(0,1)*9)+(numsucursal.substr(1,1)*7)+(numsucursal.substr(2,1)*3)+(numsucursal.substr(3,1)*6);
  var suma=numero1+numero2;
  var resto=suma%11;
  var modulo=11-resto;
  if (modulo<=9 && modulo>0) {
    //primer valor de control
    return modulo;
  }else{
    if (modulo==10) {
      modulo=1;
      return modulo;
    }
    if (modulo==11) {
      modulo=0;
      return modulo;
    }
  }//if

  var numero3=((numcuenta.substr(0,1)*1)+(numcuenta.substr(1,1)*2)+(numcuenta.substr(2,1)*4)+(numcuenta.substr(3,1)*8)+
  (numcuenta.substr(4,1)*5)+(numcuenta.substr(5,1)*10)+(numcuenta.substr(6,1)*9)+(numcuenta.substr(7,1)*7)+
  (numcuenta.substr(8,1)*3)+(numcuenta.substr(9,1)*6));

  var resto2=numero3%11;
  var modulo2=11-resto2;
  if (modulo2<=9 && modulo2>0) {
    //segundo valor de control
    return modulo2;
  }else{
    if (modulo2==10) {
      modulo2=1;
      return modulo2;
    }
    if (modulo2==11) {
      modulo2=0;
      return modulo2;
    }
  }//if
}//de funcion

function calculoIBANEspanya(codigocuenta){
  var iban="";
  var resultado= ""+codigocuenta+142800;
  var res=parseInt(resultado);
  var resto=res%97;
  var codigoiban=98-resto;
  var digitocontrol;
  if (codigoiban<10) {
    digitocontrol=""+0+codigoiban;
  }else{
    digitocontrol=codigoiban;
  }
  iban="ES"+digitocontrol+codigocuenta;
  return iban;
}

function comprobarIBAN(iban){
  var correcto=false;
  var primeros=iban.substr(0,4);
  var segunda=iban.substr(3,iban.length);
  var iban2=segunda+primeros;
  var letras1=iban.substr(iban2.length-4,1);
  var letras2=iban.substr(iban2.length-3,1);
  var cont=10;
  var cont2=10;
  let array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for (var i = 0; i < array.length; i++) {
    if (letras1==array[i]) {
      cont=cont+i;
    }
    if (letras2==array[i]) {
      cont2=cont2+i;
    }
  }
  var concatenar=""+cont+cont2;
  var concatenar2=parseInt(concatenar);
  var resto=concatenar2%97;
  if (resto==1) {
    correcto=true;
  }else{
    correcto=false;
  }
  return resto;
}

function razonsocial(rs){
  let expReg1=/^[a-zñáéíóúü][a-zñáéíóúü0-9\º\ª\-\.]*[a-zñáéíóúü0-9\.]$/;
  mensaje="";
  enviar=false;
  if (!expReg1.test(rs)) {
    //error
    enviar=false;
    mensaje=" Error en la razon social";
  }else {
    enviar=true;
    mensaje=" Correcta la razon social";
  }
  return mensaje;
}

function codigoempresa(codemp){
  let expReg2=/^[a-zñáéíóúü0-9]{5,10}$/;
  mensaje="";
  enviar=false;
  if (!expReg2.test(codemp)) {
    //error
    enviar=false;
    mensaje=" Error en el codigo de empresa";
  }else {
    enviar=true;
    mensaje=" Correcta el codigo de empresa";
  }
  return mensaje;
}

function direccion(direccion){
  let expReg3=/^[a-zñáéíóúü][a-zñáéíóúü0-9\º\ª\-\.\/]*[a-zñáéíóúü0-9]$/;
  mensaje="";
  enviar=false;
  if (!expReg3.test(direccion)) {
    //error
    enviar=false;
    mensaje=" Error en la direccion";
  }else {
    enviar=true;
    mensaje=" Correcta la direccion";
  }
  return mensaje;
}

function localidad(localidad){
  let expReg4= new RegExp ("^[a-zñáéíóúü][a-zñáéíóúü ]*[a-zñáéíóúü]$");
  mensaje="";
  enviar=false;
  if (!expReg4.test(localidad)) {
    //error
    enviar=false;
    mensaje=" Error en la localidad";
  }else {
    enviar=true;
    mensaje=" Correcta la localidad";
  }
  return mensaje;
}

function codigopostal (cp){
  let expReg5= new RegExp ("^\\d{4,5}$");
  mensaje="";
  enviar=false;
  if (!expReg5.test(cp)) {
    //error
    enviar=false;
    mensaje="Error en el codigo postal";
  }else {
    enviar=true;
    mensaje="Correcto el codigo postal";
  }
  return mensaje;
}

function telefono(telefono){
  let expReg6= new RegExp ("^[967]{1}\\d{8}$");

  mensaje="";
  enviar=false;
  if (!expReg6.test(telefono)) {
    //error
    enviar=false;
    mensaje="Error en el telefono";
  }else {
    enviar=true;
    mensaje="Correcto el telefono";
  }
  return mensaje;
}

function fax(fax){
  let expReg6= new RegExp ("^[9]{1}\\d{8}$");

  mensaje="";
  enviar=false;
  if (!expReg6.test(fax)) {
    //error
    enviar=false;
    mensaje="Error en el fax";
  }else {
    enviar=true;
    mensaje="Correcto el fax";
  }
  return mensaje;
}

function fecha(fecha){
  let expReg3=/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/;

  mensaje="";
  enviar=false;
  if (!expReg3.test(fecha)) {
    //error
    enviar=false;
    mensaje="Error en la fecha";
  }else {
    enviar=true;
    mensaje="Correcto la fecha";
  }
  return mensaje;

}

// function fecha(fecha){
//   var correcto="";
//   var dividir=fecha.split(fecha,"/");
//   var dia=dividir[0];
//   var mes=dividir[1];
//   var ano=dividir[2];
//   correcto=dia;
//
//   if (dia.size()>0 && dia.size()<2) {
//     if (mes.size()>0 && mes.size()<2) {
//       if(ano.size()>2 && ano.size()<4){
//         correcto="Fecha correcta";
//       }else {
//         correcto="año erroneo";      }
//     }else {
//       correcto="mes erroneo";
//     }
//
//   }else {
//     correcto="dia erroneo";
//   }
//   return correcto;
// }

function numeros(codigo){
  let expReg3=/^\d{4}$/;

  mensaje="";
  enviar=false;
  if (!expReg3.test(codigo)) {
    //error
    enviar=false;
    mensaje="Error en el codigo";
  }else {
    enviar=true;
    mensaje="Correcto el codigo";
  }
  return mensaje;

}

function numeros2(codigo){
  let expReg3=/^\d{2}$/;

  mensaje="";
  enviar=false;
  if (!expReg3.test(codigo)) {
    //error
    enviar=false;
    mensaje="Error en el codigo";
  }else {
    enviar=true;
    mensaje="Correcto el codigo";
  }
  return mensaje;

}

function comprobariban2(iban){
  let expReg3=/^[a-zñáéíóú]{2}\d{16,32}$/;
  mensaje="";
  enviar=false;
  if (!expReg3.test(iban)) {
    //error
    enviar=false;
    mensaje="Error en el IBAN";
  }else {
    enviar=true;
    mensaje="Correcto el IBAN";
  }
  return mensaje;
}


function comprobarpersona(persona){
  var correcto="";
  if (document.primero.persona.juridica.checked) {
    correcto="Persona correcta";
  }else if (document.primero.persona.fisica.checked) {
    correcto="Persona correcta";
  }else {
    correcto="Persona incompleta";
  }
  return correcto;
}

function comprobarsector(sector){
  var correcto="";
  if (document.primero.sececon.value.checked) {
    correcto="Sector Correcto";
  }else {
    correcto="Sector incompleto";
  }
  return correcto;
}

function comprobarempresa(empresa){
  var correcto="";
  if (document.primero.empresa.value.checked) {
    correcto="Empresa Correcta";
  }else {
    correcto="Empresa incompleta";
  }
  return correcto;
}

function comprobarcomunidad1(comunidad1){
  var correcto="";
  var cont=0;
  for (var i = 0; i < comunidad1.length; i++) {
    if (document.primero.comunidad1[i].selected) {
      cont++;
    }
  }
  if (cont>1) {
    correcto="Se han marcado 2 o mas comunidades";
  }else{
    correcto="Se han de marcar minimo 2 comunidades";
  }
}

function comprobarnumeros(numero){
  var correcto="";
  let numeros= '0123456789';
  for (var i = 0; i < numero.length; i++) {
    if(numeros.indexOf(numero[i])==-1) {
      correcto="Tiene que incluir obligatoriamente numeros";
    }else{
      correcto="Contiene numeros, correcto";
    }
  }
  return correcto;
}

function comprobarnumcuenta(numcuenta) {
  var correcto="";
  if (numcuenta.length!=10) {
    correcto="Longitud numcuenta diferente de 10";
  }else {
    correcto="Numcuenta correcta length=10";
  }
  let numeros= '0123456789';
  for (var i = 0; i < numero.length; i++) {
    if(numeros.indexOf(numero[i])==-1) {
      correcto="Tiene que incluir obligatoriamente numeros";
    }else{
      correcto="Contiene numeros, correcto";
    }
  }
  return correcto;
}

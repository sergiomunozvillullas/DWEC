//Acceder a/obtener un elemento por el identificador
	document.getElementById("identificador")
	// elemento cuyo identificador es segovia
	var miTexto=document.getElementById("segovia");
	
	document.querySelector("selector")
	// elemento cuyo identificador es segovia
	var segundoTexto=document.querySelector("#segovia");
	// el primer div
	var terceroTexto=document.querySelector("div");
	// el primer div que sea hijo único de un ol, el cual es hijo de un div, que a
	// su vez es hijo de un elemento con identificador segovia.
	var cuartoTexto=document.querySelector("#segovia>div>ol>li:onlyChild");
	
	element.querySelector("selector")
	nodo.querySelector("selector")
	// el primer div que esté dentro del div con identificador madrid
	var uno=document.querySelector("div#madrid div");
	// el primer ol que sea hijo de un p el cual está dentro de un div que a su vez
	// está dentro del div con identificador madrid.
	var dos=uno.querySelector("p>ol");
	
	// acceso al body
	document.body
	// acceso al head
	document.head
	
// Acceder a/Obtener un conjunto de elementos. Se obtiene un NodeList o un 
// HTMLCollection

	// Obtener todos los elementos del documento que tienen esa etiqueta.
	document.getElementsByTagName("etiqueta")
	// obtener todos los p del documento
	var textos=document.getElementsByTagName("p");
	
	// obtener todos los elementos que hay a partir del element o el nodo con la 
	// la etiqueta indicada
	element.getElementsByTagName("etiqueta")
	// el primer ol que sea el último hijo de un div.
	var tres=document.querySelector("div>ol:last-child");
	// todos los li de el primer ol que sea el último hijo de un div
	var tresDatos=tres.getElementsByTagName("li");

	// Obtener todos los elemento del documento que pertenecen a esa clase.
	document.getElementsByClassName("nombre-clase")
	// se obtienen todos los elementos que tienen la clase alumnos.
	var cuatro=document.getElementsByClassName("alumnos");
	
	// obtener todos los elementos que tienen esa clase a partir del element o del 
	// nodo
	element.getElementsByClassName("nombre-clase");
	// el elemento que tiene el identificador daw
	var quinto=documenet.getElementById("daw");
	// todos los elementos que hay dentro del elemento con identificador daw, que 
	// contengan la clase dwec.
	var datosQuinto=quinto.getElementsByClassName("dwec");

	// Acceder a/obtener todos los elementos del documento que tengan ese nombre.
	// ya no se utiliza
	document.getElementsByName("nombre");
	// Obtener todos los elementos con el nombre paises.
	var sexto=document.getElementsByName("paises");
	
	//Acceder a/obtener todos los elementos correspondientes a ese selector 
	//del documento
	document.querySelectorAll("selector");
	// todos los li que sean hijos de un ol, que a su vez es hijo de un div.
	var septimo=documenent.querySelectorAll("div>ol>li");
	// obtener todos los elementos correspondientes al selector existentes a partir
	// del element
	element.querySelectorAll("selector")
	// El elemento con identificador diw que está dentro de un elemento de la clase
	// daw que a su vez está dentro de un div.
	var octavo=document.querySelector("div .daw #diw");
	// todos los li que son hijo de un ul que está dentro de un elemento con identificador
	// diw, que a su vez está dentro de un elemento de la clase daw, que a su vez está
	// dentro de un div
	var octavoDatos=octavo.querySelectorAll("ul>li");

	//Para acceder a  un elemento del conjunto
	.item(posición)
	// accedemos al cuarto elemento
	var octavoDatosuno=octavoDatos.item(3);

	//Para saber el número de elementos del conjunto
	.length
	// el número de elemenetos de octavoDatos
	var numeroElementosOctavo=octavoDatos.length;
	// Recorrer todos los elementos
	for (let i=0; i < octavoDatos.length; i++)
		octavoDatos.item(i)

// Crear elementos
	// crea un elemento que se corresponde a una etiqueta de html, es un element
	document.createElement("etiqueta");
	// se crea un li.
	let nuevoli=document.createElement("li");
	// crea un elemento de texto, TextNode
	document.createTextNode("texto")
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//creamos un nodo de tipo texto con el contenido de la variable vpais.
	let textoli=document.creatTextNode(vpais);
	// añadir el nodo al final.
	element.appendChild(nodo);
	// añadimos el textoli al final del nuevo li.
	nuevoli.appendChild(textoli);
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// añadimos al final de padre el nuevo li.
	padre.appendChild(nuevoli);
		
	// añade el elemento nuevo al padre delante del elemento anterior
	padre.insertBefore(nuevo, anterior)

	// añadir un elemento nuevo delante del primer hijo
	elemento.prepend(nuevo)
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// se crea un li.
	let nuevoli=document.createElement("li");
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//añadimos el texto del li al li
	nuevoli.appendChild(textoli):
	// añadimos el nuevo li delante del primer hijo del padre.
	padre.prepend(nuevoli);
	
	// añade el nuevo elemento al final del elemento
	elemento.append(nuevo)
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// se crea un li.
	let nuevoli=document.createElement("li");
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//añadimos el texto del li al li
	nuevoli.append(textoli):
	// añadimos el nuevo li al final del padre.
	padre.append(nuevoli);

	// añade el nuevo elemento delante del elemento
	elemento.before(nuevo)
	// añade el nuevo elemento al final del elemento
	elemento.append(nuevo)
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// obtener todos los li
	let todosli=padre.getElementsByTagName("li")
	// se crea un li.
	let nuevoli=document.createElement("li");
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//añadimos el texto del li al li
	nuevoli.append(textoli):
	// añadimos el nuevo li delante del li que ocupa la posición de indice.
	todosli.item(indice).before(nuevoli);

	// añadimos un nuevo elemento detras del elemento
	elemento.after(nuevo)
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// obtener todos los li
	let todosli=padre.getElementsByTagName("li")
	// se crea un li.
	let nuevoli=document.createElement("li");
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//añadimos el texto del li al li
	nuevoli.append(textoli):
	// añadimos el nuevo li detras del li que ocupa la posición de indice.
	todosli.item(indice).after(nuevoli);

	// sustituir un nodo por otro
	padre.replaceChild(nuevo, anterior);
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// obtener todos los li
	let todosli=padre.getElementsByTagName("li")
	// se crea un li.
	let nuevoli=document.createElement("li");
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//añadimos el texto del li al li
	nuevoli.append(textoli):
	// sustituimos el nuevo li port el li que ocupa la posición de indice.
	padre.replaceChild(nuevoli, todosli.item(indice));

	// sustituir un nodo por otro
	elemento.repalceWith(nuevo)
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// obtener todos los li
	let todosli=padre.getElementsByTagName("li")
	// se crea un li.
	let nuevoli=document.createElement("li");
	// creamos un nodo de tipo texto con el literal africa	
	let textoli=document.creteTextNode("africa");
	//añadimos el texto del li al li
	nuevoli.append(textoli):
	// sustituimos el nuevo li port el li que ocupa la posición de indice.
	todosli.item(indice).replaceWith(nuevoli);
	
	// borrar el nodo hijo
	padre.removeChild(hijo);
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// obtener todos los li
	let todosli=padre.getElementsByTagName("li")
	// borrar el elemento que ocupa la posición de indice
	padre.removeChild(todosli.item(indice))

	// borrar el elemento
	elemento.remove()
	// padre es el elemento con identificador paises
	let padre=document.getElementById("paises");
	// borrar padre
	padre.remove();

	// acceder al texto de un elemento
	textContent
	
	//acceder al contenido con etiqueta de html,
	innerHTML




// Evento en el DOM
	// declarar un evento
	elemento.addEventListener("evento", nombre-función);
	// para internet explorer 8 y anteriores
	elemento.attachEvent("onevento",nombre-función);
	
	if ( document.addEventListener)
		elemento.addEventListener("evento",nombre-función)
	else if (document.attachEvent)
		elemento.attachEvent("onevento",nombre-función)






	
	

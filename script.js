console.log ("Inicio de programa");

/*document.write ("<h1>saludo inicial</h1>");
var nombre = prompt ("Cual es tu equipo de futbol favorito");
document.write ("El equipo es:" +nombre);
var clave = prompt ("Hola usuario ingrese su clave");
document.write ("La longitud de su clave es:" +clave.length);
document.write ("TA-DA!!! Su clave es:" +clave.toUpperCase());
document.write ("El valor original de la clave es:" +clave);
alert ("gracias por visitar")
console.log ("fin de programa");*/

/*CUENTA CUENTOS EN JAVA CON CUENTA REGRESIVA DE PREGUNTAS*/
/*var preguntas = 3;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
alert("Sigue las instrucciones.");
var sustantivo1 = prompt("Ingrese un Sustantivo: " + preguntasFaltantes);
preguntas = preguntas -1;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
var adjectivo1 = prompt("Ingrese un Adjectivo: " + preguntasFaltantes);
preguntas = preguntas -1;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
var verbo1 = prompt("Ingrese un verbo: " + preguntasFaltantes);
var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " en el frondoso bosque tenebroso!";
document.write("<h1></h1><p>" + cuento + "</p>");
var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " en la noche oscura y fría";
document.write("<h1></h1><p>" + cuento + "</p>");
var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " junto a la familia huesitos!";
document.write("<h1></h1><p>" + cuento + "</p>");
console.log("Fin del programa");
*/

/*CALCULADORA DEL TIEMPO*/
/*var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Hay " + segundosPorDia	+ " en un dia</p>");
*/

/*CALCULAR LA EDAD*/
/*var anios=prompt("Ingrese su edad");
var horasPorDia = 24;
var anVividos=anios*horasPorDia;
document.write ("<h1>Calculadora del Tiempo</h1><p>Has vivido " + anVividos + " dias aproximadamente</p>");
*/

/*CASTING parseInt()*/
/*var peliculasVistas = prompt("Cuantas peliculas has visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
document.write ('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla.");
console.log ("Programa completado" )
*/

/*OBJETO MATH*/
/*var dado = Math.floor(Math.random()*6)+1;
alert("Dado dice:  " +dado);
console.log ("Programa completado");
*/


/*OBJETO MATH ejercicio*/
/*var numero = prompt ("Ingrese un número");
var dado = Math.floor(Math.random()*parseInt(numero));
document.write ("El número aleatorio entre 0 y " + numero + " es: " + dado );
console.log ("Programa completado");
*/


/*ADIVINA EL NÚMERO IF*/
/*var numeroadivinable=Math.floor(Math.random()*10)+1;
var numerousuario= prompt ("Ingrese un número del 1 al 10");
if (parseInt(numerousuario)==numeroadivinable) 
{document.write ("Bien adivinaste!!! el número es: " + numeroadivinable );}
else
{document.write ("no acertaste :( ");}
*/


/*ADIVINA EL NÚMERO CON AYUDA UTILIZANDO ELSE IF-BOLEANO*/
/*var numeroIngresado = parseInt(prompt("Ingrese un numero entre el 1 y 5: "));
var adivino=false;
var aleatorio = Math.floor(Math.random() * 5) + 1;
if (numeroIngresado === aleatorio) 
	{adivino = true;}
else if(aleatorio > numeroIngresado)
	{
	var nuevoIntento = parseInt(prompt("El numero a adivinar es mayor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	adivino=true; };	
		numeroIngresado = nuevoIntento;
	}
	else
	{
	var nuevoIntento = parseInt(prompt("El numero a adivinar es menor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	adivino=true; };	
		numeroIngresado = nuevoIntento;
	};
if(adivino)
	{
	alert("FELICITACIONES ADIVINASTE!!, EL NÚMERO " + numeroIngresado + " FUÉ EL ALEATORIO ENTRE 1 Y 5");
    }
    else
    {alert("Ingresaste " + numeroIngresado + ", pero el numero a adivinar era " + aleatorio);}
*/

/*ADIVINA EL NÚMERO CON AYUDA AGREGANDO COMENTARIOS*/
/*var numeroIngresado = parseInt(prompt("Ingrese un numero entre el 1 y 5: "));
var adivino=false;
var aleatorio = Math.floor(Math.random() * 5) + 1;
if (numeroIngresado === aleatorio) 
	{adivino = true;}
else if(aleatorio > numeroIngresado)
	{
	var nuevoIntento = parseInt(prompt("El numero a adivinar es mayor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	adivino=true; };	
		numeroIngresado = nuevoIntento;
	}
	else
	{
	var nuevoIntento = parseInt(prompt("El numero a adivinar es menor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	adivino=true; };	
		numeroIngresado = nuevoIntento;
	};
if(adivino)
	{
	alert("FELICITACIONES ADIVINASTE!!, EL NÚMERO " + numeroIngresado + " FUÉ EL ALEATORIO ENTRE 1 Y 5");
    }
    else
    {alert("Ingresaste " + numeroIngresado + ", pero el numero a adivinar era " + aleatorio);}
*/


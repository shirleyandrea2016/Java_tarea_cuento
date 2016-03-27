console.log ("Inicio de programa");

alert ("Hola Javascript");
/*document.write ("<h1>saludo inicial</h1>");
var nombre = prompt ("Cual es tu equipo de futbol favorito");
document.write ("El equipo es:" +nombre);
var clave = prompt ("Hola usuario ingrese su clave");
document.write ("La longitud de su clave es:" +clave.length);
document.write ("TA-DA!!! Su clave es:" +clave.toUpperCase());
document.write ("El valor original de la clave es:" +clave);
alert ("gracias por visitar")
console.log ("fin de programa");*/

/*CUENTO EN JAVA*/
/*alert("Sigue las instrucciones.");
var sustantivo1 = prompt("Ingrese un Sustantivo: ");
var adjectivo1 = prompt("Ingrese un Adjectivo: ");
var verbo1 = prompt("Ingrese un verbo: ");
var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " en el frondoso bosque tenebroso!";
document.write("<h1></h1><p>" + cuento + "</p>");
var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " en la noche oscura y fría";
document.write("<h1></h1><p>" + cuento + "</p>");
var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " junto a la familia huesitos!";
document.write("<h1></h1><p>" + cuento + "</p>");*/

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
var peliculasVistas = prompt("Cuantas peliculas has visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
document.write ('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla.");
 console.log ("Programa completado" )
/*USO DE FUNCIONES*/
/*function tiraDados()
{
	var dado = Math.floor (Math.random ()*6)+1;
	alert("El dado dice: " + dado);
}
alert("Tiramos 3 dados: ");
tiraDados();
tiraDados();
tiraDados();
*/

/*OTRAS FUNCIONES DADOS*/
/*function tiraDados()
{
	var dado = Math.floor(Math.random()*6)+1;
	return dado;
}
alert("Tiramos 3 dados: ");
alert("El dado dice:  " + tiraDados());
var multiplo=2+tiraDados();
alert("El valor de bonus es: " + multiplo);
*/


/*ARGUMENTOS EN LAS FUNCIONES*/
/*function numeroalazarhastalimite(limite){
	var num=Math.floor(Math.random() * limite)+1;
	return num; }
var numazar = numeroalazarhastalimite(100);
*/

/*EJERCICIO DE FUNCIONES
Crear una funcion llamada max que retorne el valor máximo entre 2 números. Ambos núm son dados 
como parametro a la función máx 5 min.*/


/*AMBITO DE VARIABLES LOCALES Y GLOBALES*/
/*function saludo()
{
var mensaje="Hola a todos";
alert(mensaje);
}
var mensaje="Chauuu";
saludo();
alert(mensaje);
saludo();
*/

/*DETECTAR ERRORES*/
var num=9;
if (isNaN(num));
{
	throw new Error("No es un número valido");
}
else {num=num*0.5;}







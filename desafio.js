/*DESAFÍO
-que retorne un número al azar entre 2 limites, uno superior y uno inferior 
(el número en este rango inclusivo)
-pedir los limetes al usuario
-constar de funcion para generar el num al azar
-mostrar el numero al azar al usuario
-manejar errores con trow y verificando (validando) si los datos ingresados son numeros*/
/*function numeroalazar(li, ls)
{
if ((isNaN(li)) || (isNaN(ls)))
{
	throw new Error("valor no corresponde"); 
}
var num= Math.round (Math.random ()* (ls-li))+li;
return num;
}
var ls=prompt("ingrese limite superior");
var li=prompt("ingrese limite inferior");
alert("Su numero al azar es: " + numeroalazar(parseInt(li), parseInt(ls)));*/


/*WHILE LOOP*/
/*var contador=0;
while(contador<10)
{
var randomico=numeroalazar(parseInt(li), parseInt(ls));
document.write(randomico + "  ");
contador++;
}*/


/*DESAFIO FINAL: ADIVINA ADIVINADOR*/
function adivinanza(limite)
{
	var numero = Math.floor(Math.random() * limite) + 1;
	return numero;
}
var contador=0;
var adivinar = adivinanza(100);
while(true)
{
	var numaleatorio = adivinanza(100);
	contador++;
	if (numaleatorio == adivinar) 
	{
		document.write("El numero aleatorio es: "+ numaleatorio);
		break;
	}
}
document.write("<p>Se realizaron "+ contador + " interacciones. </p> <h3>El número a adivinar fué: "+adivinar+"</h3>");


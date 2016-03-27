/*DESAFÍO*/
function numeroalazar(li, ls)
{
if ((isNaN(li) || (isNaN(ls));
{
	throw new Error("valor no corresponde es un número valido");
}
var num= Math.round (Math.random ()* (ls-li))+li;
return num;
}
var ls=prompt("ingrese limite superior para el numero al ");
var li=prompt("ingrese limite inferior");
alert("Su numero al azar es: " + numeroalazar(parseInt(li)), parseInt(ls)));
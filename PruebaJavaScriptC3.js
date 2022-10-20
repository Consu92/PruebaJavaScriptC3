/*Funciones solicitadas:
obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]*/

matrizDias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
matrizPrecios =[1000,500,650,8000]

/*Ejercicio #1
● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.*/

/*Inicio
1.Definir la matriz de Precios a comprar, matriz de Precios nuevos y definir un array con todos los días de la semana
2.Definir la matriz de precios
3.Crear una función para obtener el precio de cada producto pero con el 20% de descuento aplicado.
4.Imprimir en console.log la función para obtener los nuevos precios.
5.Crear un condicional "if" para cuando sea Martes y Jueves sea verdadero se aplique el descuento, por ende dentro de "else" se incorporarian los días Lunes, Miércoles, Viernes, Sábado y Domingo.
6.Llamar a console log
Fin*/


matrizDias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
var matrizPrecios = [1000,500,650,8000];
var nuevosPrecios =[];

//Esta función aplica el 20% de descuento a los precios, dando como resultado los precios nuevos.
matrizPrecios.forEach(x=>nuevosPrecios.push(x*0.80));
console.log(nuevosPrecios);

function preciosMartesyJueves(){
    if()
}



/*Ejercicio #2

● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.

/*Inicio
1.Definir la matriz de Precios
2.Definir variables de clientes a los que se le aplicará el desceunto, y a los clientes que no se lo harán.
2.Crear una función que aplique un 5% de descuento a la compra total aplicando las siguientes condiciones.
3.Crear una función que seleccione a qué clientes se le puede aplicar el descuento, bajo el condicional && ya que debe cumplir dos condiciones, llevar más de 3 productos(condición 1) y uno de sus producto debe valer más de 10.000 pesos.
Fin*/

//Esta función aplica el 5% de descuento a los precios, de los clientes que llevan más de 3 productos y al menos uno de ellos tiene un valor superior a 10.000 pesos
matrizPrecios.forEach(x=>nuevosPrecios.push(x*0.95));
console.log(nuevosPrecios);

/*Ejercicio #3

● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.



/*Ejercicio #4
● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso.
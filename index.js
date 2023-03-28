let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
// let btnAll = document.querySelectorAll(".mClaro");    //no funciona no se por que selectorAll
let btnC = document.getElementById("btnC");
let btnSuma = document.getElementById("btnSuma");
let btnDiv = document.getElementById("btnDiv");
let btnMult = document.getElementById("btnMult");
let btnRest = document.getElementById("btnRest");
let btnPunto = document.getElementById("btnPunto");
let display = document.getElementById("textDisplay");
let displayOpe = document.getElementById("operadorDisplay");
let dark = document.getElementById("dark");
let operador
let num1
let num2
let resultado

//FORMA RAPIDA DE ESCUCHAR UN EVENTO

// btn1.onclick = function() {
// 	// console.log(this.value)
// 	display.value += this.value;
// }

//FORMA OPTIMIZADA DE MOSTRAR TODOS LOS BOTONES EN PANTALLA DE FORMA RAPIDA


function mostrarValor(btn) {
		btn.onclick = function() {	
		display.value += this.value;
	}
}

mostrarValor(btn1);
mostrarValor(btn2);
mostrarValor(btn3);
mostrarValor(btn4);
mostrarValor(btn5);
mostrarValor(btn6);
mostrarValor(btn7);
mostrarValor(btn8);
mostrarValor(btn9);
mostrarValor(btn0);
mostrarValor(btnPunto);

// btn.onclick = function() {	
// 		display.value += this.value;
// 	}

//LAS FUNCIONES DE LOS BOTONES SUMA Y RESTA INDIVIDUAL
// btnSuma.onclick = function suma(argument) {
// 	num1 = parseFloat(display.value);
// 	operador = "suma";
// 	displayOpe.value = `+  ${num1}`;
// 	display.value = null;
// }

// btnRest.onclick = function rest(argument) {
// 	num1 = parseFloat(display.value);
// 	operador = "resta"
// 	console.log(num1 + " " + operador)
// 	displayOpe.value = `-  ${num1}`;
// 	display.value = null;
// }

//FUNCION PARA UNA VEZ SE PRECIONE EL OPERADOR, ESTE GUARDE EL NUMERO
//EN LA VARIABLE NUM1 Y ESPERE POR EL OTRO NUMERO

function operaciones(btnOper, symbolOper) {
		btnOper.onclick = function () {
		num1 = parseFloat(display.value);
		operador = symbolOper
		displayOpe.value = `${num1}${operador}`;
		display.value = null;
	}
}

operaciones(btnSuma, "+");
operaciones(btnDiv, "/");
operaciones(btnMult, "*");
operaciones(btnRest, "-");

//EL BOTON ENTER GUARDA EL NUMERO 2 EN OTRA VARIABLE Y LEE QUE
//QUE OPERACION SE TOCO ANTES, LUEGO MUESTRA EL RESULTADO
btnEnter.onclick = function operacion(argument) {
	num2 = parseFloat(display.value);
	display.value = null;
	displayOpe.value = null;
	if (operador === "+") {
		resultado = num1 + num2;
	} else if (operador === "/") {
		resultado = num1 / num2;
	} else if (operador === "*") {
		resultado = num1 * num2;
	} else if (operador === "-") {
		resultado = num1 - num2;
	} else {
		resultado = null;
	}
	
	display.value = resultado;

}


//BPTON PARA LIMPIAR
btnC.onclick = function clear() {
	display.value = null;
	displayOpe.value = null;
}

//TODO ESTO PARA ACTIVAR EL MODO CLARO/MODO OSCURO TELIBLEEEE
dark.onclick = function () {
	btn1.classList.toggle("mClaro");
	btn2.classList.toggle("mClaro");
	btn3.classList.toggle("mClaro");
	btn4.classList.toggle("mClaro");
	btn5.classList.toggle("mClaro");
	btn6.classList.toggle("mClaro");
	btn7.classList.toggle("mClaro");
	btn8.classList.toggle("mClaro");
	btn9.classList.toggle("mClaro");
	btn0.classList.toggle("mClaro");
	btnC.classList.toggle("mClaro");
	btnSuma.classList.toggle("mClaro");
	btnDiv.classList.toggle("mClaro");
	btnMult.classList.toggle("mClaro");
	btnRest.classList.toggle("mClaro");
	btnPunto.classList.toggle("mClaro");
	display.classList.toggle("mClaro");
	displayOpe.classList.toggle("mClaro");
	document.querySelector(".display-continer").classList.toggle("mClaro");
	document.querySelector(".container-child").classList.toggle("mClaro");
	document.querySelector(".container").classList.toggle("mClaro");
	document.querySelector(".h1").classList.toggle("mClaro");
}

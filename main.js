/**
\file main.js
\author Edgar Alejandro Ramírez Fuentes
\version 1.0
\last update date 19 / 09 / 2019
\copyright GNU Public License v3.
Implemetación en código de lo aprendido en la clase de teoría computacional- ESCOM 2020-1
*/

'use strict'
 // Incisos A y B los cuales consisten en pedirle al usuario que introduzca símbolos a 2 alfabetos
 // diferentes (por lo menos deben contener 3 símbolos cada uno).
 // La forma de ingreso de los símbolos puede ser individualmente separados por una coma(,) o 
 // por un rango de caracteres(0-9).
var alfabeto1 = [];
var alfabeto2 = [];
var guardian = true;
alert("Lectura del alfabeto 1.");
var opcion = prompt("¿Como ingresará los elementos del alfabeto\n1. Uno por Uno.\n2. Por rango");
switch(opcion){
    case '1':
    alert("Se deben ingresar como mínimo 3 símbolos en el alfabeto.");
    do{
        var datos = prompt("Ingrese los símbolos del alfabeto separados por comas. Ej. a,a,b,b");
        alfabeto1 = datos.split(",");
        if(alfabeto1.length < 3){
            alert("El número de símbolos en el alfabeto es menor a 3.\nVuelve a ingresar los símbolos del alfabeto 1.")
            guardian = false;
        }else{
            guardian= true;
        }
    }while(!guardian);
    break;
    case '2':
            var datos = prompt("Ingrese el rango del alfabeto separados por un guión. Ej. 0-9");
            var rango = datos.split("-");
            var rango1 = rango[0].charCodeAt(0);
            var rango2 = rango[1].charCodeAt(0);
            for(var i= rango1; i <= rango2; i++){
                alfabeto1.push(String.fromCharCode(i));
            }
    break;
}

alert("Lectura del alfabeto 2.");
var opcion = prompt("¿Como ingresará los elementos del alfabeto 2\n1. Uno por Uno.\n2. Por rango");
switch(opcion){
    case '1':
    alert("Se deben ingresar como mínimo 3 símbolos en el alfabeto 2.");
    do{
        datos = prompt("Ingrese los símbolos del alfabeto separados por comas. Ej. a,a,b,b");
        alfabeto2 = datos.split(",");
        if(alfabeto2.length < 3){
            alert("El número de símbolos en el alfabeto 2 es menor a 3.\nVuelve a ingresar los símbolos del alfabeto 1.")
            guardian = false;
        }else{
            guardian= true;
        }
    }while(!guardian);
    break;
    case '2':
            var datos = prompt("Ingrese el rango del alfabeto 2 separados por un guión. Ej. 0-9");
            var rango = datos.split("-");
            var rango1 = rango[0].charCodeAt(0);
            var rango2 = rango[1].charCodeAt(0);
            for(var i= rango1; i <= rango2; i++){
                alfabeto2.push(String.fromCharCode(i));
            }
    break;
}
alert("Los elementos de los alfabetos los puede encontrar en la consola del navegador web.");
console.log("Alfabeto 1:");
console.log(alfabeto1);
console.log("Alfabeto 2:");
console.log(alfabeto2);

// Inciso C el usuario deberá ingresar 2 cadenas y el programa validar mediante expresiones regulares
// que estas cadenas pertenezcan al alfabeto 1, en caso de no pertenecer estas cadenas al primer alfabeto
// se le pedirá al usuario ingresar una cadena válida.

alfabeto1.forEach(simbolo => {
    simbolosAlfabeto1 += simbolo;
});
var ExpReg = new RegExp("^["+simbolosAlfabeto1+"]+$");
do{
    var w1 = prompt("Ingresa la primera cadena para validar con el lenguaje 1");
    if(!ExpReg.test(w1)){
        alert("Cadena no válida en lenguaje 1 introduce una nueva cadena.")
    }else{
        alert("Cadena válida");
    }
}while(!ExpReg.test(w1));
do{
    var w2 = prompt("Ingresa la segunda cadena para validar con el lenguaje 1");
    if(!ExpReg.test(w2)){
        alert("Cadena no válida en lenguaje 1 introduce una nueva cadena.")
    }else{
        alert("Cadena válida");
    }
}while(!ExpReg.test(w2));
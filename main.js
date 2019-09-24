/**
\file main.js
\author Edgar Alejandro Ramírez Fuentes
\version 1.1
\last update date 24 / 09 / 2019
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
function establecerAlfabeto(){
    var alfabeto = [];
    var opcionValida = true;
    do{
        if(!opcionValida) alert("Ingresa una opción válida.");
        opcionValida = true;
        var opcion = prompt("¿Como ingresará los elementos del alfabeto\n1. Uno por Uno.\n2. Por rango");
        switch(opcion){
            case '1':
            alert("Se deben ingresar como mínimo 3 símbolos en el alfabeto.");
            do{
                var datos = prompt("Ingrese los símbolos del alfabeto separados por comas. Ej. a,a,b,b");
                alfabeto = datos.split(",");
                if(alfabeto.length < 3){
                    alert("El número de símbolos en el alfabeto es menor a 3.\nVuelve a ingresar los símbolos del alfabeto.")
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
                        alfabeto.push(String.fromCharCode(i));
                    }
            break;
            default:
                opcionValida = false;        
            break;
        }
    }while(!opcionValida)
    return alfabeto;
}
function validarCadena(alfabeto, palabra){
    var simbolosAlfabeto = "";
    alfabeto.forEach(simbolo => {
    simbolosAlfabeto += simbolo;
    });
    var expReg = new RegExp("^["+simbolosAlfabeto+"]+$");
    return expReg.test(palabra);
}

alert("Lectura del alfabeto 1.");
alfabeto1 = establecerAlfabeto();
alert("Lectura del alfabeto 2.");
alfabeto2 = establecerAlfabeto();
alert("Los alfabetos quedaron establecidos de la siguiente forma:\nAlfabeto 1: {" + alfabeto1.toString() + "}\nAlfabeto 2: {" + alfabeto2.toString() + "}");
// Inciso C el usuario deberá ingresar 2 cadenas y el programa validar mediante expresiones regulares
// que estas cadenas pertenezcan al alfabeto 1, en caso de no pertenecer estas cadenas al primer alfabeto
// se le pedirá al usuario ingresar una cadena válida.
var cadenaValida = true;
var cadena1 = "";
var cadena2 = "";

do{
    if(!cadenaValida) alert("La cadena no es válida.\nIntroduce una nueva cadena que sea válida");
    cadena1 = prompt("Ingresa la primera palabra a validar con el alfabeto 1:");
    cadenaValida = validarCadena(alfabeto1, cadena1);
}while(!cadenaValida)

do{
    if(!cadenaValida) alert("La cadena no es válida.\nIntroduce una nueva cadena que sea válida");
    cadena2 = prompt("Ingresa la segunda palabra a validar con el alfabeto 1:");
    cadenaValida = validarCadena(alfabeto1, cadena2);
}while(!cadenaValida)

alert("La palabra " + cadena1 + " y la palabra " + cadena2 + " pertenecen al alfabeto 1");
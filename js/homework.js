/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh' 
 */

function reversedString(word){
    let stringReverse=""
    let fin = word.length - 1

    for (let i = fin; i >= 0 ; i--){
        stringReverse+= word[i]   
    }window.alert(stringReverse)
}

let string= prompt("Por favor ingresa una palabra: ")
let callReverse = reversedString(string)
console.log(callReverse)


/**
 * Funcion que pida 3 numeros como parametro
 * 2 numeros obligatorios y 1 opcional con valor de 3
 * Arroje la suma de esos 3 numeros
 * Posibles resultados
 * -> addThreeNumbers(3,4,5) -> 12
 * -> addThreeNumbers(3,4) -> 10
 * -> addThreeNumbers(3) -> 'Faltan datos'
 * -> addThreeNumbers() -> 'Faltan datos'
 */

function userAdd (a, b, c=3){
    if (a === null || a ==="" || a === undefined || b === null || b ==="" || b === undefined){
        window.alert("Faltan datos")
    } else {
        window.alert(`La suma de los 3 numeros es ${Number(a) + Number(b) + Number(c)}`)
    }
}

let num1= prompt("Por favor ingresa el primer valor: ")
let num2= prompt("Por favor ingresa el segundo valor: ")
let num3= prompt("Por favor ingresa el tercer valor: ")

let callAdd= userAdd(num1, num2, num3=3)
console.log(callAdd)



/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */

function CelsiusFahrenheit(cel){
    if (cel === null || cel ==="" || cel === undefined){
        window.alert("Faltan datos")
    } else {
        fahrenheit= Number(cel) * 9/5 + 32
        let mensaje=`Los grados Fahrenheit equivalentes a ${cel} Ceslsius son: ${fahrenheit}`
        window.alert(mensaje)
    }
}

let grados= prompt("Por favor ingresa los grados Celsius de tu localidad: ")
let convertir=CelsiusFahrenheit(grados)
console.log(convertir)
 



/**
 * Funcion que imprima las tablas del 1 al 10
 */

function tablas(){
    for (let counter=1 ; counter <= 10 ; counter++){
        for (let i=1; i<=10; i++){
            console.log(`${counter} x ${i} = ${counter * i}`)
        }
    console.log("*****************")
    }
}


/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100 
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */

function addNumber(N=3){
    if( N >= 1 && N <= 100){
        let total= 0
        for (let i= 1 ; i <= N; i++){
            total += i
        } window.alert(` El total de la suma entre 1 y ${N} es ${total}`)
    } else{
        window.alert("Ingresaste un valor invalido")
    }
}

let numb=Number(prompt("Por favor ingresa un número entre 1 y 100: "))
let cadenaSumas=addNumber(numb)
console.log(cadenaSumas)
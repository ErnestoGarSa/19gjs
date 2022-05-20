// Ejercicio 1
// investigar while, y do while


// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */

let number=Number(prompt("Por favor ingresa un número entre 1 y 10: "))

for (let i=1; i<=10; i++){
    console.log(`${number} x ${i} = ${number*i}`)
}

/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

let string=prompt("Por favor ingresa una oración: ")

let largo=string.length - 1
let vowels=""
let consonants=""

for (let i=0; i<=largo; i++){
    let character=string.toLowerCase()[i]
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
        vowels+=character
    } else if(character!=="a" && character!=="e" && character!=="i" && character!=="o" && character!=="u" && character !== " "){
        consonants+=character
}
}
console.log(`Las vocales en la oración son ${vowels}`)
console.log(`Las consonantes en la oración son ${consonants}`)


/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */

let variable=Number(prompt("Por favor dame un número entre 10 y 100"))

for (let i=1; i<=variable; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

/**
 * 
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */

let palabra=prompt("Por favor ingresa una palabra: ")

let indice= palabra.length - 1
let newPalabra=""
for (let i = indice ; i>=0; i--){
    newPalabra+=palabra[i]
}
console.log(`La palabra ${palabra} invertida se escribe ${newPalabra}`)
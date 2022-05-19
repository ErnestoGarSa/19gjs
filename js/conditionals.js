// // condicionales 

// let a = 8
// let b = 6
// let total=0
// // a = a + b
// a+=b
// console.log(a)

// a = a - b
// a -=b
// console.log(a)

// // a = a * b
// a*=b
// console.log(a)

// a = a / b
// a /=b
// console.log(a)

// // a = a % b
// a%=b
// console.log(a)

// if ( 2 === "2" ){ //true
//     console.log("son iguales")
// }else { //false
//     console.log("no son iguales")
// }

// let num = 7

// num % 2 === 0 ? console.log("Es par") : console.log("Es impar")

// let esPar = num % 2 === 0 ? true : false

// console.log(`El numero ${num} es numero ${esPar ? "par" : "impar"}`)

//Switch
let age=Number(prompt("Ingresa una edad"))
switch(age){
    case 17:
        console.log("Eres menor de edad")
        break
    case 18:
        console.log("Eres mayor de edad")
        break
    default:
        console.log("No es una opción valida")
}   
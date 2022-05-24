//Funciones

// let strUser=prompt("Dame una palabra", "str").toLowerCase()
// let strReverse=""

// for (let i = strUser.length - 1 ; i >= 0 ; i--){
//     strReverse+= strUser[i]
//     // console.log(strReverse)
// } console.log(strReverse)

//Las funciones se crean con la palabra reservada function

//function name(){
    //Sentence
// }

//Invocar la funcion tenemos que abrir y cerrar los parentesis

// function miPrimerFuncion (){
//     console.log("Mi primer función")
// }

// miPrimerFuncion()

// function otraFuncion () {
//     console.log("Esta es otra función")
// }

// otraFuncion()

// function reverseString(){
//     let strUser = prompt("Dame una palabra", "str").toLowerCase()
//     let strReverse=""

//     for (let i = strUser.length - 1 ; i >= 0 ; i--){
//         strReverse+= strUser[i]
//         // console.log(strReverse)
//         } console.log(strReverse)
// }

// function getNumber(){
//     let temporalNumber= Number(prompt("Dame un número"))
//     console.log(temporalNumber)
// } 

// function addDivisors(){
//     let suma=0
//     for (let i = 1 ; i <= 100 ; i++){
//         if (i % 3 == 0 ){
//             suma+=i
//         } else if (i % 5 == 0){
//             suma+=i
//         } else if( i % 7 == 0){
//             suma+=i
//         }
//     } console.log(suma)
// }


// function addNumbers(){
//     let counter= Number(prompt("Dame un número:"))
//     let suma=0
//     while (counter >= 0){
//         suma+=counter
//         counter--
//     }
//     console.log(suma)
// }


// function addCharacter(){
//     let string = prompt("Dame una oración:")
//     let fin = string.length - 1 
//     let counter2 = 0

//     let vowelsA=0
//     let vowelsE=0
//     let vowelsS=0

//     do{
//         switch (string.toLowerCase()[counter2]){
//             case "a":
//                 vowelsA++
//                 break
//             case "e":
//                 vowelsE++
//                 break
//             case " ":
//                 vowelsS++
//                 break
//             default:
//                 break
//         }
//         counter2++
//     }while (counter2 <= fin)
//     console.log(`Lestas "a" son: ${vowelsA}`)
//     console.log(`Lestas "e" son: ${vowelsE}`)
//     console.log(`Espacios son: ${vowelsS}`)
// }





//Funciones de retorno 
//Siempre tienen return al final
//Return termina la ejecucion de la función
//Return devuelve un valor

// function getone(){
//     let num=10
//     return num

//     console.log("pasos intermedios")
// }

// getone()

// function suma(){
//     return 8 + 10
// }
// //Invocando la función
// let diezYOcho= suma()

// console.log(diezYOcho )

// let hola= function(){
//     return "Hola"
// }

// console.log(hola)


//Funciones con Parametros 
//Los parametros van adentro de los parentesis y puede ser cualquier numero de parametros

// function suma1(a, b){
//     let total=0
//     total= a + b
//     return total
// }

// console.log(suma1(10,34))

// //Funciones con parametros opcionales

// function suma2(a, b, c = 2){
//     return a + b + c
// }

// console.log(suma2(5,6))
// console.log(suma2(5,6,8))


//Ejercicio 
//Realizar funcion que pida 3 numeros y retorne la suma de los 3 numeros


// function userAdd(){
// let a=Number(prompt("Dame el primer numero para sumar"))
// let b=Number(prompt("Dame el segundo numero para sumar"))
// let c=Number(prompt("Dame el tercer numero para sumar"))
    
//     return `La suma de los 3 numeros es ${a + b + c}`
// }

function userAdd2(a, b, c){
    return a + b + c
}

let p1=Number(prompt("Dame el primer numero para sumar"))
let p2=Number(prompt("Dame el segundo numero para sumar"))
let p3=Number(prompt("Dame el tercer numero para sumar"))

let sumaUsuario= userAdd2(p1, p2, p3)
console.log(sumaUsuario)
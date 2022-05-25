// function retorno(a, b){
//     if (a > b){
//         return a
//     }else {
//         return b
//     }

//     //a > b ? a : b
// }

// //Arrow functions --> funciones flechas

// //Const nombre = (parametros) => arrow {
//     //sentencias
// // }

// //declaracion / inicializacion
// const suma = (a, b) => {
//     //sentencias
//     return a + b
// }

// console.log(suma(4,5))

// //Ejercicios

// const strReverse= (str) => {
//     let reverseStr= ""
//     for(let i= str.length - 1 ; i >= 0; i--){
//         reverseStr+= str[i]
//     }
//     return reverseStr
// }

// console.log(strReverse("Hola"))


// const userAdd = (a , b, c=3) => {
//     if ( !a && !b ){
//         window.alert("Faltan datos")
//     }else {
//         window.alert(`La suma de los 3 numeros es igual a ${a + b + c}`)
//     }
// }

// let num1= Number(prompt("Por favor ingresa el primer valor: "))
// let num2= Number(prompt("Por favor ingresa el segundo valor: "))
// let num3= Number(prompt("Por favor ingresa el tercer valor: "))

// let callAdd= userAdd(num1, num2)
// console.log(callAdd)

// const celsiusFahrenheit = (cels) =>{
//     if (!cels){
//         window.alert("Faltan datos")
//     } else {
//         fahrenheit= Number(cels) * 9/5 + 32
//         window.alert(`La temperatura es ${fahrenheit} grados F`)
//     }
// }

// let grados=prompt("Ingresa la temperatura", 15)
// let convertir= celsiusFahrenheit(grados)
// console.log(convertir)


// const tablas = () => {
//     for (let counter = 1 ; counter <= 10; counter++){
//         for (i = 1 ; i <= 10 ; i++){
//             console.log(`${counter} x ${i} = ${counter*i}`)
//         }
//     console.log("**************")
//     }
// }


// const addNumbers = ( N=3 ) => {
//     if (N >= 1 && N <=100){
//         let total=0
//         for (i = 1; i <= N; i++){
//             total += i
//         } window.alert(`El total de la suma entre los numeros 1 y ${N} es ${total}`)
//     } else {
//         window.alert("Número invalido")
//     }
// }

// let numb=Number(prompt("Ingresa un número entre 1 y 100", 3))
// let cadenaSumas=addNumbers(numb=3)
// console.log(cadenaSumas)


//Pedir usuario cadena de texto
//Verificar que la oracion sea palindromo
//Anita lava la tina

const isPalidrome = (str) => {
    let strNormal=str.replaceAll(" ", "").toLowerCase()
    let strReverse=""

    for (i= strNormal.length - 1 ; i >= 0; i--){
        strReverse+= strNormal[i]
    }
    if (strNormal === strReverse){
        return "Es un palindromo"
    }else {
        return "No es un palindromo"
    }
}
    
console.log(isPalidrome("Anita lava la tina"))
console.log(isPalidrome("osO"))
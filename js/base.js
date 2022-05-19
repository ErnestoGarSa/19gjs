// var koder= "Ernesto"
// let koder2= "Alejandro"
// const koder3= "Kike"

// console.log(koder)
// console.log(koder2)
// console.log(koder3)

// koder= "Jose"
// koder2="Lorena"

// console.log(koder)
// console.log(koder2)
// console.log(koder3)

// console.log(koder + koder2)

// console.log(`Hola ${koder}`)

// let num=5
// let name="Alejandro"

// console.log(typeof(num))
// console.log(typeof(name))

// // Pedir datos al usuario 

// let nombre = window.prompt("Dame tu nombre")
// console.log(nombre)

// let nombre1=prompt("Dame tu nombre", "Juan")

// if (nombre1===null){
//     console.log("Nombre vacio")
// } else{
//     console.log(nombre1)
// }

// let edad= prompt("Dame tu edad", 25)

// console.log(edad)
// console.log(parseInt(edad))

let grados= Number(prompt("Por favor dame los grados celsius", 0))

console.log(typeof grados)

if (grados === Number ){
    fahrenheit= grados * 9/5 + 32
    console.log(`${grados} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`)
} else {
    console.log("Por favor ingresa un valor")
}

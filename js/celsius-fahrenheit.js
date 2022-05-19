//convertir los grados celsius a fahrenheit


let grados= Number(prompt("Por favor dame los grados celsius", 0))

console.log(typeof grados)

if (grados === Number ){
    fahrenheit= grados * 9/5 + 32
    console.log(`${grados} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`)
} else {
    console.log("Por favor ingresa un valor")
}
//convertir los grados celsius a fahrenheit


let grados= prompt("Por favor dame los grados celsius")

console.log(typeof grados)

if (grados === null ){
    console.log("Por favor ingresa un valor")
    
} else {
    fahrenheit= Number(grados) * 9/5 + 32
    console.log(`${grados} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`)
    let mensaje=`Los grados Fahrenheit equivalentes a ${grados} Ceslsius son: ${fahrenheit}`
    window.alert(mensaje)
}
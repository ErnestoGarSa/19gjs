let grados= prompt("Por favor dame los grados celsius")

if (grados === null ){
    window.alert("Por favor ingresa un valor")
} else {
    fahrenheit= Number(grados) * 9/5 + 32
}

let clima = prompt("Como esta el clima en tu ciudad: a - Soleado, b - Lluvioso, c - Nevado, d - Nublado")

switch (clima){
    case "a":
        window.alert(`El clima actual en tu ciudad es Soleado con una temperatura ${fahrenheit} grados Fahrenheit`)
        break
    case "b":
        window.alert(`El clima actual en tu ciudad es Lluvioso con una temperatura ${fahrenheit} grados Fahrenheit`)
        break
    case "c":
        window.alert(`El clima actual en tu ciudad es Nevado con una temperatura ${fahrenheit} grados Fahrenheit`)
        break
    case "d":
        window.alert(`El clima actual en tu ciudad es Nublado con una temperatura ${fahrenheit} grados Fahrenheit`)
        break
    default:
        window.alert(`Por favor ingresa una opción valida`)
}

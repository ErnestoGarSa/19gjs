// // . filter()

// //sintaxis
// //array.filter(callback)
// //Siempre pide una condicion para poder hacer la condicion


// let newArray = [1,2,3,4,9,5,1,8,7]

// let pares = newArray.filter( (value, index, copiaArrayOriginal) => {
//     //Sentencia o condicion
//     // console.log(value, index, copiaArrayOriginal)
//     if (value % 2 === 0) {
//         // console.log(value)
//         return value
//     }
// })

// Ejercicios
/**
 * Escribir una funcion que
 * Filtrar solo las ciudades
 * filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
 * -> ['México', 'Perú', 'España']
 *  .filter()
 *  .forEach()
 */

let arrMultiple = [1,2,4, 'México', 'Perú', 'España', 3, true]

let cities = arrMultiple.filter( (ciudad, lugar, arr) => {
    if (typeof ciudad === "string"){
        return ciudad
    }
})

arrMultiple.forEach( (ciudad, lugar, arr) => {
    let ciudades=[]
    if (typeof ciudad === "string"){
        ciudades.push(ciudad)
    }
    return ciudades
})

console.log(cities)



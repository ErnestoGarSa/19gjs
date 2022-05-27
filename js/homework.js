/**
 * Dado el sigueinte arreglo de ciudades
 *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
 * Generar una funcion que capitalize cada elemento del array
 * => Se puede resolver con .forEach() o .map()
 */

const capArr = (arr) => {
    let newArray=[]
    arr.forEach((value) => {
        newArray.push(value.toUpperCase())
    })
    return newArray
}

console.log(capArr(['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']))

/** 
 * Dado un arreglo con nombres de personas, 
 * Funcion que devuele un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
 * 
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
 * 
 * => Se puede resolver con .forEach() o .filter()
*/

const vowelName = (arr) =>{
    let newArray = []

    arr.forEach((value) =>{
        if(value[0].match(/[aeiouAEIOU]/gi)){
            newArray.push(value.slice(0,1).toUpperCase() + value.slice(1))
        }
    })
    return newArray
}

console.log(vowelName(['jorge','ana','ivan','sergio','oscar' ]))


/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos
 * 
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * -> 18
 * 
 */

const totalArr = (arr) => {
    let total = 0
    arr.forEach((value) => {
        value.forEach((val) => {
            total += val
        })
    })
    return total
}

console.log(totalArr([	[1,2,3], [1,3,2] , [3,2,1]  ]))
console.log(totalArr([	[1,6,3], [9,3,2] , [3,23,1]  ]))
/**
 * 
 * Estudiar el  metodo reduce
 * https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
 * https://dataquarium.io/little-bits-reduce/
 * https://www.programiz.com/javascript/library/array/reduce
 */


/**
 * 
 * Estudiar el tema de Objetos
 * https://www.programiz.com/javascript/object
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/
 * https://www.w3schools.com/js/js_objects.asp
 * 
 */



// Ejercicios opcionales


/**
 * 
    En un array con pedidos de un restaurant
    la estructura por cada pedido es:
    ['entrada','principal','postre','precio'],
    let pedidos = [
        ['ensalada de pepinos','paella','platano', 100'],
        ['ensalada de tomates','pescado','helado', 120],
        ['ensalada simple','paella','yogurt', 80],
        ['ensalada simple','enchiladas','yogurt', 80],
        ['ensalada cesar','salmón','platano', 100],
    ]
    Crear: 
    Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
    => Se puede resolver con .forEach() o .filter()
    Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
    => Se puede resolver con .forEach() o .filter()
    Funcion que devuelve los pedidos que tienen un precio superior a 90 
    => Se puede resolver con .forEach() o .filter()
    
*/

const principalTotal = (arr) => {
    let total = 0 
    arr.forEach((value) => {
        value.forEach((valor) => {
            if (valor === 'paella'){
                total ++
            }
        })
    })
    return `El total de platillos que tienen como plato principal "paella" son ${total}`
}

const postreTotal = (arr) => {
    let total = 0 
    arr.forEach((value) => {
        value.forEach((valor) => {
            if (valor === 'platano' || valor === 'helado'){
                total ++
            }
        })
    })
    return `El total de platillos que tienen como postre "platano" o "helado" son ${total}`
}

const precio90 = (arr) => { 
    let pedido
    arr.forEach((value) => {
        value.forEach((valor) => {
            if ( typeof valor === "number" && valor > 90){
                pedido = value
                console.log(`El pedido que cuesta mas de 90 es ${pedido}`)
            }
        })
    })
}

let pedidos = [
    ['ensalada de pepinos','paella','platano', 100],
    ['ensalada de tomates','pescado','helado', 120],
    ['ensalada simple','paella','yogurt', 80],
    ['ensalada simple','enchiladas','yogurt', 80],
    ['ensalada cesar','salmón','platano', 100],
]


/**
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 * 
 * Usar solo metodos de str y array
 */

const reverseStr = (str) => {
    let strArr = str.split("")
    // console.log(strArr)
    let reverseStrArr = strArr.reverse()
    // console.log(reverseStrArr)
    let reverseStr = reverseStrArr.join("")
    // console.log(reverseStr)
    return reverseStr
}
console.log(reverseStr('hola mundo'))
console.log(reverseStr('Parangaricutirimicuaro'))
console.log(reverseStr("Ernesto"))

/**
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 * 
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (arr) => {
    total=0
    arr.forEach(element => {
        total+=element
    })
    return  total / arr.length
}

console.log(getAverage([10, 8, 9, 7]))


/**
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 * 
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */

const arePalindrome = (arrStr) =>{
    let palArray = []
    arrStr.forEach((value) =>{
        let valueArr= value.split("")
        // console.log(valueArr)
        let arrRever= valueArr.reverse()
        // console.log(arrRever)
        let revrStr= arrRever.join("")
        // console.log(arrRever)
        palArray.push(value === revrStr)
        // console.log(palArray)
    })  
    return palArray

}

console.log(arePalindrome( ['oso','juan', 'seres'] ))
console.log(arePalindrome( ['osoa','jojoj', 'ana'] ))

/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */


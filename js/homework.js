
/**
 * 1. funcion con .reduce()
 * capitalizeNames( ['jorge','lUis', 'marcOs', 'mario'] )
 * -> ['Jorge','Luis', 'Marcos', 'Mario']
 */

const capitalizeNames = (arr) => {

    return arr.reduce( (acc, value) => {
        acc.push(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
        return acc
    },[])
}

console.log(capitalizeNames( ['jorge','lUis', 'marcOs', 'mario'] ))

/**
 * 2. funcion con .reduce()
 * Dado un array de numeros, filtras solo los pares
 * filterEvens( [2,3,4,5] )
 * -> [2,4]
 */

const filterEvens = (arr) => {
    let newArray = [];

    return arr.reduce( ( acc, value ) =>{
        if ( value % 2 === 0 ){
            newArray.push( value )
        }
        return newArray
    },0)
}

console.log(filterEvens( [2,3,4,5] ))

/**
 * 3. funcion con .reduce()
 * Dado un array de numeros, obtener la suma de solo los elementos positivos
 * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
 * -> 42
 */

const addAllPositives = (arr) => {
    let total= 0

    return arr.reduce( (acc, valor) => {
        if ( valor > 0 ){
            total += valor
        }
        return total
    }, 0)
}

console.log(addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] ))


/**
 * 4. Estudiar Objetos y métodos de objetos
 *
 */


/**
 * Opcional
 * funcion con .reduce()
 * Dado un array de palabras, filtras las que son palindromos
 * onlyPalindrome( ['oso','pedro', 'jorge', 'seres'] )
 * -> ['oso','seres']
 */

const onlyPalindrome = (arr) => {
    
    return arr.reduce( ( acc, value) => {
        if ( value === value.split("").reverse().join("")) {
            acc.push(value)
        }
        return acc
    },[])
}

console.log(onlyPalindrome( ['oso','pedro', 'jorge', 'seres'] ))
/**
 * Ejercicio 1 *Obligatorio
 * Realizar una funcion que reciba como parametro 1 array
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 * 
 */

const anyArray = (ray) => {
    let evenOnly=[]

    if (!ray){
        return "Se necesita un array"
    }
    else {
        for (let i = 0 ; i <= ray.length - 1 ; i++){
            if(ray[i] % 2 == 0){
                evenOnly.push(ray[i])
            }
        }return evenOnly 
    }
}

console.log(anyArray([1,2,3,4,18]))
console.log(anyArray([10, 5, 2]))
console.log(anyArray())

/**
 * Ejercicio 2 *Opcional
 * Funcion que reciba como parametro una array de strings
 * y devuelva el primer y ultimo caracter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */

const stringArray = (strArray) => {
    firstAndLast=[]
    // firstAndLast2=[]
    let long = strArray.length - 1

    for (let i = 0 ; i <= long ; i++){
        // firstAndLast2.push(strArray[i])
        
        let largoPalabra=strArray[i].length-1
        word=""
        
        for (j = 0 ; j <= largoPalabra ; j++){
            if (j === 0){
                word+=strArray[i][j]
            } else if (j === largoPalabra){
                word+=strArray[i][j]
            }else{
                continue
            }
        }firstAndLast.push(word)
    }
    return firstAndLast
    // console.log(firstAndLast2)
}

console.log(stringArray(['hola', 'mundo', 'Ernesto', 'Parangaricutirimicuaro']))
/**
 * Ejercicio 3
 * Estudiar todos los métodos de Array
 * https://www.w3schools.com/jsref/jsref_obj_array.asp
 * https://www.programiz.com/javascript/library/array
 * 
 */
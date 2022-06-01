//Repaso Arrow Functions

//Declaracion de la funcion
//const suma = () => {
    //Sentencias
// }

// invocacion
// suma () --> sin argumentos
// suma(2, 3) --> con argumentos


const suma = (a=3, b=6) => {
    let total= a + b
    return total
}

console.log(suma(8,9))
console.log(suma())


const doubleNumber = (cv) => {
    let total = cv * 2
    return total
}

let multiArray= [100, 50, 75, 1000]

//Funciones como argumentos
console.log(multiArray.map(doubleNumber))

//Funcion anonima
multiArray.map((cv, inddex, arr) =>{
    let total= cv * 2
    return total
})



//Repaso metodos de array

// .map(callback(cv, index, arr))
// .filter(callback(cv, index, arr))

console.log(["s", "t", "r"].filter( (cv) => cv === "r" ? cv : null))

let result = ["s","t","r"].filter( (cv, index, arr) => {
    if (cv === "r"){
        return cv
    }
})

console.log(result)

// .forEach(callback(cv, index, arr))
// .reduce(callback(ac ,cv, index, arr))


const onlyPalindrome = (arr) => {
    
    return arr.reduce( ( acc, value) => {
        if ( value === value.split("").reverse().join("")) {
            acc.push(value)
        }
        return acc
    },[])
}

console.log(onlyPalindrome( ['oso','pedro', 'jorge', 'seres', "ana"] ))

/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
*/

const strForEach = (arr) => {

    let newArr= []
    arr.forEach( (cv, index, arr) =>{
        console.log(cv)
        if (typeof cv === "string"){
            // console.log(newArr.length)
            newArr.push(cv)
            console.log(newArr)
            console.log(newArr.length)
            console.log(cv)
        }
    })
    return newArr
}

console.log(strForEach([1, 2, "a", "b"]))
console.log("hola")


const strFilter = (arr) => {

    let newArr2= []
    arr.filter( (cv, index, arr) =>{
        if (typeof cv === "string"){
            newArr2.push(cv)
        }
    })
    return newArr2
}

console.log(strFilter([1, 2, "a", "b"]))

const strReduce = (arr) => {
    
    return arr.reduce((acc,cv) =>{
        if (typeof cv === "string"){
            acc.push(cv)
        }
        return acc
}, [])
}

console.log(strReduce([1, 2, "a", "b"]))

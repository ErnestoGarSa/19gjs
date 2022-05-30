//reduce method

let numeros = [1,2,3,4,5,6,7,8,9]

let acumulador= 0
numeros.forEach((numero) => {
    acumulador += numero
    console.log(acumulador)
})
console.log(acumulador)


// reduce

// Sintaxis
// .reduce(callback, initialValue)

let numeros1= [1, 2, 3]

total= numeros1.reduce((acc, value, index, arr) => {
    console.log(index, acc, value)
    return acc + value
},0)

console.log(total)


let frutas = ["naranja", "naranja", "naranja", "zanahoria"]
let total1=frutas.reduce((recipiente, fruta, index, arr) =>{
    return recipiente += fruta
}, "")

console.log(total1)


let  nombres  = ['Ernesto','Abraham','Rodrigo','Breez','Lenny']

const iniciales = (arr) => {
    let inicial = arr.reduce( (recipiente,nombre,index,arr)=>{
        return recipiente + nombre.charAt(0) 
    },'')
    return inicial
}

console.log(iniciales(nombres))


// const getDoubleNumbers= (arr) => {
//     let doubleNumbersArr = []

//     doubleNumbersArr=arr.reduce( (acc, cv) => {
//         acc.push(cv * 2)
//         return acc
//     },[])
//     return doubleNumbersArr
// }

// console.log(getDoubleNumbers([2,4,8]))


const getDoubleNumbers = (arr) => {

    // let doubleNUmbersArr = []
    // doubleNUmbersArr = arr.reduce( (acc, elemento, index) => {
    //     acc.push(elemento * 2)
    //     return acc
    // }, [] )
    // return doubleNUmbersArr

    return arr.reduce( (acc, elemento) => {
        acc.push(elemento * 2)
        return acc
    }, [] )
}

console.log(getDoubleNumbers( [4, 7, 9]))
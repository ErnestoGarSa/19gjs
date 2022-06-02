//Metodos de objetos

//Object.keys()

let obj = {
    propiedad: "valor", 
    key: "value"
}

//Para obtener todas la propiedades o llaves de un objeto existen 2 formas
let arrKeys=[]
for (propiedad in obj){
    arrKeys.push(propiedad)
}

console.log(arrKeys)

let llaves=Object.keys(obj)
console.log(llaves)

//Para obtener todos las valores 

let arrValues=[]
for (propiedad in obj){
    arrValues.push(obj[propiedad])
}
console.log(arrValues)


let valores= Object.values(obj)
console.log(valores)

//Metodo assign

//Sintaxis
//Objeto.assign(objetoAlQueCopiaremos, objetoQueCopiaremosAlOtroObjeto)

let obj1={
    name: "Ernesto",
    lastName: "García"
}

let obj2={
    lastName: "García"
}

Object.assign(obj1, obj2)

console.log(obj1)
console.log(obj1)

//Metodo entries
//Hace un array de arrays donde cada array esta conformado en pares de [key , value]

let arrayObj= Object.entries(obj)
console.log(arrayObj)

//Metodo freeze

//Hace que el objeto ya no pueda cambiar para nada

//Object.freeze(obj)

let obj3={
    propiedad : "Zopenco"
}

Object.freeze(obj3)

obj3.propiedad="Astuto"

console.log(obj3)

//Metodo create

//Object.create(obj)
//Toma la base de un objeto y la copia en otra, despues podemos modificar eso, queda como una base.

let obj4= {
    name:"Alejandro",
    lastName: "Santana"
}

let obj5= Object.create(obj4)


//Metodo Seal 
//Permite modificar los valores de las propiedades pero ya no podemos agregar nuevas propiedades, tampoco podemos elimiar propiedades

let obj6= {
    name: "Kike",
    lastName: "Acosta"
}

Object.seal(obj6)
obj6.name="Jose"
console.log(obj6)

obj6.age=30
console.log(obj6)

delete obj6.lastName
console.log(obj6)







    


/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
*/
const arrObj = (obj) => {
    return Object.entries(obj)
}

console.log(arrObj({a:1,b:2,c:3, d:4}))

const arrObjMap = (obj) => {
    
    let arrPro=Object.keys(obj)
    console.log(arrPro)
    let arrMap=[]
    arrPro.map((value, index)=>{
        let miniArr=[]
        miniArr.push(value, index++)
        arrMap.push(miniArr)
    })
    return arrMap
}

console.log(arrObjMap({a:1, b:2, c:3, d:4}))

const sortedSal= (obj) => {
    let arrSal= Object.values(obj)
    console.log(arrSal)
    return arrSal.sort()
    let arrSal1= arrSal.sort().reverse()
    console.log(arrSal1)
 }


 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}

console.log(sortedSal(salarios))









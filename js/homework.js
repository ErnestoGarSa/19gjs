// /**
//  * Ejercicio 1
//  * <ul id="menu" class="menu">
//         <li class="item__menu">Home</li>
//         <li class="item__menu">Products</li>
//         <li class="item__menu">About Us</li>
//     </ul>
//     Replicar con JS este markup
//  */

let lista= document.createElement("ul")
let body = document.querySelector("body")

lista.setAttribute("id", "menu")
lista.setAttribute("class", "menu")

let values= ["Home", "Products", "About Us"]

for (let i=0; i<values.length; i ++ ){
    let item = document.createElement("li")
    item.setAttribute("class", "item__menu")
    item.textContent = values[i]
    lista.appendChild(item)
}

body.appendChild(lista)

// /**
//  * Dado un arreglo de koders
//  * 1. Generar una lista con la clase koders
//  * 2. Agregar a cada koder en esa lista
//  * 3. A todos los koders agregarles la clase 'item koder'
//  */

 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'], 
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

let lista2= document.createElement("ul")
let listaSub= document.createElement("ul")

koders.forEach((cv) => {
    let item = document.createElement("li")
    item.setAttribute("class", "item_koder")
    item.textContent = `${cv.name} ${cv.lastName}`
    lista2.appendChild(item)
})

body.appendChild(lista2)

/**
 * Opcional
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */

koders.forEach((cv) => {
    let obj=cv
    console.log(obj)
    let arrArr=Object.entries(obj)
    console.log(arrArr.length)
    console.log(arrArr)
        for (i = 0; i < arrArr.length; i ++){
        console.log(arrArr[i])
            for(j = 0 ; j< arrArr[i].length-1; j++){
                console.log(arrArr[i][j])
            }
        }
    })



// let body= document.querySelector("body")
// let table = document.createElement("table")
// let tableRowsHead = document.createElement("th")
// let tableRow = document.createElement("tr")


koders.forEach((cv) => {
    let obj=cv
    console.log(obj)
    let arrArr=Object.entries(obj)
    console.log(arrArr.length)
    console.log(arrArr)

    arrArr.forEach((cv) => {
        console.log(cv)
    })


        // for (i = 0; i < arrArr.length; i ++){
        // console.log(arrArr[i])
        //     for(j = 0 ; j< arrArr[i].length-1; j++){
        //         console.log(arrArr[i][j])
        //     }
        // }
    })

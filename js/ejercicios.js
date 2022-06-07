// /**
//  * Ejercicio 1
//  * <ul id="menu" class="menu">
//         <li class="item__menu">Home</li>
//         <li class="item__menu">Products</li>
//         <li class="item__menu">About Us</li>
//     </ul>
//     Replicar con JS este markup
//  */
let body = document.querySelector("body")


const tarea1 = () => {

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

}

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

const tarea2 = () => {
let lista2= document.createElement("ul")
// let listaSub= document.createElement("ul")

koders.forEach((cv) => {
    let item = document.createElement("li")
    item.setAttribute("class", "item_koder")
    item.textContent = `${cv.name} ${cv.lastName}`
    lista2.appendChild(item)
})
body.appendChild(lista2)
}


const tarea3 = () => {
    console.log('Ejecutando tarea 3')
    let tbody = document.querySelector('tbody')
    koders.forEach( (koder, index, arr) => {
    
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        tdName.textContent = koder.name
        tr.appendChild(tdName)
        let tdAge = document.createElement('td')
        tdAge.textContent = koder.age
        tr.appendChild(tdAge)
        let tdGen = document.createElement('td')
        tdGen.textContent = koder.generation
        tr.appendChild(tdGen)
        console.log(tr)
        tbody.appendChild(tr)
        
    })
}
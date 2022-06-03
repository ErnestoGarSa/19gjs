// Seleccion por id 

document.getElementById("title")

//Seleccion por tagName

document.getElementsByTagName("h1")

//Seleccionar por className

document.getElementsByClassName("item")

//Seleccionar elementos por tag, clase o id
//Solo arrojara la primer coincidencia 

document.querySelector(".item")
document.querySelector("#title")
document.querySelector("li")

//Seleccionar elementos por tag, clase o id
//Seleccionara todas las coincidencias en un array

document.querySelectorAll("item")
document.querySelectorAll("#title")
document.querySelectorAll("li")

//A las estructuras que devuelven arrays podemos aplicarle los metodos de arrays, ocupamos guardarlo primero en una variable

let todosElementos= document.querySelectorAll("item")

todosElementos.forEach((cv => {
    console.log(cv)
})
)


//2.- Setear/agregar, obtener, comprobar atributos

//Setar
//1.- Seleccionar elemento
let titulo = document.querySelector('.title')


//2.-Setear el atributo
//Sintaxis elemento.setAttribute("nameAtributo", "valor")

titulo.setAttribute("data-id", 1)


//Obtener
//1.- Seleccionar elemento
let tituloAtr = titulo.getAttribute("data-id")
// console.log(tituloAtr)


//Verificar si un elemento tiene un atributo

//1.- Seleccionar elemento
titulo.hasAttribute("data-id")


//Eliminar

//Elemento.removeAttribute(attrName)
//Si es un array tenemos que iterarlo para cada elemento poder ejecutarle el procedimiento

titulo.removeAttribute("id")
// console.log(titulo)

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */

let lista= document.querySelector("ul")


lista.setAttribute("class", "lista")
lista.setAttribute("id", "lista")
// console.log(lista)

let item = document.querySelectorAll("li")
console.log(item)


item.forEach((cv)=>{
    cv.removeAttribute("class")
})
console.log(item)

item.forEach((cv) => {
    cv.setAttribute("class", "list_item")
})
console.log(item)

//Crear elementos HTML

//Crear
//document.createElement("")

//PAra poder agregar un elemento dentro de otro
//elementoPadre.appendChild ( elementoAIngresar )

// Paso a paso
let lista2 = document.createElement('ul')
let item1 = document.createElement('li')
let body = document.querySelector('body')

let item2 = document.createElement('li')

item1.textContent = 'item 1'
item2.textContent = 'item 2'

lista2.appendChild(item1 )
lista2.appendChild( item2)

body.appendChild( listaDos )

// dinamica
const listaDos = document.createElement('ul')

for( i = 1; i <= 40; i++) {

    let item = document.createElement('li')
    item.textContent = `item ${i}`
    listaDos.appendChild(item)
}

let parent = document.querySelector('.content')
// parent.appendChild( listaDos )


// AGREGAR texto a un elemento
// item1.textContent = 'item 1'

// AGREGAR dentro de otro elemento (al final)
// parentElement.appendChild( child )
// listaDos.appendChild(item1)
// document.querySelector('body').appendChild(listaDos)


// AGREGAR dentro de otro elemento (referenciado)
// parentNode.insertBefore(newNode, referenceNode);

let reference = document.querySelector('.subtitle2')
document.querySelector('.content').insertBefore( listaDos, reference )


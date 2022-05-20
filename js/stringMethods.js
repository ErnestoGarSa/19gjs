//Metodos string

let string="Hola Koders"

//Cuantas vocales existen

let vowels=string.match(/[aeiouAEIOU]/gi).length

console.log(vowels)

//Cuantos caracteres son

let char=string.length
console.log(char)

//Cortar el string en 2 strings

let string1=string.slice(0,5)
console.log(string1)

let string2=string.slice(5)
console.log(string2)

let stringArray=string.split(" ")
console.log(stringArray)

//Remplazar las vocales por *


let str=string.replaceAll(vowels, "*")
console.log(str)
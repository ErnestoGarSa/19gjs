// 

//for (inicio; fin; aumento/decremeto){
    //sentence
// }


//while(expresion){
    //sentente
// }
//Siempre ocupamos una variable llamada contador o counter 

// counter=1

// while ( counter <=10 ){
//     console.log(counter)
//     console.log(` 5 x ${counter} = ${counter * 5}`)
//     counter++
// }

//Ejercicio

// imprimir cada palabra de un string -> pasar a while

// let str = 'Hola Koder'
// let fin = str.length - 1
// let counter=0

// while ( counter <= fin ){
//     console.log(str[counter])
//     counter++
// }

// 'Hola Koder'
// 'redok aloh'
//  Imprimir el string invertido 

// let string='Hola Koder'
// let count= string.length - 1
// let newString=""

// while (count >= 0){
//     newString+=string[count]
//     count--
// }
// console.log(newString)

//Imprimir en consola cada una de las vocale


// let string= "Hola Koders"
// let fin= string.length - 1
// let vowels="aeiou"
// let counter=0
// let vowelsInString=""

// while(counter <= fin){
//     if (vowels.includes(string[counter])){
//         vowelsInString += string[counter]
//         counter++
//     }
// }
// console.log(vowelsInString)


// 'HlKdr'
// Imprimir en consola cada una de las consonantes

let string= "Hola Koders"
let fin= string.length - 1
let vowels="aeiou"
let counter=0
let vowelsInString=""

while(counter <= fin){
    if (vowels.includes(string[counter])){
        continue
    } else {
        vowelsInString += string[counter]
        counter++
    }
}
console.log(vowelsInString)



//Do while
//Necesitamos un counter

// let counter=1
// do{
//     console.log(counter)
//     counter++
// } while (counter <= 10)

// let string="Hola Mundo"
// let end= string.length - 1
// let revereseString=""
// counter=0

// do{ 
//     revereseString+= string[end]
//     end--
// } while (end >= 0)
// console.log(revereseString)


// do{
//     if(string[end] =="a" || string[end] =="b" ||)
// }

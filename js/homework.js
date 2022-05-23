/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */

//FOR
let total=0
for (let i=1 ; i<= 100; i++){
    if(i%3 == 0){
        total+=i
    }
}console.log(total)

//WHILE
let counter2=1
let total2= 0
while( counter2 <= 100 ){
    if (counter2 % 3 == 0)
    total2 += counter2
    counter2 ++
}
console.log(total2)

//WHILE-DO
let total3=0
let counter3=1
do{
    if( counter3 % 3 == 0)
    total3 += counter3
    counter3++
} while ( counter3 <= 100)
console.log(total3)


/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */

//FOR
let num= Number(prompt("Por favor ingresa un número entre 1 - 100"))
// let num=5
let total4=0
if (num >= 1 && num <= 100){
    for (num ; num >= 1 ; num--)
    total4+=num
    console.log(total4)
} else{
    console.log("Ingresaste un número incorrecto")
} 

//WHILE
let num2= Number(prompt("Por favor ingresa un número entre 1 - 100"))
// let num2=5
let total5=0

if( num2 <= 1 || num2 >= 100){
    console.log("Número incorrecto")
} else {
    while( num2 >= 1 ){
    total5+=num2
    num2--
    } console.log(total5)
}

//Do-while
let num3= Number(prompt("Por favor ingresa un número entre 1 - 100"))
// let num3 = 101
let total6= 0

do {
    if ( num3 <= 0 || num3 >= 100) {
        console.log("Número incorrecto")
    } else {
        total6 += num3
        num3 --
    }
} while (num3 >= 1 ){
}console.log(total6)

/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 * 
 * p.ej. 'hola kodErs'
 * ->  A -> 1 
 * ->  E -> 1
 * ->  Espacios -> 1 
 */

//Cuantas vocales existen
//FOR
let string=prompt("Por favor ingresa una oración: ")
// let string="hola KodErs bienvenido Ernesto Alejandro "
let vowelsA=0
let vowelsE=0
let vowelsS=0
let fin= string.length - 1

for (let i= 0 ; i <= fin ; i++){
    if (string[i].match(/[eE]/gi)){
        vowelsE +=1
    } else if (string[i].match(/[ ]/gi)){
        vowelsS+=1
    }else if (string[i].match(/[aA]/gi)){
        vowelsA+=1
    }
}
console.log(`La suma total de las vocales A es ${vowelsA}`)
console.log(`La suma total de las vocales E es ${vowelsE}`)
console.log(`La suma total de los espacios es ${vowelsS}`)

//WHILE
let string2= prompt("Por favor ingresa una oración:")
// let string2="hola KodErs bienvenido Ernesto Alejandro "
let vowelsA2=0
let vowelsE2=0
let vowelsS2=0
let fin2= string2.length - 1

counter9=0
while( counter9 <= fin2){
    if (string2[counter9].match(/[eE]/gi)){
        vowelsE2 +=1
        counter9++
    } else if (string2[counter9].match(/[ ]/gi)){
        vowelsS2+=1
        counter9++
    }else if (string2[counter9].match(/[aA]/gi)){
        vowelsA2+=1
        counter9++
    } else {
        counter9++
    }
}
console.log(`La suma total de las vocales A es ${vowelsA2}`)
console.log(`La suma total de las vocales E es ${vowelsE2}`)
console.log(`La suma total de los espacios es ${vowelsS2}`)

//DO-WHILE
let string3= prompt("Por favor ingresa una oración:")
// let string3="hola KodErs bienvenido Ernesto Alejandro "
let vowelsA3=0
let vowelsE3=0
let vowelsS3=0
let fin3= string3.length - 1
counter8=08
do{
    if (string3[counter8].match(/[eE]/gi)){
        vowelsE3 +=1
        counter8++
    } else if (string3[counter8].match(/[ ]/gi)){
        vowelsS3+=1
        counter8++
    }else if (string3[counter8].match(/[aA]/gi)){
        vowelsA3+=1
        counter8++
    } else {
        counter8++
    }
}while(counter8 <= fin3)

console.log(`La suma total de las vocales A es ${vowelsA2}`)
console.log(`La suma total de las vocales E es ${vowelsE2}`)
console.log(`La suma total de los espacios es ${vowelsS2}`)

/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 * 
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 * 
 */

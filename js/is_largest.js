let num1= Number(prompt("Dame un número"))
let num2= Number(prompt("Dame un número"))
let num3= Number(prompt("Dame un número"))

// if ( Number(num1) > Number(num2)){
//     if ( num1 > Number(num3)){
//         console.log(`El número mayor es ${num1}`)
//         window.alert(`El número mayor es ${num1}`)
//     } else {
//         console.log(`El número mayor es ${num3}`)
//         window.alert(`El número mayor es ${num3}`)
//     }
// } else {
//     if (Number(num2) > Number(num3)){
//         console.log(`El número mayor es ${num2}`)
//         window.alert(`El número mayor es ${num2}`)
//     } else{
//         console.log(`El número mayor es ${num3}`)
//         window.alert(`El número mayor es ${num3}`)
//     }
// }

if(num1 > num2 && num1 > num3){
    window.alert(`El primer número con valor ${num1} es el más grande de los tres`)
}else if ( num1 < num2 && num2 > num3){
    window.alert(`El segundo número con valor ${num2} es el más grande de los tres`)
} else if (num3 > num1 && num3 > num2){
    window.alert(`El tercer número con valor ${num3} es el más grande de los tres`)
} else {
    window.alert(`Todos los numeros son iguales`)
}



let a= Number(prompt("Ingresa el primer número"))
let b= Number(prompt("Ingresa el segundo número"))

a > b ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`)
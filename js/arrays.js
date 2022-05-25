

let newArray = [1, 2 ,3 ,"hola", true, [1, 3]]
console.log(newArray)
console.log(newArray.length)

console.log(newArray[3])
console.log(newArray[5][1])

for (i=0; i<newArray.length; i++){
    console.log(newArray[i])
}

let arrayToReverse = [ 1, 2, 3]
let arrayReversed = []
for (i = arrayToReverse.length - 1 ; i >= 0 ; i--){
    arrayReversed.push(arrayToReverse[i])
}
console.log(arrayReversed)

//.push agrega al final 

//Para colocar en un indice especifico

arrayToReverse[0]= 25
console.log(arrayToReverse)

arrayToReverse[arrayToReverse.length] = 101
console.log(arrayToReverse)

arrayToReverse.pop()
console.log(arrayToReverse)
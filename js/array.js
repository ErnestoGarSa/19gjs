//forEach()

let array1= [1, 2, 3, 4]

// for(i = 0 ; i< array1.length; i++){
//     console.log(array1[i])
// }

// array.forEach((valorActual, index, array) => {})

array1.forEach((cv, index, array) => {
    // console.log(cv, index, array)
    console.log(cv)
    console.log(index)
    console.log(array)

})
// 1 0 [1, 2, 3, 4]
// 2 1 [1, 2, 3, 4]
// 3 2 [1, 2, 3, 4]
// 4 3 [1, 2, 3, 4]

/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 *
 */


let arrCities = ["méxicO", "RIo de janeiro", "Los AngelEs"];

const capitalize = (strArray) => {
  let newArray = [];

  strArray.forEach((currentValue) => {
    let innerArray = currentValue.split(" ");

    if (innerArray.length > 1) {
      let newConcatStr = "";

      innerArray.forEach((currentValue) => {
        newConcatStr +=
          currentValue[0].toUpperCase() +
          currentValue.slice(1).toLowerCase() +
          " ";
      });
      newArray.push(newConcatStr.trim());
    } else {
      newArray.push(
        currentValue[0].toUpperCase() + currentValue.slice(1).toLowerCase()
      );
    }
  });
  return newArray;
};
console.log(capitalize(arrCities));



//.map
// doubleArr= mapArr.map( (currentValue, index, array) => {})

let mapArr= [1,2,3,4]

let doubleArr= mapArr.map( (currentValue, index, array) => {
    let transformedValue = currentValue * 2
    return transformedValue
})

console.log(doubleArr)
console.log(mapArr)

//filter()
//reduce()
//.find
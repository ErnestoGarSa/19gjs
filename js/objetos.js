let koder = {
    name: "Ernesto", 
    lastName: "García",
    age: 32, 
    generation: 19,
    bootcamp : "JS",
    schedule: "19-22",
    gender: "M", 
    isActive: true, 
    modules: {
        js: true, 
        maquetado: true, 
        backend: false,
        react: false
    }
}
// let status = koder.isActive ? "Activo" : "Inactivo"
// let statusJs = koder.modules.js ? "Cursando el modulo de JS" : "No he iniciado"
// let statusMk = koder.modules.maquetado ? "Ya termine el modulo de maquetado" : "No he iniciado"
// let statusBe = koder.modules.js ? "Ya termine el modulo de backend" : "No he iniciado"
// let statusRa = koder.modules.js ? "Ya termine el modulo de react" : "No he iniciado"


// console.log(`Mi nombre es ${koder.name} ${koder.lastName}, soy del genero ${koder.gender} actualmente estoy en la generación número ${koder.generation} de ${koder.bootcamp} con un horario de ${koder.schedule} y actualmente soy un estudiante ${status}`)

// console.log(koder)
// console.log(koder.lastName)
// console.log(koder.modules.js)

// console.log(koder["modules"]["backend"])
// console.log(koder["name"])

// let pasoBackend= koder.modules.backend

// if (pasoBackend){
//     console.log("Si paso el modulo de BackEnd")
// } else {
//     console.log("No paso el modulo de BackEnd")
// }

//Agregar propiedades
//Si tratamos de modificar una propiedad que no existe en el objeto... la creara...

let car={}

console.log(car)
car.model= "Jetta"
console.log(car)
car.year=1994
console.log(car)
car.color="Red"
car.doors=4
car.transmission="Automatic"
console.log(car)
car["isActive"]= false
console.log(car)
car.km="158,426"
console.log(car)

let koder2 = {}

koder2.name= "Alejandro"
koder2.lastName= "Santana"
koder2.age= 24
koder2.generation= 19
koder2.bootcamp = "JS"
koder2.schedule= "19-22"
koder2.gender= "M" 
koder2.isActive= false
koder2.modules={}
koder2.modules.maquetado= false
koder2.modules.js= false
koder2.modules.react= true
koder2.modules.backend= true

console.log(koder2)

let koder3 = {}

koder3["name"]= "Juan"
koder3["lastName"]= "Hernandez"
koder3["age"]= 24
koder3["generation"]= 17
koder3["bootcamp"] = "JS"
koder3["schedule"]= ["19-22"]
koder3["gender"]= "M" 
koder3["isActive"]= false
koder3["modules"]={}
koder3["modules"]["maquetado"]= false
koder3["modules"]["js"]= false
koder3["modules"]["react"]= true
koder3["modules"]["backend"]= true

console.log(koder3)

console.log(koder3)


//Iterando en objetos
//for In

let salarios={
    "Jorge": "20000",
    "Lenny": "30000",
    "Kike": "25000",
    "Ernesto": "20000"
}

// for (elemento in salarios){
//     console.log(salarios)
// }

// for (elemento in salarios){
//     console.log(elemento, salarios[elemento])
// }


//Hacer la suma de los salarios
let total= 0
for (elemento in salarios){
    total+=Number(salarios[elemento])
}console.log(total)

//Pasar el ejercicio a funcion flecha

const totalSalario = (obj) =>{
    let total=0
    for (elemento in obj){
        total +=Number(obj[elemento])
    }
    return total
}

console.log(totalSalario(salarios))

//Escribir una funcion que reciba un parametro 
//Verificar si el parametro es un objeto o array
//Escribe que tipo de argumento le estamos ingresando 
// isAnObjectOrArray

const isAnObjectOrArray = (algo) => {
    if (typeof algo === "object"){
        console.log("Es un objeto")
    } else if (typeof algo === "array"){
        console.log("Es un array")
    } else {
        console.log("No es ni array ni objeto")
    }
}

//array.isArray(algo)

let objet={
    name:"Yo"
}

let arr2= [1,2,3]

isAnObjectOrArray([])

// CRUD
// C -> create
let objectCar = {
    model: 'jetta',
    doors: 4,
    year: 2022,
    cilindraje: 2,
    color: 'rojo'
}
console.log(objectCar)

// R -> Read
console.log(objectCar.model)
console.log(objectCar.color)

// U -> Update
objectCar.color = 'verde'
console.log(objectCar.color)

// D -> Delete
console.log(objectCar)
delete objectCar.cilindraje
console.log(objectCar)
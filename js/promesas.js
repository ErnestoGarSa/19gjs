
let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=68'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=67'
    },
    {
        name: 'Maria',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=47'
    },
    {
        name: 'Ivonne',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
        name: 'Alex',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=38'
    }
]


// let promesa = new Promise ((seCumple, noSeCumple) => {
//     setTimeout(()=>{
//         seCumple(koders)
//         noSeCumple( new Error ("Error al obtener los datos"))
//     },1500)
// })

// promesa.then((responseDePromesa) => {
//     console.log(responseDePromesa)
// })

// let irAlCine = new Promise ((cumplir, noCumplir) => {
//     setTimeout ( () => {
//         cumplir("Boletos")
//         noCumplir(new Error("No pude conseguir boletos"))
//     },1500)
// })

// irAlCine.then((response) => {
//     console.log(response)
// })

// let mayorDeEdad = new Promise ((resolve, reject) => {
//     let age= 17
//     setTimeout (()=> {
//         if (age < 18){
//             reject( new Error ("Eres menor de edad, no puedes entrar al bar"))
//         } else {
//             resolve ("Ya eres mayor de edad, puedes ingresar")
//         }
//     },2000)
// })

// mayorDeEdad.then((response) => {
//     console.log(response)
// })

// const irAlBar = () => {
//     return new Promise ((resolve, reject) => {
//         let age= 19
//         console.log("Verificando tu edad")
//         setTimeout (()=> {
//             if (age < 18){
//                 reject( new Error ("Eres menor de edad, no puedes entrar al bar"))
//             } else {
//                 resolve ("Ya eres mayor de edad, puedes ingresar")
//             }
//         },4000)
//     })
// }

// irAlBar().then((response)=>{
//     console.log(response)
// })

// Pedir una pizza

// Llamar a la Pizzeria
const llamarPizzeria = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Buenas noches...")
        },1000)
    })
}

const elegirPizza = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Pizza Pepperoni elegida")
        },2000)
    })
}

const esperarPizza = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Esperando Pizza")
        },3000)
    })
}

const pagarPizza = () => {
    return new Promise ((resolve, reject) =>{
    setTimeout(()=> {
        resolve("Pizza pagada")
    },4000)
})
}

const disfrutarPizza = () => {
    return new Promise ((resolve, reject) =>{
    setTimeout(()=> {
        resolve("Yomi Yomi")
    },5000)
})
}


// llamarPizzeria().then((response)=> {
//     console.log(response)
//     return elegirPizza()
// })
// .then ((response)=> {
//     console.log(response)
//     return esperarPizza()
// })
// .then ((response) => {
//     console.log(response)
//     return pagarPizza()
// })
// .then ((response) => {
//     console.log(response)
//     return disfrutarPizza()
// })
// .then((response)=>{
//     console.log(response)
// })
// .catch((error) => {
//     console.log(error)
// })


const conocerKodemia = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve ("Aun tienes tiempo de inscribirte al siguiente bootcamp")
            // reject (new Error ("Por el momento no tenemos bootcamps disponibles"))
        },1000)
    })
}

const iscribeteKodemia = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("Bienvenido a Kodemia")
            // reject (new Error ("Lamentamos la noticia de que no te haya gustado"))
        },1000)
    })
}

const tomarPrimerClase = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("Iniciamos el lunes")
            // reject (new Error ("Movimos el bootcamp en una semana"))
        },1000)
    })
}

conocerKodemia().then((respopnse)=>{
    console.log(respopnse)
    return iscribeteKodemia()
})
.then((response)=>{
    console.log(response)
    return tomarPrimerClase()
})
.then((response)=>{
    console.log(response)
})
.catch((error)=> {
    console.log(error)
})







// fetch

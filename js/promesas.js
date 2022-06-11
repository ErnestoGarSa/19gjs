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

const getKoders = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // resolve(koders)
            reject( new Error('Error al obtener los datos'))
        }, 1500)
    })
}

const fetchData = async () => {
    getKoders()
    .then( (res) => {
        console.log(res)
    })
    
}

const fetchDataAsync = async () => {
    try {
        const kodersFetched = await getKoders()
        console.log(kodersFetched)
    } catch (error) {
        console.log(error)
    }
    
}

// fetchDataAsync()



// Generar el proceso de inscripcion
const conocerKodemia = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Conociendo kodemia')
        }, 3000)
    })
}

const inscribir = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Inscrito')
        }, 2000)
    })
}

const primeraClase = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Bienvenido')
        }, 3000)
    })
}

conocerKodemia()
.then( response => {
    console.log(response)
    inscribir().then( (res) => {
        console.log(res)
        primeraClase().then( resfinal => {
            console.log(resfinal)
        })
    }) 
})


// conocerKodemia()
// .then( response => {
//     console.log(response)
//     return inscribir()
// })
// .then( response => {
//     console.log(response)
//     return primeraClase()
// })
// .then( response => {
//     console.log(response)
// })





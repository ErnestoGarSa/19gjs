/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

 let koders =  [
    {
        name: 'Jorge Luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

const arrObj = (arrO) => {
    arrO.forEach((cv) => {
        console.log(`${cv.name} ${cv.lastName} tiene ${cv.age} y es de la generación ${cv.generation}`)
    })
}

arrObj(koders)
/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */
 const ageSum = (arrO) => {
    let totalAge=0
    arrO.reduce((acc, cv) => {
        totalAge +=cv.age
    },0)
    return totalAge
}

console.log(ageSum(koders))

/**
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
 let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    const readingBooks = (arrO) => {
        let readingBook=0
        arrO.reduce((acc, cv) => {
            if(cv.readingStatus){
                readingBook++
            }
        },0)
        return readingBook
    }
    
    console.log(readingBooks(library))

    const authors = (arrO) => {
        let author=[]
        arrO.reduce((acc, cv) => {
            author.push(cv.author)
        },[])
        return author
    }
    
    console.log(authors(library))


    const books = (arrO) => {
        let book=[]
        arrO.reduce((acc, cv) => {
            book.push(cv.title)
        },[])
        return book
    }
    
    console.log(books(library))
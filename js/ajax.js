

// Ajax
// Asyncronic JavaScaript And XML
// XMLHttpRequest


/**
    Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
 */


// formar request
// enviar request
// esperar respuesta
// recibir response
// procesar el response


const filterUsers = ( strToFilter ) => {
    strToFilter = strToFilter.toLowerCase()
    let filteredUsers = users.filter( (user) => {
      if(
        user.name.toLowerCase().includes(strToFilter) ||
        user.username.toLowerCase().includes(strToFilter) ||
        user.email.toLowerCase().includes(strToFilter)
      ){
        return user
      }
    })
    return filteredUsers
}
  
const printUserList = (usersFiltered) => {
    let allUserLayout = usersFiltered.reduce((acc, user, idx, arr) => {
      return acc += `
      <a href="#" class="list-group-item list-group-item-action " aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${user.name}</h5>
        </div>
        <p class="mb-1">${user.phone}</p>
        <small>${user.email}</small>
      </a>
      `
    }, '')
  
    document.getElementById('users__filtered').innerHTML = allUserLayout
}
  
let inputSearch = document.getElementById('filter__user')
inputSearch.addEventListener('keyup', () => {
    // obtener el valor a buscar
    let searchTerm = inputSearch.value
    // Filtrar los usuarios
    let usersFiltrados = filterUsers(searchTerm)
    // imprimirlos en consola
    console.log(usersFiltrados)
    // agregarlos al layout en #lista__users
    printUserList(usersFiltrados)
})


// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest()
let users = []

primerPeticion.onload = (response) => {
    // 300 - 399
    if(response.target.status >= 200 && response.target.status <= 399) {
        if(response.target.responseText  != ''){
            console.log( response.target.responseText )
            let responseJSON = JSON.parse(response.target.responseText)
            users = responseJSON
            printUserList(users)
        }
    }
}
// GET
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/users", false)
primerPeticion.send()













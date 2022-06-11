https://js19g-8ff6a-default-rtdb.firebaseio.com/posts


// GET
// VERBOS http -> (GET, POST, PUT, PATCH, DELETE)
// payload
// JSON.parse( texto ) -> obj 
// JSON.stringify( obj ) -> texto

// Create POST
// Read GET
// Update 
// PATCH - Actualiza un fragmento o todo  
// PUT - Actualiza todo

// Delete DELETE


const createUser =  ( objUser ) => {
  const xhttp = new XMLHttpRequest()
  xhttp.open( "POST",  
    "https://koders19gjs-default-rtdb.firebaseio.com/users/.json", true)
  xhttp.onload = function(data) {
      if(data.target.status >= 200 && data.target.status <= 399){
        console.log(data.target.response)
      }
  }
  xhttp.send( JSON.stringify(objUser) )
}
let user =  {
  name: 'Jorge luis',
  lastName: 'Camarillo',
  age: 31
}
// createUser( {
//   name: 'Jorge luis',
//   lastName: 'Camarillo',
//   age: 31
// } )

const updateUser  = ( idUser, userUpdated) => {
  const updatexhr = new XMLHttpRequest()
  updatexhr.open(
    'PATCH', 
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
    true
  )
  updatexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  updatexhr.send( JSON.stringify(userUpdated) )
}
let objUpdate = {
  name: 'Ernesto Alejandro',
  lastName: 'Garcia',
  age: 32
}

// updateUser( '-N4AG_csrBrUna8FJtRJ' ,  objUpdate) 

const updateUserPUT  = ( idUser, userUpdated ) => {
  const updatexhr = new XMLHttpRequest()
  updatexhr.open(
    'PUT', 
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`,  
    true
  )
  updatexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  updatexhr.send( JSON.stringify(userUpdated) )
}

// updateUserPUT( '-N4AG_csrBrUna8FJtRJ' ,  objUpdate) 


const deleteUser  = ( idUser ) => {
  const deletexhr = new XMLHttpRequest()
  deletexhr.open(
    'DELETE', 
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
    true
  )
  deletexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  deletexhr.send()
}

// deleteUser( '-N4AG_csrBrUna8FJtRJ') 

const getUsers  = (callback) => {
  const getxhr = new XMLHttpRequest()
  getxhr.open(
    'GET', 
    `https://koders19gjs-default-rtdb.firebaseio.com/users/.json`, 
    true
  )
  getxhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      let users = JSON.parse(response.target.response)
      callback(users)

    }
  }
  getxhr.send()
}

const printUsers = (users) => {
  for( user in users) {
    console.log(users[user].age)
  }
}

















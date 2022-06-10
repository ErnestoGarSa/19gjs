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

// Create an XMLHttpRequest object

// POST

const createUser = (objUser) => {
  // console.log("Creando funcion")
  // Crear Objeto
  const xmlhttp = new XMLHttpRequest();
  console.log(xmlhttp);
  // Abrir la conexion a la base de datos
  // En la url despues del .com colocamos /nombreDelJSONQueQueremos por ejemplo https://js19g-8ff6a-default-rtdb.firebaseio.com/users/.json
  xmlhttp.open(
    "POST",
    "https://js19g-8ff6a-default-rtdb.firebaseio.com/users/.json",
    true
  );
  // CUando cargue que haga algo
  xmlhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 399) {
      console.log(data);
    }
  };
  // JSON.parse (str) --> obj
  // JSON.stringify (obj) --> str
  // Metodo send en POST tenemos que enviar datos o data
  xmlhttp.send(JSON.stringify(objUser));
};
// Create User
let user = {
  name: "Ernesto",
  lastName: "García",
  age: 32,
};
// createUser(user)

// PATCH actualiza un fragmento o todo
// PUT actualiza todo

const deleteUser = (idUser) => {
  const deletexhr = new XMLHttpRequest();
  deletexhr.open(
    "DELETE",
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`,
    true
  );
  deletexhr.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 399) {
      console.log(response.target);
      console.log(response.target.response);
    }
  };
  deletexhr.send();
};

//deleteUser( '-N4AG_csrBrUna8FJtRJ')

const updateUser = (idUser, userUpdated) => {
  const updatexhr = new XMLHttpRequest();
  updatexhr.open(
    "PATCH",
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`,
    true
  );
  updatexhr.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 399) {
      console.log(response.target);
      console.log(response.target.response);
    }
  };
  updatexhr.send(JSON.stringify(userUpdated));
};
let objUpdate = {
  name: "Ernesto Alejandro",
  lastName: "Garcia",
  age: 32,
};

// updateUser( '-N4AG_csrBrUna8FJtRJ' ,  objUpdate)

const updateUserPUT = (idUser, userUpdated) => {
  const updatexhr = new XMLHttpRequest();
  updatexhr.open(
    "PUT",
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`,
    true
  );
  updatexhr.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 399) {
      console.log(response.target);
      console.log(response.target.response);
    }
  };
  updatexhr.send(JSON.stringify(userUpdated));
};

// updateUserPUT( '-N4AG_csrBrUna8FJtRJ' ,  objUpdate)


const getUsers = (callback) => {
  const getxhr = new XMLHttpRequest();
  getxhr.open(
    "GET",
    `https://koders19gjs-default-rtdb.firebaseio.com/users/`,
    true
  );
  getxhr.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 399) {
      console.log(response.target);
      let users = JSON.parse(response.target.response);
      callback(users);
    }
  };
  getxhr.send();
};

const printUsers = (users) => {
  for (user in users) {
    console.log(users[user].age);
  }
};

let koderId = window.location.search.substring(10);

const conexion = new XMLHttpRequest();

conexion.open(
  "GET",
  `https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${koderId}.json`,
  true
);

conexion.onload = function (data) {
  if (data.target.status >= 200 && data.target.status < 400) {
    let response = JSON.parse(data.target.response)
    console.log(response)
    

    const ponerDatos = (obj) => {
      document.getElementById("name").value = obj.name;
      document.getElementById("lastName").value = obj.lastName;
      document.getElementById("email").value = obj.email;
      document.getElementById("phone").value = obj.phone;
    };
    ponerDatos(response);
  }
};
conexion.send();

let btnActualizar = document.getElementById("update__koder");

btnActualizar.addEventListener("click", () => {
  name = document.getElementById("name").value;
  lastName = document.getElementById("lastName").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;

  if (name === "" || lastName === "" || email === "" || phone === "") {
    alert("Campos vacios");
  } else {
    let updateKoder = {
      name,
      lastName,
      email,
      phone,
    };

    conexion.onload = function (data) {
      if (data.target.status >= 200 && data.target.status < 400) {
        let response = JSON.parse(data.target.response);
        alert(
          `Koder modificado satisfactoriamente con el id: ${response.name}`
        );
      }
    };

    conexion.open(
      "PATCH",
      `https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${koderId}.json`,
      true
    );

    conexion.send(JSON.stringify(updateKoder))
    window.location.pathname = "/index.html"
  }
});





btnEliminar = document.getElementById("delete__koder")

btnEliminar.addEventListener("click", () => {
    
    conexion.open("DELETE", `https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${koderId}.json`, true)


    conexion.onload = (response) => {
        if (data.target.status >= 200 && data.target.status < 400) {
            console.log(response.target)
        }
    }
    conexion.send()
    window.location.pathname = "/index.html"
})
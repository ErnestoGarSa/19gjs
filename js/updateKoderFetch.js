let koderId = window.location.search.substring(10);

fetch(`https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${koderId}.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
      );
    } else {
      return response.json();
    }
  })
  .then((response) => {
    console.log(response);

    let { name, lastName, email, phone } = response;

    document.getElementById("name").value = name;
    document.getElementById("lastName").value = lastName;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
  })
  .catch((err) => {
    console.log(err);
  });

let btnActualizar = document.getElementById("update__koder");

btnActualizar.addEventListener("click", () => {
  // Validar la data
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  // Validar la data
  if (name === "" || lastName === "" || email === "" || phone === "") {
    alert("Campos vacios");
  } else {
    // Formar el nuevo koder
    let updateKoder = {
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
    };

    fetch(
      `https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${koderId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(updateKoder),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
        console.log(finalResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

btnEliminar = document.getElementById("delete__koder");

btnEliminar.addEventListener("click", () => {
  fetch(
    `https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${koderId}.json`,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((finalResponse) => {
      console.log(finalResponse);
      window.location.pathname = "/listaKodersFetch.html";
    });
});

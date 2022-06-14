let btnEnviar = document.querySelector("#enviar__koder")

// Agregamos evento
btnEnviar.addEventListener("click", () => {
    // Obtener la data
    let name = document.querySelector("#name").value
    let lastName = document.querySelector("#lastName").value
    let email = document.querySelector("#email").value
    let phone = document.querySelector("#phone").value

    // console.log(name, email, phone, lastName)
    
    
    // Validar data
    if(name === "" && email === "" && phone === "" && lastName === ""){
        alert("Campos vacios")
    } else {
        // Formamos el nuevo koder
        let newKoder={
            name: name,
            lastName : lastName,
            email :email,
            phone : phone
        }

        // Paso 8
        // Hacer envio
        const conexion = new XMLHttpRequest()

        // Metodo onload cada que la peticion sehaya cumplido 
        // Necesita una funcion que se ejecutara cuando la respuesta este lista.
        // Es lo que hara siempre con el response
        conexion.onload = (response) => {
            if (response.target.status >= 200 && response.target.status < 400){
                console.log(response)
                let responseFirebase= JSON.parse(response.target.response)
                alert(`Koder creado satisfactoriamente con el id: ${responseFirebase.name}`)
            }
        }
        // PAso 9
        // Abrimos la conexion
        conexion.open("POST", "https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/.json", true)


        // Paso 10
        console.log(JSON.stringify(newKoder))
        conexion.send(JSON.stringify(newKoder))
    }
    
})
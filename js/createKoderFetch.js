
let btnEnviar= document.querySelector(("#enviar__koder"))

btnEnviar.addEventListener("click", () => {

    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value

    if(name === "" || lastName === "" || email === "" || phone === ""){
        alert("Campos vacios")
    }else {

        let newKoder={
            name,
            lastName,
            email,
            phone
        }

        fetch("https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/.json", {
            method:"POST", 
            body: JSON.stringify(newKoder),
            headers: {
                "Content-Type": "application/json ; charset=UTF-8"
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            alert(`Koder satisfactoriamente con el id ${response.name}`)
        })
        .catch((err) => {
            console.log(err)
        })

    }

})

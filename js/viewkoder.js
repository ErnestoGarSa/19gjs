
// window.location.search
// window.location.search(substring(10))

let idKoder=window.location.search.substring(10)
// console.log(idKoder)

// Hacer peticion al server

const peticion = new XMLHttpRequest()

peticion.open("GET", `https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${idKoder}.json`, true)


peticion.onload = function (data) {
    if (data.target.status >= 200 && data.target.status < 400) {
        let response = JSON.parse(data.target.response)
        // console.log(response)

        let {name, lastName, email, phone} = response
        // let template = ""

        // for(key in response){
            

        let template = `<div class="col-12 col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">${name} ${lastName}</h5>
                              <p class="card-text">${email}</p>
                              <p class="card-text">${phone}</p>
                            </div>
                          </div>
                        </div>
                        <a class="btn btn-warning" href="index.html">Volver al listado</a>`
                        
        document.querySelector(".all__koder").innerHTML = template
        }
    }


// Cuando el response este listo
// Pintar la informacion del koder en un card

peticion.send()
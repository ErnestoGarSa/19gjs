let idKoder = window.location.search.substring(10)
// console.log(idKoder)

fetch(`https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
  .then(response => {
    // console.log(response)
    if(!response.ok){
      throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
    } else {
      return response.json()
    }
  })
    .then((response) => {
      console.log(response)

      let { name, lastName, email, phone } = response
      template = ""
      
        console.log(name, lastName, email, phone)
        template = `<div class="col-12 col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">${name} ${lastName}</h5>
                                <p class="card-text">${email}</p>
                                <p class="card-text">${phone}</p>
                              </div>
                            </div>
                          </div>
                          <a class="btn btn-warning" href="listaKodersFetch.html">Volver al listado</a>`
        document.querySelector(".all__koder").innerHTML = template
      
    })
    .catch((err) => {
      console.log(err)
  
    })

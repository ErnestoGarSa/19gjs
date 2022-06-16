let idKoder = window.location.search.substring(10)
// console.log(idKoder)

fetch(`https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
  .then(response => {
    // console.log(response)
    return response.json()
  })
  .then(koder => {
    console.log(koder)
    template = ""
    for (value in koder) {
      let { name, lastName, email, phone } = koder[value]
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
                        <a class="btn btn-warning" href="listadoKodersFetch.html">Volver al listado</a>`
      document.querySelector(".all__koder").innerHTML = template
    }
  })
  .catch((err) => {
    console.log(err)
  })



let idKoder = window.location.search.substring(10)



fetch("https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/.json")
.then(response => {
    // convierte la respuesta a JSON
    // console.log(response)
    if(!response.ok){
      throw new Error(`Algo salio mal, status: ${response.status}${response.statusText}${response.type}`)
    } else {
    return response.json()
  }
})
.then((koders)=> {
    // console.log(koders)
    let template =""
    for(koder in koders){
        let {name, lastName, email, phone} = koders[koder]
        // console.log(name, email, lastName, phone)

        template += `<div class="col-12 col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">${name} ${lastName}</h5>
                              <p class="card-text">${email}</p>
                              <p class="card-text">${phone}</p>
                              <div class="btns d-flex justify-content-between">
                              <a href="/viewKoderFetch.html?koderkey=${koder}" class="btn btn-primary">Ver Mas</a>
                              <a href="/updateKoderFetch.html?koderkey=${koder}" class="btn btn-success">Actualizar</a>
                              </div>
                            </div>
                          </div>
                        </div>`
        
        document.querySelector(".all__koders").innerHTML = template
        
    }
    
})
.catch (err =>{
    console.log(err)
})
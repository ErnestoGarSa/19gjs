//Creamos conexion




// Paso 2
const conexion = new XMLHttpRequest()

conexion.open('GET', "https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/.json", true)

conexion.onload = function(data) {
    if(data.target.status >= 200 && data.target.status < 400){
        let koders = JSON.parse(data.target.response)
        // console.log(data.target.response)
        // console.log(koders)
    


        // Paso 4
        let template = ""


        // Paso 3
        for (key in koders) {
            // let llave= key
            // let valor= koders[key]
            // console.log(llave)
            // console.log(valor)
            // console.log(koders[key])
            let infoKoder= koders[key]
            // Destructurar objeto.
            let {name, lastName, email, phone} = koders[key]
            template += `<div class="col-12 col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">${name} ${lastName}</h5>
                              <p class="card-text">${email}</p>
                              <p class="card-text">${phone}</p>
                              <div class="btns d-flex justify-content-between">
                                <a href="/interior.html?koderkey=${key}" class="btn btn-primary">Ver Mas</a>
                                <a href="/updateKoder.html?koderkey=${key}" class="btn btn-info" id="updateKod">Actualizar</a>
                              </div>
                            </div>
                          </div>
                        </div>`
        }



        // Paso 5
        document.querySelector(".all__posts").innerHTML = template
    }
}
//Guardamos la información
conexion.send()
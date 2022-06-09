const albumFilter = (arrAlbums) => {
    let template = arrAlbums.reduce((acc, album) => {
        return acc +=`
        <div class="col mb-4">
              <div class="card border-primary">
                <div class="card-body bg-dark">
                  <h5 class="card-title bg-success text-white text-center p-2">${album.title}</h5>
                  <p class="card-text bg-primary text-white text-center p2">${album.id}</p>
                </div>
              </div>
            </div>
        `
    },"")
    document.querySelector(".albums").innerHTML = template
}

const llamada = new XMLHttpRequest()

let albums =[]

llamada.onload = (response) => {
    if (response.target.status === 200 && response.target.responseText != ""){
        let JSONResponse = JSON.parse(response.target.responseText)
        albums = JSONResponse
        albumFilter(albums)
    }
}

llamada.open("GET", "https://jsonplaceholder.typicode.com/albums", false)

llamada.send()
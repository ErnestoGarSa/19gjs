const imagesFilter = (arrImages) => {
    let template = arrImages.reduce((acc, image) => {
        return acc +=`
        <div class="col mb-4">
              <div class="card">
                <img src="${image.url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${image.title}</h5>
                  <p class="card-text">${image.id}</p>
                </div>
              </div>
            </div>
        `
    },"")
    document.querySelector(".images").innerHTML = template
}

const xmlhttp = new XMLHttpRequest()

let images = []

xmlhttp.onload = (response) => {
    if(response.target.status === 200 && response.target.responseText != ""){
        let JSONResponse = JSON.parse(response.target.responseText)
        images = JSONResponse
        console.log(images)
        imagesFilter(images)
    }
}

xmlhttp.open('GET', "https://jsonplaceholder.typicode.com/photos", false)

xmlhttp.send()


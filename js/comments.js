const commentsFilter = (arrImages) => {
    let template = arrImages.reduce((acc, comment) => {
        return acc +=`
        <div class="col mb-4">
              <div class="card border-primary">
                <div class="card-body bg-dark">
                  <h5 class="card-title bg-success text-white p-2">{{ comment.${comment.name}</h5>
                  <p class="card-text bg-primary text-white p2">{{ comment.${comment.body}</p>
                  <p class="card-text bg-warning p2">${comment.email}</p>
                </div>
              </div>
            </div>
        `
    },"")
    document.querySelector(".comments").innerHTML = template
}

const call = new XMLHttpRequest()

let comments=[]

call.onload = (response) =>{
    if (response.target.status === 200 && response.target.responseText != ""){
        let JSONResponse = JSON.parse(response.target.responseText)
        console.log(JSONResponse)
        comments= JSONResponse
        commentsFilter(comments)
    }
}

call.open("GET", "https://jsonplaceholder.typicode.com/comments", false)

call.send()

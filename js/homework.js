let enviar = document.querySelector(".enviar").addEventListener("click", () => {

post={
    title : document.querySelector("#title").value,
    body : document.querySelector("#body").value,
    date : document.querySelector("#date").value
}

const request = new XMLHttpRequest()

request.open("POST", "https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/.json", true )

request.onload = function () {
    console.log("onload complete")
}

request.send(JSON.stringify(post))
alert("Muchas gracias, en breve checaremos tu comentario")

})

















// Falta terminar 

const commentsFilter = (arrIPost) => {
    let template = arrIPost.reduce((acc, comment) => {
        return acc +=`
        <div class="col mb-4">
              <div class="card border-primary">
                <div class="card-body bg-dark">
                  <h5 class="card-title bg-success text-white p-2">{{ comment.${comment.title}</h5>
                  <p class="card-text bg-primary text-white p2">{{ comment.${comment.body}</p>
                  <p class="card-text bg-warning p2">${comment.date}</p>
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

call.open("GET", "https://js19g-8ff6a-default-rtdb.firebaseio.com/posts", true)

call.send()
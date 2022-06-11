let enviar = document.querySelector(".enviar").addEventListener("click", () => {

    let title =document.querySelector("#title").value.trim()
    let body =document.querySelector("#body").value.trim()
    let date =document.querySelector("#date").value.trim()

    if( title !== "" && body !== "" && date !== "" ){

        post={
            title : title, 
            body : body,
            date : date,
        }

        const request = new XMLHttpRequest()

        request.open("POST", "https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/.json", true )

        request.onload = function () {
            console.log("onload complete")
        }

        request.send(JSON.stringify(post))
        // alert("Muchas gracias, en breve checaremos tu comentario")
    }
})


const obtPosts = (arrPosts) => {
    let template = arrPosts.reduce((acc, post) => {
        return acc +=`
        <div class="col mb-4">
              <div class="card border-primary">
                <div class="card-body bg-dark">
                  <h5 class="card-title bg-success text-white p-2">${post.title}</h5>
                  <p class="card-text bg-primary text-white p2">${post.body}</p>
                  <p class="card-text bg-warning p2">${post.date}</p>
                </div>
              </div>
            </div>
        `
    },"")
    document.querySelector(".container").innerHTML = template
}

const getPost = new XMLHttpRequest()

let posts= []

getPost.onload = (response) =>{
    if (response.target.status === 200 && response.target.responseText != ""){
        let JSONResponse = JSON.parse(response.target.responseText)
        console.log(JSONResponse)
        posts= JSONResponse
        obtPosts(comments)
    }
}

getPost.open("GET", "https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/.json", true)

getPost.send()

document.querySelector(".ver").addEventListener("click", obtPosts)














const filterPost = (arrPost) => {
    let template = arrPost.reduce((acc, post) =>{
        return acc+= `
        <div class="card bg-dark text-white">
            <div class="card-body">
              <h5 class="card-title bg-primary text-center">${post.title}</h5>
              <p class="card-text text-center">${post.body}</p>
              <p class="card-text text-center text-white"><small class="text-muted bg-light">${post.id}</small></p>
            </div>
          </div>
        `
    },"")
    document.querySelector(".posts").innerHTML = template
}



const llamada= new XMLHttpRequest()

let posts=[]

llamada.onload = (response) => {
    if (response.target.status === 200) {
        if (response.target.responseText != ""){
        let responseJSON = JSON.parse(response.target.responseText)
        posts= responseJSON
        console.log(posts)
        filterPost(posts) 
        }
    }
}

llamada.open("GET", "https://jsonplaceholder.typicode.com/posts", false)

llamada.send()
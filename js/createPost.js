


// ajaxXHR(printAllPosts, '/posts/.json', 'GET')
const postCreated = (resp) => {
    // { 
    //     name:'-id' 
    // }
    if(resp.name !== ''){
        document.querySelector('#wrap__alert').classList.remove('d-none')
        document.querySelector('#id__post').innerHTML = resp.name

        // timer
        setTimeout( () => {
            document.querySelector('#wrap__alert').classList.add('d-none')
            document.querySelector('#id__post').innerHTML = ''
        }, 4000)
        
        // clear form
        document.querySelector('#title').value = ''
        document.querySelector('#body').value = ''
        document.querySelector('#datepost').value = '2022-06-10'
    }
}

let btnEnviar = document.querySelector('#create__post')
btnEnviar.addEventListener('click',  () => {
    
    let title = document.querySelector('#title').value
    let body = document.querySelector('#body').value
    let datepost = document.querySelector('#datepost').value

    if( title !== '' && body !== '' && datepost !== '' ){

        let newPost = {
            title: title,
            body: body,
            date: datepost
        }

        console.log(newPost)
        
        ajaxXHR(postCreated, '/posts/.json', 'POST', newPost)

    } else {
        alert('Algunos datos estan vacios')
    }
})

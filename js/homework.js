
/**
 * 
 * 1. LLenar el endpoint de firebase con multiples posts
 * 2. Crear una funcion que obtenga todos los posts y los imprima en una lista de cards
 * Referencia:
 * https://getbootstrap.com/docs/5.2/components/card/#content
 * 
 * 3. Crear un nuevo documento html con un formulario que tenga lo siguiente
 * 3 campos (titulo, contenido, fecha )
 * 1 botón de enviar
 * Referecia:
 * https://getbootstrap.com/docs/5.2/forms/form-control/
 * 
 *  Acciones
 *  cuando se de click en el boton de enviar, 
 *  crear un nuevo post en firebase
 *  Opcional: Mostrar un alert con el aviso de que ya se creo el post
 * 
 * Referencia: 
 * https://getbootstrap.com/docs/5.2/components/alerts/#content
 */

// Estructura sugerida de archivos
/**
 * createuser.html
 * js/createPost.js
 * css/createpost.css
 */

// Esctructura del post
// { title, body, date }

// url de firebase
//  * urlFirebase /posts/.json

// como obtener los valores de los input, textarea, select ...
// let title = document.querySelector('#elemento').value
// let body = document.querySelector('#elemento').value
// let date = document.querySelector('#elemento').value


// tarea 1
const printAllPosts = (allPosts) => {
    let template = ''
    for( post in allPosts) {
        console.log(post)
        // destrucuracion de objetos
        let { title, body, date  } = allPosts[post]

        template += `
            <div class="col-12 col-md-3">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${body}</p>
                        <p class="card-text">Last updated ${date}</p>

                        <a href="/updatepost.html?idpost=${post}" class="link-primary">Editar</a>
                        <a href="#" class="link-dark">Ver post</a>

                    </div>
                </div>
            </div>
        `
    }
    document.querySelector('.all__posts').innerHTML = template

}

ajaxXHR(printAllPosts, '/posts/.json', 'GET')
  


//AJAX
// Asynchronous JavaScript And XML
// XMLHttpRequest

// formar request
// enviar request
// esperar respuesta
// recibir request
// procesar el response

// 0: request no inicializado
// 1: conexion con el servidor establecida
// 2: request recibida
// 3: procesando el request
// 4


// Creamos un objeto (variable) XMLHttpRequest
let xmlh = new XMLHttpRequest()
// console.log(xmlh)

// Definimos una función callback
xmlh.onload = function (data){
    // Aqui podemos usar los datos
    console.log(data)
    if (data.target.status === 200) {
        console.log(data.target.resposeText)
    }
}

// Enviamos el request
xmlh.open('GET',"ajas")
console.log(xmlh)
xmlh.send()
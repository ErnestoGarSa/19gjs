




// GET
fetch("https://js19g-8ff6a-default-rtdb.firebaseio.com/koders/.json")
.then(response => {
    // convierte la respuesta a JSON
    console.log(response)
    return response.json()
})
.then(koders=> {
    console.log(koders)
    let template =""
    for(koder in koders){
        let {name} = koders[koder]
        let {lastName} = koders[koder]
        template += 
        `<li>${name}${lastName}</li>`
        
        document.querySelector("#lista__koders").innerHTML = template
    }
})
.catch (err =>{
    console.log(err)
})


let newKoder={
    name:"Israel",
    lastName:"Santillan",
    email:"isra@email.com",
    phone:33115585
}

// POST
fetch("url", {
    method: "POST",
    body: JSON.stringify(newKoder),
    headers: {
        "Content-Type": "application/json ; charset=UTF-8"
}
})
.then((response) => {
    return response.json()
})
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})
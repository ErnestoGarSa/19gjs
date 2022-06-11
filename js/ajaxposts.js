
// CRUD posts
const createPost =  ( objPost ) => {
  const xhttp = new XMLHttpRequest()
  xhttp.open( 
    "POST",  
    "https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/.json", true)
  xhttp.onload = function(data) {
      if(data.target.status >= 200 && data.target.status <= 399){
        console.log(data.target.response)
      }
  }
  xhttp.send( JSON.stringify(objPost) )
}
let post =  {
  title: 'Post 5',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ad magnam, perspiciatis fugit ullam rerum quod, nisi quo optio quibusdam quae inventore id quaerat, accusantium eius ipsam autem similique delectus.',
  date: '2022-06-10'
}

const updatePost  = ( idPost, postUpdated) => {
  const updatexhr = new XMLHttpRequest()
  updatexhr.open(
    'PATCH', 
    `https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/${idPost}.json`, 
    true
  )
  updatexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  updatexhr.send( JSON.stringify(postUpdated) )
}
let postUpdated =  {
  title: 'Post 6',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ad magnam, perspiciatis fugit ullam rerum quod, nisi quo optio quibusdam quae inventore id quaerat, accusantium eius ipsam autem similique delectus.',
  date: '2022-06-10'
}
// updatePost( '-N4AG_csrBrUna8FJtRJ' ,  postUpdated) 

const deletePost1  = ( idPost ) => {
  const deletexhr = new XMLHttpRequest()
  deletexhr.open(
    'DELETE', 
    `https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/${idPost}.json`, 
    true
  )
  deletexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  deletexhr.send()
}

const getPosts  = (callback) => {
  const getxhr = new XMLHttpRequest()
  getxhr.open(
    'GET', 
    `https://js19g-8ff6a-default-rtdb.firebaseio.com/posts/.json`, 
    true
  )
  getxhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      let posts = JSON.parse(response.target.response)
      callback(posts)
    }
  }
  getxhr.send()
}



// All in one


const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {

  const xhttp = new XMLHttpRequest()
  xhttp.open( 
      method,  
      `https://js19g-8ff6a-default-rtdb.firebaseio.com${url}`, 
      true
  )
  xhttp.onload = function(data) {
      if(data.target.status >= 200 && data.target.status <= 399){
          let response = JSON.parse(data.target.response)
          callback(response)
      }
  }

  if(method === 'GET' || method === 'DELETE'){
      xhttp.send()
  } else {
    xhttp.send( JSON.stringify(obj) )
  }
  
}

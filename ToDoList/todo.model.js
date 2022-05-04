const BASE_URL = "https://authencation.vercel.app/api/todo/"
const USER_URL = "https://authencation.vercel.app/api/user/list"



const USER_API = {
    GET: ()=> USER_URL
}
const API = {
    GET : (id)=>`${BASE_URL}get?id=${id}`,
    LIST : ()=>`${BASE_URL}list`,
    CREATE : () => `${BASE_URL}create`,
    UPDATE : (id) => `${BASE_URL}update?id=${id}`,
    DELETE : (id) => `${BASE_URL}delete?id=${id}`
}

export function listUser(){
    return fetch(USER_API.GET())
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}

export function listTodo() {
    return fetch(API.LIST())
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err))
    
}

export function createTodo(name) {
    return fetch(API.CREATE(),{
        method : "POST",
        body : JSON.stringify({name}),
        headers : {
            "Content-Type" : "application/json"
        }
    })
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err))
}

export function UpdateTodo(id,name) {
    return fetch(API.UPDATE(id), {
        method : "POST",
        body : JSON.stringify({ name }),
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export function DeleteTodo(id) {
    return fetch(API.DELETE(id), {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}
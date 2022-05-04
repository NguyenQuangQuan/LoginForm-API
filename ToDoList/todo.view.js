import * as API  from "./todo.model.js"

const todos = await API.listTodo()
const getUserAPI = await API.listUser()
const getUserLocalStorage = JSON.parse(localStorage.getItem('dataAPI')).user_id
const nameUser =  getUserAPI.filter(dt =>{
    if(dt.id == getUserLocalStorage){
        return dt.username
    }
})

function logOut() {
    const btnLogOut = document.querySelector('.exit')
    btnLogOut.addEventListener('click', ()=>{
        if (window.confirm("Do you really want to leave?")) {
             window.location.href = "http://127.0.0.1:5500/publish/login.html";
          }
           
        
    })
}

logOut()
function rerender(arr) {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    arr.map(el => createOneTodo(el.id, el.name))
    const h3 = document.querySelector('h3')
    const userName = document.createElement('p')
    userName.innerHTML = nameUser[0].username
    h3.append(userName)
}
function createOneTodo(id,name) {
    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')
    const listTr = document.querySelectorAll('tr')
    const index = listTr.length
    tr.innerHTML += ` 
    <th scope="row">${index}</th>
    <td>${name}</td>
    <td>
        <button id="btn-sort" type="button" class="btn btn-sm btn-warning mx-2" onclick="Edit('${id}')">Edit</button>
        <button id="btn-sort" type="button" class="btn btn-sm btn-danger mx-2" onclick="Delete('${id}')">Delete</button>
    </td>`

    document.Edit = async (id)=>{
        const name = prompt("Nhap vao ten moi: ");
        // API.UpdateTodo(id, name)
        // .then(data => {
        //     API.listTodo().then(todos => {
        //         rerender(todos);
        //     }).catch(err => console.log(err))
        // }).catch(err => console.log(err))
        const updateTodo = await API.UpdateTodo(id,name)
        const newTodos = await API.listTodo(updateTodo)
        rerender(newTodos)
    }

    document.Delete = async (id)=>{
        // API.DeleteTodo(id).then(
        //     data => {
        //         API.listTodo().then(todos => {
        //             rerender(todos);
        //         }).catch(err => console.log(err))
        //     }
        // ).catch(err => console.log(err))
        const deleteTodo = await API.DeleteTodo(id)
        const remainTodo = await API.listTodo(deleteTodo)
        rerender(remainTodo)
    }
    tbody.appendChild(tr)
}

rerender(todos)

const addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", async () => {
    const forms = document.getElementsByClassName("form-control");
    const name = forms[0].value;
    const todo = await API.createTodo(name);
    createOneTodo(name, todo.id);
});
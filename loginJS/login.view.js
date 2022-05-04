import * as API from "./login.model.js";

function logIn() {
    const value = document.querySelectorAll('.form-control')
    const signIn = document.getElementById('signin')
    signIn.addEventListener('click', async ()=>{
       let valueInput = value[0].value
       let valuePass = value[1].value
       const data = await API.loginUser(valueInput,valuePass)
       if (typeof data ==='object') {
        let savedData = localStorage.setItem('dataAPI',JSON.stringify(data))
        window.location.href = "http://127.0.0.1:5500/ToDoList/index.html";
        }

        else{
            alert('Vui long dang ki tai khoan')
        }
    })
}
logIn()


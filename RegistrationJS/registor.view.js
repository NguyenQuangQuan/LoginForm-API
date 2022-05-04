import * as API from "./registor.model.js"
function createAPI() {
    const value = document.querySelectorAll('.form-control')
    const btnSubmit = document.getElementById('submit')
    btnSubmit.addEventListener('click', async ()=>{
        let fullName = value[0].value.trim()
        let passWord = value[1].value.trim()
        let userName = value[2].value.trim()
        let data = await API.createAPIUser(fullName,passWord,userName)
    
        if (typeof data ==='string' ||typeof data === 'object') {
            alert('Ban dang ki tai khoan thanh cong')
            window.location.href = "http://127.0.0.1:5500/publish/login.html";
            }
    
            else{
                alert('Vui long dang ki tai khoan')
            }
        
    })
}

createAPI()

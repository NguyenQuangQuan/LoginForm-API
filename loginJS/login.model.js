const BASE_URL = "https://authencation.vercel.app/api"
const API_ENPOINT = {
    GET : ()=>`${BASE_URL}/user/list`,
    CREATE : () => `${BASE_URL}/user/create`,
    LOGIN: () => `${BASE_URL}/auth/login`
}

export function loginUser(username,password){
    return fetch(API_ENPOINT.LOGIN(),{
        method : "POST",
        body : JSON.stringify({
           username,password
        }),
        headers : {
            "Content-Type" : "application/json"
        }
        }).then(res => res.json())
        .then(data => data
        )
        .catch(err => console.log(err))
    }



// function Validator(formSelector) {
//     let formRules = {}
//     let validatorRuler = {
//         required : function (value) {
//             return value ? undefined : ' Vui long nhap ki tu'
//         },
//         email : function (value) {
//             const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//             return regex.test(value) ? undefined : ' Vui long nhap ki tu'
//         },
//         min : function (min) {
//             return function (value) {
//                 return value.length >=min ? undefined : `Vui long nhap it nhat ${min} ki tu`
//             }
//         }
//     }
//     const formElement = document.querySelector(formSelector)
//     if (formElement){
//         let inputs = document.querySelectorAll('[type][rules]')
//         for (let input of inputs){ 
//             let rules = formRules[input.type] = input.getAttribute('rules').split('|')
//             for (let rule of rules){        
//                if(rule.includes(':')){
//                   let ruleInfo = rule.split(':');
//                   rule = ruleInfo[0];
//                }
               

//                if(Array.isArray(formRules[input.type])){
//                     console.log('true');
//                }
//                else{
//                    console.log(validatorRuler[rule]);
//                     // formRules[input.type] = [validatorRuler(rule)]
//                }
//             }
           
//         }

        
//     }

// }

const BASE_URL = "https://authencation.vercel.app/api"
const API_ENPOINT = {
    GET : ()=>`${BASE_URL}/user/list`,
    CREATE : () => `${BASE_URL}/user/create`,
    LOGIN: () => `${BASE_URL}/auth/login`
}

export function createAPIUser(full_name,password,username) {
    return fetch(API_ENPOINT.CREATE(), {
        method : "POST",
        body : JSON.stringify({full_name,password,username}	
        ),
        headers : {
            "Content-Type" : "application/json"
        }
        }).then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}
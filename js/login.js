let username = document.querySelector(".username");
let username_validatio = document.querySelector(".name_validation");
let password = document.querySelector(".password");
let password_validatio = document.querySelector(".pass_validation");


username.addEventListener("keyup", function () {
    if(username.value.length < 4) {
        username_validatio.innerHTML = "min 3 char!"
        username_validatio.style.margin = "0.2rem 0 0.5rem 0"
    }
    else {
        username_validatio.innerHTML = "";
        username_validatio.style.margin = "0"
    }    
})

password.addEventListener("keyup", function() {
    if(password.value.length < 8) {
        password_validatio.innerHTML = "min 8 char!"
        password_validatio.style.margin = "0.2rem 0 0.5rem 0"
    }
    else {
        password_validatio.innerHTML = "";
        password_validatio.style.margin = "0"
    }  
})

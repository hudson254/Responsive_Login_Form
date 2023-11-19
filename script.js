const eyeIcon = document.querySelector(".eye-icon");

const password = document.querySelector("#password");

eyeIcon.addEventListener("click",()=>{

    eyeIcon.classList.toggle("bx-show");

    if(eyeIcon.classList.contains("bx-show")){
        password.type = "text";
    }else{
        password.type = "password";
    }
})
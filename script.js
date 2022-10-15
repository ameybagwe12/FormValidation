const btn = document.querySelector("button");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const pass = document.querySelector(".pass");
const confirmPass = document.querySelector(".confirmPass");
let formDiv = document.querySelectorAll(".formDiv"); 

btn.addEventListener("click",checkUsername)
btn.addEventListener("click",checkEmail)
btn.addEventListener("click",checkPhone)
btn.addEventListener("click",checkPass)

function checkUsername() {
    if (username.value == "") {
        formDiv[0].innerHTML = "Please fill the required field !!";
    }
    else if(username.value.length < 5)
    {
        formDiv[0].style.color = "red";
        formDiv[0].innerHTML = "Please enter username more than 5 characters !!";
        alert("Please Retry")
    }
    else if(username.value.includes(" ")){
        formDiv[0].innerHTML = "Spaces are not allowed !!";
        formDiv[0].style.color = "red";
        alert("Please Retry")
    }
    else{
        formDiv[0].innerHTML = "Looks Good !!";
        formDiv[0].style.color = "rgb(124,252,0)";
    }
}

function checkEmail() {
    if (email.value == "") {
        formDiv[1].innerHTML = "Please fill the required field !!";
    }
    else if(!email.value.includes("@") || !email.value.includes(".com"))
    {
        formDiv[1].style.color = "red";
        formDiv[1].innerHTML = "Please enter correct email address !!";
        alert("Please Retry")
    }
    else if(email.value.includes(" ")){
        formDiv[1].innerHTML = "Spaces are not allowed !!";
        formDiv[1].style.color = "red";
        alert("Please Retry")
    }
    else{
        formDiv[1].innerHTML = "Looks Good !!";
        formDiv[1].style.color = "rgb(124,252,0)";
    }
}

function checkPhone() {
    if (phone.value == "") {
        formDiv[2].innerHTML = "Please fill the required field !!";
    }
    else if(isNaN(phone.value) || phone.value.length != 10 || phone.value == "123456789")
    {
        formDiv[2].style.color = "red";
        formDiv[2].innerHTML = "Please enter correct phone number !!";
        alert("Please Retry")
    }
    else if(phone.value.includes(" ")){
        formDiv[2].innerHTML = "Spaces are not allowed !!";
        formDiv[2].style.color = "red";
        alert("Please Retry")
    }
    else{
        formDiv[2].innerHTML = "Looks Good !!";
        formDiv[2].style.color = "rgb(124,252,0)";
    }
}

function checkPass() {
    if (pass.value == "") {
        formDiv[3].innerHTML = "Please fill the required field !!";
    }
    else if (confirmPass.value == "") {
        formDiv[4].innerHTML = "Please fill the required field !!";
    }
    else if(pass.value.length < 8 || pass.value == "password"){
        formDiv[3].innerHTML = "Password is not strong !!";
        formDiv[3].style.color = "red";
        alert("Please Retry")
    }   
    else if(pass.value == confirmPass.value)
    {
        formDiv[3].innerHTML = "Passwords Matched !!";
        formDiv[3].style.color = "rgb(124,252,0)"; 
        formDiv[4].innerHTML = "Passwords Matched !!";
        formDiv[4].style.color = "rgb(124,252,0)"; 
        alert("Form Submitted");
    }
    else if(pass.value.includes(" ")){
        formDiv[3].innerHTML = "Spaces are not allowed !!";
        formDiv[3].style.color = "red";
        alert("Please Retry")
    }
    else if(confirmPass.value.includes(" ")) {
        formDiv[4].innerHTML = "Spaces are not allowed !!";
        formDiv[4].style.color = "red";
        alert("Please Retry")
    }
    else{
        formDiv[3].innerHTML = "Passwords did not matched !!";
        formDiv[3].style.color = "red"; 
        formDiv[4].innerHTML = "Passwords did not matched !!";
        formDiv[4].style.color = "red";
        alert("Please Retry")
    }
}
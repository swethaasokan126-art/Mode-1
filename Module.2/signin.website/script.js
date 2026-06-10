function togglePassword(id){
    let field = document.getElementById(id);

    if(field.type === "password"){
        field.type = "text";
    }else{
        field.type = "password";
    }
}

/* SIGNUP */

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit", function(e){

e.preventDefault();

let fullname = document.getElementById("fullname").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let city = document.getElementById("city").value.trim();
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let valid = true;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{10}$/;
const cityPattern = /^[A-Za-z ]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

document.querySelectorAll(".error").forEach(err => err.innerText="");

if(fullname === ""){
document.getElementById("nameError").innerText="Full Name required";
valid=false;
}

if(!emailPattern.test(email)){
document.getElementById("emailError").innerText="Invalid Email";
valid=false;
}

if(!phonePattern.test(phone)){
document.getElementById("phoneError").innerText="Enter 10 digit number";
valid=false;
}

if(!cityPattern.test(city)){
document.getElementById("cityError").innerText="Only alphabets allowed";
valid=false;
}

if(!passwordPattern.test(password)){
document.getElementById("passwordError").innerText=
"Password must contain letters, numbers and 8 chars";
valid=false;
}

if(password !== confirmPassword){
document.getElementById("confirmError").innerText=
"Passwords do not match";
valid=false;
}

if(valid){

let user = {
fullname,
email,
phone,
city,
password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Registration Successful");

window.location.href="signin.html";
}

});

}

/* SIGNIN */

const signinForm = document.getElementById("signinForm");

if(signinForm){

signinForm.addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value;

let savedUser = JSON.parse(localStorage.getItem("user"));

if(!savedUser){
alert("No registered user found");
return;
}

if(email === savedUser.email &&
password === savedUser.password){

alert("Login Successful");

window.location.href="tourist.html";

}else{
alert("Invalid Email or Password");
}

});

}


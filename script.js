const API = "http://localhost:3000/api";

async function register(){

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const res=await fetch(API+"/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

});

const data=await res.json();

document.getElementById("result").innerHTML=data.message;

}

async function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const res=await fetch(API+"/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

});

const data=await res.json();

if(data.token){

localStorage.setItem("token",data.token);

window.location="dashboard.html";

}else{

document.getElementById("result").innerHTML=data.message;

}

}

function logout(){

localStorage.removeItem("token");

window.location="login.html";

}
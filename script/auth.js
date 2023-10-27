let username =document.getElementById("username");
// username.value;
let useremail =document.getElementById("email");
useremail.value;
let password =document.getElementById("password");
password.value;
// let usernamefromls=localStorage.getItem("username");
let useremailfromls=localStorage.getItem("useremail");
let passwordfromls=localStorage.getItem("password");

function signup(){
    let usernamevl= username.value;
    let useremailvl= useremail.value;
    let passwordvl= password.value;

    if( usernamevl && useremailvl && passwordvl){
       localStorage.setItem("username",usernamevl);
       localStorage.setItem("useremail",useremailvl);
       localStorage.setItem("password",passwordvl);
      //  donesignup();
       newDoc();
    }else{
      notsignup();
    }
};
function login(){
    let useremailvl = useremail.value;
    let passwordvl= password.value;
      if(useremailvl == useremailfromls && passwordvl == passwordfromls){
            home();
           
           
      }else{
        notsignup();
        // alert("dasad");
      }
        
     
};


function notsignup(){
  let donesign=document.querySelector('.eror');
  donesign.innerHTML =`<br> <b class ="not">fill useremail and password</b>`;
}
function donesignup(){
  let donesign=document.querySelector('.eror');
  donesign.innerHTML +=`<br> <b class="dg">the registration is done</b>`;
}
function newDoc() {
  setTimeout(function(){
    window.location.assign("./login.html")
    },2000);
}
function home() {
  setTimeout(function(){
    window.location.assign("../index.html")
    },1000);
}
function gologin(){
  window.location.assign("./signup.html");

}
function gosign(){
  window.location.assign("./login.html");
}

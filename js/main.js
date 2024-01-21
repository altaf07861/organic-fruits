
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTo > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


//nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e) {
    e.addEvnetListner("click",function(){
        navCollapse.classList.remove("show")
    })
});


// Form Newsletter
function success(){
    var email=document.getElementById('email').value;
    if(email=="")
    {
       alert('Please enter your email')
    }else{
        alert("Now "+ email + " is connect with us");
    }
}
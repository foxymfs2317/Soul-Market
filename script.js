// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n=>n.
//     addEventListener("click",()=>{
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     }))

///////////
function mobileMenu() {
    var nav0 = document.getElementById("navbar0");

    if (nav0.className === "navbar0") {
        nav0.className += " mobile";
    } else {
        nav0.className = "navbar0";
    }
}








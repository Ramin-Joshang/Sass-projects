//  setInterval(reload);


//  function reload() {
//      var screenWidth = window.innerWidth;

//      var menuContainer = document.querySelector("#right-menu");
//      if (screenWidth < 992) {
//          menuContainer.classList.add("hidden");
//      } else {
//          menuContainer.classList.remove("hidden");
//      }
//  }
// }
// const btnBurger = document.querySelector(".btn-burger");
// btnBurger.addEventListener("click", colapse);

// function colapse() {
//     var menuContainer = document.querySelector("#right-menu");
//     menuContainer.style.width = "auto!important";
// }

// const btnBurger = document.querySelector(".btn-burger");
// btnBurger.addEventListener("click", colapse);

// function colapse() {

//     var menuContainer = document.querySelector("#right-menu");
//     menuContainer.classList.remove("block");
//     menuContainer.classList.toggle("hidden");
// }
// setInterval(removeClass);

// if (screenWidth > 992) {
//     setInterval(removeClass);

//     function removeClass() {
//         var menuContainer = document.querySelector("#right-menu");
//         menuContainer.classList.remove("hidden");
//     }
// }
window.addEventListener("load", menu)
window.addEventListener('resize', menu);

function menu() {
    var screenWidth = window.innerWidth;

    var menuContainer = document.querySelector("#right-menu");
    if (screenWidth <= 992) {
        menuContainer.classList.add("hidden");
    } else if (screenWidth > 992) {
        menuContainer.classList.remove("hidden");
        menuContainer.classList.remove("block");

    }
};

const btnBurger = document.querySelector(".btn-burger");
const btnClase = document.querySelector(".menu-close-button");
btnBurger.addEventListener("click", colapse);
btnClase.addEventListener("click", colapse);

function colapse() {
    var menuContainer = document.querySelector("#right-menu");
    menuContainer.classList.toggle("hidden");
    menuContainer.classList.add("block");
}

function showPass(id, elm) {
    var pass = document.getElementById(id);
    if (pass.type === 'password') {
        pass.type = 'text';
        elm.classList = "fa fa-eye-slash";
    } else {
        pass.type = 'password'
        elm.classList = "fa fa-eye";
    }
}


// Get the modal
var registerModal = document.getElementById("registerModal");
var loginModal = document.getElementById("loginModal");

// Get the button that opens the modal
var openregisterModal = document.getElementById("register");
var openloginModal = document.getElementById("login");


// Get the <span> element that closes the modal
var closeRegisterModal = document.getElementById("closeRegisterModal");
var closeLoginModal = document.getElementById("closeLoginModal");

// When the user clicks on the button, open the modal
openregisterModal.onclick = function() {
    registerModal.style.display = "block";
    openloginModal.disabled = true;
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
        colapse();
    }
}
openloginModal.onclick = function() {
    loginModal.style.display = "block";
    openregisterModal.disabled = true;
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
        colapse();
    }
}

// When the user clicks on <span> (x), close the modal
closeRegisterModal.onclick = function() {
    registerModal.style.display = "none";
    openloginModal.disabled = false;

}
closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
    openregisterModal.disabled = false;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// When the user clicks anywhere outside of the modal, close it
// document.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
var contactNInput = document.getElementById("contact-Ninput");
var contactPInput = document.getElementById("contact-Pinput");
var contactNIcon = document.getElementById("contact-Nicon");
var contactPIcon = document.getElementById("contact-Picon");

contactNInput.addEventListener("focusin", function() {
    contactNInput.placeholder = "";
    contactNIcon.style.right = "20px";
    contactNIcon.style.color = "#846add";

})
contactNInput.addEventListener("focusout", function() {
    contactNInput.placeholder = "نام";
    contactNIcon.style.right = "30px";
    contactNIcon.style.color = "#aaaaaa";

})
contactPInput.addEventListener("focusin", function() {
    contactPInput.placeholder = "";
    contactPIcon.style.right = "20px";
    contactPIcon.style.color = "#846add";

})
contactPInput.addEventListener("focusout", function() {
    contactPInput.placeholder = "ایمیل";
    contactPIcon.style.right = "30px";
    contactPIcon.style.color = "#aaaaaa";

})
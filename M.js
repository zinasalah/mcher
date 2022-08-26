var LoginForm = document.getElementById("loginForm");
var RegForm = document.getElementById("regForm");
var Indicator = document.getElementById("indicator");

function Register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function Login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}
/*
document.querySelector("show-login").addEventListener("click", function() {
    document.querySelector(".from-contenair").classList.add("active");
});
document.querySelector(".from-contenair .close-btn").addEventListener("click", function() {
    document.querySelector(".from-contenair").classList.remove("active");
});*/
function show() {
    if (document.getElementById("item").style.display == "none")
        document.getElementById("item").style.display = "flex"
    else document.getElementById("item").style.display = "none"
}
/****
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivant() {
    items[count].classList.remove('active');
    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }
} */
var index = 1;

function plusIndex(n) {
    index = index + 1;
    showImage(index);
}
showImage(1);

function showImage(n) {
    var x = document.getElementsByClassName("slides");
    var i;
    if (n > x.length) { index = 1 };
    if (n < 1) { index = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
}
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}
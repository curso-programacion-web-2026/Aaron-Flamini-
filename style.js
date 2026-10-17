/* pruebas basicas */
console.log("hola mundo");

let nombre ="aaron";

let edad = 24;

console.log(nombre);

console.log(edad);

let numero1=10

let numero2=5

console.log(numero1+numero2);

console.log(numero1-numero2);

console.log(numero1*numero2);

console.log(numero1/numero2);



edad = 18;

if (edad>=18) {
    console.log("sos mayor de edad");
}else{
    console.log("sos menor de edad");
}

for (let i=1;i<=5;i++){
    console.log(i)
}

/* Botones de extencion: ver mas */

const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function alternarInformacion(event) {

    const boton = event.currentTarget;

    const infoExtra = boton.previousElementSibling;

    infoExtra.classList.toggle('oculto');

    if (infoExtra.classList.contains('oculto')) {
        boton.textContent = '[ ver mas ]';
    } else {
        boton.textContent = '[ ver menos ]';
    }
}

botonesVerMas.forEach(function(boton) {
    boton.addEventListener('click', alternarInformacion);
}); 

/* Botones de extencion: cambiar caracteristica */

const boton = document.querySelectorAll(".botoncambiar");

const titulo = document.querySelectorAll("#subtitulo");

let contador = 0;

boton.addEventListener("click",function () {
    contador++;

    if (contador===1){
        titulo.textContent = "¡Bienvenidos!";
    } else if (contador===2){
       titulo.textContent = "¡Espero que disfrutes mi pagina!";
    } else if (contador===3){
        titulo.textContent = "¡Gracias por visitar!"
    }

});

const texto = document.querySelectorAll(".Dark-souls-1");

const disminuir = document.querySelectorAll(".disminuir");

const normal = document.querySelectorAll(".normal");

const aumentar = document.querySelectorAll(".aumentar");

let tamaño = 16;

aumentar.addEventListener("click",function() {
    
    if (tamaño < 30){
        tamaño = tamaño + 2;
        texto.style.fontSize = tamaño + "px";
    }

});

normal.addEventListener("click",function () {

tamaño = 16;
texto.style.fontSize = tamaño + "px";

});

boton = document.querySelectorAll(".volverarriba");
window.addEventListener("scroll",function(){

    if (this.window.scrollY > 300){
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }

});

boton.addEventListener("click",function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});

});

/* carrousel de imagenes */

const slides = document.querySelectorAll('.slide');

const dots = document.querySelectorAll('.dot');

const prevbtn = document.getElementById('prevbtn');

const nextbtn = document.getElementById('nextbtn');

const carouselcontaines = document.getElementById('carousel')

let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {

    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));

    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

if (nextbtn) nextbtn.addEventListener('click', nextSlide);
if (prevbtn) prevbtn.addEventListener('click', prevSlide);

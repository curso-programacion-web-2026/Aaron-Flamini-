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

const boton = document.querySelector("#botoncambiar");

const titulo = document.querySelector("#subtitulo");

let contador = 0;

if (boton && titulo) {
boton.addEventListener("click",function() {
    contador++;

    if (contador===1){
        titulo.textContent = "¡Bienvenidos!";
    } else if (contador===2){
       titulo.textContent = "¡Espero que disfrutes mi pagina!";
    } else if (contador===3){
        titulo.textContent = "¡Gracias por visitar!"
        contador = 0;
    }
 });
}

const texto = document.querySelector("#Dark-Souls-1");

const disminuir = document.querySelector("#disminuir");

const normal = document.querySelector("#normal");

const aumentar = document.querySelector("#aumentar");

let tamaño = 16;

if (texto && aumentar && disminuir && normal) { 
aumentar.addEventListener("click",function() {
    
    if (tamaño < 30){
        tamaño = tamaño + 2;
        texto.style.fontSize = tamaño + "px";
    }

});

disminuir.addEventListener("click", function() { 
    if(tamaño > 10) {
        tamaño = tamaño - 2;
        texto.style.fontSize = tamaño +"px";
    }
  });

normal.addEventListener("click",function() {
tamaño = 16;
texto.style.fontSize = tamaño + "px";
});
}

const botonArriba = document.querySelector("#volverarriba");

if (botonArriba) { 
window.addEventListener("scroll",function(){
    if (this.window.scrollY > 300){
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
  });
 }

botonArriba.addEventListener("click",function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});

});

/* carrousel de imagenes */

const slides = document.querySelectorAll('.slide');

const dots = document.querySelectorAll('.dot');

const prevBtn = document.getElementById('prevBtn');

const nextBtn = document.getElementById('nextBtn');

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

if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
 
/* Formulario */

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

     event.preventDefault();

     const nombre = document.getElementById("nombre").value.trim();
     const email = document.getElementById("email").value.trim();
     const mensaje = document.getElementById("mensaje").value.trim();
     const resultado = document.getElementById("resultado");

    if (nombre.length < 3) {
        Event.preventDefault();
        resultado.textContent = "El nombre debe tener al menos 3 caracteres.";
    } else if (mensaje.trim() === "") {
        resultado.textContent = "El mensaje no puede estar vacio."
    } else {
        Event.preventDefault();
        resultado.textContent = "Formulario enviado correctamente!"
 }

});

/* Modo oscuro */

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener("click",function(){ 
document.body.classList.toggle("darkMode");
});

toggleBtn.addEventListener("click",function(){ 
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    botonTema.textContent = "Cambiar a Modo Claro";
} else {botonTema.textContent = "Cambiar a Modo Oscuro";}

});
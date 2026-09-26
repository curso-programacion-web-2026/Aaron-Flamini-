function saludar(nombre, edad, ciudad) {
    console.log("Hola, mi nombre es " + aaron + ", tengo " + 24 + " años y vivo en " + cordoba);
}
saludar(nombre, edad, ciudad);

let nombre = prompt("nombre: aaron");

let edad = prompt("edad: 24");

let ciudad = prompt("ciudad: cordoba capital");

let numero1 = 10;

let numero2 = 5;

console.log(numero1+numero2);

function saludar() {
    console.log("¡hola, mati!");
}

let edad = 18

if (edad >= 18) {
    console.log("Eres mayor de edad");
}else{
    console.log("No eres mayor de edad");
}

for (let i = 1; i < 10; i++) {
    console.log(i);
}

const botonesVerMas = document.querySelectorAll('ver-mas');

function alternarInformacion(event) {

    const boton = event.target;

    const extraInfo = boton.nextElementSibling;

    extraInfo.classList.toggle('oculto'); }
if (extraInfo.classList.contains('oculto')) {
        boton.textContent = 'Ver más';
    } else {
        boton.textContent = 'Ver menos';
    }   

    botonesVerMas.forEach(function(boton){ 
        boton.addEventListener('click', alternarInformacion);
    });

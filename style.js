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

saludar(); {
    console.log("ola");
}

edad = 18;

if (edad>=18) {
    console.log("sos mayor de edad");
}else{
    console.log("sos menor de edad");
}

for (let i=1;i<=5;i++){
    console.log(i)
}

/*Botones de extencion: ver mas*/

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



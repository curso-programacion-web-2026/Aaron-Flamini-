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

const botonesVerMas = document.querySelectorAll(".ver-mas");

function alternarInformacion(event) {

    const boton = event.target;

    const extraInfo = boton.nextElementSibling;

    extraInfo.classList.toggle("oculto");
    if (extraInfo.classList.contains("oculto")) {
        boton.textContent = "Ver más";
    } else {
        boton.textContent = "Ver menos";
    }
} 
    botonesVerMas.forEach(function(boton) {
        boton.addEventListener("click", alternarInformacion);
    
    });

    const botonCambiar = document.getElementById("cambiarboton");

    const titulo = document.getElementById("titulo");

    let contador = 0;

    botonCambiar.addEventListener("click", function() {
        contador++;
        if (contador === 1) {
            titulo.textContent = "¡Bienvenidos a mi página!";
            botonCambiar.textContent = "Cambiar a Dark Souls 2";
        } else if (contador === 2) {
            titulo.textContent = "¡Bienvenidos a mi página de Dark Souls 2!";
            botonCambiar.textContent = "Cambiar a Dark Souls 3";
        } else if (contador === 3) {
            titulo.textContent = "¡Bienvenidos a mi página de Dark Souls 3!";
            botonCambiar.textContent = "Restablecer";
        } else {
            contador = 0;
            titulo.textContent = "¡Bienvenidos a mi página!";
            botonCambiar.textContent = "Cambiar a Dark Souls 2";
        }
    });

    const aumentar = document.getElementById("aumentar");
    const normal = document.getElementById("normal");
    const disminuir = document.getElementById("disminuir");
    const texto = document.getElementById("texto");
    let tamaño = 16;

    aumentar.addEventListener("click", function() {
        if (tamaño < 30) {
            tamaño = tamaño + 2;
        texto.style.fontSize = tamaño + "px";
        }
    });

    normal.addEventListener("click", function() {
        if (tamaño === 16) {
            texto.style.fontSize = tamaño + "px";
        }
    });

    disminuir.addEventListener("click", function() {
        if (tamaño > 10) {
            tamaño = tamaño - 2;
        texto.style.fontSize = tamaño + "px";
        }
    });

    const botonCambiarColor = document.getElementById("volver-arriba");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    });

    boton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
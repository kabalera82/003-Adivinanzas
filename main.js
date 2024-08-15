const palabras = ["perro", "helado", "estornudo", "torbellino", "madera", "cocina", "rana", "gato", "clavo", "destornillador"];

const palabra = palabras[Math.floor(Math.random() * palabras.length)]; // Selecciona una palabra aleatoria

const palabraOculta = palabra.split("").map(() => "_"); // Crea un array con guiones bajos

const bodyElement = document.querySelector("body"); // Selecciona el elemento body
const mainElement = document.createElement("main"); // Crea un elemento main
bodyElement.appendChild(mainElement); // Añade el elemento main al body

const divPalabra = document.createElement("div"); // Crea un elemento div
divPalabra.setAttribute("class", "div1"); // Añade el atributo class al elemento div
divPalabra.textContent = palabraOculta.join(" "); // Añade el contenido del array al elemento div
mainElement.appendChild(divPalabra); // Añade el elemento div al elemento main


document.addEventListener("keydown", (event) => { // Añade un evento al presionar cualquier tecla
    const letra = event.key; // Obtiene la tecla presionada

    if (palabra.includes(letra)) { // Comprueba si la letra está en la palabra
        palabra.split("").forEach((letraPalabra, index) => { // Recorre la palabra
            if (letraPalabra === letra) { // Comprueba si la letra de la palabra es igual a la letra
                palabraOculta[index] = letra; // Añade la letra al array
            }
        });
        divPalabra.textContent = palabraOculta.join(" "); // Añade el contenido del array al elemento div
    } else { // Si la letra no está en la palabra
        intentos++; // Aumenta los intentos
        divIntentos.textContent = `Intentos: ${intentos}`; // Añade el texto "Intentos: " y el número de intentos al elemento div
    }

    const imgElement = document.createElement("img"); // Crea un elemento img
    imgElement.src = "ruta/a/la/imagen0.png"; // Establece la imagen inicial
    mainElement.appendChild(imgElement); // Añade el elemento img al elemento main

    const imagenes = [
        "./assets/bomb01.png",
        "./assets/bomb02.png",
        "./assets/bomb03.png",
        "./assets/bomb04.png",
        "./assets/bomb05.png",
        "./assets/bomb06.png",
        "./assets/bomb07.png",
        "./assets/bomb08.png",
        "./assets/bomb09.png",
        "./assets/bomb10.png"
    ];

    if (palabra.includes(letra)) { // Comprueba si la letra está en la palabra
        palabra.split("").forEach((letraPalabra, index) => { // Recorre la palabra
            if (letraPalabra === letra) { // Comprueba si la letra de la palabra es igual a la letra
                palabraOculta[index] = letra; // Añade la letra al array
            }
        });
        divPalabra.textContent = palabraOculta.join(" "); // Añade el contenido del array al elemento div
    } else { // Si la letra no está en la palabra
        intentos++; // Aumenta los intentos
        divIntentos.textContent = `Intentos: ${intentos}`; // Añade el texto "Intentos: " y el número de intentos al elemento div
        if (intentos < imagenes.length) { // Comprueba que los intentos no excedan el número de imágenes
            imgElement.src = imagenes[intentos]; // Cambia la imagen
        }
    }

    if (!palabraOculta.includes("_")) { // Si no hay guiones bajos en el array
        bodyElement.innerHTML = ""; // Vacía el body
        const h1Element = document.createElement("h1"); // Crea un elemento h1
        h1Element.textContent = "Has ganado"; // Añade el texto "Has ganado" al elemento h1
        bodyElement.appendChild(h1Element); // Añade el elemento h1 al body
    }
});
/**/
const divIntentos = document.createElement("div"); // Crea un elemento div
divIntentos.setAttribute("class", "div2");
divIntentos.textContent = "Intentos: 0"; // Añade el texto "Intentos: 0" al elemento div
mainElement.appendChild(divIntentos); // Añade el elemento div al elemento main

let intentos = 0; // Inicializa la variable intentos

buttonElement.addEventListener("click", () => { // Añade un evento al hacer click en el botón
    const letra = inputElement.value; // Obtiene el valor del input

    if (palabra.includes(letra)) { // Comprueba si la letra está en la palabra
        palabra.split("").forEach((letraPalabra, index) => { // Recorre la palabra
            if (letraPalabra === letra) { // Comprueba si la letra de la palabra es igual a la letra
                palabraOculta[index] = letra; // Añade la letra al array
            }
        });
        divPalabra.textContent = palabraOculta.join(" "); // Añade el contenido del array al elemento div
    } else { // Si la letra no está en la palabra
        intentos++; // Aumenta los intentos
        divIntentos.textContent = `Intentos: ${intentos}`; // Añade el texto "Intentos: " y el número de intentos al elemento div
    }

    if (intentos === 6) { // Si los intentos son 6
        bodyElement.innerHTML = ""; // Vacía el body
        const h1Element = document.createElement("h1"); // Crea un elemento h1
        h1Element.textContent = "Has perdido"; // Añade el texto "Has perdido" al elemento h1
        bodyElement.appendChild(h1Element); // Añade el elemento h1 al body
    }

    if (!palabraOculta.includes("_")) { // Si no hay guiones bajos en el array
        bodyElement.innerHTML = ""; // Vacía el body
        const h1Element = document.createElement("h1"); // Crea un elemento h1
        h1Element.textContent = "Has ganado"; // Añade el texto "Has ganado" al elemento h1
        bodyElement.appendChild(h1Element); // Añade el elemento h1 al body
    }
});
// A
/* A.1. Creamos un Array a modo base de datos de nuestras frases (impulsos)
const impulsos = [
    "Abre el editor y escribe un comentario de 1 línea.",
    "Bebe agua y mira por la ventana 30 segundos.",
    "Busca un error y no intentes arreglarlo, solo entiéndelo.",
    "Cambia el color de un solo botón por uno ridículo.",
    "Lee la última función que escribiste en voz alta.",
    "Haz 5 sentadillas para que la sangre suba al cerebro."
];*/

// C.1. Creación de elementos (lista de objetos)
const impulsos = [
    { texto: "Haz 5 sentadillas.", categoria: "Cuerpo", color: "#2ecc71" },
    { texto: "Escribe un comentario.", categoria: "Codigo", color: "#3498db" },
    { texto: "Bebe agua.", categoria: "Relax", color: "#f1c40f" }
];

// A.2. Referencias a los elementos del HTML
const outputTexto = document.getElementById('output');
const botonImpulso = document.getElementById('btn-action');

/* A.3. La lógica del experimento
botonImpulso.addEventListener('click', () => {
    // Generamos un índice aleatorio
    // Math.random() da un número entre 0 y 0.99
    // Lo multiplicamos por 6 (la longitud de nuestro array)
    // Math.floor() quita los decimales    
    // const randomIndex = Math.floor(Math.random() * impulsos.length);

    // Cambiamos el texto del HTML por el impulso elegido
    outputTexto.innerText = impulsos[randomIndex];

    //Bonus visual: cambiar el color del texto cada vez
    outputTexto.style.color = '#38bdf8';
    
    //Reto del Lab: Intenta añadir una línea en el JS para que, además de cambiar el texto, el consola (console.log) te diga cuántas frases quedan en el array que NO han salido.
    console.log("Quedan por salir " + (impulsos.length - 1) + " impulsos.");

    // Reto: Modifica el código de tu botón "Generar Impulso" para que, si el índice aleatorio es el 0 (la primera frase), salga un console.log("¡Te ha tocado el primero!").
    if (impulsos[randomIndex] == impulsos[0]) {
        console.log("¡Te ha tocado el primero!");
    };
});*/

// C.3. La lógica del experimento
botonImpulso.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * impulsos.length);

    // Guardamos el objeto elegido en una constante
    const impulsoElegido = impulsos[randomIndex];

    // Accedemos a sus "propiedades" usando el punto (.)
    outputTexto.innerText = impulsoElegido.texto;
    outputTexto.style.color = impulsoElegido.color; // Usa el color que definimos en el array de objetos

    console.log("Categoría: " + impulsoElegido.categoria);
});

// B
// B.2. Referencias a los elementos del HTML
const inputNuevoTexto = document.getElementById('nuevo-impulso');
const inputNuevoCategoria = document.getElementById('nuevo-categoria');
const inputNuevoColor = document.getElementById('nuevo-color');
const botonAdd = document.getElementById('btn-add');

// D.3. La lógica del experimento
function limpiarInputs() {
    // 1. Creamos array de los inputs
    const campos = [inputNuevoTexto, inputNuevoCategoria, inputNuevoColor];

    // 2. Usamos .forEach "por cada uno" para recorrer el array
    campos.forEach(campo => {
        // 'campo' es el nombre que le damos a cada item de la lista
        campo.value = ""; // Le quita el texto
        campo.style.color = "black" // Le quita el color rojo de error
    });
};
function errorInputs() {
    // 1. Creamos array de los inputs
    const campos = [inputNuevoTexto, inputNuevoCategoria, inputNuevoColor];

    // 2. Usamos .forEach "por cada uno" para recorrer el array
    campos.forEach(campo => {
        // 'campo' es el nombre que le damos a cada item de la lista
        campo.style.color = "red";
    });
};

/* B.3. La lógica del experimento
botonAdd.addEventListener('click', () => {
    const texto = inputNuevo.value; // Lee lo que has escrito

    if (texto !== "") {             // Si no está vacío...
        impulsos.push(texto);       // Lo metemos en el Array (.push)
        inputNuevo.value = "";      // Limpiamos el input
        console.log("Impulso nuevo añadido. Ahora hay " + impulsos.length + " impulsos.")
    };
});*/

// C.3. La lógica del experimento
botonAdd.addEventListener('click', () => {
    const texto = inputNuevoTexto.value;     // Lee el texto que has escrito
    const categoria = inputNuevoCategoria.value;     // Lee la categoría que has escrito
    const color = inputNuevoColor.value;     // Lee el color que has escrito

    if (texto !== "" && categoria !== "" && color !== "") { // Si no está vacío...
        impulsos.push({
            texto: texto,
            categoria: categoria,
            color: color
        });
        /*
        inputNuevoTexto.value = "";      // Limpiamos el input
        inputNuevoCategoria.value = "";      // Limpiamos el input
        inputNuevoColor.value = "";      // Limpiamos el input
        inputNuevoTexto.style.color = "black"; // Reseteamos el color
        inputNuevoCategoria.style.color = "black"; // Reseteamos el color
        inputNuevoColor.style.color = "black"; // Reseteamos el color
        */
        console.log("Impulso nuevo añadido. Ahora hay " + impulsos.length + " impulsos.") // Mensaje en la consola
        limpiarInputs(); // Limpiar y resetear color
    } else {
        errorInputs(); // Cambiar color a rojo
    };
});


/*  A   B   C   D   */

// X
// 1. Creamos un Array a modo base de datos de nuestras frases (impulsos)

// 2. Referencias a los elementos del HTML

// 3. La lógica del experimento

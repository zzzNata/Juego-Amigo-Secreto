// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos= [];
let amigos= document.getElementById ("amigo");
let listaDeAmigosEnLaPagina= document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreNuevo = amigos.value
    if (nombreNuevo !=="") {
    //añade el nombre al array
    nombreAmigos.push(nombreNuevo);
    let nuevoElementoNombre= document.createElement ("li");
    nuevoElementoNombre.textContent= nombreNuevo;
    listaDeAmigosEnLaPagina.appendChild(nuevoElementoNombre);
    limpiarCaja();
} else {
    alert ("Por favor escribe un nombre válido")
}
return;
}
//función que limpia la caja de texto donde van 
function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return;
}


function sortearAmigo() {
    // La condición correcta es verificar la CANTIDAD de amigos en el array.
    if (nombreAmigos.length > 0) {
        // Si hay al menos un amigo, realizamos el sorteo.
        let indiceAmigo = Math.floor(Math.random() * nombreAmigos.length);
        let AmigoSecreto = nombreAmigos[indiceAmigo];
        document.getElementById("ganador").innerText = `Tu amigo/a secreto es: ${AmigoSecreto}`;
    } else {
        // Si no hay amigos (longitud es 0), mostramos el mensaje de error.
        document.getElementById("ganador").innerText = "Agrega algunos amigos para sortear";
    }
}
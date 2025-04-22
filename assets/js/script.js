"use strict";

document.addEventListener("DOMContentLoaded", init);

// 1. Init-functie wordt opgeroepen zodra de pagina geladen is
function init() {
    console.log("De pagina is volledig geladen");

    // Koppelt de knop aan de functie addVak
    document.querySelector("#addButton").addEventListener("click", addVak);

    // Haalt bestaande vakken op uit de databank
    fetchVakken();
}

async function fetchVakken() {
    try {
        let response = await fetch("http://localhost:5688/vakken");

        let vakken = await response.json();

        displayVakken(vakken);
    } catch (error) {
        console.log("Fout bij het ophalen van vakken: ", error);
    }
}
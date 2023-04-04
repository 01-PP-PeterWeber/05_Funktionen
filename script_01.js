"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Daniel!");
}

/***** Funktionen 02a *****/
// 2a. Parametriesierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen()
{
    // what happens in VEGAS ... eine Variable die in einer Funktion deklariert wird, bleibt "nur" dort deklariert 
    let firstName = "Peter";
    console.log("Hallo " + firstName + "!");
}
// console.log(firstName);  // Fehler: Scope!


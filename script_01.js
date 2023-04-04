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

// ausgabeNamen();

function ausgabeNamen()
{
    // what happens in VEGAS ... eine Variable die in einer Funktion deklariert wird, bleibt "nur" dort deklariert 
    let firstName = "Peter";
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName);  // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Peter"); // Call + Argument(e)
// ausgabeNamenParam("Evtim");
// ausgabeNamenParam("Joe");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Funktion mit Parameter
{
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Wizzy","Wizzrd");
// ausgabeNamenParams(prompt("Vorname?: "), prompt("Nachnamen?: "));

function ausgabeNamenParams(firstName, familyName)
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle


ausgabeNamenParams2("Peter", "Weber");

function ausgabeNamenParams2(firstName, familyName)
{
    // 1. Funktionalität: string composing
    const gap = " ";
    let str = "Hallo" + gap + firstName + gap + familyName + "!"

    // 2. Funktionalität: string output
    console.log(str);
}

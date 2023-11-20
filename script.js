//==== CONDITIONS =======    Pirma užduotis
// 
// Paklauskite prekės kainos ir atspausdinkite tokį rezultatą:

// Prekės kaina su PVM: xx.xx €
// PVM: xx.xx €
// Prekės kaina be PVM: xx.xx €

// Suapvalinkite iki 2 skaičių po kablelio.
// PVM = 21%

// Kad atspausdinti tekstą ir kintamąjį vienoje eilutėje naudokite console.log("Prekės kaina su PVM: " + kaina + "€")

// Papildomai:
// Jeigu įvestas ne skaičius, o tekstas, pakartotinai klausti kainos

var kokiaKaina = prompt("Įveskite kainą")
var kainaAsNumber = parseFloat(kokiaKaina);
var pvm = ((kainaAsNumber / 100) * 21)
var suPvm = (kainaAsNumber + pvm)

if (isNaN(kokiaKaina)) {
alert("it's not a number") 

 } else {

// su pvm
alert ("Prekės kaina su PVM: " + " " + suPvm.toFixed(2) + " " + "€" )
console.log("Prekės kaina su PVM: " + " " + suPvm.toFixed(2) + " " + "€")

// pvm
alert ("PVM: " + " " + pvm.toFixed(2) + " " + "€" )
console.log("PVM: " + " " + pvm.toFixed(2) + " " + "€")

// pvm
alert ("Prekės kaina be PVM: " + " " + kainaAsNumber.toFixed(2) + " " + "€" )
console.log("Prekės kaina be PVM: " + " " + kainaAsNumber.toFixed(2) + " " + "€")
}


// ==== CONDITIONS =======    Antra užduotis
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti;
// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Jei prekės kaina daugiau arba lygu 50€ arba miestas yra "Vilnius"- pristatymas nemokamas. Pristatymas kitur Lietuvoje: 20€;


//Galiausiai atspausdintų tokią informaciją:

// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

// 3 variantas (su nemokamu pristatymu)

// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.


var pristatymoKaina = 20
var prekesKaina = prompt("Įveskite prekės kainą")
var prekesKainaNumber = parseFloat(prekesKaina);
var total = (pristatymoKaina + prekesKainaNumber)



const pristatymas = confirm ("Ar reikalingas pristatymas į namus? ")


      // nemokomas pristatymas


    if (miestas == "Vilnius" || prekesKaina >= 50 && pristatymas == true ){
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
    console.log("Prekės kaina: " + prekesKaina + "€")
    console.log("Prekę nemokamai pristatysime į " + miestas + " per 1-3 dienas.") }


     // be pristatymo

    else if (pristatymas == false ) {
        console.log("Prekės kaina: " + prekesKaina + " €")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")}

        // mokomas pristatymas

     else if (miestas != "Vilnius" || prekesKaina < 50 ) { 

        console.log("Pristatymas: " + pristatymoKaina + " €")
        console.log("Iš viso: " + total + " €")    
        console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.")    
}
    

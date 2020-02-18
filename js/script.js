// Chiedere quanti km vuole percorrere
// Chiedere età passeggero
// Calcolare il prezzo per km
// Si calcola il 20% e il 40% del prezzo totale
// Si fa un intervallo dove i minorenni hanno un prezzo con -20%
// Si fa intervallo dove gli over65 hanno un prezzo con -40%


var km = prompt( "Quanti km vuoi percorrere?" );
console.log( km );
var eta = prompt( "Quanti anni hai?" );
console.log( eta );
var prezzoKm = 0.21;
var prezzoTot = ( km * prezzoKm ); // Qui potrei mettere un math.round ma preferisco arrotondare tutte le cifre finali
console.log( prezzoTot );
var scontoVenti = ( prezzoTot * 20 / 100 );
console.log( scontoVenti);
var scontoQuaranta = ( prezzoTot * 40 / 100 );
console.log(scontoQuaranta);
var prezzoMinor = ( prezzoTot - scontoVenti );
var prezzoOver = ( prezzoTot - scontoQuaranta );

if ( eta < 18 ) {
    console.log( Math.round( prezzoMinor ) );
}
else if ( eta > 65 ) {
    console.log( Math.round( prezzoOver ) );
}
else {
    console.log( Math.round(prezzoTot) );
}

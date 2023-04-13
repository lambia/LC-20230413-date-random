let sceltaUtente = prompt("Scegli: pari o dispari");

// Restituisce un numero tra 0 e 9, poi aggiunge uno => numero tra 1 e 10
let numeroCasuale = Math.floor( Math.random() * 10 ) + 1;

let risultato;

console.log("Numero estratto: " , numeroCasuale);

if (numeroCasuale % 2 == 0) {

    console.log("PARI!");
    risultato = "pari";

} else {

    console.log("DISPARI!");
    risultato = "dispari";

}

if(sceltaUtente == risultato) {
    alert(`Il numero estratto è ${numeroCasuale} (${risultato}), quindi hai vinto`);
} else {
    alert(`Il numero estratto è ${numeroCasuale} (${risultato}), quindi hai perso`);
}
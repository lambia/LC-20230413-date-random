let minutiInUnOra = 60;
const dataAttuale = new Date();
let minutoAttuale = dataAttuale.getMinutes();

let minutiMancanti = minutiInUnOra - minutoAttuale;

alert("Mancano " + minutiMancanti + " minuti alla fine dell'ora.");
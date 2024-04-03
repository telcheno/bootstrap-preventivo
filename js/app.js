console.log("ciao ");

// recupero elementi del DOM con il tipo di "VALORE" e lo "SCOPE" delle variabili
// asegno il valore degli elementi perrichiamarli
const nomeElementForm = document.getElementById("nome")//stringa
// console.dir(nomeElementForm);

const cognomeElementForm = document.getElementById("cognome")
// const cognome = cognomeElementForm.value;//stringa
console.dir(cognomeElementForm);


const emailElementForm = document.getElementById("email")
// console.dir(emailElementForm);
// const email = emailElementForm.value;//stringa

// elementi per il calcolo del preventivo
// tipo di lavoro da clacolare
const prestazioniElementForm = document.getElementById("prestazione")
// console.dir(prestazioniElementForm);


//descrizione del lavoro
const descrizioneElementForm = document.getElementById("descrizione")

//codici per lo sconro da calcorare
const codePromoElementForm = document.getElementById("code-promo")
// console.dir(codePromoElementForm);

//prezzo da stampare nel html
const prezzoElementForm = document.getElementById("prezzo")
// console.dir(prezzoElementForm);

//section form  
const preventivoElementForm = document.getElementById("from-preventivo");
// console.dir(preventivoElementForm);

preventivoElementForm.addEventListener("submit", function(event){
  event.preventDefault();
  const scelta = prestazioniElementForm.value;
  const codidePromo = codePromoElementForm.value;
  const costoOraLavoro = 0 //numbersa

})

//





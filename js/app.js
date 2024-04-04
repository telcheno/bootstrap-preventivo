console.log("ciao ");

// recupero elementi del DOM con il tipo di "VALORE" e lo "SCOPE" delle variabili
// asegno il valore degli elementi perrichiamarli
const nomeElementForm = document.getElementById("nome")//stringa
// console.dir(nomeElementForm);

const cognomeElementForm = document.getElementById("cognome")
// console.dir(cognomeElementForm);


const emailElementForm = document.getElementById("email")
// console.dir(emailElementForm);

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

//agiungo eveneto "submti" al elemento form
preventivoElementForm.addEventListener("submit", function(event){

  //bloco il "event.preventDefault()" del from 
  event.preventDefault();

  //recupero i "value" de gli elementi 
  const scelta = prestazioniElementForm.value;//string
  const codidePromo = codePromoElementForm.value;//string
  let costoOraLavoro = 0 //number
  let tempoLavoro = 10 //number
  let prezzoBase = 0 //number
    
  //condizionale per il consto per ogni prestazione

  //SE "scelta" e === "backend"
  if (scelta === "backend"){
  //--"costoOraLavoro" = 20.50
    costoOraLavoro = 20.50
    console.log(costoOraLavoro);
  //ALTRIMENTI SE "scelta" === "fronted"" 
  }else if (scelta === "fronted"){
      //--"costoOraLavoro" = 15.30
      costoOraLavoro = 15.30
      console.log(costoOraLavoro);
  //ALTRIMENTI SE "scelta" === "analisi"
  }else if (scelta === "analisi") {
      //--"costoOraLavoro" = 33.60
    costoOraLavoro = 33.60
    console.log(costoOraLavoro);  
  // ALTRIMENTI
  }else{
    //--invio "alert" per informare che si deve scegliere un opzione
    alert("Per il calcolo del preventivo devi scegliere una opzione di lavoro")
  }

  //controlo del inserimento del codice promozionale
  //creo un "array" con i codici promo da controlare
  //creo una variabile con  "codice cliente" con il varore "false"  pre controlo iterazione
  //creo variabile "sconto" = 0
  //facio un ciclo "for" per confrontare il "codice cliente" con il "codigo promo"
  //"indice corrent" = indice del "array"
  //--con una condizionale
  //--SE "codice cliente" === "indice corrente" 
  //--"codice cliente" = true
  //--"sconto" = 25%
  //ALTRIMENTI
  //--"sconto" = 0
})






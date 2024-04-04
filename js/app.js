console.log("ciao ");

                //RECUPERO ELEMENTI DEL DOM CON IL TIPO DI "VALORE"

// asegno il valore degli elementi perrichiamarli
const nomeElementForm = document.getElementById("nome");//stringa

const cognomeElementForm = document.getElementById("cognome");//stringa

const emailElementForm = document.getElementById("email");//stringa

                //ELEMENTI PER IL CALCOLO DEL PREVENTIVO

// tipo di lavoro da clacolare
const prestazioniElementForm = document.getElementById("prestazione");//stringa

//descrizione del lavoro
const descrizioneElementForm = document.getElementById("descrizione");//stringa

//codici per lo sconro da calcorare
const codePromoElementForm = document.getElementById("code-promo");//stringa

//prezzo da stampare nel html
const prezzoElementForm = document.getElementById("prezzo");//stringa

                        //SECTION FORM

const preventivoElementForm = document.getElementById("from-preventivo");//stringa
// console.dir(preventivoElementForm);

//agiungo eveneto "submti" al elemento form
preventivoElementForm.addEventListener("submit", function(event){

  //bloco il "event.preventDefault()" del from 
  event.preventDefault();

  //recupero i "value" de gli elementi 
  const scelta = prestazioniElementForm.value;//string
  const codidePromo = codePromoElementForm.value;//string

  //variabili info
  let costoOraLavoro = 0; //number
  let tempoLavoro = 10; //number
  let prezzoBase = 0; //number
    
          //CONDIZIONALE PER LA SCELTA DELLA PRESTAZIONE E ASSEGNAZIONE COSTO ORARIO

  //SE "scelta" e === "backend"
  if (scelta === "backend"){
  //--"costoOraLavoro" = 20.50
    costoOraLavoro = 20.50

  //ALTRIMENTI SE "scelta" === "fronted"" 
  }else if (scelta === "fronted"){
      //--"costoOraLavoro" = 15.30
      costoOraLavoro = 15.30
      
  //ALTRIMENTI SE "scelta" === "analisi"
  }else if (scelta === "analisi") {
      //--"costoOraLavoro" = 33.60
    costoOraLavoro = 33.60

  // ALTRIMENTI
  }else{
    //--invio "alert" per informare che si deve scegliere un opzione
    alert("Per il calcolo del preventivo devi scegliere una opzione di lavoro");
  }

            //CONTROLLO DEL CODICE PROMOZIONALE

  //creo un "array" con i codici promo da controlare
  const codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

  //creo una variabile con  "codice cliente"
  const codSconto = codePromoElementForm.value;

  //creo variabile "sconto" = 0
  let percentualeSconto = 0;//NUMBER

  //facio un ciclo "for" per confrontare il "codice cliente" con il "codigo promo"
  for(let i = 0; i < codiciPromo.length; i++){
    //"indice corrent" = indice del "array"
    const codiceCorrente = codiciPromo[i];

          //USO UNA CONDIZIONALE
    //--SE "codice cliente" === "indice corrente" 
    if (codiceCorrente === codSconto){
      //--"sconto" = 25%
      percentualeSconto = 2.5;
    }

           //CREO UNA FUNCTIONPER IL CALCOLO DEL PERVENTIVO
    
  }
})






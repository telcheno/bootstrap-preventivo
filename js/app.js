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

//creo un "array" con i codici promo da controlare
const codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//prezzo da stampare nel html
const prezzoElementForm = document.getElementById("prezzo-tbody");//stringa



                          //SECTION FORM

const preventivoElementForm = document.getElementById("from-preventivo");//stringa
// console.dir(preventivoElementForm

//agiungo eveneto "submti" al elemento form
preventivoElementForm.addEventListener("submit", function(event){

  //bloco il "event.preventDefault()" del from 
  event.preventDefault();

  //recupero i "value" de gli elementi 
  const scelta = prestazioniElementForm.value;//string
  const codidePromo = codePromoElementForm.value;//string
  //variabili info

  let costoOraLavoro = 0; //number
  let tempoLavoro = 8.00; //number
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
//creo una variabile con  "codice cliente"
const codSconto = codePromoElementForm.value;

//creo variabile "sconto" = 0
let percentualeSconto = 0;//number
let codiceValido = false;//booleano

//facio un ciclo "for" per confrontare il "codice cliente" con il "codigo promo"
for(let i = 0; i < codiciPromo.length; i++){

    //USO UNA CONDIZIONALE DEFINIRE SE IL CODICE INSERITO E VALIDO 
    const codiceCorrente = codiciPromo[i];// stringa
    //SE "codice corrente" è === "codice soconto"
    if(codiceCorrente === codSconto){

      //"codice valido" diventa ture
      codiceValido = true;
    }
}

    //CREO UNA CONDIZIONALE PER  APLICARE LO SOCONTO
    //SE "cidice valido" è == ture
    if(codiceValido === true){
      //aplico "percentuale  di sconto" = 25
      percentualeSconto = 25;
      
      //ALRTIMENTI SE aviso che il "codice valido " !== true 
    }else if(codiceValido !== true){
      //aviso che il codice non è valido e que non si aplica lo sconto
      alert("Codice non valido, verra calcolato il preventivo senza sconto");

      //ALTRIMENTI
    }else{
      //"percentuale  di sconto" = 0
      percentualeSconto = 0;

    }



                                //CALCOLO DEL PERVENTIVO
//"prezzo base" = "costoOraLavoro" * "tempoLavoro"
prezzoBase = (costoOraLavoro * tempoLavoro).toFixed(2);

//"sconto" da aplicare
const valoreSconto = (prezzoBase * percentualeSconto / 100).toFixed(2);
console.log(valoreSconto);

//"prezzo scontato" = "prezzo base" * "percentuale sconto" / 100
const prezzoScontato = (prezzoBase - (prezzoBase * percentualeSconto / 100)).toFixed(2);
console.log(prezzoScontato);

//agiornamento prezzo nel HTML
//aggiungo al elemento html la funzione "innerHTML" per modificare il elemento
prezzoElementForm.innerHTML = `
<tr>
<td>Pezzo Base</td>
<td>€ ${prezzoBase.split(".")[0]}.<spam class="decimali">${prezzoBase.split(".")[1]}</td>
</tr>
<tr>
<td>Sconto</td>
<td>€ ${valoreSconto.split(".")[0]}.<spam class="decimali">${valoreSconto.split(".")[1]}</td>
</tr>
<tr>
<td>Totale Preventivo</td>
<td>€ ${prezzoScontato.split(".")[0]}.<spam class="decimali">${prezzoScontato.split(".")[1]}</spam></td>
</tr>
`;
})
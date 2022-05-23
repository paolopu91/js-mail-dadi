/*
Richiesta dell'esercizio sui dadi:
Gioco dei dadi
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

// Creiamo due allert, per far capire al giocatore cosa dovrà fare 
alert("Sei pronto a giocare un'emozionante partita a dadi?")
alert("Prima di iniziare a giocare contro altri player, dovrai battere il computer")

//Creiamo i due sfidanti
const humanPlayer = document.getElementById("btn-human");
const botPlayer = document.getElementById("btn-bot");

// creiamo il primo array di numeri casuali per il nostro giocatore umano
const numeriCasualiPlayer = [1,2,3,4,5,6]

 // creiamo il secondo array per il nostro bot
const numeriCasualiBot = [1,2,3,4,5,6]


//ora creiamo la condizine secondo cui l'utente cliccando genererà i numeri sulla pagina HTML
humanPlayer.addEventListener("click", function() {
    console.log ("Pulsante play cliccato")

    console.log("PlayerNumber")
for(i = 1; i<numeriCasualiPlayer.length; i++){
    
    // creo le mie variabili per avere numeri casuali
    let randomPlayer = Math.floor(Math.random () * numeriCasualiPlayer.length)
    let risultatoHuman = numeriCasualiPlayer[randomPlayer]
    console.log(risultatoHuman)

    // creo la condizione per far si che l'evento si veda in html dopo aver premuto il button gioca
    console.log(numeriCasualiPlayer[i])
    let resultListHuman = document.querySelector(".result-list-human")
    resultListHuman.innerHTML ="";
    resultListHuman.innerHTML = risultatoHuman;

}


})

//ora creiamo la condizine secondo cui l'utente cliccando genererà i numeri sulla pagina HTML
botPlayer.addEventListener("click", function(){
    console.log("Pulsante Play cliccato")

    console.log("BotNumber")
for(i = 1 ; i<numeriCasualiBot.length; i++){
   
    // creo le mie variabili per avere numeri casuali
    let randomBot = Math.floor(Math.random() * numeriCasualiBot.length)
    let risultatoBot = numeriCasualiBot[randomBot]
    console.log(risultatoBot)

    // creo la condizione per far si che l'evento si veda in html dopo aver premuto il button gioca
    console.log(numeriCasualiBot[i])
    let resultListBot = document.querySelector(".result-list-bot")
    resultListBot.innerHTML="";
    resultListBot.innerHTML = risultatoBot;

}

})






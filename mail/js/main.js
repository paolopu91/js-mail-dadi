/*
Esercizio richiesta
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)
*/




//Chiediamo all'utente di scrivere la sua mail
const emailUtente = prompt("Quale è la sua mail?")

//Scriviamo il nostro database di mail che possediamo
const dataBaseMail =["federica@gmail.com","giulia@gmail.com","matteo@gmail.com", "paolo@gmail.com", "federico@gmail.com","laura@gmail.com","jacopo@gmail.com", "laura@gmail.com","marco@gmail.com","fulvio@gmail.com","francesca@gmail.com"]

let emailTrovata = -1;

//Controlliamo se l'email dell'utente è nel nostro database tramite un ciclo
for(let i=0; i<dataBaseMail.length; i++){

    //Creiamo la prima condizione se la nostra mail è presente nell'archivio
    //Subito sotto creiamo invece la condizione se la nostra mail non è presente nell'archivio
    if(emailUtente != dataBaseMail[i]){
        emailTrovata = i;
        console.log("La sua mail " +emailUtente + " non è presente nel nostro archivio" )
        
     }else{
         emailTrovata = i;
       console.log("La sua mail " + emailUtente + " è presente in archivio " + emailTrovata)
    }
}
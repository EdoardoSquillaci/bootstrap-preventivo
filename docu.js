'use strict';



//evento click


document.getElementById('form').addEventListener('submit', function(event){

event.preventDefault();


//valore campo input nome
const name = document.getElementById('name-input').value

//esclusione cratteri speciali

function nameValid(name){

const caratteriEsclusi = /^[a-zA-Z]+$/;

return caratteriEsclusi.test(name)
}

//valudazione campo input nome
if(!name){
    document.getElementById('errore-nome').textContent = 'il campo nome è obbligatorio';
    return
}else if (!nameValid(name)){
document.getElementById('errore-nome').textContent = 'il campo non può contenere caratteri speciali ne numeri'
return

}else{
    document.getElementById('errore-nome').textContent = '';
}

const nameValue = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();



console.log(nameValue)


//valore campo input cognome


const surname = document.getElementById('surname-input').value;


//richiamo funzione
nameValid(surname);

//validazione campo input cognome
if(!surname){
    document.getElementById('errore-cognome').textContent= 'Il campo cognome è obbligatorio';
    return

}else if (!nameValid(surname)){
    document.getElementById('errore-cognome').textContent= 'il campo cognome non può contenere caratteri speciali e numeri'
    return

}else{
    document.getElementById('errore-cognome').textContent= ''
}


const surnameValue= surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();


console.log(surnameValue)



//validazione campo email

let emailValue = document.getElementById('input-email').value

if(!emailValue){
    document.getElementById('errore-email').textContent = 'Devi Inserire una mail per poter inviare il form'
    return
}else{
    document.getElementById('errore-email').textContent = ''

}


//prendo il valore dell'input select

let typeJob = parseInt(document.getElementById('input-select').value,10)

console.log(typeJob)

//Prendo il valore dell'input numero

let hourNumber = parseFloat(document.getElementById('input-number').value);

console.log(hourNumber)


//validazione input numero

if(hourNumber > 30){
    document.getElementById('errore-number').textContent = 'Il Massimo di ore da poter inserire per un progetto è di 30';
   return
}else if(!hourNumber){
    document.getElementById('errore-number').textContent = 'Devi Inserire il minimo di 1 ora Per poter Inviare il form';
    return
}else{
    document.getElementById('errore-number').textContent = '';

}



//Tariffe

const Tariffe= [20.50, 15.30, 33.60 ];


//titolo prezzo
const priceTitle=document.getElementById('price-title');

//contenitore prezzo
let prezzo;

//logica di calcolo
switch (typeJob){

    case 1:

    prezzo = Tariffe[0] * hourNumber;

    priceTitle.classList.remove('d-none')

   document.getElementById('price-normal').textContent = prezzo


   break



   case 2:

   prezzo = Tariffe[1] * hourNumber;

   priceTitle.classList.remove('d-none')

   document.getElementById('price-normal').textContent = prezzo
   
   break

   case 3:


    prezzo = Tariffe[2] * hourNumber;

    priceTitle.classList.remove('d-none')

   document.getElementById('price-normal').textContent = prezzo

   break

   default:

   document.getElementById('price-title').textContent = 'Devi Selezionare un Servizio per poter visualizzare il prezzo.'

   return

}

//Codice Promo

const codicePromo = 'YHDNU32';

const PromoValue = document.getElementById('promo-input').value

//condizione per cui si verifica lo sconto
if(PromoValue === codicePromo){

    prezzo = prezzo - ([prezzo * 25] / 100)
    document.getElementById('price-normal').textContent = prezzo.toFixed(2)
}

prezzo = parseFloat(Number(prezzo.toFixed(2)));


})//fine esercizio


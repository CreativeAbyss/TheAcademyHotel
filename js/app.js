'use strict';

// check errors 
// const urlLink =  "https://hooks.zapier.com/hook/5974604/ojflewq/?authkey=0x86Bd77318bA4524F8Ad22A1E2827A53a99561"

const urlLink =  "https://hooks.zapier.com/hooks/catch/5974604/ojflewq/?authkey=0x86Bd77318bA4524F8Ad22A1E2897A27A53a99561"

const vnaamVeld = document.querySelector("#v-naam");
const anaamVeld = document.querySelector("#a-naam");
const emailVeld = document.querySelector("#email");
const aDatumVeld = document.querySelector("#a-date");
const vDatumVeld = document.querySelector("#v-date");

const reserveerknop = document.querySelector("#reserveer");

const checkError = function(response) {
  if(!response.ok) {
    throw (response.status + ": " + response.statusText);
  }
  return response.json();
}

const succes = function(data) {
  console.log(data)
  window.location = "succes.html"
}

const createRequest = function(url){
  fetch(url, {
    method: "POST",
  })
    .then((response) =>  checkError(response))
    .then((data) => succes(data));
}

const checkCompletion = function(){
  
        const requestUrl = urlLink + 
        "&voorNaam=" + vnaamVeld.value + 
        "&achterNaam=" + anaamVeld.value + 
        "&email=" + emailVeld.value + 
        "&aankomstDatum=" + aDatumVeld.value +
        "&vertrekDatum=" + vDatumVeld.value +
        "&kamerType=" + bevestigKamer.innerHTML; 
                  
        createRequest(requestUrl)
      }
      



reserveerknop.addEventListener("click", checkCompletion);





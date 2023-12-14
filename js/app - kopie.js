'use strict';


// https://www.smarty.com/products/apis/us-street-api

// api key:
// 134125996660313808

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=134125996660313808&candidates=10';



const adresveld = document.querySelector("#adres");
const plaatsveld = document.querySelector("#plaats");

const postcodeveld = document.querySelector("#postcode");


const smartyUpdateUISuccess = function(data) {
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  let zip = parsedData[0].components.zipcode;
  let plus4 = parsedData[0].components.plus4_code;
  console.log(zip + "_" + plus4);
  postcodeveld.value = zip + "_" + plus4;
};

// const smartyUpdateUIError = function(error) {
//   console.log(error);
// };

// const handleErrors = function(response) {
//   if(!response.ok) {
//     throw (response.status + ": " + response.statusText);
//   } 
//   return response.json();
// }

const createRequest = function(url, succeed){
  fetch(url)
    .then((response) =>  response.json())
    .then((data) => succeed(data))
    // .catch((error) => fail(error));
}

const checkCompletion = function(){
  if (adresveld.value !== "" &&
      plaatsveld.value !== "" ) {
        const requestUrl = smartyUrl + "&street=" + adresveld.value + "&city=" + plaatsveld.value; 
          createRequest(requestUrl, smartyUpdateUISuccess)
          console.log(requestUrl)
      }
      ;
}


adresveld.addEventListener("blur", checkCompletion);
plaatsveld.addEventListener("blur", checkCompletion);




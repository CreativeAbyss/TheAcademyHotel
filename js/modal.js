
/******************** Gevevens nemen van ******************/
const modalVnaam = document.querySelector("#v-naam");
const modalAnaam = document.querySelector("#a-naam");
const modalMan = document.querySelector("#man");
const modalVrouw = document.querySelector("#vrouw");
const modalAdres = document.querySelector("#adres");
const modalPost = document.querySelector("#postcode");
const modalPlaats = document.querySelector("#plaats");
const modalLand = document.querySelector("#land");
const modalEmail = document.querySelector("#email");
const modalAdate = document.querySelector("#a-date");
const modalVdate = document.querySelector("#v-date");
const modalAantal = document.querySelector("#aantal");



/****************Gegevens plaatsen in overvieuw**************/
const overzichtVoornaam = document.querySelector("#overzichtVoornaam");
const overzichtAchternaam = document.querySelector("#overzichtAchternaam");
const overzichtGeslacht = document.querySelector("#overzichtGeslacht");
const overzichtAdres = document.querySelector("#overzichtAdres");
const overzichtPost = document.querySelector("#overzichtPostcode");
const overzichtPlaats = document.querySelector("#overzichtPlaats");
const overzichtLand = document.querySelector("#overzichtLand");
const overzichtEmail = document.querySelector("#overzichtEmail");
const overzichtAankomst = document.querySelector("#overzichtAankomst");
const overzichtVertrek = document.querySelector("#overzichtVertrek");
const overzichtKamers = document.querySelector("#overzichtKamers");


/********************** Modal **************************/
const modal = document.querySelector("#modal")

/***********************  Button Reference   ***********************/
const res1 = document.querySelector("#reserveer")
const modalAnnuleer = document.querySelector("#annuleerModal")


function openModal(){
    let overviewVnaam = modalVnaam.value;
    let overviewAnaam = modalAnaam.value;
    let overviewEmail = modalEmail.value;
    let overviewAdate = modalAdate.value;
    let overviewVdate = modalVdate.value;
    let overviewAantal = modalAantal.value;
    let overviewLand = modalLand.value;
    let overviewAdres = modalAdres.value;
    let overviewPost = modalPost.value;
    let overviewPlaats = modalPlaats.value;
    let man = modalMan.checked;
    let vrouw = modalVrouw.checked;
    if (modalVnaam.value != "" && modalAnaam.value != "" && modalEmail.value != "" && 
        modalAdate.value != "" && modalVdate.value != "" && modalAantal.value != ""){
            
            modal.style.display = "block";

            overzichtVoornaam.innerHTML = "Voornaam: &nbsp;&nbsp;" + overviewVnaam;
            overzichtAchternaam.innerHTML = "Achternaam: &nbsp;&nbsp;" + overviewAnaam;
            overzichtEmail.innerHTML = "Email: &nbsp;&nbsp;" + overviewEmail;
            overzichtAankomst.innerHTML = "Aankomstdatum: &nbsp;&nbsp;" + overviewAdate;
            overzichtVertrek.innerHTML = "Vertrekdatum: &nbsp;&nbsp;" + overviewVdate;
            overzichtKamers.innerHTML = "Kamers: &nbsp;&nbsp;" + overviewAantal;
       } if (man){
            overzichtGeslacht.innerHTML = "Geslacht: &nbsp;&nbsp; Man";
       } else if (vrouw){
            overzichtGeslacht.innerHTML = "Geslacht: &nbsp;&nbsp; Vrouw";
       } if (modalLand){
            overzichtLand.innerHTML = "Land: &nbsp;&nbsp;" + overviewLand;
       } if (modalAdres){
            overzichtAdres.innerHTML = "Adres: &nbsp;&nbsp;" + overviewAdres;
       } if (modalPost){
            overzichtPost.innerHTML = "Postcode: &nbsp;&nbsp;" + overviewPost;
       } if (modalPlaats){
            overzichtPlaats.innerHTML = "Plaats:&nbsp;&nbsp; " + overviewPlaats;
       }
    }


modalVnaam.addEventListener("keypress", function(){overView();}, false);


modalAnnuleer.addEventListener("click", function(){
     modal.style.display = "none"; 
});





     
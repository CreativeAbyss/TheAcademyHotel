const aankomst = document.querySelector("#a-date");

const vertrek = document.querySelector("#v-date");



function adatumchecker() {

    let datum = new Date().setHours(0,0,0,0);
    let inputadatum = new Date(aankomst.value).setHours(0,0,0,0);
    if ( inputadatum < datum ) {
        alert("Controleer je aankomstdatum");
        aankomst.value = "";
    }
 }

 function vdatumchecker() {

    let datum = new Date().setHours(0,0,0,0);
    let inputadatum = new Date(aankomst.value).setHours(0,0,0,0);
    let inputvdatum = new Date(vertrek.value).setHours(0,0,0,0);

    if (inputadatum >= inputvdatum || inputvdatum < datum) {
        alert("Controleer je vertrekdatum");
        vertrek.value = "";
    } 
}


aankomst.addEventListener("blur", function(){
    adatumchecker();
}, false);

vertrek.addEventListener("blur", function(){
    vdatumchecker();
}, false);









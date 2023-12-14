// --------------------------------------------VARIABLES--------------------------------------------------

const standaardRes = document.getElementById("reserveerStandaard");
const familieRes = document.getElementById("reserveerFamilie");
const suiteRes = document.getElementById("reserveerSuite");
const annuleer = document.getElementById("annuleerBtn");

const standaardKam = document.getElementById("standaardKamer");
const familieKam = document.getElementById("familieKamer");
const suiteKam = document.getElementById("suite");
const gegevens = document.getElementById("gegevens");
const bevestig = document.getElementById("bevestiging");
const bevestigingkamers = document.getElementById("bevestigKamers");

const bevestigKamer = document.getElementById("resstandaardKamer");
const bevestigFoto = document.getElementById("bevestigImage");
const bevestigshortDesc = document.getElementById("shortDesc");
const bevestiglongDesc = document.getElementById("longDesc");

const sectionKamers = document.getElementById("kamers");

// --------------------------------------------CODE--------------------------------------------------

bevestigingkamers.style.display = "none";

function reserveer(type) {
switch (type){
    case "reserveerStandaard":
        bevestigKamer.innerHTML = standaardKamer.roomType;
        bevestigFoto.setAttribute("src", standaardKamer.roomImg);
        bevestigshortDesc.innerHTML = standaardKamer.roomShortDesc;
        bevestiglongDesc.innerHTML = standaardKamer.roomLongDesc;
        break;
    case "reserveerFamilie":
        bevestigKamer.innerHTML = familieKamer.roomType;
        bevestigFoto.setAttribute("src", familieKamer.roomImg);
        bevestigshortDesc.innerHTML = familieKamer.roomShortDesc;
        bevestiglongDesc.innerHTML = familieKamer.roomLongDesc;
        break;
    case "reserveerSuite":
        bevestigKamer.innerHTML = suite.roomType;
        bevestigFoto.setAttribute("src", suite.roomImg);
        bevestigshortDesc.innerHTML = suite.roomShortDesc;
        bevestiglongDesc.innerHTML = suite.roomLongDesc;
        break;
}
bevestigingkamers.style.display = "block";
gegevens.style.display = "block";
bevestig.style.display = "block";
sectionKamers.style.display = "none"
}

function annuleerBtn() {
        let confirm = window.confirm("Weet je zeker dat je het reserveren wilt annuleren..??");

        if(confirm){ 
            sectionKamers.style.display = "flex";
            gegevens.style.display = "none";
            bevestig.style.display = "none";
            bevestigingkamers.style.display = "none";
            gegevens.reset()
        }      
}

// ------------------------------------Call function---------------------------

standaardRes.onclick = function() {
    reserveer("reserveerStandaard")
}
familieRes.onclick = function() {
    reserveer("reserveerFamilie")
}
suiteRes.onclick = function() {
    reserveer("reserveerSuite")
}
annuleer.onclick = function() {
    annuleerBtn()
}




let db;
const voorNaamInput = document.querySelector("#v-naam");
const achterNaamInput = document.querySelector("#a-naam");
const adresInput = document.querySelector("#adres");
const postCodeInput = document.querySelector("#postcode");
const plaatsInput = document.querySelector("#plaats");
const landInput = document.querySelector("#land");
const emailInput = document.querySelector("#email");
const aankomstInput = document.querySelector("#a-date");
const vertrekInput = document.querySelector("#v-date");
const kamersInput = document.querySelector("#aantal");

const form = document.querySelector("#gegevens");


window.onload = () => {
  let request = window.indexedDB.open("contacts", 1);

  request.onerror = function () {
    console.log("Database failed to open");
  };

  request.onsuccess = function () {
    console.log("Database opened succesfully");

    db = request.result;
    
  };

  request.onupgradeneeded = function (e) {
    let db = e.target.result;

    let objectStore = db.createObjectStore("contacts", {
      keyPath: "id",
      autoIncrement: true,
    });

    objectStore.createIndex("Voornaam", "Voornaam", { unique: false });
    objectStore.createIndex("Achternaam", "Achternaam", { unique: false });
    objectStore.createIndex("Adres", "Adres", { unique: false });
    objectStore.createIndex("Postcode", "Postcode", { unique: false });
    objectStore.createIndex("Plaats", "Plaats", { unique: false });
    objectStore.createIndex("Land", "Land", { unique: false });
    objectStore.createIndex("Email", "Email", { unique: false });
    objectStore.createIndex("Aankomst", "Aankomst", { unique: false });
    objectStore.createIndex("Vertrek", "Vertrek", { unique: false });
    objectStore.createIndex("Kamers", "Kamers", { unique: false });

    console.log("Database setup complete");
  };

  form.onsubmit = addData;

  function addData(e) {
    e.preventDefault();

    let newItem = {
      Voornaam: voorNaamInput.value,
      Achternaam: achterNaamInput.value,
      Adres: adresInput.value,
      Postcode: postCodeInput.value,
      Plaats: plaatsInput.value,
      Land: landInput.value,
      Email: emailInput.value,
      Aankomst: aankomstInput.value,
      Vertrek: vertrekInput.value,
      Kamers: kamersInput.value
    };

    let transaction = db.transaction(["contacts"], "readwrite");
    let objectStore = transaction.objectStore("contacts");
    let request = objectStore.add(newItem);

    request.onsuccess = () => {
      voorNaamInput.value = "";
      achterNaamInput.value = "";
      adresInput.value = "";
      postCodeInput.value = "";
      plaatsInput.value = "";
      landInput.value = "";
      emailInput.value = "";
      aankomstInput.value = "";
      vertrekInput.value = "";
      kamersInput.value = "";
    
    };

    transaction.oncomplete = () => {
        
      console.log("Transaction completed on the database");
        
    
    };

    transaction.onerror = () => {
      console.log("Transaction not completed, error!!!");
    };
  }



};

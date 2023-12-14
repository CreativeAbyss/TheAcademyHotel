let db;
const list = document.querySelector("section ul");

window.onload = () => {
    let request = window.indexedDB.open("contacts", 1);
    
    request.onerror = function () {
        console.log("Database failed to open");
      };
    
      request.onsuccess = function () {
        console.log("Database opened succesfully");
    
        db = request.result;
        displayData();
      };
      
function displayData(){
    
      while(list.firstChild){
          list.removeChild(list.firstChild);
      }
      
      let objectStore = db.transaction("contacts").objectStore("contacts")
      objectStore.openCursor().onsuccess = function(e) {
          let cursor = e.target.result;

          if(cursor) {
              let listItem = document.createElement("li");
              
              let voor = document.createElement("p");
              let achter = document.createElement("p");
              let adres = document.createElement("p");
              let post = document.createElement("p");
              let plaats = document.createElement("p");
              let land = document.createElement("p");
              let email = document.createElement("p");
              let aankomst = document.createElement("p");
              let vertrek = document.createElement("p");
              let kamers = document.createElement("p");

              listItem.appendChild(voor);
              listItem.appendChild(achter);
              listItem.appendChild(adres);
              listItem.appendChild(post);
              listItem.appendChild(plaats);
              listItem.appendChild(land);
              listItem.appendChild(email);
              listItem.appendChild(aankomst);
              listItem.appendChild(vertrek);
              listItem.appendChild(kamers);

              list.appendChild(listItem);

              voor.textContent = "Voornaam:" + cursor.value.Voornaam;
              achter.textContent = "Achternaam:" + cursor.value.Achternaam;
              adres.textContent = "Adres:"  + cursor.value.Adres;
              post.textContent = "Postcode:" + cursor.value.Postcode;
              plaats.textContent = "Plaats:" + cursor.value.Plaats;
              land.textContent = "Land:" + cursor.value.Land; 
              email.textContent = "Email:" + cursor.value.Email;
              aankomst.textContent = "Aankomst:" + cursor.value.Aankomst;
              vertrek.textContent = "Vertrek:" + cursor.value.Vertrek;
              kamers.textContent = "Aantal kamers:" + cursor.value.Kamers;

              listItem.setAttribute("data-contact-id", cursor.value.id);

              let deleteButton = document.createElement("button");
              listItem.appendChild(deleteButton);
              deleteButton.textContent = "Delete";

              deleteButton.onclick = deleteItem;

              cursor.continue();

          } else {

              if(!list.firstChild) {
                   let listItem = document.createElement("li");
                  listItem.textContent = "No contacts store. "
                  list.appendChild(listItem)
              }
          }
       console.log("contacts displayed with succes !!");
      }
  }


}
  function deleteItem(e){
      let contactId = Number(e.target.parentNode.getAttribute("data-contact-id"));

      let transaction = db.transaction(["contacts"], "readwrite");
      let objectStore = transaction.objectStore("contacts");
      let request = objectStore.delete(contactId);

      transaction.oncomplete = () => {
          e.target.parentNode.parentNode.removeChild(e.target.parentNode);

          console.log(`${contactId} is deleted! `);

          if(!list.firstChild) {
              let listItem = document.createElement("li");
              listItem.textContent = "No contacts store. "
              list.appendChild(listItem)
          }
      };
  }
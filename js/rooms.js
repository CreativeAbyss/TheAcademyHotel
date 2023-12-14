function Room(roomType, roomImg, roomShortDesc, roomLongDesc,) {
    this.roomType = roomType;
    this.roomImg = roomImg
    this.roomShortDesc = roomShortDesc
    this.roomLongDesc = roomLongDesc
    

}

var standaardKamer = new Room("Standaard kamer", "images/standaardkamer.jpg", "Dit is een stanaard kamer voor een standaard prijs.", 
                                "Deze kamer beschikt over twinbedden, een zithoekje met twee stoelen en een tafeltje, een tv met een bureau eronder en een badkamer met douche/bad, wasbak en een toilet",)

var familieKamer = new Room("Familie kamer", "images/familiekamer.jpg", "Ben je met je hele familie? dan hebben wij de perfecte kamer.", 
                                "Deze hotel kamer bestaat uit 5 kamers, een woongedeelte met een bank, tafeltje, tv, eet tafel, toilet, en een trap voor de boven verdieping naar de 3 slaapkamers en badkamer.",)
                                
var suite = new Room("Suite", "images/suitekamer.jpg", "Ben je samen met je liefde? dan hebben wij de perfecte kamer.", 
                        "Deze suite bestaat uit 3 kamers. Een woongedeelte met een bank, eettafel, keuken en tv. Een slaap gedeelte met een twee persoons bed en badkamer",)

console.log(standaardKamer);
console.log(familieKamer);
console.log(suite);


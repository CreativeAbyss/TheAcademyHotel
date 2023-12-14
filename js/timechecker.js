
const timedTtl = document.getElementById("time-ttl")


const date = new Date()

let hr = date.getHours();

if(hr >= 06 && hr < 12) {
    timedTtl.innerHTML = "Goede morgen, Welkom bij The Academy Hotel en Restaurant "
} else if (hr >= 12 && hr < 18) {
    timedTtl.innerHTML = "Goede middag, Welkom bij The Academy Hotel en Restaurant "
} else if(hr >= 18 && hr < 24) {
    timedTtl.innerHTML = "Goede avond, Welkom bij The Academy Hotel en Restaurant"
} else {
    timedTtl.innerHTML = "Goede nacht, Welkom bij The Academy Hotel en Restaurant"
}



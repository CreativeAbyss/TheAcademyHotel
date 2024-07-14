const url = window.location.pathname
console.log(url)
const split = url.split('/')
console.log(split)
const last = split[split.length - 1]
console.log(last)
   
    if(last === "") {
    console.log("\“DIT IS DE HOMEPAGE\".");
} else if(last === "index.html") { 
    console.log("\“DIT IS DE HOMEPAGE\".");
} else {
    console.log("\“DIT IS NIET DE HOMEPAGE\”.");
}

const paginas = document.querySelectorAll('.navLink');
console.log(paginas);

for (let i = 0; i < paginas.length; i++){
    let navLink = "/" + paginas[i].getAttribute('href');
        console.log(navLink);
    if (navLink === "/" + last){
        paginas[i].classList.add("active");
    } else {
        paginas[i].classList.add("non-deco");
    }
}

const hamMenu = document.querySelector('.ham-menu'); 
const offScreenMenu = document.querySelector ('.off-screen-menu'); 

hamMenu.addEventListener('click', () => { 
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
});
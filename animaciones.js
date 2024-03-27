/*DESAPARECER TEXTOS CON UN SRCOLL*/

let animacion = document.querySelectorAll(".animacion");

function efectscroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animacion.length; i++){
        let alturaAnimacion = animacion[i].offsetTop;
        if(alturaAnimacion - 60 < scrollTop) {
            animacion[i].style.opacity = 1;
            animacion[i].classList.add("mostrarAbajo")
        }
    }
}

window.addEventListener("scroll", efectscroll);
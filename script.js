const topoBtn = document.getElementById("topoBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topoBtn.style.display = "block";
    } else {
        topoBtn.style.display = "none";
    }

});

topoBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

function mostrar(){

    let conteudo = document.getElementById("conteudo");

    if(conteudo.style.display === "block"){
        conteudo.style.display = "none";
    }else{
        conteudo.style.display = "block";
    }

}

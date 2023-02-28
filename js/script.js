var pesquisa = document.querySelector('#pesquisa')
var lupa = document.querySelector('.lupa')

lupa.addEventListener('click', function() {

    if(pesquisa.style.display === 'block') {
        pesquisa.style.display = 'none'
    }else{
        pesquisa.style.display = 'block'
    }

})

document.querySelector(".hamburger").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);
var sidebar = document.querySelector('.sidebar')
var hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function() {

    if(sidebar.style.display === 'block') {
        sidebar.style.display = 'none'
    }else{
        sidebar.style.display = 'block'
    }

})
//ep fechar-abrir
var EpAnime = document.querySelector('.ep-anime')
var FecharAbrir = document.querySelector('#FecharAbrir')

FecharAbrir.addEventListener('click', function() {

    if(EpAnime.style.display === 'block') {
        EpAnime.style.display = 'none'
    }else{
        EpAnime.style.display = 'block'
    }

})
const menu = document.querySelector('header')

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0) 
}

window.addEventListener('scroll', activeScroll)

let hamburger = document.querySelector('.hamburger')
let boxnav = document.querySelector('.box-nav')

hamburger.addEventListener('click', function() {

    if(boxnav.style.transform === 'translate(5px, -60px)') {
        boxnav.style.transform = 'translate(-252px, -60px)'


        linha1.style.transform = 'rotate(0deg) translate(.0rem, .0rem)'
        linha1.style.background = 'white'
        linha2.style.opacity = '1'
        linha3.style.transform = 'rotate(-0deg) translate(.0rem, -.0rem)'
        linha3.style.background = 'white'

    }else{
        boxnav.style.transform = 'translate(5px, -60px)'


        linha1.style.transform = 'rotate(45deg) translate(.10rem, .8rem)'
        linha1.style.background = 'red'
        linha2.style.opacity = '0'
        linha3.style.transform = 'rotate(-45deg) translate(.10rem, -.8rem)'
        linha3.style.background = 'red'
    }

})

let lupa = document.querySelector('.lupa')
let boxpesquisa = document.querySelector('.box-pesquisa')

lupa.addEventListener('click', function() {

    if(boxpesquisa.style.transform === 'translate(-60px, 13px)') {
        boxpesquisa.style.transform = 'translate(-60px, -140px)'

        lupa.style.width ='28px'
        lupa.style.height ='28px'

    }else{
        boxpesquisa.style.transform = 'translate(-60px, 13px)'

        lupa.style.width ='30px'
        lupa.style.height ='30px'
    }

})
//ep fechar-abrir
var EpAnime = document.querySelector('.ep-anime')
var FecharAbrir = document.querySelector('#FecharAbrir')

FecharAbrir.addEventListener('click', function() {

    if(EpAnime.style.display === 'none') {
        EpAnime.style.display = 'block'
    }else{
        EpAnime.style.display = 'none'
    }

})
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

/*carossel animes*/

'use strict'

const imgAnime = [
    {'id': '1', 'url':'img/capa1.jpg', 'texto':'One Piece - Dublado', 'hrf':'Animes EP/One Piece/Anime-One Piece.html'},
    {'id': '2', 'url':'img/capa2.jpg', 'texto':'Tokyo Revengers - Dublado', 'hrf':'Animes EP/Tokyo Revengers/Anime-Tokyo Revengers.html'},
    {'id': '3', 'url':'img/capa3.jpg', 'texto':'Kimetsu no Yaiba_ Mugen Train - Dublado', 'hrf':'Animes EP/Kimetsu no Yaiba_ Mugen Train/Anime-Kimetsu no Yaiba_ Mugen Train.html'},
    {'id': '4', 'url':'img/capa4.jpg', 'texto':'Sword Art Online', 'hrf':'Animes EP/Sword Art Online/Anime-Sword Art Online.html'},
    {'id': '5', 'url':'img/capa5.jpg', 'texto':'Boku no hero - Dublado', 'hrf':'Animes EP/Boku no Hero/Anime-Boku no Hero.html'},
    {'id': '6', 'url':'img/capa6.jpg', 'texto':'Shingeki no Kyojin 4 - Dublado', 'hrf':'Animes EP/Shingeki no Kyojin 4The Final season - Parte 2/Anime-Shingeki no Kyojin 4The Final season - Parte 2.html'},
    {'id': '7', 'url':'img/capa7.jpg', 'texto':'Naruto - Dublado', 'hrf':'Animes EP/Naruto/Anime-naruto.html'},
    {'id': '8', 'url':'img/capa8.jpg', 'texto':'Chainsaw Man - Dublado', 'hrf':'Animes EP/Chainsaw Man/Anime-Chainsaw Man.html'},
    {'id': '9', 'url':'img/capa9.jpg', 'texto':'Baki - Dublado', 'hrf':'Animes EP/Baki/Anime-Baki.html'},
]

const containerItemsAnime = document.querySelector('#container-items-anime')

const loadImgAnime = (imgAnime, container) =>{
    imgAnime.forEach( imgAnime => {
        container.innerHTML += `
          <div class='item-anime'>
          <div class="item-anime-texto">${imgAnime.texto}</div>
          <a href="${imgAnime.hrf}"><img src='${imgAnime.url}'></a>
          <div>
        `
    });
  
}

loadImgAnime(imgAnime, containerItemsAnime )

let itemsAnime = document.querySelectorAll('.item-anime')

const previousAnime = () =>{
    containerItemsAnime.appendChild(itemsAnime[0])
    itemsAnime = document.querySelectorAll('.item-anime')
}
document.querySelector('#previousAnime').addEventListener('click', previousAnime)

const nextAnime = () =>{
    const lastItemAnime = itemsAnime[itemsAnime.length - 1]
    containerItemsAnime.insertBefore( lastItemAnime, itemsAnime[0])
    itemsAnime = document.querySelectorAll('.item-anime')
}
document.querySelector('#nextAnime').addEventListener('click', nextAnime)

//carossel 2
'use strict'

const imgAnime2 = [
    {'id': '1', 'url':'img/capa10.jpg', 'texto':'Jujutsu Kaisen - Dublado', 'hrf':'Animes EP/Jujutsu Kaisen/Anime-Jujutsu Kaisen.html'},
    {'id': '2', 'url':'img/capa11.jpg', 'texto':'Dragon Ball Z - Dublado', 'hrf':'Animes EP/Dragon Ball Z/Anime-Dragon Ball Z.html'},
    {'id': '3', 'url':'img/capa12.jpg', 'texto':'Os sete Pecados Capitais - Dublado', 'hrf':'Animes EP/Os sete Pecados Capitais/Anime-Os sete Pecados Capitais.html'},
    {'id': '4', 'url':'img/capa13.jpg', 'texto':'SPY×FAMILY - Dublado', 'hrf':'Animes EP/SPY×FAMILY/Anime-SPY×FAMILY.html'},
    {'id': '5', 'url':'img/capa14.jpg', 'texto':'Haikyuu - Dublado', 'hrf':'Animes EP/Haikyuu/Anime-Haikyuu.html'},
    {'id': '6', 'url':'img/capa15.jpg', 'texto':'Sword Art Online', 'hrf':'Animes EP/Sword Art Online/Anime-Sword Art Online.html'},
    {'id': '7', 'url':'img/capa16.jpg', 'texto':'Tate no Yuusha no Nariagari - Dublado', 'hrf':'Animes EP/Tate no Yuusha no Nariagari/Anime-Tate no Yuusha no Nariagari.html'},
    {'id': '8', 'url':'img/capa17.jpg', 'texto':'Darling in the Franxx - Dublado', 'hrf':'Animes EP/Darling in the Franxx/Anime-Darling in the Franxx.html'},
    {'id': '9', 'url':'img/capa18.jpg', 'texto':'Death Note - Dublado', 'hrf':'Animes EP/Death Note/Anime-Death Note.html'},
]

const containerItemsAnime2 = document.querySelector('#container-items-anime2')

const loadImgAnime2 = (imgAnime2, container) =>{
    imgAnime2.forEach( imgAnime2 => {
        container.innerHTML += `
          <div class='item-anime2'>
          <div class="item-anime-texto">${imgAnime2.texto}</div>
          <a href="${imgAnime2.hrf}"><img src='${imgAnime2.url}'></a>
          <div>
        `
    });
  
}

loadImgAnime2(imgAnime2, containerItemsAnime2 )

let itemsAnime2 = document.querySelectorAll('.item-anime2')

const previousAnime2 = () =>{
    containerItemsAnime2.appendChild(itemsAnime2[0])
    itemsAnime2 = document.querySelectorAll('.item-anime2')
}
document.querySelector('#previousAnime2').addEventListener('click', previousAnime2)

const nextAnime2 = () =>{
    const lastItemAnime2 = itemsAnime2[itemsAnime2.length - 1]
    containerItemsAnime2.insertBefore( lastItemAnime2, itemsAnime2[0])
    itemsAnime2 = document.querySelectorAll('.item-anime2')
}
document.querySelector('#nextAnime2').addEventListener('click', nextAnime2)

'use strict'

const iframe = [
    {'id': '1', 'src':'https://www.youtube.com/embed/QczGoCmX-pI'},
    {'id': '2', 'src':'https://www.youtube.com/embed/JvqcaQJgr-A'},
    {'id': '3', 'src':'https://www.youtube.com/embed/G5Ff1vY4kD4'},
    {'id': '4', 'src':'https://www.youtube.com/embed/Cb9F59uvA_0'},
    {'id': '5', 'src':'https://www.youtube.com/embed/ynr6gnyu9NE'},
    {'id': '6', 'src':'https://www.youtube.com/embed/sh-TMLKMf8M'}
]


const containerItemsAnimeT = document.querySelector('#container-items-animeT')

const loadIframe = (iframe, container) =>{
    iframe.forEach( iframe => {
        container.innerHTML += `
          <div class='item-animeT'>
             <iframe height="200px" src="${iframe.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div>
        `
    });
  
}

loadIframe(iframe, containerItemsAnimeT )

let itemsAnimeT = document.querySelectorAll('.item-animeT')

const previousT = () =>{
    containerItemsAnimeT.appendChild(itemsAnimeT[0])
    itemsAnimeT = document.querySelectorAll('.item-animeT')
}
document.querySelector('#previousT').addEventListener('click', previousT)

const nextT = () =>{
    const lastIframeAnimeT = itemsAnimeT[itemsAnimeT.length - 1]
    containerItemsAnimeT.insertBefore( lastIframeAnimeT, itemsAnimeT[0])
    itemsAnimeT = document.querySelectorAll('.item-animeT')
}
document.querySelector('#nextT').addEventListener('click', nextT)

//AMV
'use strict'

const iframeA = [
    {'id': '1', 'src':'https://www.youtube.com/embed/g8LZe82b97w'},
    {'id': '2', 'src':'https://www.youtube.com/embed/UdKX_6_Y43A'},
    {'id': '3', 'src':'https://www.youtube.com/embed/UN1vPNvf_Og'},
    {'id': '4', 'src':'https://www.youtube.com/embed/u5-CF_k0KK0'},
    {'id': '5', 'src':'https://www.youtube.com/embed/eKAgNQtuGFg'},
    {'id': '6', 'src':'https://www.youtube.com/embed/f307580j10c'},
]


const containerItemsAnimeA = document.querySelector('#container-items-animeA')

const loadIframeA = (iframeA, container) =>{
    iframeA.forEach( iframeA => {
        container.innerHTML += `
          <div class='item-animeA'>
             <iframe height="200px" src="${iframeA.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div>
        `
    });
  
}

loadIframeA(iframeA, containerItemsAnimeA )

let itemsAnimeA = document.querySelectorAll('.item-animeA')

const previousA = () =>{
    containerItemsAnimeA.appendChild(itemsAnimeA[0])
    itemsAnimeA = document.querySelectorAll('.item-animeA')
}
document.querySelector('#previousA').addEventListener('click', previousA)

const nextA = () =>{
    const lastIframeAnimeA = itemsAnimeA[itemsAnimeA.length - 1]
    containerItemsAnimeA.insertBefore( lastIframeAnimeA, itemsAnimeA[0])
    itemsAnimeA = document.querySelectorAll('.item-animeA')
}
document.querySelector('#nextA').addEventListener('click', nextA)
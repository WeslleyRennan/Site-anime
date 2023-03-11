var hamburger = document.querySelector('.hamburger')
var boxnav = document.querySelector('.box-nav')

hamburger.addEventListener('click', function() {

    if(boxnav.style.transform === 'translate(5px, 15px)') {
        boxnav.style.transform = 'translate(-270px, 15px)'


        linha1.style.transform = 'rotate(0deg) translate(.0rem, .0rem)'
        linha1.style.background = 'white'
        linha2.style.opacity = '1'
        linha3.style.transform = 'rotate(-0deg) translate(.0rem, -.0rem)'
        linha3.style.background = 'white'

    }else{
        boxnav.style.transform = 'translate(5px, 15px)'


        linha1.style.transform = 'rotate(45deg) translate(.10rem, .8rem)'
        linha1.style.background = 'red'
        linha2.style.opacity = '0'
        linha3.style.transform = 'rotate(-45deg) translate(.10rem, -.8rem)'
        linha3.style.background = 'red'
    }

})

var lupa = document.querySelector('.lupa')
var boxpesquisa = document.querySelector('.box-pesquisa')

lupa.addEventListener('click', function() {

    if(boxpesquisa.style.transform === 'translate(-5px, 15px)') {
        boxpesquisa.style.transform = 'translate(-5px, -150px)'

        lupa.style.width ='26px'

    }else{
        boxpesquisa.style.transform = 'translate(-5px, 15px)'

        lupa.style.width ='28px'
    }

})

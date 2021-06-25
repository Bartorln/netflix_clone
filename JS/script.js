alert("Olá, Tudo bem? Essa página é um símples treinamento. Esta como as outras páginas no meu repositório, estão sujeitas a alterações.")

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
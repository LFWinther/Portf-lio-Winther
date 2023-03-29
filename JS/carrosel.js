const swiper = new Swiper('#swiper-1', {
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    effect: 'coverflow',
    centeredSlides: true,
    currentClass: true
});

const swiper2 = new Swiper('#swiper-2', {
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    effect: 'cube',
    centeredSlides: true,
    currentClass: true
});

swiper.on('slideChange', function() {
    var activeSlideIndex = swiper.activeIndex;
    var descricao = '';
    if(activeSlideIndex == 0){
        descricao = `Um jogo do Mario de plataforma feito com CSS, HTML e JavaScript.
         Já jogavel para computador porém ainda falta atualizações para mobile.`
    } else if(activeSlideIndex == 1){
        descricao = `Um jogo de memória com a temática do Rick and Morthy. Foi feito com CSS, HTML e JavaScript. 
        Já está finalizado, mas pretendo por um ranking dos melhores tempos em atualizações futuras.`
    } else if(activeSlideIndex == 2){
        descricao = `Um projeto de uma Pokedex feita utilizando CSS, HTML e JavaScript. 
        Este projeto consome uma API - pokeapi`
    } else if(activeSlideIndex == 3){
        descricao = `Um projeto de estudo feito com CSS (flexbox e grid), HTML e JavaScript.`
    } else if(activeSlideIndex == 4){
        descricao = `Um projeto feito na finalização do meu curso de FullStack para uma empresa da minha cidade. 
        Na parte do BackEnd utilizamos Java junto com SpringBoot`
    } else if(activeSlideIndex == 5){
        descricao = `Um projeto de uma Pokedex feita utilizando CSS, HTML e JavaScript.
        Este projeto consome um API - https://pokeapi.co/`
    }
    $('#descricao').text(descricao);
});

swiper2.on('slideChange', function() {
    var activeSlideIndex = swiper2.activeIndex;
    var descricao = '';
    if(activeSlideIndex == 0){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 1){
        descricao = `Aprendi está linguagem de programação no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 2){
        descricao = `Aprendi está linguagem de programação no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 3){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 4){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 5){
        descricao = `Estou aprendendo está linguagem de programação em minha graduação de ADS juntamente com o curso da Alura.`
    } else if (activeSlideIndex == 6){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if (activeSlideIndex == 7){
        descricao = `Aprendi está tecnologia no curso da Alura em 2023.`
    } else if(activeSlideIndex == 8){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 9){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 10){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 11){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if(activeSlideIndex == 12){
        descricao = `Aprendi está tecnologia no curso da Alura em 2023.`
    } else if(activeSlideIndex == 13){
        descricao = `Aprendi está tecnologia no curso de FullStack pela instituição Serratec em 2022.`
    } else if (activeSlideIndex == 14){
        descricao = `Aprendi está ferramenta no curso de FullStack pela instituição Serratec em 2022.`
    }
    $('#descricao2').text(descricao);
});


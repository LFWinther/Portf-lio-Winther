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
        Já essa finalizado, mas pretendo por um ranking dos melhores tempos em atualizações futuras.`
    } else if(activeSlideIndex == 2){
        descricao = `Um projeto de uma Pokedex feita utilizando CSS, HTML e JavaScript. 
        Este projeto consome uma API - pokeapi`
    } else if(activeSlideIndex == 3){
        descricao = `Um projeto de estudo feito com CSS (flexbox e grid), HTML e JavaScript.`
    } else if(activeSlideIndex == 4){
        descricao = `Um projeto feito na finalização do meu curso de FullStack para uma empresa da minha cidade. 
        Na parte do BackEnd utilizamos Java junto com SpringBoot`
    } else if(activeSlideIndex == 5){
        descricao = `Um projeto feto com HTML e CSS de uma Plataforma da Alura de livros de programação feito
        para estudar responsividade`
    } else if(activeSlideIndex == 6){
        descricao = `Um jogo da cobrinha desenvolvido em JavaScript, CSS e HTML. <br>Feito com a ajuda do canal do YouTube Manual do Dev com algumas 
        implementações a mais, como dificuldade e modo noturno.`
    }
    $('#descricao').text(descricao);
});

swiper2.on('slideChange', function() {
    var activeSlideIndex = swiper2.activeIndex;
    var descricao = '';
    if(activeSlideIndex == 0){
        descricao = `Aprendi React no curso de FullStack pela instituição Serratec em 2022.
        É a tecnologia do FrontEnd que tenho mais familiaridade no momento.`
    } else if(activeSlideIndex == 1){
        descricao = `Aprendi Java no curso de FullStack pela instituição Serratec em 2022.
        É a linguagem de programação que mais gosto de trabalhar.`
    } else if(activeSlideIndex == 2){
        descricao = `Aprendi JavaScript no curso de FullStack pela instituição Serratec em 2022.
        É uma linguagem de programação que gosto muito de estudar e aprender mais.`
    } else if(activeSlideIndex == 3){
        descricao = `Aprendi CSS no curso de FullStack pela instituição Serratec em 2022.
        É sempre muito satisfatório transformar ideias em algo visual com essa tecnologia.`
    } else if(activeSlideIndex == 4){
        descricao = `Aprendi HTML no curso de FullStack pela instituição Serratec em 2022.
        O esqueleto de toda pagina web.`
    } else if(activeSlideIndex == 5){
        descricao = `Estou aprendendo Python em minha graduação de ADS juntamente com o curso da
        Alura.
        E cada vez mais maravilhado com o poder dessa linguagem de programação.`
    } else if (activeSlideIndex == 6){
        descricao = `Aprendi PostegreSQL no curso de FullStack pela instituição Serratec em 2022.
        Foi com ele que aprendi Banco de Dados e SQL.`
    } else if (activeSlideIndex == 7){
        descricao = `Aprendi Express no curso da Alura em 2023.
        Expandir conhecimento aprendendo essa tecnologia foi muito bom.`
    } else if(activeSlideIndex == 8){
        descricao = `Aprendi Figma no curso de FullStack pela instituição Serratec em 2022.
        Aprender a desenvolver algo no figma com certeza facilitou o processo de escrever o código.`
    } else if(activeSlideIndex == 9){
        descricao = `Aprendi GitHub no curso de FullStack pela instituição Serratec em 2022.
        Ótimo local para por os mes projetos.`
    } else if(activeSlideIndex == 10){
        descricao = `Aprendi Git no curso de FullStack pela instituição Serratec em 2022.
        Tecnologia maravilhosa de versionamento de códigos.`
    } else if(activeSlideIndex == 11){
        descricao = `Aprendi NPM no curso de FullStack pela instituição Serratec em 2022.
        Ótimo gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.`
    } else if(activeSlideIndex == 12){
        descricao = `Aprendi essa tecnologia no curso da Alura em 2023.`
    } else if(activeSlideIndex == 13){
        descricao = `Aprendi Spring de FullStack pela instituição Serratec em 2022.
        Uma maravilhoso framework open source para a linguagem Java.`
    } else if (activeSlideIndex == 14){
        descricao = `Aprendi VSCode no curso de FullStack pela instituição Serratec em 2022.
        Um editor de código-fonte maravilhoso com diversas extenções que facilitam a vida do programador.`
    }
    $('#descricao2').text(descricao);
});


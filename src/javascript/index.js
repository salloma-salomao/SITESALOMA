// Dados da timeline completos (todos os 39 pontos originais)
const timelineData = [
    {
        year: 1961,
        description: "Nasce Salomão Jovino da Silva na cidade de Passo - Minas Gerais",
        image: "src/images/timeline/1961.jpeg"
    },
    {
        year: 1965,
        description: "Jansen Jovino, responsável pelos primeiros contatos de Salloma com a música na infância.",
        image: "src/images/timeline/1965.jpeg"
    },
    {
        year: 1970,
        description: "Família Jovino, época em que Salloma começa a aprender seus primeiros instrumentos musicais e a participar de grupos culturais comunitários em São Paulo.",
        image: "src/images/timeline/1970.jpeg"
    },
    {
        year: 1976,
        description: "Participa de sua primeira apresentação pública durante o Festival de Música Colégio Osvaldo Aranha. Na foto, um ano depois (1977) pré apresentação no colégio monsenhor JB de Carvalho, Parque Santo Antônio.",
        image: "src/images/timeline/1976.jpg"
    },
    {
        year: 1978,
        description: "Início da carreira musical, participando de grupos de música experimental e fundindo influências do jazz com a música afro-brasileira. Foto Walter Sebastião",
        image: "src/images/timeline/1978.jpg"
    },
    {
        year: 1980,
        description: "Festival de \"MPB\" de Itapecerica. Local onde as canções de Salloma e Satranga de Lima começaram a circular. Com o dinheiro do prêmio compraram uma flauta e uma craviola",
        image: "src/images/timeline/1980.jpg"
    },
    {
        year: 1982,
        description: "Festival da canção da cidade de Americana SP. Satranga de Lima violão e voz, Salloma na voz, Sidney Ney Capenga- Percussão, Junior-Contra Baixo. Canção: Rei congo, rei cego, rei negro.",
        image: "src/images/timeline/1982.jpg"
    },
    {
        year: 1984,
        description: "NaCorda Banda – Estúdio Campestre. Foto autoria desconhecida",
        image: "src/images/timeline/1984.jpg"
    },
    {
        year: 1985,
        description: "Lançamento do primeiro álbum solo 'Raízes e Horizontes', que marca o início de sua trajetória como artista independente e pesquisador cultural. Foto: Helder Girolamo",
        image: "src/images/timeline/1985.jpg"
    },
    {
        year: 1987,
        description: "Banda Tribbus – Estúdio Violão e CIA. Foto de 1988",
        image: "src/images/timeline/1987.jpg"
    },
    {
        year: 1989,
        description: "Festa de inauguração da Sede do Sindicato de Trabalhadores da Febem marcando seu trabalho em educação social e alfabetização de jovens. Bairro Tatuapé. Foto Glauber Amaral",
        image: "src/images/timeline/1989.jpg"
    },
    {
        year: 1990,
        description: "Banda Vândalos de Chocolate, 1990, Santo Amaro. SP, Alex Ribeiro",
        image: "src/images/timeline/1990.jpeg"
    },
    {
        year: 1992,
        description: "Produção do documentário “Educação: O Caminho para a liberdade. Projeto de Alfabetização de Adultos no Jardim Lucélia- Grajaú. SP. Direção de Salloma Salomão, Fantasma Filmes e ABVP. Disponível no Youtube",
        image: "src/images/timeline/1992.JPG"
    },
    {
        year: 1995,
        description: "Projeto palmares 2000. Diadema SP.",
        image: "src/images/timeline/1995.jpeg"
    },
    {
        year: 1997,
        description: "Salloma e Músicos, Harmonia Bar. SP. 1997, lançamento Álbum: O dia das Tribos. Autoria desconhecida",
        image: "src/images/timeline/1997(1).jpeg"
    },
    {
        year: 1997,
        description: "PUC- SP- Graduação em Historia, 1997. Foto Marco Aurélio Olímpio.",
        image: "src/images/timeline/1997(2).jpeg"
    },
    {
        year: 1999,
        description: "Trabalho em Escola Pública Itapecerica da Serra em 1999. Foto: Autoria desconhecida.",
        image: "src/images/timeline/1999.jpeg"
    },
    {
        year: 2000,
        description: "Defesa Tese de Mestrado A polifonia do protesto negro: movimentos culturais e musicalidades negras urbanas - anos 70/80 - Salvador, São Paulo e Rio de Janeiro pela Pontifícia Universidade Católica de São Paulo. Também foi diretor do Acervo da Memória e do Viver Afrobrasileiro – Centro Cultural Jabaquara.",
        image: "src/images/timeline/2000.jpeg"
    },
    {
        year: 2002,
        description: "Lançamento do álbum \"Memórias Sonoras da Noite\" no SESC Vila Mariana, acompanhado da publicação do texto teatral de mesmo nome. para a Conferência Internacional de Musicalidades Interétnicas PUC São Paulo.Também realizou Estágio no Museu Arqueológico e Etnológico da USP-SP",
        image: "src/images/timeline/2002.jpg"
    },
    {
        year: 2003,
        description: "Exposição de Instrumentos Musicais de Artesania, apresentada nas unidades do SESC Vila Mariana e SESC Santo André, destacando saberes e sonoridades ancestrais. Nesse mesmo período, participou do Festival de Música Étnica no SESC Santo André e teve publicada sua entrevista com o professor Boubacar Barry, referência nos estudos sobre a diáspora africana. Na dramaturgia, foi reconhecido com o Prêmio Ruth de Souza de Dramaturgia Negra pela obra \"Memórias Sonoras da Noite\". Viagem para França a encontro de Satranga de Lima. Na foto, colaborou com a Banda Tribbu no videoclipe da música \"Templo\", de Chico César, sob direção de Jean Lopes.",
        image: "src/images/timeline/2003.JPG"
    },
    {
        year: 2004,
        description: "Pesquisador Visitante no Instituto de Ciências Sociais da Universidade de Lisboa e viagem à França.",
        image: "src/images/timeline/2004.JPG"
    },
    {
        year: 2005,
        description: "Defesa de Doutorado Memórias sonoras da noite: Musicalidades Africanas no Brasil Oitocentista pela Pontifícia Universidade Católica de São Paulo",
        image: "src/images/timeline/2005.JPG"
    },
    {
        year: 2006,
        description: "Foto Cia Colhendo Contos e Diáspora Negra. Início do projeto de formação continuada Arca de Ébano – Campo Limpo. Nesse ano também realizou o Show M’Banzo do Futuro no Sesc Ipiranga.",
        image: "src/images/timeline/2006.jpg"
    },
    {
        year: 2007,
        description: "Show de Lançamento do álbum Faces da Tarde de um mesmo Sentimento, no Sesc Ipiranga",
        image: "src/images/timeline/2007.JPG"
    },
    {
        year: 2010,
        description: "Show M’Banzo do Futuro no Centro Cultural Mestre Assis (Largo 21 de Abril, 29), como parte da programação do Mês da Consciência Negra na cidade de Embu das Artes.",
        image: "src/images/timeline/2010.JPG"
    },
    {
        year: 2011,
        description: "Lançamento do DVD: Salloma Salomão: 30 anos de musicalidade e negritude. Originalmente gravado em VHs entre 1992 e 2008. Documentário feito às próprias custas de produção. Edição de Ivan Lino (Skovinha Miliano). Produção: Aruanda Mundi e Max Design. Disponível no Youtube.",
        image: "src/images/timeline/2011.JPG"
    },
    {
        year: 2012,
        description: "Lançamento do disco Aurora Negra: Cantos e Batuques de Força, Fé e Diminutas Folias. No mesmo ano vai ao mundo o Videoclipe Princesinha do Congo (foto acima).. Roteiro de Miriam Selma e Munir Ahamed. Montagem de Cassiano Nanau e Salloma Salomão na direção. Produção: Aruanda Mundi.",
        image: "src/images/timeline/2012.png"
    },
    {
        year: 2016,
        description: "Foto: Documentário Negro em Mim - Em 2016, Salloma Salomão teve uma produção artística marcada pela diversidade de linguagens e pelo diálogo com a cultura afro-brasileira. Lançou o livro, disco e CD \"Notas Tortas da Madrugada\", apresentou o espetáculo \"3 Mil Tons\" no Auditório do Ibirapuera e colaborou no documentário \"Negro em Mim\", dirigido por Macca Ramos. Participou como depoente na websérie \"AfroTranscendence\", dirigida por Yasmin Thayná, e foi um dos autores do livro e documentário \"Diáspora Reversa\", que aborda a cultura musical dos Brasileiros do Benim, realizado via PROAC-SP. Na dramaturgia, venceu o II Concurso Nacional de Dramaturgia Ruth de Souza com o texto \"Memórias Sonoras da Noite\", e concedeu entrevista ao projeto Cyber Quilombo sobre o Teatro Experimental do Negro.",
        image: "src/images/timeline/2016.jpg"
    },
    {
        year: 2017,
        description: "Foto: Grazii Ribeiro - Em 2017, Salloma Salomão esteve à frente da produção do show e do álbum Notas Tortas da Madrugada, realizados em parceria com Macca Ramos. O trabalho, gravado ao vivo na Fábrica de Cultura do Jardim São Luís, contou com produção da Aruanda Mundi e Encouraçado Filmes. No mesmo ano, participou como depoente, entrevistado e colaborador do episódio dedicado a sua trajetória na série Tão Longe, Tão Perto, produzida pelo Espaço Húmus.",
        image: "src/images/timeline/2017.png"
    },
    {
        year: 2018,
        description: "Foto: Alex Ribeiro - Em 2018, participou como depoente, entrevistado e colaborador na série de TV 13 Canções para Falar de Samba, com direção de Pedro Arantes e produção da Glaz Entretenimento, exibida posteriormente pela Cine Brasil TV em 2019. No mesmo ano, integrou a peça-show Agosto na Cidade Murada, com direção de Jé Oliveira e Mariana Souto Maior, produção de Rudá Malik e direção musical de Carlos Massingue, produzido pela Aruanda Mundi.",
        image: "src/images/timeline/2018.JPG"
    },
    {
        year: 2019,
        description: "InauguraFoto: Sérgio Silva/Ponte Jornalismo - Em 2019, Salloma integrou o elenco de dois espetáculos teatrais: Gota D’água Preta, com direção de Jé Oliveira e A Fuzarca dos Descalços, idealizado por Eder dos Anjos. Ainda em 2019, esteve em Três Miltons, projeto com direção de Jé Oliveira e Salloma Salomão, Ivan Lino (Skovinha Miliano), e Capulanas, Clarianas, Núcleo Zonautônoma, Al Andalus e Deodara, apresentado no Instituto Itaú Cultural e no Auditório Oscar Niemeyer, no Parque Ibirapuera, em São Paulo, além de contar com versão em vídeo documentário. Atuou ainda como depoente, entrevistado e colaborador no documentário Dentro da Minha Pele, de Val Gomes e Toni Venturi, com distribuição da O2 Play. Por fim, compôs o elenco de Jair Rodrigues: Deixe que digam, dirigido por Rubens Rewald.",
        image: "src/images/timeline/2019.JPG"
    },
    {
        year: 2020,
        description: "Teve participação como colaborador e compositor da trilha sonora do filme Todos os Mortos, dirigido por Marco Dutra e Caetano Gotardo, lançado no Festival de Cinema de Berlim. No mesmo período, lançou o álbum digital Mensagens aos Terráqueos, em parceria com Gui Braz, e ministrou o curso Raízes Africanas da Música Brasileira no Centro de Música do SESC-SP.",
        image: "src/images/timeline/2020.jpg"
    },
    {
        year: 2021,
        description: "Recebe o Troféu Kikito de Ouro, Prêmio de Melhor Trilha Musical no Festival Internacional de Cinema de Gramado, pelo trabalho em “Todos Mortos” de Gotardo e Dutra, coprodução franco-brasileira. Ainda no campo audiovisual, atuou no elenco do Filme Negro em mim (Direção Macca Ramos). Ainda nesse ano é convidado a participar da Mesa 6 do ciclo de encontros “1922: Mordernismos em debate” organizado pelo instituto Moreira Salles. No campo literário explora o universo infantil no seu livro “As aventuras do pequeno samba” lançado pela sua produtora Aruanda Mundi. Participação no quadro #CanjicaHistórica Vissungos e Afrobrasilidades produzido pelo Sesc Campo Limpo",
        image: "src/images/timeline/2021.JPG"
    },
    {
        year: 2022,
        description: "Foto Camila Macedo - Participação no podcast Mano a Mano, dividindo a palavra com a doutora Katiuscia Ribeiro, disponível na plataforma Spotify. Um ano ativo no setor teatral, produzindo a trilha sonora com Gui Braz em dois espetáculos teatrais: Nzinga do Coletivo negro (Direção Aysha Nascimento e Flávio Rodrigues) e Havia um país aqui antes do carnaval da Cia Experimental Kaus (Direção de Reginaldo Pereira). Em novembro o Show Muxima Kumbi de Salloma e Al Andaluz chega ao Sesc Pompéia.",
        image: "src/images/timeline/2022.jpg"
    },
    {
        year: 2023,
        description: "É vencedor do Prêmio Mestres da Cultura pela Fundação Nacional das Artes. Em outubro é convidado a colaborar com seu depoimento no filme Noite e dia, Lima Barreto de Rodrigo Grota disponível no Prime Video. Também realizou consultoria de prosódia para o filme “Rota 66: A polícia que mata”, na direção de Philippe Barcinski e Diego Martins.",
        image: "src/images/timeline/2023.png"
    },
    {
        year: 2024,
        description: "Foto Ana Zumas - Protagonizou a peça teatral \"Transe - Ato 1\" (Direção Marcio Castro) com estreia em outubro de 2024, no Sesc Belenzinho, SP. Em dezembro lança o álbum \"Luanda Mana Lua\" nas plataformas digitais com parcerias de Lincoln Antonio e Ito Alves.",
        image: "src/images/timeline/2024.jpg"
    },
    {
        year: 2025,
        description: "Começa o ano com o Show Musical Muxima Kumbi de Salloma Sallomão e Al Andaluz. No mesmo ano estreia o filme Montanha em Movimento, mais uma parceria entre Salloma e o diretor Caetano Gotardo, na qual Salloma atua e compõe trilha sonora. Em setembro estreia o espetáculo Solo dos Mares onde faz dramaturgia e pesquisa junto a sua irmã Ione Jovino.",
        image: "src/images/timeline/2025.jpeg"
    },
    {
        year: 2026,
        description: "O álbum Vozes Vissungueiras (2025/2026) é um ato de resistência cultural que resgata e ressignifica os vissungos — cantos ancestrais de origem Banto dos garimpos mineiros. Sob direção musical de Salloma Salomão, o projeto une a tradição à contemporaneidade nas vozes de Juçara Marçal, Tiganá Santana, Sérgio Pererê e do mestre Enilson Viríssimo, preservando a memória afro-brasileira contra o apagamento histórico. Ilustração_por Silvana Martins_Estúdio Aruêra",
        image: "src/images/timeline/2026 (1).jpeg"
    },
    {
        year: 2026,
        description: "Lançamento do livro Hip Hop e o novo mundo preto paulistano com Amailton Azevedo. Prefácio  @eduardobrecho_ . Os exemplares estão disponíveis na loja @petroleomusic . Foto: @daisy_aserena",
        image: "src/images/timeline/2026.JPG"
    }
];

// Slides destaques

let slideIndex = 0;
const slides = document.querySelectorAll('.destaque');
const tempoTransicao = 5000;
let autoSlide;

iniciarTimer();

function mostraSlide(n) {
    slides.forEach(slide => slide.classList.remove('ativo'));

    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add('ativo');
}

function mudarSlide(n) {
    mostraSlide(n);
    resetarTimer();
}

function iniciarTimer() {
    autoSlide = setInterval(() => {
        mostraSlide(1);
    }, tempoTransicao);
}

function resetarTimer() {
    clearInterval(autoSlide);
    iniciarTimer();
}

// Timeline spiral generation (funcionalidade completa restaurada)
function generateSpiral() {
    const container = document.getElementById('timeline-spiral-container');
    if (!container) return;

    const size = Math.min(container.offsetHeight, container.offsetWidth);

    const centerX = size / 2;
    const centerY = size / 2;

    const BASE = 600;
    const scale = Math.sqrt(size / BASE);

    const SPREAD = 9 * scale;

    // Parâmetros da espiral - ajustados para uma espiral mais fechada
    const totalDots = 195; // Número total de círculos aumentado para comportar 39 datas interativas
    const interactiveDotInterval = 5; // A cada 5 círculos, 1 é interativo (agora temos 39 pontos interativos)

    // Índice dos dados da timeline
    let timelineIndex = 0;

    // Criar círculos em formato de espiral
    for (let i = 0; i < totalDots; i++) {
        // Calcular coordenadas polares para uma espiral de Arquimedes
        const theta = 0.175 * i; // Controla a velocidade de rotação da espiral
        const radius = (5 + 0.95 * theta) * scale; // Primeiro círculo com raio zero, depois crescimento linear

        // Converter para coordenadas cartesianas
        const x = centerX + radius * Math.cos(theta) * SPREAD; // Fator de escala ajustado
        const y = centerY + radius * Math.sin(theta) * SPREAD; // Fator de escala ajustado

        // Verificar se o círculo deve ser interativo (a cada interactiveDotInterval)
        const isInteractive = i % interactiveDotInterval === 0 && timelineIndex < timelineData.length;

        // Criar o círculo com tamanho aleatório
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';

        // Variação aleatória de tamanho para cada círculo
        const baseSizeInPx = 8 * scale; // Tamanho base em pixels
        const randomFactor = Math.random() * 0.85 + 0.75; // Varia entre 0.75x e 1.25x do tamanho original
        const dotSize = baseSizeInPx * randomFactor * scale;

        // Aplicar tamanho aleatório
        dot.style.width = dotSize + 'px';
        dot.style.height = dotSize + 'px';

        if (isInteractive) {
            dot.className += ' interactive';
            dot.dataset.year = timelineData[timelineIndex].year;
            dot.dataset.index = timelineIndex;

            // Adicionar evento de clique
            dot.addEventListener('click', function () {
                showModal(this.dataset.index);
            });

            // Criar o label do ano e adicioná-lo dentro do dot
            const yearLabel = document.createElement('div');
            yearLabel.className = 'year-label';
            yearLabel.textContent = timelineData[timelineIndex].year;

            // Adicionar o label dentro do dot
            dot.appendChild(yearLabel);

            requestAnimationFrame(() => {
                const rect = dot.getBoundingClientRect();
                const labelWidth = 80;

                const nearRightEdge = rect.right + labelWidth > window.innerWidth;

                if (nearRightEdge) {
                    yearLabel.style.transform = "translate(-120%, -50%)";
                    yearLabel.style.textAlign = "right";
                } else {
                    yearLabel.style.transform = "translate(12px, -50%)"
                }
            });

            timelineIndex++;
        }

        // Posicionar o círculo
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';

        container.appendChild(dot);
    }
}

// Modal functions
function showModal(index) {
    const modal = document.getElementById('year-modal');
    const data = timelineData[index];

    document.getElementById('modal-year').textContent = data.year;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-image').src = data.image;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('year-modal').style.display = 'none';
}

$(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize
$(document).ready(function () {
    generateSpiral();

    $('.close-modal').on('click', closeModal);
    $('#year-modal').on('click', function (e) {
        if (e.target === this) closeModal();
    });

});

// Regenerate spiral on resize
$(window).resize(function () {
    const container = document.getElementById('timeline-spiral-container');
    if (container) {
        container.innerHTML = '';
        generateSpiral();
    }
});

// Função para scroll suave para contato
function scrollToContact() {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Teatralidades
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('#teatralidades .slide');
    const indicators = document.querySelectorAll('#teatralidades .indicator');
    let currentSlide = 0;
    let slideInterval;

    // Função para carregar imagem de um slide
    function loadSlideImage(slide, imagePath) {
        const img = new Image();

        img.onload = function () {
            slide.style.backgroundImage = `url("${imagePath}")`;
            console.log('✓ Imagem carregada:', imagePath);
        };

        img.onerror = function () {
            console.warn('✗ Erro ao carregar:', imagePath);
            // Tentar alternativas
            const alternatives = [
                imagePath.replace('.jpg', '.jpeg'),
                imagePath.replace('.jpg', '.png'),
                imagePath.replace('.jpg', '.webp')
            ];

            tryAlternatives(alternatives, 0, slide);
        };

        img.src = imagePath;
    }

    function tryAlternatives(alternatives, index, slide) {
        if (index >= alternatives.length) {
            // Todas as alternativas falharam
            slide.classList.add('no-image');
            slide.innerHTML = '<i class="fas fa-theater-masks fa-3x" style="margin-bottom: 10px;"></i><br>Imagem Teatral';
            return;
        }

        const img = new Image();
        const currentAlt = alternatives[index];

        img.onload = function () {
            slide.style.backgroundImage = `url("${currentAlt}")`;
            console.log('✓ Alternativa carregada:', currentAlt);
        };

        img.onerror = function () {
            tryAlternatives(alternatives, index + 1, slide);
        };

        img.src = currentAlt;
    }

    // Carregar todas as imagens
    slides.forEach((slide, index) => {
        const imagePath = slide.dataset.image;
        if (imagePath) {
            loadSlideImage(slide, imagePath);
        }
    });

    // Função para mostrar slide específico
    function showSlide(index) {
        // Remove active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Adiciona active ao atual
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    // Função para próximo slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideshow();
        });
    });

    // Função para iniciar slideshow automático
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 2000); // 1 segundo
    }

    // Pausar ao hover e retomar ao sair
    const slideshowContainer = document.querySelector('#teatralidades .slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slideshowContainer.addEventListener('mouseleave', () => {
            startSlideshow();
        });
    }

    // Iniciar slideshow
    startSlideshow();

    console.log('Slideshow teatralidades inicializado com', slides.length, 'slides');
});

// Slide foto capa
const imagens = document.querySelectorAll(".hero-image");
let index = 0;
setInterval(() => {
    imagens[index].classList.remove("atual");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("atual");
}, 7500);
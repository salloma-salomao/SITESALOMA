console.log("Iniciando carregamento da bibliografia...");

// Dados das obras bibliográficas baseados no CSV - SEÇÃO AUTOR
const autorData = [
    {
        codigo: "B01",
        titulo: "Salloma Salomão e Banda Al Andalus- Notas tortas da Madrugada: Canções e letras",
        ano: 2016,
        tipo: "Livro Musical",
        categoria: "musica",
        secao: "autor",
        descricao: "Coletânea de canções e letras da banda Al Andalus, explorando sonoridades contemporâneas com raízes afro-brasileiras. Uma obra que documenta a criação musical do grupo e suas experimentações estéticas.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/129Pl5OnOErkBtuGgNON9w9zYH0A6LCHm?usp=drive_link"
    },
    {
        codigo: "B02",
        titulo: "As Aventuras do Pequeno Samba",
        ano: 2021,
        tipo: "Literatura Infantil",
        categoria: "literatura",
        secao: "autor",
        descricao: "Livro infantil que apresenta a cultura afro-brasileira através das aventuras de um personagem carismático. Uma narrativa lúdica que introduz crianças aos elementos fundamentais da cultura negra brasileira.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1OovYZxqgAl40DgSLG52sh64_oHUzI6DK?usp=drive_link"
    },
    {
        codigo: "B03",
        titulo: "Diáspora Reversa: Musicalidades afroatlânticas Brasil-Benin",
        ano: 2020,
        tipo: "Pesquisa Acadêmica",
        categoria: "pesquisa",
        secao: "autor",
        descricao: "Estudo aprofundado sobre as conexões musicais entre Brasil e Benin, analisando fluxos culturais da diáspora africana e suas manifestações contemporâneas. Pesquisa inovadora sobre intercâmbios culturais afroatlânticos.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1nB3SlbeAx6c5X-yr_oJIbNYYc6pO4m_z?usp=drive_link"
    },
    {
        codigo: "B04",
        titulo: "Pretos, Prussianos índios e Caipiras",
        ano: 2018,
        tipo: "Ensaio",
        categoria: "ensaio",
        secao: "autor",
        descricao: "Reflexão crítica sobre identidades culturais brasileiras e suas intersecções históricas e sociais. Uma análise das complexas relações étnicas e culturais que constituem a brasilidade.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1JLuiwleMpepmcqAP45Sm-ExkKJqRcth9?usp=drive_link"
    },
    {
        codigo: "B07",
        titulo: "História Social TCC",
        ano: 1997,
        tipo: "Trabalho de Graduação",
        categoria: "pesquisa",
        secao: "autor",
        descricao: "Trabalho de Conclusão de Curso em História Social, explorando temas relacionados à cultura afro-brasileira e suas manifestações históricas.",
        disponivel: true,
        link: "https://tede2.pucsp.br/handle/handle/13114"
    },
    {
        codigo: "B08",
        titulo: "A polifonia do protesto negro: movimentos culturais e musicalidades negras urbanas - anos 70/80 - Salvador, São Paulo e Rio de Janeiro",
        ano: 2000,
        tipo: "Dissertação de Mestrado",
        categoria: "pesquisa",
        secao: "autor",
        descricao: "Este trabalho recai sobre fragmentos de culturas musicais de origens africanas retidas em imagens e narrativas de viajantes oitocentistas que estiveram no Brasil. Análise dos movimentos culturais negros urbanos nas décadas de 70 e 80.",
        disponivel: true,
        link: "https://tede2.pucsp.br/handle/handle/13114"
    },
    {
        codigo: "B09",
        titulo: "Memórias Sonoras da Noite: Musicalidades africanas no Brasil Oitocentista",
        ano: 2005,
        tipo: "Tese de Doutorado",
        categoria: "pesquisa",
        secao: "autor",
        descricao: "Versão expandida da pesquisa de mestrado, aprofundando a análise dos movimentos culturais e musicalidades negras urbanas nas décadas de 70 e 80, com foco nas cidades de Salvador, São Paulo e Rio de Janeiro.",
        disponivel: true,
        link: "https://repositorio.pucsp.br/handle/handle/13185"
    },
    {
        codigo: "B10",
        titulo: "A arca de Ébano",
        ano: 2015,
        tipo: "Texto Teatral",
        categoria: "teatro",
        secao: "autor",
        descricao: "Dramaturgia infantojuvenil que explora a cultura afro-brasileira através de uma narrativa mística. Texto teatral que funciona como iniciação lúdica aos mistérios da ancestralidade africana.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1bpeoADnpvRz9SO1DKIsiFT6wCOFj89Sc?usp=drive_link"
    },
    {
        codigo: "B11",
        titulo: "3 Miltons",
        ano: 2016,
        tipo: "Texto Teatral",
        categoria: "teatro",
        secao: "autor",
        descricao: "Espetáculo poético-musical que reúne membros dos principais coletivos de artes negras de São Paulo para rememorar vida e obra dos três intelectuais afro-diaspóricos: Milton Santos, Milton Nascimento e Milton Gonçalves.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1VbtxPN6cRUdeWaq5gQrv1WiLrqvQZS-4?usp=drive_link"
    },
    {
        codigo: "B19",
        titulo: "Solo dos Mares",
        ano: 2020,
        tipo: "Texto Teatral",
        categoria: "teatro",
        secao: "autor",
        descricao: "Projeto teatral que celebra a história de João Cândido, o líder da Revolta da Chibata, através de uma produção que também discute o racismo estrutural e a resistência quilombola no Brasil.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1q8pXSaRPhcbryBZNjB3xVdmfZy_qaLeG?usp=drive_link"
    },
    {
        codigo: "B12",
        titulo: "Agosto na Cidade Murada",
        ano: 2018,
        tipo: "Texto Teatral",
        categoria: "teatro",
        secao: "autor",
        descricao: "Texto teatral experimental que mescla cultura pop, música engajada e crítica social. Roteiro que deu origem ao espetáculo homônimo, apresentando um mundo urbano saturado de violência e poder.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1DRbmOJ837vnxl1i7VP961iWonkbDi0mE?usp=drive_link"
    },
    {
        codigo: "B18",
        titulo: "Os sambas e a modernidade negra no Brasil de Mario de Andrade",
        ano: 2024,
        tipo: "Ensaio",
        categoria: "ensaio",
        secao: "autor",
        descricao: "Ensaio presente no E-book 'Música e modernismos negros – Formação a partir do acervo IMS', página 28. Análise crítica sobre a visão de Mario de Andrade acerca dos sambas e da modernidade negra brasileira.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/11_b12VDUZFRoA0ZkaGf9Mvw9iNxLbTC_?usp=drive_link"
    }
];

// Dados das obras bibliográficas baseados no CSV - SEÇÃO PARTICIPAÇÃO
const participacaoData = [
    {
        codigo: "B05",
        titulo: "Comicidades e Palhaçarias Negras",
        ano: 2023,
        tipo: "Obra Coletiva",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Obra coletiva que explora as tradições cômicas e performáticas da cultura negra brasileira, analisando as contribuições históricas e contemporâneas dos artistas negros no humor e na palhaçaria.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1Smj9wiBQUKx1qaFvwaV9SnKODMiZhBwb?usp=drive_link"
    },
    {
        codigo: "B06",
        titulo: "Negras Insurgências",
        ano: 2022,
        tipo: "Obra Coletiva",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Coletânea que reúne textos sobre resistência, insurgência e protagonismo negro no Brasil contemporâneo, abordando diferentes perspectivas sobre a luta antirracista e os movimentos sociais negros.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1Liolu1HRiJyQyvd427fJMKDBeRinieAU?usp=drive_link"
    },
    {
        codigo: "B13",
        titulo: "Da ponte pra cá: Que cidade te habita? Sampa negra: periferia, contracultura e antirracismo",
        ano: 2007,
        tipo: "Artigo em Revista",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Artigo publicado na Revista Observatório Itaú Cultural Edição 21, Capítulo 3, página 130. Reflexão sobre a São Paulo negra, explorando as relações entre periferia, contracultura e movimento antirracista na cidade.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1Vvk1eO9NFDKQvYsG0_DIzZtDTAq-Wq2D?usp=drive_link"
    },
    {
        codigo: "B14",
        titulo: "Artur Bispo do Rosário: Imaginário, expropriação cultural e racismo antinegro no Brasil moderno",
        ano: 2023,
        tipo: "Artigo em Revista",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Artigo publicado na Revista Living Commons Collective Nº 2, página 127, junho 2023. Análise crítica sobre a obra de Arthur Bispo do Rosário no contexto do racismo estrutural brasileiro. Versão disponível em inglês.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1qqh4xs3ml9jovDVJaTn1Xj_GRRp_mSI-?usp=drive_link"
    },
    {
        codigo: "B15",
        titulo: "Teatro Experimental do Negro: uma perspectiva histórica",
        ano: 2020,
        tipo: "Artigo em Publicação",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Artigo publicado na Revista Primeiros Ensaios, página 57, parte da Publicação Educativa da 34ª Bienal de São Paulo 'Faz escuro mas eu canto'. Análise histórica do Teatro Experimental do Negro e seu impacto na cultura brasileira.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1OJy19BgbF8S324MOtr4NaDnspDvkDQ2k?usp=drive_link"
    },
    {
        codigo: "B16",
        titulo: "As culturas musicais dos retornados brasileiros da Costa atlântica africana",
        ano: 2017,
        tipo: "Capítulo de Livro",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Capítulo V, página 183, do E-book 'Cultura Afro-brasileira: Temas fundamentais em ensino, pesquisa e extensão', organizado por José Carlos Gomes da Silva e Melvina Araújo. Estudo sobre as influências musicais dos retornados brasileiros na África.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1PCYyoYJNRFqURQfadL0HAto_lFy7pGBq?usp=drive_link"
    },
    {
        codigo: "B17",
        titulo: "Periferia, contracultura e antirracismo",
        ano: 2018,
        tipo: "Artigo em Revista",
        categoria: "participacao",
        secao: "participacao",
        descricao: "Artigo publicado na Revista Sampa Mundi - Quebrada Sul, Ano 1, Número 01, página 106. Análise das relações entre periferia, movimentos contraculturais e luta antirracista no contexto urbano brasileiro.",
        disponivel: true,
        link: "https://drive.google.com/drive/folders/1ZlnAHnzQEf49PEQ4FtFMfIVlkNNPOO6v?usp=drive_link"
    }
];

// Combinando todos os dados
const bibliografiaData = [...autorData, ...participacaoData];

console.log("Dados carregados:", {
    autorData: autorData.length,
    participacaoData: participacaoData.length,
    total: bibliografiaData.length
});

// Função para criar o HTML de cada obra
function createBookCard(obra) {
    const categoryIcons = {
        'musica': 'fas fa-music',
        'literatura': 'fas fa-book',
        'pesquisa': 'fas fa-graduation-cap',
        'ensaio': 'fas fa-feather-alt',
        'teatro': 'fas fa-theater-masks',
        'participacao': 'fas fa-users'
    };

    const categoryLabels = {
        'musica': 'Música',
        'literatura': 'Literatura',
        'pesquisa': 'Pesquisa',
        'ensaio': 'Ensaio',
        'teatro': 'Teatro',
        'participacao': 'Participação'
    };

    return `
                <div class="book-card" data-category="${obra.categoria}" data-secao="${obra.secao}">
                    <div class="book-header">
                        <h3 class="book-title">${obra.titulo}</h3>
                        <div class="book-metadata">
                            <div class="book-year">
                                <i class="fas fa-calendar-alt"></i>
                                ${obra.ano}
                            </div>
                            <div class="book-type">
                                <i class="${categoryIcons[obra.categoria]} icon-${obra.categoria}"></i>
                                ${categoryLabels[obra.categoria]}
                            </div>
                        </div>
                    </div>
                    <div class="book-body">
                        <p class="book-description">${obra.descricao}</p>
                        <div class="book-actions">
                            ${obra.disponivel ?
            `<a href="${obra.link}" target="_blank" class="action-btn btn-download">
                                    <i class="fas fa-download"></i>
                                    Download
                                </a>` :
            `<button class="action-btn btn-disabled" disabled>
                                    <i class="fas fa-lock"></i>
                                    Em breve
                                </button>`
        }
                            <button class="action-btn btn-info" onclick="showBookInfo('${obra.codigo}')">
                                <i class="fas fa-info-circle"></i>
                                Mais Info
                            </button>
                        </div>
                    </div>
                </div>
            `;
}

// Função para renderizar obras por seção
function renderBooksBySection(categoriaSelecionada = 'todos') {
    console.log("Renderizando com categoria:", categoriaSelecionada);

    const autorContainer = document.getElementById('autor-container');
    const participacaoContainer = document.getElementById('participacao-container');
    const resultCount = document.getElementById('results-count');

    if (!autorContainer || !participacaoContainer) {
        console.error("Containers não encontrados!");
        return;
    }

    // Filtrar obras de autor
    let obrasAutor = autorData;
    if (categoriaSelecionada !== 'todos') {
        obrasAutor = autorData.filter(obra => obra.categoria === categoriaSelecionada);
    }

    // Filtrar obras de participação
    let obrasParticipacao = participacaoData;
    if (categoriaSelecionada !== 'todos' && categoriaSelecionada !== 'participacao') {
        obrasParticipacao = participacaoData.filter(obra => obra.categoria === categoriaSelecionada);
    } else if (categoriaSelecionada === 'participacao') {
        // Mostrar todas as participações
    }

    // Ordenar por ano (mais recente primeiro)
    obrasAutor.sort((a, b) => b.ano - a.ano);
    obrasParticipacao.sort((a, b) => b.ano - a.ano);

    // Renderizar
    autorContainer.innerHTML = obrasAutor.map(obra => createBookCard(obra)).join('');
    participacaoContainer.innerHTML = obrasParticipacao.map(obra => createBookCard(obra)).join('');

    console.log("Renderizado:", {
        autor: obrasAutor.length,
        participacao: obrasParticipacao.length
    });

    // Atualizar contador
    const totalFiltradas = obrasAutor.length + obrasParticipacao.length;
    const categoriaTexto = categoriaSelecionada === 'todos' ? 'todas as' :
        categoriaSelecionada === 'participacao' ? 'de participação' :
            `da categoria "${categoriaSelecionada}"`;

    if (resultCount) {
        resultCount.textContent = `Mostrando ${categoriaTexto} ${totalFiltradas} obra${totalFiltradas !== 1 ? 's' : ''}`;
    }
}

// Função para mostrar informações detalhadas
function showBookInfo(codigo) {
    const obra = bibliografiaData.find(o => o.codigo === codigo);
    if (obra) {
        alert(`${obra.titulo}\n\nAno: ${obra.ano}\nTipo: ${obra.tipo}\nSeção: ${obra.secao === 'autor' ? 'Autor' : 'Participação'}\n\n${obra.descricao}`);
    }
}

// Event listeners para filtros
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Filtro clicado:", button.dataset.category);

            // Remover classe ativa de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adicionar classe ativa ao botão clicado
            button.classList.add('active');

            // Filtrar e renderizar obras
            const categoria = button.dataset.category;
            renderBooksBySection(categoria);
        });
    });
}

// Inicializar página
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM carregado, inicializando...");

    // Verificar se os elementos existem
    const autorContainer = document.getElementById('autor-container');
    const participacaoContainer = document.getElementById('participacao-container');

    if (!autorContainer || !participacaoContainer) {
        console.error("Containers não encontrados!");
        return;
    }

    console.log("Containers encontrados, renderizando...");

    renderBooksBySection(); // Renderizar todas as obras inicialmente
    initializeFilters(); // Configurar filtros

    console.log("Inicialização completa!");

    // Navbar scroll effect
    $(window).scroll(function () {
        const header = $('header');
        if ($(this).scrollTop() > 100) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });
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

// Exportar função para uso global
window.showBookInfo = showBookInfo;
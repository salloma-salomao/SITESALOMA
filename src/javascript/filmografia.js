// JavaScript para a seção de filmografia
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos filmes de Salloma Salomão
    const filmografiaData = [
        {
            codigo: "F01",
            titulo: "Uma Montanha em Movimento",
            ano: "2025",
            poster: "src/images/F01/1.jpg",
            duracao: "115 minutos",
            classificacao: "14 anos",
            genero: "Drama / Documentário",
            direcao: "Caetano Gotardo",
            funcao: "Trilha Sonora e Atuação",
            pais: "Brasil",
            produtora: "Filmes do Caixote",
            sinopse: "Filme que explora as transformações sociais e culturais do Brasil contemporâneo através de uma narrativa documental inovadora. Uma reflexão profunda sobre as mudanças estruturais da sociedade brasileira.",
            imdbLink: "https://www.imdb.com/pt/title/tt35487911/",
            trailerLink: null,
            elenco: "Caetano Gotardo, Gabriel Fausztino, Larissa Siqueira, Louise Belmonte, Luana Vitra, Marina Tranjan, Mawusi Tulani, Renato Sassone, Salloma Salomão"
        },
        {
            codigo: "F02",
            titulo: "Todos os Mortos",
            ano: "2021",
            poster: "src/images/F02/1.jpg",
            duracao: "120 minutos",
            classificacao: "14 anos",
            genero: "Drama / Terror",
            direcao: "Caetano Gotardo e Marco Dutra",
            funcao: "Trilha Sonora",
            pais: "Brasil",
            produtora: "Coproduç.",
            sinopse: "Na São Paulo de 1899, onze anos após a abolição da escravidão, fantasmas ainda caminham entre os vivos. Mulheres da família Soares, antigas proprietárias de terra, tentam se agarrar ao que resta de seus privilégios, enquanto Iná Nascimento, mulher que viveu por muito tempo como escravizada, luta para reunir seus entes queridos em um mundo hostil.",
            imdbLink: "https://www.imdb.com/pt/title/tt8845322/",
            trailerLink: "https://www.youtube.com/watch?v=ftTjVfAns1g",
            elenco: "Mawusi Tulani, Clarissa Kiste, Carolina Bianchi, Thaia Perez"
        },
        {
            codigo: "F03",
            titulo: "Negro em Mim",
            ano: "2021",
            poster: "src/images/F03/1.jpg",
            duracao: "111 minutos",
            classificacao: "16 anos",
            genero: "Documentário",
            direcao: "Macca Ramos",
            funcao: "Elenco",
            pais: "Brasil",
            produtora: "Canal Brasil",
            sinopse: "Documentário que apresenta o cotidiano de pessoas negras na cidade de São Paulo, explorando diferentes experiências com o racismo e questões identitárias. Uma reflexão profunda sobre negritude e pertencimento na sociedade brasileira.",
            imdbLink: "https://www.imdb.com/pt/title/tt14355502/",
            trailerLink: null,
            elenco: "Salloma Salomão, Stephanie Ribeiro, Eugenio Lima, Fernando Neves, Renata Felinto"
        },
        {
            codigo: "F04",
            titulo: "Jair Rodrigues: Deixe que Digam",
            ano: "2019",
            poster: "src/images/F04/1.jpg",
            duracao: "98 minutos",
            classificacao: "Livre",
            genero: "Documentário",
            direcao: "Rubens Rewald",
            funcao: "Elenco",
            pais: "Brasil",
            produtora: "Documentário Musical",
            sinopse: "Documentário que celebra a trajetória de Jair Rodrigues, um dos mais importantes cantores da música brasileira, destacando sua versatilidade e contribuição à cultura nacional. Uma homenagem à música popular brasileira.",
            imdbLink: "https://www.imdb.com/pt/title/tt13935904/",
            trailerLink: "https://www.youtube.com/watch?v=CZu5FgNChWg",
            elenco: "Jair Rodrigues, Jair Oliveira, Clodine Mello, Luciana Mello, Salloma Salomão"
        },
        {
            codigo: "F05",
            titulo: "Dentro da Minha Pele",
            ano: "2020",
            poster: "src/images/F05/1.jpg",
            duracao: "86 minutos",
            classificacao: "12 anos",
            genero: "Documentário",
            direcao: "Toni Venturi",
            funcao: "Participação/Elenco",
            pais: "Brasil",
            produtora: "Documentário Social",
            sinopse: "Nove pessoas com diferentes tons de pele negra apresentam seu cotidiano na cidade de São Paulo e compartilham situações de racismo, desde as mais veladas até as mais explícitas. Um retrato honesto sobre o racismo estrutural no Brasil.",
            imdbLink: "https://www.imdb.com/pt/title/tt13351512/?ref_=fn_all_ttl_1",
            trailerLink: "https://www.youtube.com/watch?v=TPIe9aGsLNo",
            elenco: "Salloma Salomão, Adilson Paes, Chico César, Cida Bento, Cidinha da Silva"
        },
        {
            codigo: "F06",
            titulo: "Noite e Dia Lima Barreto, Obra e Vida",
            ano: "2023",
            poster: "src/images/F06/1.jpg",
            duracao: "115 minutos",
            classificacao: "Livre",
            genero: "Documentário",
            direcao: "Rodrigo Grota",
            funcao: "Depoimento",
            pais: "Brasil",
            produtora: "Kinopus Audiovisual",
            sinopse: "Documentário sobre a vida e obra do escritor Lima Barreto, explorando seu legado literário e sua relevância para a cultura brasileira. Uma análise profunda da contribuição do autor para a literatura nacional.",
            imdbLink: "https://www.imdb.com/pt/title/tt29429433/",
            trailerLink: null,
            elenco: "Luan Valero, Tiago Daniel, Luli Rodrigues, Guilherme Kirchheim, Thainara Pereira"
        }
    ];

    let currentFilmeIndex = 0;

    // Função principal para inicializar a filmografia
    function initFilmografia() {
        // Verifica se a seção existe
        const filmografiaSection = document.getElementById('filmografia');
        if (!filmografiaSection) return;

        console.log('Inicializando filmografia...');

        // Configura os event listeners
        setupFilmeEventListeners();

        // Carrega o primeiro filme
        loadFilme(currentFilmeIndex);
    }

    // Configura os event listeners
    function setupFilmeEventListeners() {
        const prevBtn = document.getElementById('prevFilme');
        const nextBtn = document.getElementById('nextFilme');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentFilmeIndex > 0) {
                    currentFilmeIndex--;
                    loadFilme(currentFilmeIndex);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentFilmeIndex < filmografiaData.length - 1) {
                    currentFilmeIndex++;
                    loadFilme(currentFilmeIndex);
                }
            });
        }

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (isFilmografiaInView()) {
                if (e.key === 'ArrowLeft' && currentFilmeIndex > 0) {
                    e.preventDefault();
                    currentFilmeIndex--;
                    loadFilme(currentFilmeIndex);
                } else if (e.key === 'ArrowRight' && currentFilmeIndex < filmografiaData.length - 1) {
                    e.preventDefault();
                    currentFilmeIndex++;
                    loadFilme(currentFilmeIndex);
                }
            }
        });
    }

    // Verifica se a seção de filmografia está visível
    function isFilmografiaInView() {
        const section = document.getElementById('filmografia');
        if (!section) return false;
        
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Carrega um filme específico
    function loadFilme(index) {
        const filme = filmografiaData[index];
        
        console.log('Carregando filme:', filme.titulo);
        
        // Mostra loading
        const loadingSpinner = document.getElementById('filmeLoadingSpinner');
        const metadata = document.getElementById('filmeMetadata');
        const sinopse = document.getElementById('filmeSinopse');
        const actions = document.getElementById('filmeActions');
        
        if (loadingSpinner) loadingSpinner.style.display = 'block';
        if (metadata) metadata.style.display = 'none';
        if (sinopse) sinopse.style.display = 'none';
        if (actions) actions.style.display = 'none';
        
        // Simula carregamento
        setTimeout(() => {
            // Atualiza informações do filme
            updateFilmeInfo(filme);
            
            // Carrega detalhes
            loadFilmeDetails(filme);
            
            // Esconde loading e mostra conteúdo
            if (loadingSpinner) loadingSpinner.style.display = 'none';
            if (metadata) metadata.style.display = 'grid';
            if (sinopse) sinopse.style.display = 'block';
            if (actions) actions.style.display = 'flex';
            
            // Atualiza botões de navegação
            updateFilmeNavigationButtons();
        }, 300);
    }

    // Atualiza as informações do filme
    function updateFilmeInfo(filme) {
        const filmeTitle = document.getElementById('filmeTitle');
        const filmeYear = document.getElementById('filmeYear');
        const filmeCounter = document.getElementById('filmeCounter');
        
        if (filmeTitle) filmeTitle.textContent = filme.titulo;
        if (filmeYear) filmeYear.textContent = filme.ano;
        if (filmeCounter) {
            filmeCounter.textContent = `${currentFilmeIndex + 1} de ${filmografiaData.length}`;
        }
    }

    // Carrega os detalhes do filme
    function loadFilmeDetails(filme) {
        // Atualizar metadata
        const metadata = document.getElementById('filmeMetadata');
        if (metadata) {
            metadata.innerHTML = `
                <div class="metadata-item">
                    <div class="metadata-label">Duração</div>
                    <div class="metadata-value">${filme.duracao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Classificação</div>
                    <div class="metadata-value">${filme.classificacao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Gênero</div>
                    <div class="metadata-value">${filme.genero}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Direção</div>
                    <div class="metadata-value">${filme.direcao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">País</div>
                    <div class="metadata-value">${filme.pais}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Elenco Principal</div>
                    <div class="metadata-value">${filme.elenco}</div>
                </div>
            `;
        }

        // Atualizar sinopse
        const sinopseText = document.getElementById('sinopseText');
        if (sinopseText) {
            sinopseText.textContent = filme.sinopse;
        }

        // Atualizar ações
        const actions = document.getElementById('filmeActions');
        if (actions) {
            let actionsHTML = '';
            
            if (filme.imdbLink) {
                actionsHTML += `
                    <a href="${filme.imdbLink}" target="_blank" class="action-btn btn-imdb">
                        <i class="fab fa-imdb"></i>
                        <span>Ver no IMDb</span>
                    </a>
                `;
            }
            
            if (filme.trailerLink) {
                actionsHTML += `
                    <a href="${filme.trailerLink}" target="_blank" class="action-btn btn-trailer">
                        <i class="fab fa-youtube"></i>
                        <span>Assistir Trailer</span>
                    </a>
                `;
            } else {
                actionsHTML += `
                    <button class="action-btn btn-disabled" disabled>
                        <i class="fas fa-video-slash"></i>
                        <span>Trailer Indisponível</span>
                    </button>
                `;
            }
            
            actions.innerHTML = actionsHTML;
        }

        // Atualizar poster
        const poster = document.getElementById('filmePoster');
        if (poster) {
            console.log('Tentando carregar poster:', filme.poster);
            
            // Tentar carregar a imagem real, se não existir usar placeholder
            const img = new Image();
            img.onload = function() {
                console.log('Poster carregado com sucesso:', filme.poster);
                poster.style.backgroundImage = `url(${filme.poster})`;
                poster.style.backgroundSize = 'cover';
                poster.style.backgroundPosition = 'center';
                poster.innerHTML = '';
            };
            img.onerror = function() {
                console.log('Erro ao carregar poster, usando fallback:', filme.poster);
                poster.style.backgroundImage = 'none';
                poster.innerHTML = `
                    <i class="fas fa-film fa-3x"></i><br>
                    ${filme.titulo}
                `;
            };
            img.src = filme.poster;
        }

        // Atualizar créditos
        const funcaoCredito = document.getElementById('funcaoCredito');
        const produtoraCredito = document.getElementById('produtoraCredito');
        
        if (funcaoCredito) funcaoCredito.textContent = filme.funcao;
        if (produtoraCredito) produtoraCredito.textContent = filme.produtora;
    }

    // Atualiza os botões de navegação
    function updateFilmeNavigationButtons() {
        const prevBtn = document.getElementById('prevFilme');
        const nextBtn = document.getElementById('nextFilme');
        
        if (prevBtn) prevBtn.disabled = currentFilmeIndex === 0;
        if (nextBtn) nextBtn.disabled = currentFilmeIndex === filmografiaData.length - 1;
    }

    // Inicializa a filmografia
    initFilmografia();

}); // JavaScript para a seção de filmografia
(function() {
    // Dados dos filmes de Salloma Salomão
    const filmografiaData = [
        {
            codigo: "F01",
            titulo: "Uma Montanha em Movimento",
            ano: "2025",
            poster: "src/images/F01/1.jpg",
            duracao: "115 minutos",
            classificacao: "14 anos",
            genero: "Drama / Documentário",
            direcao: "Caetano Gotardo",
            funcao: "Trilha Sonora e Atuação",
            pais: "Brasil",
            produtora: "Filmes do Caixote",
            sinopse: "Filme que explora as transformações sociais e culturais do Brasil contemporâneo através de uma narrativa documental inovadora. Uma reflexão profunda sobre as mudanças estruturais da sociedade brasileira.",
            imdbLink: "https://www.imdb.com/pt/title/tt35487911/",
            trailerLink: null,
            elenco: "Caetano Gotardo, Gabriel Fausztino, Larissa Siqueira, Louise Belmonte, Luana Vitra, Marina Tranjan, Mawusi Tulani, Renato Sassone, Salloma Salomão"
        },
        {
            codigo: "F02",
            titulo: "Todos os Mortos",
            ano: "2021",
            poster: "src/images/F02/1.jpg",
            duracao: "120 minutos",
            classificacao: "14 anos",
            genero: "Drama / Terror",
            direcao: "Caetano Gotardo e Marco Dutra",
            funcao: "Trilha Sonora",
            pais: "Brasil",
            produtora: "Coproduç.",
            sinopse: "Na São Paulo de 1899, onze anos após a abolição da escravidão, fantasmas ainda caminham entre os vivos. Mulheres da família Soares, antigas proprietárias de terra, tentam se agarrar ao que resta de seus privilégios, enquanto Iná Nascimento, mulher que viveu por muito tempo como escravizada, luta para reunir seus entes queridos em um mundo hostil.",
            imdbLink: "https://www.imdb.com/pt/title/tt8845322/",
            trailerLink: "https://www.youtube.com/watch?v=ftTjVfAns1g",
            elenco: "Mawusi Tulani, Clarissa Kiste, Carolina Bianchi, Thaia Perez"
        },
        {
            codigo: "F03",
            titulo: "Negro em Mim",
            ano: "2021",
            poster: "src/images/F03/1.jpg",
            duracao: "111 minutos",
            classificacao: "16 anos",
            genero: "Documentário",
            direcao: "Macca Ramos",
            funcao: "Elenco",
            pais: "Brasil",
            produtora: "Canal Brasil",
            sinopse: "Documentário que apresenta o cotidiano de pessoas negras na cidade de São Paulo, explorando diferentes experiências com o racismo e questões identitárias. Uma reflexão profunda sobre negritude e pertencimento na sociedade brasileira.",
            imdbLink: "https://www.imdb.com/pt/title/tt14355502/",
            trailerLink: null,
            elenco: "Salloma Salomão, Stephanie Ribeiro, Eugenio Lima, Fernando Neves, Renata Felinto"
        },
        {
            codigo: "F04",
            titulo: "Jair Rodrigues: Deixe que Digam",
            ano: "2019",
            poster: "src/images/F04/1.jpg",
            duracao: "98 minutos",
            classificacao: "Livre",
            genero: "Documentário",
            direcao: "Rubens Rewald",
            funcao: "Elenco",
            pais: "Brasil",
            produtora: "Documentário Musical",
            sinopse: "Documentário que celebra a trajetória de Jair Rodrigues, um dos mais importantes cantores da música brasileira, destacando sua versatilidade e contribuição à cultura nacional. Uma homenagem à música popular brasileira.",
            imdbLink: "https://www.imdb.com/pt/title/tt13935904/",
            trailerLink: "https://www.youtube.com/watch?v=CZu5FgNChWg",
            elenco: "Jair Rodrigues, Jair Oliveira, Clodine Mello, Luciana Mello, Salloma Salomão"
        },
        {
            codigo: "F05",
            titulo: "Dentro da Minha Pele",
            ano: "2020",
            poster: "src/images/F05/1.jpg",
            duracao: "86 minutos",
            classificacao: "12 anos",
            genero: "Documentário",
            direcao: "Toni Venturi",
            funcao: "Participação/Elenco",
            pais: "Brasil",
            produtora: "Documentário Social",
            sinopse: "Nove pessoas com diferentes tons de pele negra apresentam seu cotidiano na cidade de São Paulo e compartilham situações de racismo, desde as mais veladas até as mais explícitas. Um retrato honesto sobre o racismo estrutural no Brasil.",
            imdbLink: "https://www.imdb.com/pt/title/tt13351512/?ref_=fn_all_ttl_1",
            trailerLink: "https://www.youtube.com/watch?v=TPIe9aGsLNo",
            elenco: "Salloma Salomão, Adilson Paes, Chico César, Cida Bento, Cidinha da Silva"
        },
        {
            codigo: "F06",
            titulo: "Noite e Dia Lima Barreto, Obra e Vida",
            ano: "2023",
            poster: "src/images/F06/1.jpg",
            duracao: "115 minutos",
            classificacao: "Livre",
            genero: "Documentário",
            direcao: "Rodrigo Grota",
            funcao: "Depoimento",
            pais: "Brasil",
            produtora: "Kinopus Audiovisual",
            sinopse: "Documentário sobre a vida e obra do escritor Lima Barreto, explorando seu legado literário e sua relevância para a cultura brasileira. Uma análise profunda da contribuição do autor para a literatura nacional.",
            imdbLink: "https://www.imdb.com/pt/title/tt29429433/",
            trailerLink: null,
            elenco: "Luan Valero, Tiago Daniel, Luli Rodrigues, Guilherme Kirchheim, Thainara Pereira"
        }
    ];

    let currentFilmeIndex = 0;

    // Função principal para inicializar a filmografia
    function initFilmografia() {
        // Verifica se a seção existe
        const filmografiaSection = document.getElementById('filmografia');
        if (!filmografiaSection) return;

        // Insere o HTML da filmografia se ainda não existe
        if (!filmografiaSection.querySelector('.filmografia-player')) {
            const filmografiaHTML = `
                <h2 class="section-title">Filmografia</h2>
                <p class="section-description">Participações de Salloma Salomão em produções cinematográficas nacionais e internacionais.</p>
                
                <div class="filmografia-player">
                    <div class="filme-navigation">
                        <button class="filme-nav-arrow" id="prevFilme">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="filme-info-header">
                            <div class="filme-title" id="filmeTitle">Carregando...</div>
                            <div class="filme-year" id="filmeYear"></div>
                            <div class="filme-counter" id="filmeCounter"></div>
                        </div>
                        <button class="filme-nav-arrow" id="nextFilme">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <div class="filmografia-content">
                        <div class="filme-details-section">
                            <div class="filme-loading-spinner" id="filmeLoadingSpinner">
                                <i class="fas fa-film fa-2x"></i>
                                <p>Carregando filme...</p>
                            </div>
                            
                            <div class="filme-metadata" id="filmeMetadata"></div>
                            
                            <div class="filme-sinopse" id="filmeSinopse">
                                <div class="sinopse-title">
                                    <i class="fas fa-quote-left"></i>
                                    Sinopse
                                </div>
                                <div class="sinopse-text" id="sinopseText"></div>
                            </div>
                            
                            <div class="filme-actions" id="filmeActions"></div>
                        </div>

                        <div class="filme-poster-section">
                            <div class="poster-container">
                                <div class="filme-poster" id="filmePoster">
                                    <i class="fas fa-film fa-3x"></i><br>
                                    Poster do Filme
                                </div>
                                <div class="poster-overlay"></div>
                            </div>
                            <div class="filme-credits" id="filmeCredits">
                                <p><strong>País:</strong> <span id="funcaoCredito">-</span></p>
                                <p><strong>Produtora:</strong> <span id="produtoraCredito">-</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            filmografiaSection.innerHTML = filmografiaHTML;
        }

        // Configura os event listeners
        setupFilmeEventListeners();

        // Carrega o primeiro filme
        loadFilme(currentFilmeIndex);
    }

    // Configura os event listeners
    function setupFilmeEventListeners() {
        const prevBtn = document.getElementById('prevFilme');
        const nextBtn = document.getElementById('nextFilme');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentFilmeIndex > 0) {
                    currentFilmeIndex--;
                    loadFilme(currentFilmeIndex);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentFilmeIndex < filmografiaData.length - 1) {
                    currentFilmeIndex++;
                    loadFilme(currentFilmeIndex);
                }
            });
        }

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (isFilmografiaInView()) {
                if (e.key === 'ArrowLeft' && currentFilmeIndex > 0) {
                    e.preventDefault();
                    currentFilmeIndex--;
                    loadFilme(currentFilmeIndex);
                } else if (e.key === 'ArrowRight' && currentFilmeIndex < filmografiaData.length - 1) {
                    e.preventDefault();
                    currentFilmeIndex++;
                    loadFilme(currentFilmeIndex);
                }
            }
        });
    }

    // Verifica se a seção de filmografia está visível
    function isFilmografiaInView() {
        const section = document.getElementById('filmografia');
        if (!section) return false;
        
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Carrega um filme específico
    function loadFilme(index) {
        const filme = filmografiaData[index];
        
        // Mostra loading
        const loadingSpinner = document.getElementById('filmeLoadingSpinner');
        const metadata = document.getElementById('filmeMetadata');
        const sinopse = document.getElementById('filmeSinopse');
        const actions = document.getElementById('filmeActions');
        
        if (loadingSpinner) loadingSpinner.style.display = 'block';
        if (metadata) metadata.style.display = 'none';
        if (sinopse) sinopse.style.display = 'none';
        if (actions) actions.style.display = 'none';
        
        // Simula carregamento
        setTimeout(() => {
            // Atualiza informações do filme
            updateFilmeInfo(filme);
            
            // Carrega detalhes
            loadFilmeDetails(filme);
            
            // Esconde loading e mostra conteúdo
            if (loadingSpinner) loadingSpinner.style.display = 'none';
            if (metadata) metadata.style.display = 'grid';
            if (sinopse) sinopse.style.display = 'block';
            if (actions) actions.style.display = 'flex';
            
            // Atualiza botões de navegação
            updateFilmeNavigationButtons();
        }, 500);
    }

    // Atualiza as informações do filme
    function updateFilmeInfo(filme) {
        const filmeTitle = document.getElementById('filmeTitle');
        const filmeYear = document.getElementById('filmeYear');
        const filmeCounter = document.getElementById('filmeCounter');
        
        if (filmeTitle) filmeTitle.textContent = filme.titulo;
        if (filmeYear) filmeYear.textContent = filme.ano;
        if (filmeCounter) {
            filmeCounter.textContent = `${currentFilmeIndex + 1} de ${filmografiaData.length}`;
        }
    }

    // Carrega os detalhes do filme
    function loadFilmeDetails(filme) {
        // Atualizar metadata
        const metadata = document.getElementById('filmeMetadata');
        if (metadata) {
            metadata.innerHTML = `
                <div class="metadata-item">
                    <div class="metadata-label">Duração</div>
                    <div class="metadata-value">${filme.duracao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Classificação</div>
                    <div class="metadata-value">${filme.classificacao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Gênero</div>
                    <div class="metadata-value">${filme.genero}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Direção</div>
                    <div class="metadata-value">${filme.direcao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Função</div>
                    <div class="metadata-value">${filme.funcao}</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">Elenco Principal</div>
                    <div class="metadata-value">${filme.elenco}</div>
                </div>
            `;
        }

        // Atualizar sinopse
        const sinopseText = document.getElementById('sinopseText');
        if (sinopseText) {
            sinopseText.textContent = filme.sinopse;
        }

        // Atualizar ações
        const actions = document.getElementById('filmeActions');
        if (actions) {
            let actionsHTML = '';
            
            if (filme.imdbLink) {
                actionsHTML += `
                    <a href="${filme.imdbLink}" target="_blank" class="action-btn btn-imdb">
                        <i class="fab fa-imdb"></i>
                        <span>Ver no IMDb</span>
                    </a>
                `;
            }
            
            if (filme.trailerLink) {
                actionsHTML += `
                    <a href="${filme.trailerLink}" target="_blank" class="action-btn btn-trailer">
                        <i class="fab fa-youtube"></i>
                        <span>Assistir Trailer</span>
                    </a>
                `;
            } else {
                actionsHTML += `
                    <button class="action-btn btn-disabled" disabled>
                        <i class="fas fa-video-slash"></i>
                        <span>Trailer Indisponível</span>
                    </button>
                `;
            }
            
            actions.innerHTML = actionsHTML;
        }

        // Atualizar poster
        const poster = document.getElementById('filmePoster');
        if (poster) {
            // Tentar carregar a imagem real, se não existir usar placeholder
            const img = new Image();
            img.onload = function() {
                poster.style.backgroundImage = `url(${filme.poster})`;
                poster.style.backgroundSize = 'cover';
                poster.style.backgroundPosition = 'center';
                poster.innerHTML = '';
            };
            img.onerror = function() {
                poster.style.backgroundImage = 'none';
                poster.innerHTML = `
                    <i class="fas fa-film fa-3x"></i><br>
                    ${filme.titulo}
                `;
            };
            img.src = filme.poster;
        }

        // Atualizar créditos
        const funcaoCredito = document.getElementById('funcaoCredito');
        const produtoraCredito = document.getElementById('produtoraCredito');
        
        if (funcaoCredito) funcaoCredito.textContent = filme.pais;
        if (produtoraCredito) produtoraCredito.textContent = filme.produtora;
    }

    // Atualiza os botões de navegação
    function updateFilmeNavigationButtons() {
        const prevBtn = document.getElementById('prevFilme');
        const nextBtn = document.getElementById('nextFilme');
        
        if (prevBtn) prevBtn.disabled = currentFilmeIndex === 0;
        if (nextBtn) nextBtn.disabled = currentFilmeIndex === filmografiaData.length - 1;
    }

    // Função para criar placeholder do poster
    function createFilmePosterPlaceholder(titulo) {
        return `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 20px;">
                <i class="fas fa-film" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.7;"></i>
                <div style="font-weight: 600; margin-bottom: 10px;">${titulo}</div>
                <div style="font-size: 0.8rem; opacity: 0.6;">Poster em breve</div>
            </div>
        `;
    }

    // Inicializa quando o DOM estiver carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilmografia);
    } else {
        initFilmografia();
    }

    // Exporta funções para uso global se necessário
    window.filmografiaPlayer = {
        init: initFilmografia,
        loadFilme: loadFilme,
        nextFilme: () => {
            if (currentFilmeIndex < filmografiaData.length - 1) {
                currentFilmeIndex++;
                loadFilme(currentFilmeIndex);
            }
        },
        prevFilme: () => {
            if (currentFilmeIndex > 0) {
                currentFilmeIndex--;
                loadFilme(currentFilmeIndex);
            }
        }
    };

})();
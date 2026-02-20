// JavaScript para a seção de discografia com links do Spotify - VERSÃO COMPLETA
(function () {
    // Dados dos álbuns de Salloma Salomão
    const discografiaData = [
        {
            title: "Luanda Mana Lua",
            year: "2024",
            cover: "src/images/albums/D01.jpg",
            spotifyLink: "https://open.spotify.com/album/7FuNO5SVB0uM49On20B5gN?si=6gwbf0UrQjSloh2kSJVJMw", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Babaridibom",
                    duration: "06:23",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Babosa",
                    duration: "05:43",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Quintal de Bendegó",
                    duration: "05:44",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Tempo Seis",
                    duration: "04:25",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Luanda Mana Lua",
                    duration: "06:04",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Litoral Vazado",
                    duration: "05:30",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Escura Raiz do Grito",
                    duration: "06:34",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Timbileiros",
                    duration: "05:04",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Terno Azul",
            year: "2024",
            cover: "src/images/albums/D02.jpg",
            spotifyLink: "https://open.spotify.com/album/36TlgrOZX0LwgTZ5EK4jOs?si=EBMyrweNQYmCLzOePPqb7w", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Prólogo",
                    duration: "00:38",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Terno Azul",
                    duration: "02:50",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Continue a Dançar",
                    duration: "03:14",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Diálogo de Insulto",
                    duration: "03:01",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Tua Saia",
                    duration: "03:08",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Samba to Samba",
                    duration: "02:53",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Bendegó",
                    duration: "02:09",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Nzinga",
            year: "2022",
            cover: "src/images/albums/D03.jpg",
            spotifyLink: "https://open.spotify.com/album/0uHMZgEkHIWjdblO4Ojg5w?si=KK5Xl-mDSIi_rEypfzVScw", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Kwanza",
                    duration: "02:57",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Zero Universo",
                    duration: "02:21",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Universo",
                    duration: "04:54",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Chibinda",
                    duration: "01:09",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Quilombo dos Jagas",
                    duration: "02:37",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Marcha dos Jagas",
                    duration: "02:37",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Umbulumbumba",
                    duration: "00:42",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Ayshland",
                    duration: "04:48",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Lamba",
                    duration: "03:31",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Caminhante sobre o Mar",
                    duration: "02:08",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Muxima",
                    duration: "01:38",
                    lyrics: ""
                },
                {
                    number: 12,
                    name: "Tua Saia",
                    duration: "03:08",
                    lyrics: ""
                },
                {
                    number: 13,
                    name: "Django Njongo",
                    duration: "03:01",
                    lyrics: ""
                },
                {
                    number: 14,
                    name: "Nzinga Assumpção",
                    duration: "05:07",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Mensagens aos Terráqueos",
            year: "2021",
            cover: "src/images/albums/D04.jpg",
            spotifyLink: "https://open.spotify.com/album/05sV84n2HBjl73glFHrkZi?si=H6yBk2JYSZyHA-8a13YBTQ", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Mensagem aos Terráqueos ",
                    duration: "07:32",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Miséria e Opulência",
                    duration: "04:46",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Olhando Além do Muro",
                    duration: "02:52",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Canção da Terra Arrasada",
                    duration: "05:36",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Apenas um Dia Amanhecido em Paz",
                    duration: "01:57",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Mercadores do Caos (Caindo na Real)",
                    duration: "06:28",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Ativa Esperança",
                    duration: "03:35",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Floresta Doente",
                    duration: "01:48",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Agosto na Cidade Murada",
            year: "2018",
            cover: "src/images/albums/D05.jpg",
            spotifyLink: "https://open.spotify.com/album/2lKDN7ysYp36Gx7xiglWR3?si=e7wnYhBGQfi3SQUJTCVOxg", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Marcha do Deus Cachorro-Urubu / Vinehta Beleléu",
                    duration: "02:57",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Velho Mameluco/ Agosto na Cidade Murada/ De Onde Vem o Medo/ Minueto da Tortura",
                    duration: "08:07",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Velho Insano",
                    duration: "01:47",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Toda Revolta",
                    duration: "01:30",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Canção da Mãe Aflita",
                    duration: "3:31",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Jetro Tal do Grajáu/ Num Canto Qualquer Dessa Cidade/ Cacos de Vidro",
                    duration: "05:16",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Babylonia no Moinho",
                    duration: "04:55",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Crisântemos",
                    duration: "04:29",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Jogos da Rua",
                    duration: "05:28",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Liberdade Guardiã",
                    duration: "03:41",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Dance Até Quando Não Puder Mais",
                    duration: "02:15",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Notas Tortas da Madrugada (Ao Vivo)",
            year: "2024",
            cover: "src/images/albums/D06.jpg",
            spotifyLink: "https://open.spotify.com/album/4dyqDUUr68BAx7cDQZnXiM?si=78UU_VqSSvOTOIdTXwUh8w", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Homens Sujos de Sangue",
                    duration: "02:25",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Por que Verter a Noite?",
                    duration: "02:29",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Adjutório",
                    duration: "03:04",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Alta Madrugada",
                    duration: "04:28",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Indecifrável Curso",
                    duration: "03:01",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Advento da Paixão",
                    duration: "04:30",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Notas Tortas da Madrugada",
                    duration: "04:56",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "O Dia das Tribos",
                    duration: "03:29",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Tudo Bem Você Tem Razão",
                    duration: "02:48",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Kiequitidanatelha",
                    duration: "01:58",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Arcaico Engenho Moderno",
                    duration: "03:11",
                    lyrics: ""
                },
                {
                    number: 12,
                    name: "Há Possibilidade de Sonho",
                    duration: "03:17",
                    lyrics: ""
                },
                {
                    number: 13,
                    name: "1º de Maio",
                    duration: "04:30",
                    lyrics: ""
                },
                {
                    number: 14,
                    name: "Baile Soul",
                    duration: "03:39",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Aurora Negra",
            year: "2013",
            cover: "src/images/albums/D07.jpg",
            spotifyLink: "https://open.spotify.com/album/686rnPBKIT3W2170gAfsX5?si=Cv4X3ZpMRZ251MZuXuYzNA", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Pipoca Contemporânea",
                    duration: "03:51",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "O Medo Senhor – Meu Coração Dançou",
                    duration: "03:27",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Fandango Réstia",
                    duration: "02:23",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Viola D'angola",
                    duration: "02:47",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Jurema – Crioula dos Olhos Verdes (feat. Clarianas)",
                    duration: "03:30",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Princesinha do Congo",
                    duration: "04:21",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Sanctus Aetiopicus",
                    duration: "01:03",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Benedito de Luanda – Ditinho (feat. Negravat)",
                    duration: "02:51",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Preta",
                    duration: "03:46",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Muriquinhu (feat. Coletivo Amoràterra)",
                    duration: "02:41",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Pedras e Bornais",
                    duration: "05:32",
                    lyrics: ""
                },
                {
                    number: 12,
                    name: "Eu Boi, Minha Pai, Minha Mãe, Minha Ngombe – Canga na Cacunda",
                    duration: "04:25",
                    lyrics: ""
                },
                {
                    number: 13,
                    name: "Pelle e Memória (feat. Naruna Costa)",
                    duration: "03:40",
                    lyrics: ""
                },
                {
                    number: 14,
                    name: "Navalhada",
                    duration: "03:03",
                    lyrics: ""
                },
                {
                    number: 15,
                    name: "Minha Nação É o Tambor",
                    duration: "03:34",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Faces da Tarde de um Mesmo Sentimento",
            year: "2007",
            cover: "src/images/albums/D08.jpg",
            spotifyLink: "https://open.spotify.com/album/1pLy73op7qA121P4r2Dlhx?si=DjDtI2EvRe2oiSpRWrDy-g", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Soletrar",
                    duration: "05:02",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Advento da paixão",
                    duration: "04:38",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Do Amor ao Fascínio",
                    duration: "04:00",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Sem Álibi (feat Maga Lieri) ",
                    duration: "04:34",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Refém da Miragem",
                    duration: "04:20",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Alta Madrugada (feat Luciano Costa)",
                    duration: "04:01",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Paranóia - Frases de amor em canções de guerra",
                    duration: "03:46",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Redoma",
                    duration: "03:20",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Olhos Verdes (feat Alexandre Gálio)",
                    duration: "03:56",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Aves Migratórias",
                    duration: "04:41",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Lp: Alta Fidelidade (feat Amailton Azevedo)",
                    duration: "03:36",
                    lyrics: ""
                },
                {
                    number: 12,
                    name: "Crônicas de um outro amor",
                    duration: "02:19",
                    lyrics: ""
                },
                {
                    number: 13,
                    name: "Labirinto",
                    duration: "03:40",
                    lyrics: ""
                },
                {
                    number: 14,
                    name: "Sedução e Abandono",
                    duration: "02:51",
                    lyrics: ""
                },
                {
                    number: 15,
                    name: "Quando o amor voltar",
                    duration: "03:38",
                    lyrics: ""
                }
            ]
        },
        {
            title: "Memórias Sonoras da Noite",
            year: "2002",
            cover: "src/images/albums/D09.jpg",
            spotifyLink: "https://open.spotify.com/album/6H1w1aH8LQ4e0NlReBbk1T?si=YVX8B7KMQj-7tq4bu14zsA", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "O Príncipe Traidor (feat Fily Kanouté)",
                    duration: "01:42",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Mansané Cisse (feat Fily Kanouté)",
                    duration: "03:50",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Kalunga",
                    duration: "05:50",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Kaiala ( feat Leni Lino do Nascimento) ",
                    duration: "02:47",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Negros Bantos",
                    duration: "02:07",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Cantigas dos Vissungos (feat Eufraudísio Modesto)",
                    duration: "02:00",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "Atlântico Negro",
                    duration: "00:42",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "Siriema",
                    duration: "05:02",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Maio Entrou (feat Dona Nena)",
                    duration: "01:24",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Arreda e Deixa Eu Passa (feat Dona Nena)",
                    duration: "01:42",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Batuque Malinke",
                    duration: "02:07",
                    lyrics: ""
                },
                {
                    number: 12,
                    name: "Viola D'angola",
                    duration: "02:01",
                    lyrics: ""
                },
                {
                    number: 13,
                    name: "Moleque Zaranza",
                    duration: "02:56",
                    lyrics: ""
                },
                {
                    number: 14,
                    name: "Sedução e Abandono",
                    duration: "02:51",
                    lyrics: ""
                },
                {
                    number: 15,
                    name: "Pabula Preto (feat Dona Nena)",
                    duration: "00:09",
                    lyrics: ""
                },

                {
                    number: 16,
                    name: "Lamento ao Meu Morro (feat Jansem Rafael da Silva, Coral do Acervo do Viver Afro Brasileiro)",
                    duration: "03:58",
                    lyrics: ""
                },
                {
                    number: 17,
                    name: "Folia do Sul (feat DonAna Fischer)",
                    duration: "02:47",
                    lyrics: ""
                },
                {
                    number: 18,
                    name: "Açúcar Também Azeda",
                    duration: "02:26",
                    lyrics: ""
                },
                {
                    number: 19,
                    name: "Dinha Mira",
                    duration: "03:26",
                    lyrics: ""
                },

            ]
        },
        {
            title: "Ancestres de Primavera",
            year: "2023",
            cover: "src/images/albums/D10.jpg",
            spotifyLink: "https://open.spotify.com/intl-pt/album/4knUjRUuxcMojmjPHEieVU?si=mtVEGTtzRgOWgqqYpB8Mqw",
            tracks: [
                {
                    number: 1,
                    name: "Lyra Ceciliana / Agreste Periférico ",
                    duration: "04:14",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Muzambinhos (feat. Sincrônica Al Andaluz & Fabiana Cozza)",
                    duration: "04:21",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Congos de Ouro (feat. Sincrônica Al Andaluz)",
                    duration: "01:16",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Oração",
                    duration: "02:30",
                    lyrics: ""
                },

            ]
        },
        {
            title: "Afrorigem",
            year: "1998",
            cover: "src/images/albums/D11.jpg",
            youtubeLink: "https://www.youtube.com/watch?v=alJQwly5v_c&list=RDalJQwly5v_c&start_radio=1",// Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Afrorigem ",
                    duration: "04:43",
                    lyrics: ""
                },
                {
                    number: 2,
                    name: "Areng Beck",
                    duration: "03:23",
                    lyrics: ""
                },
                {
                    number: 3,
                    name: "Soletrar",
                    duration: "06:07",
                    lyrics: ""
                },
                {
                    number: 4,
                    name: "Jogos de Rua",
                    duration: "03:31",
                    lyrics: ""
                },
                {
                    number: 5,
                    name: "Girassóis e Urubus (com Jair Caminha)",
                    duration: "03:297",
                    lyrics: ""
                },
                {
                    number: 6,
                    name: "Toda Mulher (com Mano Bap)",
                    duration: "04:53",
                    lyrics: ""
                },
                {
                    number: 7,
                    name: "África",
                    duration: "04:34",
                    lyrics: ""
                },
                {
                    number: 8,
                    name: "O Dia das Tribos",
                    duration: "02:56",
                    lyrics: ""
                },
                {
                    number: 9,
                    name: "Bluesaudade (com Luis Rosa de Freitas)",
                    duration: "03:24",
                    lyrics: ""
                },
                {
                    number: 10,
                    name: "Bluesaudade (com Luis Rosa de Freitas)",
                    duration: "03:24",
                    lyrics: ""
                },
                {
                    number: 11,
                    name: "Cantiga de Roda (com Luis Rosa de Freitas)",
                    duration: "02:58",
                    lyrics: ""
                },
                {
                    number: 12,
                    name: "Notas Tortas (com Marcelo Tai)",
                    duration: "03:53",
                    lyrics: ""
                },
                {
                    number: 13,
                    name: "Exaltação",
                    duration: "03:34",
                    lyrics: ""
                },
                {
                    number: 14,
                    name: "Quase Amanhecendo (com Luis Rosa de Freitas)",
                    duration: "04:35",
                    lyrics: ""
                },

            ]
        },
        {
            title: "Asas Negras - Salloma Salomão e Amailton Azevedo",
            year: " EP 2024",
            cover: "src/images/albums/D16.jpg",
            spotifyLink: "https://open.spotify.com/album/06g5hkKXvSAtESaTuKpdTE?si=Pc44GPbGSMWuaeNqz4H1EA",
            tracks: [
                {
                    number: 1,
                    name: "Asas Negras - Salloma Salomão e Amailton Azevedo ",
                    duration: "04:33",
                    lyrics: ""
                },

                {
                    number: 2,
                    name: "Flor de Oxumaré - Salloma Salomão e Amailton Azevedo ",
                    duration: "05:45",
                    lyrics: ""
                },

                {
                    number: 3,
                    name: "Zambi e a Serpente do Tempo - Salloma Salomão e Amailton Azevedo ",
                    duration: "04:07",
                    lyrics: ""
                },


                {
                    number: 4,
                    name: "Zanzibar - Salloma Salomão e Amailton Azevedo ",
                    duration: "03:32",
                    lyrics: ""
                },

            ]
        },
        {
            title: "Ancestres de Primavera II - Salloma Salomão e Sincrônica Al Andaluz",
            year: " EP 2025",
            cover: "src/images/albums/D20.jpg",
            youtubeLink: "https://www.youtube.com/watch?v=xtZGqYbrYK8&list=OLAK5uy_mofhsv8cmTaoKA7SZYdulm_rIMzu6dluQ",
            tracks: [
                {
                    number: 1,
                    name: "Coisa de Ascender N2 - Salloma Salomão e Sincrônica Al Andaluz",
                    duration: "04:24",
                    lyrics: ""
                },

                {
                    number: 2,
                    name: "Linhas Abertas para Melodias Entrecruzadas - Salloma Salomão e Sincrônica Al Andaluz",
                    duration: "09:21",
                    lyrics: ""
                },

                {
                    number: 3,
                    name: "Pizindin - Salloma Salomão e Sincrônica Al Andaluz",
                    duration: "04:39",
                    lyrics: ""
                },


                {
                    number: 4,
                    name: "Divindades da Dança - Salloma Salomão e Sincrônica Al Andaluz",
                    duration: "03:32",
                    lyrics: ""
                },

                {
                    number: 5,
                    name: "Orixalá - Salloma Salomão e Sincrônica Al Andaluz",
                    duration: "2:58",
                    lyrics: ""
                }

            ]
        },
        {
            title: "Vó Geralda - O Conto Cantado das Incontáveis Histórias - Salloma Salomão e Alan Zas - (Single)",
            year: " SINGLE 2023",
            cover: "src/images/albums/D12.jpg",
            spotifyLink: "https://open.spotify.com/album/71zjCFoziyR9Vh3PHn5PAA?si=i4u9sNYvT6eYwGjX8EtJUQ", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Vó Geralda - O Conto Cantado das Incontáveis Histórias - Salloma Salomão e  Alan Zas) ",
                    duration: "03:31",
                    lyrics: ""
                },

            ]
        },
        {
            title: "Empretecer - Analu Cristina e Salloma Salomão - (Single)",
            year: " SINGLE 2023",
            cover: "src/images/albums/D15.jpg",
            spotifyLink: "https://open.spotify.com/album/48SRVweDpETGK6k0sMKkDQ?si=MtUh7DNETeuQo0QvyiUiaQ",
            tracks: [
                {
                    number: 1,
                    name: "Empretecer - Analu Cristina e Salloma Salomão ",
                    duration: "03:14",
                    lyrics: ""
                },
            ]
        },
        {
            title: "Águas Nascentes - Analu Cristina e Salloma Salomão (Single)",
            year: "2025",
            cover: "src/images/albums/D19.jpg",
            spotifyLink: "https://open.spotify.com/intl-pt/album/2rauawqRHsZwQCXTEfJz1Z?si=bUxSqgBbTA-p4R3wMT9O9g", // Substitua pelo link real
            tracks: [
                {
                    number: 1,
                    name: "Águas Nascentes - Analu Cristina e Salloma Salomão",
                    duration: "03:51",
                    lyrics: ""
                },
            ]
        },

        {
            title: "Descendente - (Single)",
            year: " EP 2023",
            cover: "src/images/albums/D18.jpg",
            spotifyLink: "https://open.spotify.com/intl-pt/track/1G2KXlsktI1892h2zZLza4?si=32b4182da58143d2",
            tracks: [
                {
                    number: 1,
                    name: "Nganga José Cabinda (Matheus Pezzotta, Marina Rosa, Selma Fernands, João Bid, Edson Daísa, Saloma Salomão) ",
                    duration: "05:37",
                    lyrics: ""
                },
            ]
        },


        // FUNCIONA, É SÓ ADICIONAR MAIS UM QUE ELE APARECE AUTOMATICAMENTE NO SITE
        // {
        //     title: "Teste",
        //     year: " EP inexistente",
        //     cover: "src/images/albums/D01.jpg",
        //     spotifyLink:"https://open.spotify.com/intl-pt/track/1G2KXlsktI1892h2zZLza4?si=32b4182da58143d2",
        //     tracks: [
        //         {
        //             number: 1,
        //             name: "Musica teste ",
        //             duration: "05:37",
        //             lyrics: "Letra teste"
        //         },
        //     ]
        // }


    ];

    let currentAlbumIndex = 0;

    // Função principal para inicializar a discografia
    function initDiscografia() {
        const discografiaSection = document.getElementById('discografia');
        if (!discografiaSection) return;

        const discografiaHTML = `
            <h2 class="section-title">Discografia</h2>
            <p class="section-description">Explore a rica jornada musical de Salloma Salomão através de seus álbuns e composições.</p>
            
            <div class="discografia-player">
                <div class="album-navigation">
                    <button class="nav-arrow" id="prevAlbum">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="album-info">
                        <div class="album-title" id="albumTitle">Carregando...</div>
                        <div class="album-year" id="albumYear"></div>
                    </div>
                    <button class="nav-arrow" id="nextAlbum">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div class="discografia-content">
                    <div class="tracks-section">
                        <div class="loading-spinner" id="loadingSpinner">
                            <i class="fas fa-spinner fa-spin fa-2x"></i>
                            <p>Carregando faixas...</p>
                        </div>
                        <ul class="track-list" id="trackList"></ul>
                    </div>

                    <div class="album-artwork">
                        <div class="artwork-container">
                            <img class="album-cover" id="albumCover" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNzEwMDAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5TYWxsb21hPC90ZXh0Pgo8L3N2Zz4K" alt="Capa do Álbum">
                            <div class="vinyl-overlay"></div>
                        </div>
                        <div class="album-details" id="albumDetails">
                            <p><strong>Formato:</strong> Digital/Físico</p>
                            <p><strong>Gravadora:</strong> Aruanda Mundi</p>
                            <p><strong>Gênero:</strong> Música Afro-Brasileira</p>
                        </div>
                        <div class="streaming-links" id="streamingLinks">
                            <a href="#" target="_blank" class="spotify-btn" id="spotifyBtn">
                                <i class="fab fa-spotify"></i>
                                <span>Ouvir no Spotify</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        discografiaSection.innerHTML = discografiaHTML;
        setupEventListeners();
        loadAlbum(currentAlbumIndex);
    }

    // Configura os event listeners
    function setupEventListeners() {
        document.getElementById('prevAlbum').addEventListener('click', () => {
            if (currentAlbumIndex > 0) {
                currentAlbumIndex--;
                loadAlbum(currentAlbumIndex);
            }
        });

        document.getElementById('nextAlbum').addEventListener('click', () => {
            if (currentAlbumIndex < discografiaData.length - 1) {
                currentAlbumIndex++;
                loadAlbum(currentAlbumIndex);
            }
        });
    }

    // Carrega um álbum específico
    function loadAlbum(index) {
        const album = discografiaData[index];

        const loadingSpinner = document.getElementById('loadingSpinner');
        const trackList = document.getElementById('trackList');

        if (loadingSpinner) loadingSpinner.style.display = 'block';
        if (trackList) trackList.style.display = 'none';

        setTimeout(() => {
            updateAlbumInfo(album);
            loadTracks(album.tracks);
            updateStreamingLinks(album); // ALTERADO: de updateSpotifyLink para updateStreamingLinks

            if (loadingSpinner) loadingSpinner.style.display = 'none';
            if (trackList) trackList.style.display = 'block';

            updateNavigationButtons();
        }, 600);
    }

    // NOVA FUNÇÃO: Atualiza os links de streaming (Spotify e YouTube)
    function updateStreamingLinks(album) {
        const streamingContainer = document.getElementById('streamingLinks');
        if (!streamingContainer) return;

        let buttonsHTML = '';

        // Botão do Spotify (se existir link)
        if (album.spotifyLink) {
            buttonsHTML += `
                <a href="${album.spotifyLink}" target="_blank" class="spotify-btn">
                    <i class="fab fa-spotify"></i>
                    <span>Ouvir no Spotify</span>
                </a>
            `;
        }

        // Botão do YouTube (se existir link)
        if (album.youtubeLink) {
            buttonsHTML += `
                <a href="${album.youtubeLink}" target="_blank" class="youtube-btn">
                    <i class="fab fa-youtube"></i>
                    <span>Ouvir no YouTube</span>
                </a>
            `;
        }

        streamingContainer.innerHTML = buttonsHTML;
    }

    // Atualiza as informações do álbum
    function updateAlbumInfo(album) {
        const albumTitle = document.getElementById('albumTitle');
        const albumYear = document.getElementById('albumYear');
        const albumCover = document.getElementById('albumCover');

        if (albumTitle) albumTitle.textContent = album.title;
        if (albumYear) albumYear.textContent = album.year;
        if (albumCover) {
            albumCover.src = album.cover;
            albumCover.onerror = function () {
                this.src = createAlbumPlaceholder(album.title);
            };
        }
    }

    // Cria placeholder para capa do álbum
    function createAlbumPlaceholder(title) {
        const words = title.split(' ');
        const firstWord = words[0] || 'Album';
        const secondWord = words[1] || '';

        const svg = `
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="300" fill="#710000"/>
                <text x="150" y="130" fill="white" text-anchor="middle" font-family="Arial" font-size="16">${firstWord}</text>
                ${secondWord ? `<text x="150" y="170" fill="white" text-anchor="middle" font-family="Arial" font-size="16">${secondWord}</text>` : ''}
            </svg>
        `;

        return 'data:image/svg+xml;base64,' + btoa(svg);
    }

    // Carrega as faixas do álbum
    function loadTracks(tracks) {
        const trackList = document.getElementById('trackList');
        if (!trackList) return;

        trackList.innerHTML = '';

        tracks.forEach(track => {
            const trackItem = document.createElement('li');
            trackItem.className = 'track-item';

            trackItem.innerHTML = `
                <div class="track-header">
                    <div class="track-number">${track.number}</div>
                    <div class="track-info">
                        <div class="track-name">${track.name}</div>
                        <div class="track-duration">(${track.duration})</div>
                    </div>
                </div>
            `;

            trackList.appendChild(trackItem);
        });
    }

    // Toggle das letras das músicas
    // window.toggleTrackLyrics = function(trackHeader) {
    //     const trackItem = trackHeader.parentElement;
    //     const lyrics = trackItem.querySelector('.track-lyrics');
    //     const icon = trackHeader.querySelector('.track-toggle i');

    //     document.querySelectorAll('.track-lyrics.active').forEach(otherLyrics => {
    //         if (otherLyrics !== lyrics) {
    //             otherLyrics.classList.remove('active');
    //             const otherIcon = otherLyrics.parentElement.querySelector('.track-toggle i');
    //             if (otherIcon) otherIcon.className = 'fas fa-bars';
    //         }
    //     });

    //     lyrics.classList.toggle('active');

    //     if (lyrics.classList.contains('active')) {
    //         icon.className = 'fas fa-times';
    //     } else {
    //         icon.className = 'fas fa-bars';
    //     }
    // };

    // Atualiza os botões de navegação
    function updateNavigationButtons() {
        const prevBtn = document.getElementById('prevAlbum');
        const nextBtn = document.getElementById('nextAlbum');

        if (prevBtn) prevBtn.disabled = currentAlbumIndex === 0;
        if (nextBtn) nextBtn.disabled = currentAlbumIndex === discografiaData.length - 1;
    }

    // Inicializa quando o DOM estiver carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDiscografia);
    } else {
        initDiscografia();
    }

})();
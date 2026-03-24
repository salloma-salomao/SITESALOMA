// Dados das teatralidades
const teatralidadesData = [
    { codigo: 'T01', quantidadeFotos: 7 },
    { codigo: 'T02', quantidadeFotos: 8 },
    { codigo: 'T03', quantidadeFotos: 5 },
    { codigo: 'T04', quantidadeFotos: 5 },
    { codigo: 'T05', quantidadeFotos: 1 },
    { codigo: 'T06', quantidadeFotos: 3 },
    { codigo: 'T07', quantidadeFotos: 2 },
    { codigo: 'T08', quantidadeFotos: 2 },
    { codigo: 'T09', quantidadeFotos: 2 }
];

// Classe para gerenciar as galerias de imagem
// Classe para gerenciar as galerias de imagem - ATUALIZADA
class ImageGallery {
    constructor(containerId, images, codigo) {
        this.container = document.getElementById(containerId);
        this.images = images;
        this.codigo = codigo;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.container || this.images.length === 0) {
            this.showPlaceholder();
            return;
        }
        this.render();
        this.bindEvents();
    }

    showPlaceholder() {
        if (this.container) {
            this.container.innerHTML = `
                        <div class="gallery-placeholder">
                            <i class="fas fa-camera" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i>
                            <div>Galeria de Fotos</div>
                            <div style="font-size: 0.8rem; opacity: 0.7;">Imagens indisponíveis</div>
                        </div>
                    `;
        }
    }

    render() {
        const galleryHTML = `
                    <div class="gallery-container">
                        <div class="gallery-main">
                            <img id="${this.container.id}-main" src="${this.images[0]}" alt="Foto ${this.currentIndex + 1}">
                            <button class="gallery-nav prev" onclick="galleries['${this.container.id}'].prev()">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="gallery-nav next" onclick="galleries['${this.container.id}'].next()">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                            <div class="gallery-counter">${this.currentIndex + 1} / ${this.images.length}</div>
                        </div>
                        <div class="gallery-thumbnails">
                            ${this.images.map((img, index) => `
                                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="galleries['${this.container.id}'].goTo(${index})">
                                    <img src="${img}" alt="Thumbnail ${index + 1}" onerror="this.parentElement.style.display='none'">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

        this.container.innerHTML = galleryHTML;
    }

    updateDisplay() {
        const mainImg = document.getElementById(`${this.container.id}-main`);
        const counter = this.container.querySelector('.gallery-counter');
        const thumbnails = this.container.querySelectorAll('.thumbnail');

        if (mainImg) {
            mainImg.src = this.images[this.currentIndex];
            mainImg.alt = `Foto ${this.currentIndex + 1}`;
        }

        if (counter) {
            counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
        }

        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            this.updateDisplay();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }

    goTo(index) {
        if (index >= 0 && index < this.images.length) {
            this.currentIndex = index;
            this.updateDisplay();
        }
    }

    bindEvents() {
        const mainImg = document.getElementById(`${this.container.id}-main`);
        if (mainImg) {
            mainImg.style.cursor = 'pointer';
            mainImg.onclick = () => this.openModal();
        }
    }

    openModal() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalCounter = document.getElementById('modalCounter');
        const modalPrev = document.getElementById('modalPrev');
        const modalNext = document.getElementById('modalNext');

        // Atualizar a imagem e contador
        modalImg.src = this.images[this.currentIndex];
        modalCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;

        // Atualizar os botões de navegação
        modalPrev.disabled = this.currentIndex === 0;
        modalNext.disabled = this.currentIndex === this.images.length - 1;

        // Armazenar a galeria atual para navegação no modal
        modal.currentGallery = this;

        modal.classList.add('active');

        // Adicionar evento de teclado para navegação
        document.addEventListener('keydown', modal.handleKeydown);
    }
}

const galleries = {};

function generateImageArray(codigo, quantidade) {
    const images = [];
    for (let i = 1; i <= quantidade; i++) {
        images.push(`src/images/${codigo}/${i}.jpg`);
    }
    return images;
}

function initializeGalleries() {
    teatralidadesData.forEach(item => {
        const containerId = `gallery-${item.codigo}`;
        const images = generateImageArray(item.codigo, item.quantidadeFotos);
        galleries[containerId] = new ImageGallery(containerId, images, item.codigo);
    });
}

// Funções para navegação no modal
function navigateModal(direction) {
    const modal = document.getElementById('imageModal');
    if (!modal.currentGallery) return;

    const gallery = modal.currentGallery;

    if (direction === 'next') {
        gallery.next();
    } else if (direction === 'prev') {
        gallery.prev();
    }

    // Atualizar a imagem no modal
    const modalImg = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalCounter');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    modalImg.src = gallery.images[gallery.currentIndex];
    modalCounter.textContent = `${gallery.currentIndex + 1} / ${gallery.images.length}`;

    // Atualizar estado dos botões
    modalPrev.disabled = gallery.currentIndex === 0;
    modalNext.disabled = gallery.currentIndex === gallery.images.length - 1;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        // Remover evento de teclado
        document.removeEventListener('keydown', modal.handleKeydown);
    }
}

// Configurar eventos do modal
function setupModalEvents() {
    const modal = document.getElementById('imageModal');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const closeBtn = document.querySelector('.close-modal');

    // Navegação por botões
    modalPrev.addEventListener('click', () => navigateModal('prev'));
    modalNext.addEventListener('click', () => navigateModal('next'));

    // Fechar modal
    closeBtn.addEventListener('click', closeModal);

    // Fechar modal clicando fora da imagem
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navegação por teclado
    modal.handleKeydown = function (e) {
        switch (e.key) {
            case 'ArrowLeft':
                navigateModal('prev');
                break;
            case 'ArrowRight':
                navigateModal('next');
                break;
            case 'Escape':
                closeModal();
                break;
        }
    };
}

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

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initializeGalleries, 100);
    setupModalEvents();
});

window.galleries = galleries;
window.closeModal = closeModal;
window.navigateModal = navigateModal;
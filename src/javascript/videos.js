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
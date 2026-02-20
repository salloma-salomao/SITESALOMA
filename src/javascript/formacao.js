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

// Função copiar e-mail ao clicar
document.querySelectorAll('.card-email').forEach(button => {
    button.addEventListener('click', function () {

        if (this.disabled) return;

        const card = this.closest('.production-card');
        const text = card.querySelector('.card-email').innerText;

        navigator.clipboard.writeText(text).then(() => {
            this.textContent = "Copiado!";
            this.disabled = true;

            setTimeout(() => {
                this.textContent = text;
                this.disabled = false;
            }, 1500);

        }).catch(err => {
            console.error("Erro ao copiar: ", err);
        });
    });
});
// Iniciar navbar
function initNavbar() {
    // Declarando variáveis
    const mobileBtn = document.getElementById("mobile_btn");
    const navList = document.getElementById("nav_list");
    const overlay = document.querySelector(".menu-overlay");

    // conferindo se há resposta
    if (!mobileBtn || !navList) return;

    const icon = mobileBtn.querySelector("i");

    // ativa ao clicar no botão mobile
    mobileBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("menu-open");

        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // desativa ao clicar fora do menu lateral
    overlay.addEventListener("click", () => {
        navList.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {

            if (link.classList.contains("dropdown-toggle")) return;

            navList.classList.remove("active");
            overlay.classList.remove("active");
            document.body.classList.remove("menu-open");

            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        });
    });

    navList.querySelectorAll("button").forEach(link => {
        link.addEventListener("click", () => {

            if (link.classList.contains("dropdown-toggle")) return;

            navList.classList.remove("active");
            overlay.classList.remove("active");
            document.body.classList.remove("menu-open");

            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        });
    });



    //DROPDOWNS
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();

            // declaração de variáveis
            const dropdown = toggle.closest(".dropdown");
            const isOpen = dropdown.classList.contains("active");

            // fecha todos
            document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));

            // abre se não estiver aberto
            if (!isOpen) {
                dropdown.classList.add("active");
            }
        });
    });

    // Fechar ao clicar fora
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
        }
    });

    // Navbar scroll effect
    $(window).scroll(function () {
        const header = $('#header');
        if ($(this).scrollTop() > 100) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
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
}
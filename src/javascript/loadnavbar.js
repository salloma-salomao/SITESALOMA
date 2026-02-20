fetch("src/components/navbar.html").then(res => res.text()).then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;

    initNavbar();
});
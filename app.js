document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        const faqItem = this.parentElement;

        // Cerrar todas las respuestas antes de abrir una nueva
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== faqItem) {
                item.classList.remove("active");
            }
        });

        // Alternar la clase active
        faqItem.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".hidden");

    const checkScroll = () => {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) { // 100px antes de que entre completamente
                element.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para elementos que ya están en pantalla al cargar
});

// BOTON A CHAT DE WPP HOMEPAGE
document.querySelectorAll(".wpp-btn-hp").forEach(button => {
    button.addEventListener("click", function() {
        window.open("https://wa.link/xyjz6l", "_blank")
    })
})

// BOTON DE CHAT DE WPP DIVORCIO
document.querySelectorAll(".wpp-btn-divorcio").forEach(button => {
    button.addEventListener("click", function() {
        window.open("https://wa.link/pwp0u8", "_blank")
    })
})
// BOTON DE CHAT DE WPP DEUDAS
document.querySelectorAll(".wpp-btn-deuda").forEach(button => {
    button.addEventListener("click", function() {
        window.open("https://wa.link/0xtklm", "_blank")
    })
})
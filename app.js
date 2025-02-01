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
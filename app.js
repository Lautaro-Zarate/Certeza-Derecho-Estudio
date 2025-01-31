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
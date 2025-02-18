document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-inner");

    carousels.forEach(carousel => {
        let index = 0;
        const items = carousel.querySelectorAll(".carousel-item");
        const totalItems = items.length;

        function showNextImage() {
            index = (index + 1) % totalItems;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos
    });
});

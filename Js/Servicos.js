let cont = 0;

function moveSlide(direction) {

    const slides = document.querySelectorAll('.Slide');
    const totalSlides = slides.length; 

    cont += direction;

    if (cont >= totalSlides) cont = 0;
    if (cont < 0) cont = totalSlides - 1;

    updateCarousel(); 
}

function currentSlide(index) {
    cont = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -cont * 100;

    const itens = document.getElementById('Itens');
    itens.style.transform = `translateX(${offset}%)`;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === cont);
    });
}
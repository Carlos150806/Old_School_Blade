let cont = 0;

function moveSlide (direction) {

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





let cont1 = 0;

function moveSlide1(direction) {
    const slides1 = document.querySelectorAll(".Slide1");
    const totalSlides1 = slides1.length;

    cont1 += direction;

    
    if (cont1 >= totalSlides1) cont1 = 0;
    if (cont1 < 0) cont1 = totalSlides1 - 1;

    updateCarousel1();
}

function currentSlide1(index) {
    cont1 = index;
    updateCarousel1();
}

function updateCarousel1() {
    const offset = -cont1 * 100;

    const coisas = document.getElementById('Coisas');
    if (coisas) {
        coisas.style.transform = `translateX(${offset}%)`;
    }

    const dots = document.querySelectorAll('.ind');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === cont1);
    });
}




let cont2 = 0;

function moveSlide2(direction) {
    const slides2 = document.querySelectorAll(".Slide2");
    const totalSlides2 = slides2.length;

    cont2 += direction;

    
    if (cont2 >= totalSlides2) cont2 = 0;
    if (cont2 < 0) cont2 = totalSlides2 - 1;

    updateCarousel2();
}

function currentSlide2(index) {
    cont2 = index;
    updateCarousel2();
}

function updateCarousel2() {
    const offset = -cont2 * 100;

    const Outros = document.getElementById('Outros');
    if (Outros) {
        Outros.style.transform = `translateX(${offset}%)`;
    }

    const mar = document.querySelectorAll('.mar');
    mar.forEach((mar, index) => {
        mar.classList.toggle('active', index === cont2);
    });
}
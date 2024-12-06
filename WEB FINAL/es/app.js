function toggleButtons() {
    // Obtener el contenedor de botones
    var buttonsContainer = document.getElementById("additionalButtons");

    // Verificar si los botones están visibles o no
    if (buttonsContainer.style.display === "none" || buttonsContainer.style.display === "") {
        // Mostrar los botones
        buttonsContainer.style.display = "flex";
    } else {
        // Ocultar los botones
        buttonsContainer.style.display = "none";
    }
    // Alternar la visibilidad de los botones de índice
    const additionalButtons = document.getElementById('additionalButtons');
    additionalButtons.classList.toggle('visible');
    // Rotar la flecha
    const arrow = document.querySelector('.header__arrow');
    arrow.classList.toggle('rotated');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
    function moveCarousel(direction, carouselId) {
        const carousel = document.getElementById(carouselId);
        const items = carousel.getElementsByClassName("carousel-item");
        let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    
        items[activeIndex].classList.remove('active');
        activeIndex += direction;
    
        if (activeIndex < 0) {
            activeIndex = items.length - 1;
        } else if (activeIndex >= items.length) {
            activeIndex = 0;
        }
    
        items[activeIndex].classList.add('active');
    }
    
    function changeImage(index) {
        // Selecciona todas las imágenes superpuestas
        const overlayImages = document.querySelectorAll(".overlay-image");
    
        // Oculta todas las imágenes estableciendo su opacidad en 0
        overlayImages.forEach(image => {
            image.style.opacity = 0;
        });
    
        // Muestra la imagen correspondiente al índice recibido
        if (overlayImages[index]) {
            overlayImages[index].style.opacity = 1;
        }
    }
    }
    function showImage1() {
        const imageBox = document.querySelector(".image-box");
        const images = imageBox.querySelectorAll(".overlay-image");
    
        // Ocultar todas las imágenes
        images.forEach(image => {
            image.classList.remove("visible");
        });
    
        // Mostrar la primera imagen
        if (images[0]) {
            images[0].classList.add("visible");
        }
    }
    
    function showImage2() {
        const imageBox = document.querySelector(".image-box");
        const images = imageBox.querySelectorAll(".overlay-image");
    
        // Ocultar todas las imágenes
        images.forEach(image => {
            image.classList.remove("visible");
        });
    
        // Mostrar la segunda imagen
        if (images[1]) {
            images[1].classList.add("visible");
        }
    }
    
    function showImage3() {
        const imageBox = document.querySelector(".image-box");
        const images = imageBox.querySelectorAll(".overlay-image");
    
        // Ocultar todas las imágenes
        images.forEach(image => {
            image.classList.remove("visible");
        });
    
        // Mostrar la tercera imagen
        if (images[2]) {
            images[2].classList.add("visible");
        }
      // Función para mostrar el carrusel según el índice


    }      
// Función para mostrar el carrusel según el índice
function showCarousel(index) {
    // Obtener todos los carruseles
    var carruseles = document.querySelectorAll('.carrusel');

    // Ocultar todos los carruseles
    carruseles.forEach(function(carrusel) {
        carrusel.classList.remove('carrusel-visible');
        carrusel.classList.add('carrusel-hidden');
    });

    // Mostrar el carrusel correspondiente
    var selectedCarrusel = document.getElementById('carrusel' + (index + 1)); // Asegúrate que el carrusel tiene el ID 'carrusel1', 'carrusel2', etc.
    selectedCarrusel.classList.remove('carrusel-hidden');
    selectedCarrusel.classList.add('carrusel-visible');
}


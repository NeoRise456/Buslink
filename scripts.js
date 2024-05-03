var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
  // Oculta todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  // Incrementa el índice y muestra la siguiente imagen
    slideIndex++;
    if (slideIndex > 3) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
  // Cambia de imagen cada 3 segundos (3000 milisegundos)
    setTimeout(showSlides, 3000);
}

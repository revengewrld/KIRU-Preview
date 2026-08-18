// =============================================
// KIRU ESCUELA DE ARTES
// JavaScript principal
// =============================================


// BOTÓN VOLVER ARRIBA

const backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
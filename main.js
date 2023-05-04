let buttonHeader = document.querySelector('.btn_header');
buttonHeader.addEventListener('mouseenter', () => {
    buttonHeader.style.boxShadow = "0 0 10px #F76E39";
    buttonHeader.style.transition = "all 0.5s ease";
});
buttonHeader.addEventListener('mouseleave', () => {
    buttonHeader.style.boxShadow = "0 0 0px #F76E39";
    buttonHeader.style.transition = "all 0.5s ease";
})
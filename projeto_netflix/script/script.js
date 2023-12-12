window.addEventListener('scroll', function() {
    var header = document.querySelector('.header__netflix');
    header.classList.toggle('scroll', window.scrollY > 0);
});

function scrollFilmes(direction) {
    const container = document.querySelector('.filme-container');
    const scrollAmount = 200; // Ajuste conforme necessário

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

function scrollFilmes_emAlta(direction) {
    const container = document.querySelector('.emAlta-container');
    const scrollAmount = 200; // Ajuste conforme necessário

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

function scrollFilmes_anime(direction) {
    const container = document.querySelector('.anime__container');
    const scrollAmount = 200; // Ajuste conforme necessário

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}


  
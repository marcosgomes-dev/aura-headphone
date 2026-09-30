document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modeloParam = urlParams.get('modelo');
    const selectModelo = document.getElementById('modeloFone');

    if (modeloParam && selectModelo) {
        for (let i = 0; i < selectModelo.options.length; i++) {
            if (selectModelo.options[i].value === modeloParam) {
                selectModelo.value = modeloParam;
                break;
            }
        }
    }
    const form = document.getElementById('formCompra');
    const msg = document.getElementById('mensagemSucesso');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            msg.classList.remove('d-none');
            
            form.reset();
            
            if (modeloParam && selectModelo) {
                selectModelo.value = modeloParam;
            }
            
            setTimeout(() => {
                msg.classList.add('d-none');
            }, 5000);
        });
    }
});

function changeImage(element) {
    const mainImg = document.getElementById('mainImage');
    mainImg.style.opacity = 0.8;
    setTimeout(() => {
        mainImg.src = element.src;
        mainImg.style.opacity = 1;
    }, 150);

    const thumbnails = document.querySelectorAll('.thumbnail');
    for(let i=0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }
    element.classList.add('active');
}

export default function initScrollSmooth() { // animation scroll smooth
    const linksInternos = document.querySelectorAll('[data-tab="menu"] a[href^="#"]'); //array links 

    function scrollToSection (event) {
        event.preventDefault(); // para o evento
        const href = event.currentTarget.getAttribute('href'); // seleciona o conteudo dentro de href #link
        const section = document.querySelector(href); // seleciona a section de com o link #link - como se fosse um id  
        
        section.scrollIntoView({ // scroll suave
            behavior: 'smooth',
            block: 'start',
        })


        // forma alternativa de fazer scroll suave
        // const topSection = section.offsetTop;
        // window.scrollTo({
        //     top: topSection,
        //     behavior: 'smooth',
        // })
    }

    linksInternos.forEach((links) => {
        links.addEventListener('click', scrollToSection)
    })
}
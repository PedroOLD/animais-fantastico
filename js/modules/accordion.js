export default function initAccordion () { // animaton acoordion
    const accortLista = document.querySelectorAll('[data-anime="accordion"] dt');
    const ativoClass = 'ativa';

    if(accortLista.length){
        accortLista[0].classList.add(ativoClass)
        accortLista[0].nextElementSibling.classList.add(ativoClass)
        function activeAccort (){

            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
        }

        accortLista.forEach((item) => {
            item.addEventListener('click', activeAccort)
        })
    }
}
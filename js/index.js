function activeTabimg () {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo')

    if (tabMenu.length && tabMenu.length){
        function activeTab(index){

            tabContent.forEach((item) => {
                item.classList.remove('ativo')
            })

            tabContent[index].classList.add('ativo');
            console.log(index);
        }


        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            });
        })
    }
}




function initAccort () {
    const accortLista = document.querySelectorAll('.js-accort dt');
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


function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })


        // forma alternativa
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


function initScrollAnimation () {
    const sections = document.querySelectorAll('.js-scroll');
    const windowHeith = window.innerHeight *0.6;

    if (sections.length){
        function animationScroll () {
            sections.forEach( (item) => {
                const topItem = item.getBoundingClientRect().top;
                const isSectionVisible = (topItem - windowHeith) < 0;
                if( isSectionVisible){
                    item.classList.add('ativo');
                }
            })
        }
        animationScroll();

        window.addEventListener('scroll', animationScroll);
    }
}

activeTabimg();
initAccort();
initScroll();
initScrollAnimation();




const textsForms = document.querySelectorAll("#shipping-new-address-form div label span");

textsForms.forEach((element) => {
    let text = element.innerHTML;
});


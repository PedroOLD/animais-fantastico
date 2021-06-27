function activeTabimg () {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li'); // array li da img dos animais
    const tabContent = document.querySelectorAll('[data-tab="content"] section'); // array a section de descrição
    tabContent[0].classList.add('ativo') // primeiro item da section fica ativo na tela

    if (tabMenu.length && tabContent.length){ // verificar se exitir index - True
        function activeTab(index, datasetAtribute){

            tabContent.forEach((item) => { 
                item.classList.remove('ativo'); // remove a class ativo e o dataset de todas as sections
            })

            tabContent[index].classList.add('ativo', tabContent[index].dataset.anime); // adiciona a class ativo e dataset no index   
        }


        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => { // add evento de click
                activeTab(index) // passa o index do item clicado
            });
        })
    } 
}




function initAccort () { // animaton acoordion
    const accortLista = document.querySelectorAll('[data-anime="accordion"] dt');
    console.log(accortLista)
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


function initScrollClick() { // animation scroll smooth
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


function initScrollAnimation () {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
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
initScrollClick();
initScrollAnimation();




const textsForms = document.querySelectorAll("#shipping-new-address-form div label span");

textsForms.forEach((element) => {
    let text = element.innerHTML;
});


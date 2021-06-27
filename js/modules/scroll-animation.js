export default function initScrollAnimation () {
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
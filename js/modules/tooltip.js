export default function tooltip () {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    function renderTooltip(){
        const tooltipDiv = document.createElement('div');
        const text = element.getAttribute('aria-label');
        
        console.log(text)

        tooltipDiv.classList.add('tooltip');
    }

    function onMouseOver(){
        
    }
    
    tooltips.forEach((currentTooltip)=>{
        currentTooltip.addEventListener('mouseover', onMouseOver);
    })

    renderTooltip();

}
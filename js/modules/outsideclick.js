export default function outsideClick(element, events ,callback) { // função que será chamada quando o evento for clicado
    const html = document.documentElement; // seleciona o html do documento  
    
    events.forEach((currentEvent) => {
        html.addEventListener(currentEvent, handleOutSideClick, {capture: true}); // adiciona o evento ao html e chama a função e previne o processo de propagação do evento
    });
        
    
    
    function handleOutSideClick(event) {   // função que será chamada quando o evento for clicado
        event.stopPropagation(); // evita que o evento se propague
        
        if(!element.contains(event.target)){   // se o elemento (onde o usuario clicou) não estiver dentro do elemento (LI)

            events.forEach((currentEvent) => {
                html.removeEventListener(currentEvent, handleOutSideClick, {capture: true}); // adiciona o evento ao html e chama a função e previne o processo de propagação do evento
            });
            callback(); // remove a função do elemento
        }
    }
}
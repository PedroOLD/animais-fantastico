import outsideclick from './outsideclick.js'; // propriedades (Element, arrayEvents, function)

export default function  dropDown () {
    const liDropdown = document.querySelector('[data-dropdown]'); // seleciona o elemento que possui o atributo data-dropdown
    const arrayEvenst = ['click', 'touchstart']; // array com os eventos que serão adicionados ao menu dropdown 

    arrayEvenst.forEach((eventCurrent) => { // puxa todos os eventos, click e touchstart
        liDropdown.addEventListener(eventCurrent,activeDropdown); // adiciona o evento ao elemento e chama a função
    })

    
    function activeDropdown(event){ // função que será chamada quando o evento acontecer
        event.preventDefault(); // evita que o evento padrão aconteça

        const dropdown = this.querySelector('.dropdown-menu');  // seleciona o menu dropdown dentro do elemento
        
        dropdown.classList.add('active');   // adiciona a class active ao menu dropdown

        outsideclick(this, arrayEvenst ,()=>{dropdown.classList.remove('active')});  // chama a função, passando com atributo o elemento (LI) e a função que remove a class active ao menu dropdown 
    }
    
}
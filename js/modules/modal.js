export default function modal () {
    const modalContainer = document.querySelector('[data-modal=container]'); // seleciona o modal-container
    const buttonLogar = document.querySelector('[data-modal=abrir]'); // seleciona o button logar
    const buttonFechar = document.querySelector('[data-modal=fechar]') // seleciona o button de fechar o modal
    
    if(modalContainer && buttonLogar && buttonFechar) { // verifiica se os paremetros existem para evitar esse e sujar  o console

        function toogleModal(event) {
            event.preventDefault(); // cancela a ação padrao do event sem parar o codigo
            modalContainer.classList.toggle('ativo'); // add class ativo no modal-container 
        }

        function clickOutSideModal (event){ // fechar o modal se clicar fora do formulario
            if(event.target == this) { // verifica onde o usuario clicou, se for igual a section de fora do formulario  ele fecha
                toogleModal(event) // fecha o modal
            }
        }

        buttonLogar.addEventListener('click', toogleModal); // add event click
        buttonFechar.addEventListener('click', toogleModal); // add event cick
        modalContainer.addEventListener('click', clickOutSideModal); // add event click
    }

}
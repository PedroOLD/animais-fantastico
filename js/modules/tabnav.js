export default function activeTabimg () {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li'); // array li da img dos animais
    const tabContent = document.querySelectorAll('[data-tab="content"] section'); // array a section de descrição
    tabContent[0].classList.add('ativo') // primeiro item da section fica ativo na tela

    if (tabMenu.length && tabContent.length){ // verificar se exitir index - True
        function activeTab(index){

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
const gridContainer = document.querySelector('.grid-container') 

function createGrid(){
for (let i = 0; i < 16; i++) {

    const flexContainer = document.createElement('div') 

    gridContainer.appendChild(flexContainer)

    flexContainer.classList.add('flex-container')


    for (let i = 0; i < 16; i++) {
    const flexItem = document.createElement('div');

    flexContainer.appendChild(flexItem)

    flexItem.classList.add('flex-item')

    
    flexItem.addEventListener('mouseover',()=>{
        flexItem.classList.add('dynamic-background')
    })
    flexItem.addEventListener('mouseout',()=>{
        flexItem.classList.remove('dynamic-background')
    })
}



}
}


createGrid()






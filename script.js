const gridContainer = document.querySelector('.grid-container') 



function createGrid(gridSize){   //function that creates grid

for (let i = 0; i < gridSize; i++) {     //create 1 flex container
    const flexContainer = document.createElement('div') 

    gridContainer.appendChild(flexContainer)

    flexContainer.classList.add('flex-container')


    for (let i = 0; i < gridSize; i++) {   //create 16 flex items, and store in newly minted flex container above
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


let defaultGridSize = 16   //set default grid size

createGrid(defaultGridSize)   //create grid on page load





const btnNewGrid = document.querySelector('button')   //select btn element

btnNewGrid.addEventListener('click', ()=>{   //handle 'click' event of btn  

    for ( ; ; ){   //create infinite loop, until user inputs a number.

        let userGridSize = +prompt('How many squares per side? | --- range: 1-99 --- | 😘', '... for INFINITY (oh-oh-oh)  Cause I love you for INFINITY (oh-oh-oh)')

        if (
            (!isNaN(userGridSize)) &&   //confirm user given input is a 'number'
            ( userGridSize < 100 ) &&   //confirm user given input is 'less than' 100
            ( userGridSize > 0)         //confirm user given input is 'greater than' 0
        ) {
            console.log(userGridSize)   //console.log used to debug

            const currentFlexContainers = document.querySelectorAll('.flex-container')   //select current grid

            currentFlexContainers.forEach(()=>{
                for (i=0; i<currentFlexContainers.length; i++) {
                    currentFlexContainers[i].remove()   //delete current grid
                }
            })
            
            createGrid(userGridSize)   //create new grid with user given 'input'

            break;   //break for loop
        } else {
            console.log(userGridSize)
            continue;   //continue for loop
        }
    }
})




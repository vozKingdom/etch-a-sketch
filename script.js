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


        // -----------  bonus feature // random color generator + darkener  ------------\\

        flexItem.addEventListener('mouseover',()=>{

            if(flexItem.style.backgroundColor == ''){
                randomBg(flexItem)    
                flexItem.style.opacity = '1'

            } else if (+(flexItem.style.opacity) > 0) {     
                let current = flexItem.style.opacity
    
                flexItem.style.opacity = `${current - 0.1}`

                console.log(current)

            } else if (+(flexItem.style.opacity) == 0) {     
                return;
            }        
        })

        // -----------  generic bg // random color generator + darkener  ------------\\
            // flexItem.addEventListener('mouseover',()=>{
            //     flexItem.classList.add('dynamic-background')
            //     }
            // )
            // flexItem.addEventListener('mouseout',()=>{
            //     flexItem.classList.remove('dynamic-background')
            //     }
            // )
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






function randomBg(node){
    let randomHex = '#'

    for ( let i=0; i<6; i++ ) {
        let randomNumber = ''

        const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        randomNumber =  Math.floor( Math.random() * 16 )  

        randomHex += hexDigits[+randomNumber]
    }

    return node.style.backgroundColor = `${randomHex}`
}


// 'Math.random()' returns random number between ( 0.0 - 1.0 ). 
// '*16' returns a number between the range ( 0.0 - 16.0 ). To get a random output within a specific range, just times the 'high number of the range' to Math.random(). as shown, '16.0 x Math.random()'  can only return a value between 0.0 - 16.0 
// 'Math.floor()' rounds the value inside its parenthesis down to the nearest integer. eg: Math.floor(15.9)= 15
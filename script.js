const gridContainer = document.querySelector('.grid-container') 



function createGrid(gridSize){   //function that creates grid

    for (let i = 0; i < gridSize; i++) {     //create 1 flex container, then insert it into DOM
        const flexContainer = document.createElement('div')
        gridContainer.appendChild(flexContainer)
        flexContainer.classList.add('flex-container')


        for (let i = 0; i < gridSize; i++) {   //create 16 flex items, and store in newly created flex container above
        const flexItem = document.createElement('div');
        flexContainer.appendChild(flexItem)
        flexItem.classList.add('flex-item')

    
            // -----------  bonus feature // random color generator + darkener  ------------\\

            flexItem.addEventListener('mouseover',()=>{     //register 'mouseover' event handler onto newly created flex-items from loop 

                    if(flexItem.style.backgroundColor == ''){    //upon 'mouseover' event, color flex-item with random color 
                        colorNodeRandomColor(flexItem)    
                        flexItem.style.opacity = '1'
                    
                    } else if (+(flexItem.style.opacity) > 0) {     //upon subsequent 'mouseover' events, lower opacity of flex-item by 10% 
                        let current = flexItem.style.opacity
                        flexItem.style.opacity = `${current - 0.1}`
                        console.log(current)
                    
                    } else if (+(flexItem.style.opacity) == 0) {     //switch OFF event handler, when opacity of flex-item has reached 0% 
                        return;
                    }        
                }
            )

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








function colorNodeRandomColor(node){
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






const btnNewGrid = document.querySelector('button')   //select btn element
btnNewGrid.addEventListener('click', ()=>{   //register 'click' event handler on btn element  

    for ( ; ; ){   //create infinite loop, until user inputs a number.
        let userGridSize = +prompt('How many squares per side? | --- range: 0 - 100 --- | 😘', '... for INFINITY (oh-oh-oh)  Cause I love you for INFINITY (oh-oh-oh)')  //prompt user to choose grid size
    
        if (  //confirm user gives a number thats between ( 0 - 100 )
            (!isNaN(userGridSize)) &&   //is given input is a 'number'?
            ( userGridSize < 100 ) &&   //is given input 'less than' 100?
            ( userGridSize > 0)         //is given input 'greater than' 0?
        ) {
                console.log(userGridSize)   //console.log used to debug

                const currentFlexContainers = document.querySelectorAll('.flex-container')   //select the current grid container

                currentFlexContainers.forEach(()=>{   //loop through every flex container inside of grid container
                    for (i=0; i<currentFlexContainers.length; i++) {
                        currentFlexContainers[i].remove()   //apply this code to each item in NodeList -it deletes all flex containers inside the current grid container
                    }
                })

                createGrid(userGridSize)   //create new grid with user given 'input'

                break;   //break the for loop

        } else {
            console.log(userGridSize)  //console.log used to debug

            continue;   //if user has not satisfied the conditions of the if statement, repeat the for loop
        }
    }
})






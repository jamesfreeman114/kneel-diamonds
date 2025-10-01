const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const setMetalId = (chosenOwnership) => {
    transientState.metalId = chosenOwnership
    console.log(transientState)
   
}

export const setSizeId = (chosenOwnership) => {
    transientState.sizeId = chosenOwnership
    console.log(transientState)
}

export const setStyleId = (chosenOwnership) => {
    transientState.styleId = chosenOwnership
    console.log(transientState)
}
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const setMetalId = (chosenOwnership) => {
    transientState.metalId = chosenOwnership

}

export const setSizeId = (chosenOwnership) => {
    transientState.sizeId = chosenOwnership

}

export const setStyleId = (chosenOwnership) => {
    transientState.styleId = chosenOwnership

}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"    
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

}
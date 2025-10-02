import { placeOrder, setCustomId } from "./transientState.js"

const handleCustomChoice = (event) => {
    if (event.target.name === "custom-type") {
       setCustomId(parseInt(event.target.value))
    }
}


const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        placeOrder()

    }

}

export const orderSubmissionButton = async () => {
    document.addEventListener("change", handleCustomChoice)
    document.addEventListener("click", handleOrderSubmission)

    const response = await fetch("http://localhost:8088/customs")
    const customOptions = await response.json()

    let html =`<div class="place-orders">
               <div class="custom-orders">`

    const customOptionHTML = customOptions.map(
        (customType) => {
            return `<input type="radio" name="custom-type" value=${customType.id}/>${customType.name}`
        })

    html += customOptionHTML.join("")
    
    html += `</div>
            <button id="order-button">Place Order</button>
            </div>
            `

    return html 
    

}
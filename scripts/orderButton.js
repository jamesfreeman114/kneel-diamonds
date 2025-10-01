import { placeOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        placeOrder()

    }

}

export const orderSubmissionButton = () => {
    document.addEventListener("click", handleOrderSubmission)

    return `<button id="order-button">Place Order</button>`

}
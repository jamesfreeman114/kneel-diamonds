import { metalOptions } from "./metalOptions.js";
import { SizeOptions } from "./sizesOptions.js";
import { StyleOptions } from "./stylesOptions.js";
import { orderSubmissionButton } from "./orderButton.js";
import { Orders } from "./displayOrders.js";

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await metalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const orderSubmissionHTML = await orderSubmissionButton()
    const ordersHTML = await Orders()
    
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>    

        </article>

        <article class="order">
                ${orderSubmissionHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${ordersHTML}

        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of Data has changed, rendering HTML... ")
    render()
})

render()


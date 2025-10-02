export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=custom")
    const orders = await fetchResponse.json()
    
    let html = ""

    let ordersHTML = orders.map(
        (order) => {


            const orderPrice = order.metal.price + order.style.price + order.size.price
            // const customPrice = orderPrice * order.customType.multiplier
            
            const customPrice = orderPrice * order.custom.multiplier
            const decimalPrice = customPrice.toFixed(2) 

            return `
                <section class="order-submission-container">
                    Order #${order.id} Cost: $${decimalPrice}
                </section>
            
            `
        }

    )

    
         html += ordersHTML.join("")    

         return html
         


}
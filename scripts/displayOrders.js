export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()
    
    let html = ""

    let ordersHTML = orders.map(
        (order) => {

            const orderPrice = order.metal.price + order.style.price + order.size.price 

            return `
                <section class="order-submission-container">
                    <h3>Order #${order.id} Cost: ${orderPrice}</h3>
                </section>
            
            `
        }

    )

    
         html += ordersHTML.join("")    

         return html
         


}
export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()

    let html = ""

    let ordersHTML = orders.map(
        (order) => {
            return `
                <section class="order-submission-container">
                    <h3>Order #${order.id}</h3>
                </section>
            
            `
        }

    )

    
         html += ordersHTML.join("")    

         return html

}
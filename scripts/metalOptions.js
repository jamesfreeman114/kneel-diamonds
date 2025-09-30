export const metalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    
    const options = await response.json()

    let html = `
        <div class = "metal-input">

    `
    const metalChoicesHTML = options.map (
        (option) => {
            return ` <input type="radio" name="metal" value=${option.id}/>${option.metal}`

        }
    )

    html += metalChoicesHTML.join("")

    html +=`        
        </div>
    `

    return html 


}


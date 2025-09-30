export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")

    const options = await response.json()

    let html = `
        <div class = "style-input">
            <h2>Metals</h2>

    `
    const styleOptionsHTML = options.map (
        (option) => {
            return ` <input type="radio" name="metal" value=${option.id}/>${option.style}`

        }
    )

    html += styleOptionsHTML.join("")

    html +=`        
        </div>
    `

    return styleOptionsHTML
}
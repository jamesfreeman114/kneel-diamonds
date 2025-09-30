export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")

    const options = await response.json()

    let html = `
        <div class = "size-input">

    `
    const sizeOptionsHTML = options.map (
        (option) => {
            return ` <input type="radio" name="sizes" value=${option.id}/>${option.carets} Carets`

        }
    )

    html += sizeOptionsHTML.join("")

    html +=`        
        </div>
    `

    return sizeOptionsHTML
}
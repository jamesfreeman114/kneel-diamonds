export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")

    const sizeOptions = await response.json()

    let html = `
        <div class = "size-input">

    `
    const sizeOptionsHTML = sizeOptions.map (
        (sizeOption) => {
            return ` <input type="radio" name="size" value=${sizeOption.id}/>${sizeOption.carets} Carets`

        }
    )

    html += sizeOptionsHTML.join("")

    html +=`        
        </div>
    `

    return html
}
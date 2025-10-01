import { setSizeId } from "./transientState.js"

const handleSizeChoice = (event) => {
    if (event.target.name === "size" ) {
        setSizeId(parseInt(event.target.value))
    }
}

export const SizeOptions = async () => {

    document.addEventListener("change", handleSizeChoice)

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
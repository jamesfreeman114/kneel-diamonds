import { setStyleId } from "./transientState.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleId(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {

    document.addEventListener("change", handleStyleChoice)
    
    const response = await fetch("http://localhost:8088/styles")

    const stylesOptions = await response.json()

    let html = `
        <div class = "style-input">

    `
    const styleOptionsHTML = stylesOptions.map (
        (styleOption) => {
            return ` 
            <div class="style-button">
            <input type="radio" name="style" value=${styleOption.id}/>${styleOption.style}
            </div>
            `

        }
    )

    html += styleOptionsHTML.join("")

    html +=`        
        </div>
    `

    return html
}
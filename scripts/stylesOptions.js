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
            return ` <input type="radio" name="style" value=${styleOption.id}/>${styleOption.style}`

        }
    )

    html += styleOptionsHTML.join("")

    html +=`        
        </div>
    `

    return html
}
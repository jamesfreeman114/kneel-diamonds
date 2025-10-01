import { setMetalId } from "./transientState.js"

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
       setMetalId(parseInt(event.target.value))
    }
}

export const metalOptions = async () => {

    document.addEventListener("change", handleMetalChoice)

    const response = await fetch("http://localhost:8088/metals")
    
    const metalOptions = await response.json()

    let html = `
        <div class = "metal-input">

    `
    const metalChoicesHTML = metalOptions.map (
        (metalOption) => {
            return ` <input type="radio" name="metal" value=${metalOption.id}/>${metalOption.metal}`

        }
    )

    html += metalChoicesHTML.join("")

    html +=`        
        </div>
    `

    return html 


}


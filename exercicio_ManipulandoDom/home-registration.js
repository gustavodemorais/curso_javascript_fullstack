function saveHouse(){
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = `${area} m², número ${number} (${neighborhood} - ${city})`

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removehouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removehouse(button) {
    let litoRemove = button.parentNode
    document.getElementById("house-list").removeChild(litoRemove) 
}
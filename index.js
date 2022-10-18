function addNote(){
    const userInput = document.getElementById("input");
    const container = document.getElementById("container");
    const noteDiv = document.createElement("div")
    const noteText = document.createElement("input")
    const editIcon = document.createElement("i")
    const delIcon = document.createElement("i")

    noteDiv.className = "item"
    noteText.className = "item_input"
    noteText.value = userInput.value
    noteText.disabled = true

    editIcon.className = "fa-solid fa-pen-to-square editButton"
    delIcon.className = "fa-solid fa-trash deleteButton"

    noteDiv.append(noteText)
    noteDiv.append(editIcon)
    noteDiv.append(delIcon)
    container.append(noteDiv)

    userInput.value = ""
    editDelFn()
}

function editDelFn(){
    const items = document.querySelectorAll(".item")
    const editBtns = document.querySelectorAll(".editButton")
    const delBtns = document.querySelectorAll(".deleteButton")

    for(let i=0; i<delBtns.length; i++){
        editBtns[i].addEventListener("click", function(event){
            event.stopImmediatePropagation()
            const expression = items[i].querySelector("input");
            if(expression.disabled){
                expression.disabled = false
            }else{
                expression.disabled = true
            }
        })

        delBtns[i].addEventListener("click", function(event){
            event.stopImmediatePropagation()
            items[i].remove()
        })
    }
}




let countEl = document.getElementById("count-el")
// 1. Grab the save-el paragraph and store it in a variable called saveEl
saveEl = document.getElementById("save-el")

let count = 0
function increment() {
    count += 1
    console.log(count)
    countEl.innerHTML = count
}

function save() {
    countSave = count + " - "
    saveEl.textContent += countSave
    console.log(count)
    count = 0 // set count back to 0
    countEl.innerText = 0 // set counter text on screen back to 0
}

// set number back to zero after being saved



const ul = document.querySelector('ul')

let itemsArray = []

if (localStorage.getItem('items')) {
    // if items exist, override itemsArray with localStorage value
    itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
    // if items don't exist in localStorage, set items to an empty array
    localStorage.setItem('items', JSON.stringify(itemsArray))
}

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

// on page load, render all scores for the highscores page
itemsArray.forEach((item) => {
    liMaker(item)
})
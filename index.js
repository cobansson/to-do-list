let listItems = [];
const unshiftBtn = document.getElementById("unshift-btn");
const shiftBtn = document.getElementById("shift-btn");
const inputEl = document.getElementById("input-list");
const pushBtn = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");
const clearBtn = document.getElementById("clear-btn");
let ulEl = document.getElementById("ul-el");
const removeBtn = document.getElementById("remove-btn");

let fetchDataFromStorage = JSON.parse(localStorage.getItem("listItems"));

if (fetchDataFromStorage) {
    listItems = fetchDataFromStorage;
    render(listItems);
}


function render(list) {
    inputEl.value = "";
    ulEl.innerHTML = "";
    localStorage.setItem("listItems", JSON.stringify(listItems));
    let textString = "";

    for (let i = 0; i < list.length; i++) {
        textString += `<li>${list[i]}</li>`
    }
    ulEl.innerHTML = textString;
}


unshiftBtn.addEventListener("click", function() {
    if(inputEl.value) {
        listItems.unshift(inputEl.value);
        render(listItems);
    }
})

pushBtn.addEventListener("click", function() {
    if (inputEl.value) {
        listItems.push(inputEl.value);
        render(listItems);
    }
})

shiftBtn.addEventListener("dblclick", function() {
    listItems.shift();
    render(listItems);
})

popBtn.addEventListener("dblclick", function() {
    listItems.pop();
    render(listItems);
})

clearBtn.addEventListener("dblclick", function() {
    listItems = [];
    localStorage.clear();
    render(listItems);
})



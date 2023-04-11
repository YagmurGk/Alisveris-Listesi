var button = document.querySelector("#enter");
var input  = document.querySelector("#userinput");
var ul  = document.querySelector("ul");

function createListElement() {
    var li = document.createElement("li"); //<li></li>
    li.appendChild(document.createTextNode(input.value)); //<li>input'ta girilen değer</li>
    ul.appendChild(li);
    input.value = "";
}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
       createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


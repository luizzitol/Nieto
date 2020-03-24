var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add("listItem");
	li.addEventListener("click", markDone)
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	function markDone () {
	li.classList.toggle("done");
	}

	var btnDel = document.createElement("button");
	btnDel.appendChild(document.createTextNode("X"));
	btnDel.addEventListener("click", removeLi);
	li.appendChild(btnDel);

	function removeLi() {
		li.style.display = "none";
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
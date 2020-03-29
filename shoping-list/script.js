var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var undo = document.getElementById("undo");
// var backup;


function inputLength() {
	return input.value.length;
}

function createListElement() {
	// backup = document.querySelector("ul").innerHTML;
	var li = document.createElement("li");
	// adds style to the list items
	li.classList.add("listItem");
	li.addEventListener("click", markListItem);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// creates the line-through
	function markListItem() {
		// backup = document.querySelector("ul").innerHTML;
		li.classList.toggle("done");
	}

	// create a delete button
	var btnDel = document.createElement("button");
	// style for the delete button
	btnDel.classList.add("deleteBtn");
	btnDel.appendChild(document.createTextNode("X"));
	li.appendChild(btnDel);
	btnDel.addEventListener("click", deleteListItem);

	// adds display: none to the button
	function deleteListItem() {
		// backup = document.querySelector("ul").innerHTML;
		li.classList.add("delete");
	}
} 
// end of createListElement functi0n

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

// function undoAction () {
// 		console.log("undoing")
// 		ul.innerHTML = backup;
// 	}


button.addEventListener("click", addListAfterClick);
// undo.addEventListener("click", undoAction);

input.addEventListener("keypress", addListAfterKeypress);


var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.querySelector("body");
var css = document.querySelector("h3");
var button = document.querySelector("#random");
var execute = document.querySelector("#execute");
var radio1 = document.querySelectorAll("#radio1")
var radio2 = document.querySelectorAll("#radio2")
var radio3 = document.querySelectorAll("#radio3")
var radio4 = document.querySelectorAll("#radio4")



var orientation = "";

function setOrientation() {
		if(radio1[0].checked){
			orientation = radio1[0].value
		}

		if(radio2[0].checked){
			orientation = radio2[0].value
		}

		if(radio3[0].checked){
			orientation = radio3[0].value
		}

		if(radio4[0].checked){
			orientation = radio4[0].value
		}
}


function changeColor() {
	setOrientation();
	console.log("cambiando")
	body.style.background = "linear-gradient("
						+ orientation
						+", " 
						+ color1.value
						+ ", " 
						+ color2.value
						+")";

	css.textContent = body.style.background + ";";
}

changeColor();

color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)




button.addEventListener("click", function(){
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	changeColor();
})

execute.addEventListener("click", changeColor)
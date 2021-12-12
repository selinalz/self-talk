
// Click to close pop-up
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", Close);

function Close() {
	var pop = document.getElementsByClassName("pop-up")[0];
	pop.style.display = "none";
	var bg = document.getElementsByClassName("background")[0];
	bg.style.display = "none";
	var img = document.getElementsByClassName("image")[0];
	img.style.display = "none";
}

// Hover over 01 to enlarge arrow too
var subhead = document.getElementsByClassName("subhead")[0];
subhead.addEventListener("mouseover", Scale);

function Scale() {
	var arrow = document.getElementsByClassName("arrow")[0];
	arrow.style.transform = "scale(1.4)";
}

// Mouseout over 01 to return to normal
var subhead = document.getElementsByClassName("subhead")[0];
subhead.addEventListener("mouseout", ScaleDown);

function ScaleDown() {
	var arrow = document.getElementsByClassName("arrow")[0];
	arrow.style.transform = "scale(1)";
}

// Hover over 02 to enlarge arrow too
var subhead2 = document.getElementsByClassName("subhead2")[0];
subhead2.addEventListener("mouseover", Scale2);

function Scale2() {
	var arrow2 = document.getElementsByClassName("arrow2")[0];
	arrow2.style.transform = "scale(1.4)";
}

// Mouseout over 02 to return to normal
var subhead2 = document.getElementsByClassName("subhead2")[0];
subhead2.addEventListener("mouseout", ScaleDown2);

function ScaleDown2() {
	var arrow2 = document.getElementsByClassName("arrow2")[0];
	arrow2.style.transform = "scale(1)";
}

// Hover over 03 to enlarge arrow too
var subhead3 = document.getElementsByClassName("subhead3")[0];
subhead3.addEventListener("mouseover", Scale3);

function Scale3() {
	var arrow3 = document.getElementsByClassName("arrow3")[0];
	arrow3.style.transform = "scale(1.4)";
}

// Mouseout over 03 to return to normal
var subhead3 = document.getElementsByClassName("subhead3")[0];
subhead3.addEventListener("mouseout", ScaleDown3);

function ScaleDown3() {
	var arrow3 = document.getElementsByClassName("arrow3")[0];
	arrow3.style.transform = "scale(1)";
}
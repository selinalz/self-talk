// Click to remove title
var title = document.getElementsByClassName("title")[0];
title.addEventListener("click", Remove);

function Remove() {
	var title = document.getElementsByClassName("title")[0];
	title.style.display = "none";
}

// Click to remove title
var title2 = document.getElementsByClassName("title2")[0];
title2.addEventListener("click", Remove1);

function Remove1() {
	var title2 = document.getElementsByClassName("title2")[0];
	title2.style.display = "none";
}

// Click to remove title
var title3 = document.getElementsByClassName("title3")[0];
title3.addEventListener("click", Removee);

function Removee() {
	var title3 = document.getElementsByClassName("title3")[0];
	title3.style.display = "none";
}

// Click to remove note
var title = document.getElementsByClassName("title")[0];
title.addEventListener("click", Hide);

function Hide() {
	var note = document.getElementsByClassName("note")[0];
	note.style.display = "none";
}

// Click to remove quote
var qb = document.getElementsByClassName("quote-box")[0];
qb.addEventListener("click", Remove2);

function Remove2() {
	var quote = document.getElementsByClassName("quote-box")[0];
	quote.style.display = "none";
}

// Click to remove quote
var qb2 = document.getElementsByClassName("quote-box2")[0];
qb2.addEventListener("click", Remove3);

function Remove3() {
	var quote2 = document.getElementsByClassName("quote-box2")[0];
	quote2.style.display = "none";
}

// Click to show footnote
var underline = document.getElementsByClassName("underline")[0];
underline.addEventListener("click", Show2);

function Show2() {
	var ft = document.getElementsByClassName("footer-box")[0];
	ft.style.display = "block";
}

// Click to show footnote
var underline2 = document.getElementsByClassName("underline2")[0];
underline2.addEventListener("click", Show3);

function Show3() {
	var ft2 = document.getElementsByClassName("footer-box2")[0];
	ft2.style.display = "block";
}
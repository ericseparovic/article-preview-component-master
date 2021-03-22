/** @format */

const shareHTML = document.querySelector(".share");
const btnShareHTML = document.querySelector(".card__share img");

function showShare(e) {
	if (shareHTML.style.visibility === "hidden") {
		shareHTML.style.visibility = "visible";
	} else {
		shareHTML.style.visibility = "hidden";
	}
}

btnShareHTML.addEventListener("click", showShare);
document.addEventListener("DOMContentLoaded", showShare);

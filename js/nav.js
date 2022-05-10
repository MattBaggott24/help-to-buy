document.getElementById("nav1").addEventListener("click", currentNav("nav1"));
document.getElementById("nav2").addEventListener("click", currentNav("nav2"));
document.getElementById("nav3").addEventListener("click", currentNav("nav3"));
document.getElementById("nav4").addEventListener("click", currentNav("nav4"));
document.getElementById("nav5").addEventListener("click", currentNav("nav5"));

function currentNav(linkNo) {
	let navList = document.getElementsByClassName("nav-link");

	for (val in navList) {
		navList[val].classList.remove("active-link");
	}
	document.getElementById(linkNo).classList.add("active-link");
	console.log(navList);
}

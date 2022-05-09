function switchTab(tabNo, tabContent) {
	let tabList = document.getElementsByClassName("tab");
	const tabContents = document.getElementsByClassName("tab-content");
	for (let i = 0; i < tabList.length; i++) {
		tabList[i].classList.remove("currentTab");
		tabContents[i].classList.remove("current-content");
	}

	document.getElementById(tabContent).classList.add("current-content");
	document.getElementById(tabNo).classList.add("currentTab");
}

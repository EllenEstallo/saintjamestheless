function toggleMenu() {
	// alert("Hamburger menu clicked!");
	// document.getElementById("hamburgerLabel").style.display = "block";
	document.getElementById("hamburger").style.display = "block";
	const menu = document.getElementById("verticalMenu");
	// Toggle the display of the vertical menu
	if (menu.style.display === "none" || menu.style.display === "") {
		menu.style.display = "flex"; // Show menu
	} else {
		menu.style.display = "none"; // Hide menu
	}
}

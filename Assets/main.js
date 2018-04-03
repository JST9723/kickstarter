$(document).ready(function() { 
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {
		myFunction();
	};

	// Get the tabBar
	var tabBar = document.getElementById("tab");
	console.log(tabBar);

	// Get the offset position of the navbar
	var sticky = tabBar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    tabBar.classList.add("sticky");
	    console.log("-------------");
	  } else {
	    tabBar.classList.remove("sticky");
	    console.log("==============");
	  }
	}

});
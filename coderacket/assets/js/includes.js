/**
 * A JavaScript function to fetch and include modular html components [Navbar, footer] 
 * Client-Side includes conforms to W3C standards for modular code 
 * Better for simple static sites rather than relying on a server
 * **/

// Function to inject includes into the HTML's DOM
// Accepts 2 arguments as parameters for selector and URL
function includeHtml(selector, url, callback) {
	// Initiates a HTTP Request to a specified URL
	fetch(url)	// Returns a Promise, Handles asynchronous operations and chaining
	.then(response => {	// Response object callback
		// Check for HTTP status success or error
		if (!response.ok){
		  throw new Error("[*]Network Response Failed[*]");
		}
		// Parses the response body as plain-text
		return response.text();
	})

	// data object callback 
	.then(data=> {
		// Find and return first element of a webpage matching the specified CSS selector string
		// then inject the footer and header html code into the DOM
		document.querySelector(selector).innerHTML = data;
		if (callback){
			callback();
		}
	})

	// Returns an error if the HTTP request results in failure.
	.catch(error =>{
		console.error('ERROR: HTML include could not be loaded:', error);
	}); 
}


// Function to set the current year dynamically in the footer
function setCopyrightYear(){
	const currentYearSpan = document.getElementById('current-year');
	if (currentYearSpan){
		currentYearSpan.textContent = new Date().getFullYear();
	}
}

// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
	// Initiate header and footer includes with Font Awesome scan callback 
	includeHtml('[data-include=header]', '/assets/includes/header.html');
	includeHtml('[data-include=footer]', '/assets/includes/footer.html', () => {
		setCopyrightYear();
		
	});

});

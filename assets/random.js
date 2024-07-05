const random = Math.random();

const quotes = fetch("/assets/quotes.json")
	.then((response) => response.json())
	.then((data) => data.quotes);

document.getElementById("footer").textContent = quotes[Math.floor(random * quotes.length)];


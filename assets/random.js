const random = Math.random();

const messages = [
	"The keyboard shortcuts do actually work! Just not well.",
	"Hello world!",
	"Did you know that Steller's Jays and Blue Jays can hybridize?",
	"CAW!",
	"Something done poorly on purpose is still bad.",
	"If you do small things, even though big things exist: you're on your way to crushing it! -Tom Cardy",
	"Hello!",
	"Don't go gentle into that good night. Rage, rage against the dying of the light.",
	"The Marquis of Carabass?",
	"I originally made this page with html tables.",
	"Try the dip!",
	"Now where could my pipe be?",
	"Error 404: Witty quote not found.",
	"Coffee...",
	"The Tufted Titmice are coming.",
	"Caw?",
	"Birds.",
	"Isn't Chicago in Denver?",
	"Is it Suckerberg or Suckerbird?",
];

document.getElementById("footer").textContent = messages[Math.floor(random * messages.length)];


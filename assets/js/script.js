$("#newQuote").on("click", function() {
	//Generate New Quote
	var newQuote = generateQuote();

	//Update span with new quote
	$("#quote").text(newQuote.quote);

	//Update footer with person name
	$("#source").text(newQuote.source);

	//Change background color
});

function generateQuote() {
	return {
		quote: "Fancy new quote that's totally random!",
		source: "Random Fancy Guy"
	};
}
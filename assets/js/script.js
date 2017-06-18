$("#newQuote").on("click", function() {
	generateQuote();
	//Change background color
});

function generateQuote() {
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	 $.getJSON(url, function(data) {
    $("#quote").text(data.quoteText);
    $("#author").text(data.quoteAuthor);
  });
}
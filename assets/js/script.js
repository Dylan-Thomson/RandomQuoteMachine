$("#newQuote").on("click", function() {
	generateQuote();

	//Change background color
});

$("#twitter").on("click", function() {
	var quote = $("#quote").text();
	var author = $("#author").text();
	window.location.href = "http://twitter.com/home?status=" + quote + " - " + author;
});

// $("#facebook").on("click", function() {
// 	var quote = $("#quote").text();
// 	var author = $("#author").text();
// 	window.location.href = "http://www.facebook.com/share.php?u=" + window.location.pathname;
// });

function generateQuote() {
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	 $.getJSON(url, function(data) {
    $("#quote").text(data.quoteText);
    if(data.quoteAuthor.length > 0) {
    	$("#author").text(data.quoteAuthor);
    }
    else {
    	$("#author").text("Unknown");
    }
  });
}
$("#newQuote").on("click", function() {
	generateQuote();
	changeColor();
});

$("#twitter").on("click", function() {
	var quote = $("#quote").text();
	var author = $("#author").text();
	quote = quote.replace(/;/g, "%3B");
	window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author, "_blank");
});

function generateQuote() {
	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	 $.getJSON(url, function(data) {
    $("#quote").animate({"opacity" : 0}, 500, function() {
    	$("#quote").text(data.quoteText).animate({"opacity" : 1}, 500);
    });
    if(data.quoteAuthor.length > 0) {
    	$("#author").animate({"opacity" : 0}, 500, function() {
    		$("#author").text(data.quoteAuthor).animate({"opacity" : 1}, 500);
    	});
    }
    else {
    	$("#author").animate({"opacity" : 0}, 500, function() {
    		$("#author").text("Unknown").animate({"opacity" : 1}, 500);
    	});
    }
  });
}

var colors = [
	"rgb(0, 102, 153)",
	"rgb(51, 51, 255)",
	"rgb(153, 51, 51)",
	"rgb(204, 153, 0)",
	"rgb(0, 153, 51)",
	"rgb(0, 153, 153)",
	"rgb(0, 102, 204)",
	"rgb(204, 102, 0)",
	"rgb(204, 0, 204)"
];

function changeColor() {
	var color;
	var currentColor = $("body").css("backgroundColor");
	color = colors[getRandomIntInclusive(0, colors.length-1)];

	while(color === currentColor) {
		color = colors[getRandomIntInclusive(0, colors.length-1)];
	}

	$("body").animate({backgroundColor: color}, 1500);
	$(".btn-lg").animate({backgroundColor: color}, 1500);
	$(".col-xs-12").animate({color: color}, 1500);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
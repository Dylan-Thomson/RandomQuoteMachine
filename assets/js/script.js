$("#newQuote").on("click", function() {
	generateQuote();
	changeColor();
});

$("#twitter").on("click", function() {
	var quote = $("#quote").text();
	var author = $("#author").text();
	window.location.href = "http://twitter.com/home?status=" + quote + " - " + author;
});

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
	console.log(color, currentColor);

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
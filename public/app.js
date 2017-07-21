$.getJSON("/images", function(data) {

	for (var i = 0; i < data.length; i++) {

		// var img = $()
		$("#img").append("<div data-id='" + data[i]._id + "'><img src='" + data[i].imgSrc + "'><br /> <h1>" + data[i].title + "</h1></div>");

	}


})

$(document).on("click", "div", function() {
	var thisId = $(this).attr("data-id");

	$.ajax({
		method: "GET",
		url: "/espn/" + thisID
	
	}).done(function(data) {

		console.log(data);
	})
})
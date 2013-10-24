$(".container").each(function() {
	var container = $(this);
	var divhide = container.find(".thumbnail");
	divhide.hide();
	var red = container.find(".red");
	red.show();
	container.find(".row").each(function() {
		var row = $(this);
		row.find("ul").each(function() {
			var ul = $(this);
			ul.find("li").each(function() {
				var li = $(this);
				var getid = li.find("a").attr("href");
				var color = $(container).find(getid);
				li.on("click",function(){
					color.show();
					color.siblings().hide();
					return false;
				});
			});
		});	
	});
});



// $(".container").each(function() {
// 	var one = $(this);
// 	var divhide = $(".thumbnail");
// 			divhide.hide();
// 	$(".red").each(function() {
// 		var red = $(this);
// 		red.show();
// 	});
// 	$("li").each(function() {
// 			var li = $(this);
// 			var getid = li.find("a").attr("href");
// 			var color = $(getid);
// 			li.on("click",function(){
// 				color.show();
// 				color.siblings().hide();
// 				return false;
// 			});
// 	});
// });
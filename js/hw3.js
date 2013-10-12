var ul = $("ul.list-bg");
ul.hide();
$(".btn").each(function() {
	var btn = $(this);
	btn.on("click", function() {
	if (btn.hasClass("open")){
		btn.removeClass("open");
		ul.hide();
	} else {
		btn.addClass("open");
		ul.show();
	}
	return false;
	});
	$(".item").find("a").each(function() {
		var li = $(this);
		li.on("click", function(){
			btn.removeClass("open");
			ul.hide();
			return false;
		})
	});
})
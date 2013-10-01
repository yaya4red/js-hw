var divhide = $(".thumbnail");
		divhide.hide();
$("li").each(function() {
		var li = $(this);
		var getid = li.find("a").attr("href");
		var color = $(getid);
		li.on("click",function(){
			color.show();
			color.siblings().hide();
			return false;
		});
});
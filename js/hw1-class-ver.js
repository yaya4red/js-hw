$("li").each(function() {
	var li = $(this);
	var getid = li.find("a").attr("href");
	var div = $(getid);
	li.on("click",function() {
		console.log(getid);
		div.siblings().removeClass("active");
		div.addClass("active");
		return false;		
  });
}); 

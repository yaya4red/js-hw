$(".collapse.head").each(function() {
	var head = $(this);
	var getid = head.find("a").attr("href");
	var push = $(getid);
	push.hide();
		head.on("click",function() {
	  push.slideToggle("slow");
	  return false;
	});
});

$(".collapse.head").each(function() {
	var head = $(this);
	var getid = head.find("a").attr("href");
	var push = $(getid);
	push.hide();
	head.on("click",function() {
  	var group = head.parents(".group");
		if(group.hasClass("active")) {
			group.removeClass("active");
			push.slideUp("slow");
		} else {
			group.addClass("active");
			push.slideDown("slow");
		}
  	group.siblings().each(function(){
  		var other_group = $(this);
  		other_group.find(".collapse.content").slideUp("slow");
  	});
	  return false;
	});
});

$(".momgroup").each(function() {
	var mom = $(this);
	mom.find(".group").each(function(){
		var group = $(this);
		group.find(".collapse.head").each(function() {
			var head = $(this);
			head.find("a").each(function() {
				var a = $(this);
				var getid = a.attr("href")
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
		});
	});
});

// $(".collapse.head").each(function() {
// 	var head = $(this);
// 	var getid = head.find("a").attr("href");
// 	var push = $(getid);
// 	push.hide();
// 	head.on("click",function() {
//   	var group = head.parents(".group");
// 		if(group.hasClass("active")) {
// 			group.removeClass("active");
// 			push.slideUp("slow");
// 		} else {
// 			group.addClass("active");
// 			push.slideDown("slow");
// 		}
//   	group.siblings().each(function(){
//   		var other_group = $(this);
//   		other_group.find(".collapse.content").slideUp("slow");
//   	});
// 	  return false;
// 	});
// });

$(".space.head").each(function() {
	var space = $(this);
	var spaceID = space.find("a").attr("href");
	var fade = $(spaceID);
	fade.hide();
	$("#fade1").show();
	space.on("click",function() {
		var unit = space.parents(".unit");
		if(unit.hasClass("active")){
			unit.removeClass("active");
			fade.fadeOut("slow");
		} else {
			unit.addClass("active");
			fade.fadeIn("slow");
		}
		unit.siblings().each(function(){
			other_unit = $(this);
			other_unit.find(".space.content").fadeOut("slow");
		})
		return false;
	});
})
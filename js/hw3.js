$("ul").hide();
$(".son-menu").hide();
$(".group").each(function() {
	var group = $(this);
	group.find(".btn").each(function() {
		var btn = $(this);
		var ta = btn.parents(".group");
		var ul = ta.find("ul");
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
			li.mouseenter(function(){
				li.siblings(".son-menu").each(function() {
					var sonmenu = $(this);
					sonmenu.show();
				});
				return false;
			});
			li.mouseleave(function(){
				li.siblings(".son-menu").each(function() {
					var sonmenu = $(this);
					sonmenu.hide();
				});
				return false;
			});
			li.on("click", function() {
				btn.removeClass("open");
				ul.hide();
			});
		});
	});
});

// $("ul").hide();
// $(".group").each(function() {
// 	var group = $(this);
// 	group.find(".btn").each(function() {
// 		var btn = $(this);
// 		var ta = btn.parents(".group");
// 		var ul = ta.find("ul");
// 		btn.on("click", function() {
// 		if (btn.hasClass("open")){
// 			btn.removeClass("open");
// 			ul.hide();
// 		} else {
// 			btn.addClass("open");
// 			ul.show();
// 		}
// 		return false;
// 		});
// 		$(".item").find("a").each(function() {
// 			var li = $(this);
// 			li.on("click", function(){
// 				btn.removeClass("open");
// 				ul.hide();
// 				return false;
// 			})
// 		});
// 	});
// });
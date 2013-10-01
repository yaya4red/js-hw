var count = 1
$("li").each(function() {
	var li = $(this);
	var getid = li.find("a").attr("href");
	var div = $(getid);
	if(count == 1) {
    div.show()
	} else {
		div.hide()
	}
	count = count + 1;
	console.log(count);
	li.on("click",function() {		
		console.log(getid);
		div.siblings().hide();
		div.show();
		return false;
  });
}); 
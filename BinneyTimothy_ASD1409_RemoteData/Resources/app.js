// Main Code

var mainWin = Ti.UI.createWindow({
	backgroundColor: "grey",
	layout: "vertical",
});


var title = Ti.UI.createView({
	height: 40,
	backgroundColor: "grey",
	top: 0,
});

var titleLabel = Ti.UI.createLabel({
	text: "Food Reddit!",
	color: "red",
});

var scroller = Ti.UI.createScrollView({
	height: mainWin.height - title.height,
	layout: "vertical",
});

var loadJS = require("mainCode");


title.add(titleLabel);
mainWin.add(title,scroller);
mainWin.open();

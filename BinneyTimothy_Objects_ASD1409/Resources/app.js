var mainWin = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Bike Costs for 2015"
});

var mainNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var table = Ti.UI.createTableView({
	backgroundColor: "White",
	});
	
var sectionOne = Ti.UI.createTableViewSection({
	headerTitle: "Not Affordable"
});

var sectionTwo = Ti.UI.createTableViewSection({
	headerTitle: "Affordable"
});


var loadJs = require ("data");



mainWin.add(table);
mainNav.open();

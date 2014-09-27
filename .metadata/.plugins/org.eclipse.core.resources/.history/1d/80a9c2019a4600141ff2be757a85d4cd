// Interface MainCode
var request = require("data");

var tabs = Ti.UI.createTabGroup();

var window1 = Ti.UI.createWindow({
    title: "Foods on Reddit",
    backgroundColor: "fff"
});

var tab1 = Ti.UI.createTab({
    icon: "KS_nav_ui.png",
    title: "Foods"
});

var window2 = Ti.UI.createWindow ({
    title: "Saved Recipies",
    backgroundColor: "fff"
});

var tab2 = Ti.UI.createTab({
    icon: "KS_nav_views.png",
    title: "Saved Recipies",
    window: window2
});

var scrollView = Ti.UI.createScrollView({
    height: Ti.Platform.displayCaps.platformHeight - 30,
    layout: "vertical",
    backgroundColor: "grey"
});

var scrollView2 = Ti.UI.createScrollView({
    height: Ti.Platform.displayCaps.platformHeight - 30,
    layout: "vertical",
    backgroundColor: "grey"
});

window1.add(scrollView);
window2.add(scrollView2);



tabs.addTab(tab1);
tabs.addTab(tab2);

tabs.open();


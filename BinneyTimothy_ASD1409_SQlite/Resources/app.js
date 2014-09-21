var window1 = Ti.UI.createWindow({
	backgroundColor: "white",
	title: "Friends",
	layout: "vertical",
});

var window2 = Ti.UI.createWindow({
	backgroundColor: "white",
	title: "Add Friend",
	layout: "vertical",
});

var code = require("code");
code.read();

addButton.addEventListener("click", function(e){
	if(addButton.edit != true) {
		alert("Friend Added");
		var newName = nameField.value;
		var newFood = foodField.value;
		nameField.value = "";
		foodField.value = "";
		code.create(newName, newFood);
		code.read();
	}else {
		alert("Contact Updated");
		table.removeAllChildren();
		code.update(addButton.index, addButton.location);
	}
});

table.addEventListener("click", function(e){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 2,
		buttonNames: ["Update", "Delete", "Cancel"],
		message: "Edit Friend",
		title: "Edit Friend"
	});
	dialog.addEventListener("click", function(evt) {
		if(evt.index === 0) {
			for(i in e.row.children) {
				var view = e.row.children[i];
				nameField.value = view.children[0].text;
				foodField.value = view.children[0].text;
			}
			addButton.title = "Update Friend";
			addButton.id = e.row.id;
			addButton.edit = true;
			addButton.index = e.index;
			window2.title = "Update Friend";
			tab2.title = "Update Friend";
			tabs.setActiveTab(tab2);
		}
		if (evt.index === 1) {
			var confirmDelete = Ti.UI.createAlertDialog({
				cancel: 1,
				buttonNames: ["OK", "Cancel"],
				message: "Delete Friend?",
				title: "Delete Friend",
			});
			confirmDelete.addEventListener("click", function(evt2){
				if(evt2.index === 0){
					addButton.id = e.row.id;
					code.del(addButton.id);
				}
			});
			confirmDelete.show();
		}
	});
	dialog.show();
});

var table = Ti.UI.createTableView({
	backgroundColor: "white",
	height: Ti.UI.FILL
});

var tableFunction = function(friends){
	var tableInfo = [];
	for(i in friends) {
		var tableRow = Ti.UI.createTableViewRow({
			id: friends[i].id,
			width: Ti.UI.FILL,
			height: "40dp",
		});
		var tableView = Ti.UI.createTableView({
			layout: "vertical",
			left: "15dp",
			top: "5dp",
			height: Ti.UI.FILL,
			width: Ti.UI.FILL,
		});
		var labelName = Ti.UI.createlabel({
			text: friends[i].name,
			width: Ti.UI.FILL,
		});
		var labelFood = Ti.UI.createlabel({
			text: friends[i].food,
			width: Ti.UI.FILL,
		});
		tableView.add(labelName);
		tableView.add(labelFood);
		tableRow.add(tableView);
		tableInfo.push(tableRow);
	}
	table.setData(tableInfo);
};

var tabs = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	icon: "KS_nav_views.png",
	title: "Friends",
	window: window1
});

var tab2 = Ti.UI.createTab({
	icon: "KS_nav_ui.png",
	title: "Add",
	window: window2,
});

var table = Ti.UI.createTableView({
		
});


var name = Ti.UI.createLabel({
	text: "Name",
	top: "30dp",
	left: "15dp",
	textAlign: "left",
});

var nameField = Ti.UI.createTextField({
	left: "15dp",
	right: "15dp",
	top: "3dp",
	height: "30dp",
	borderSize: "1dp",
	borderColor: "black",
});

var food = Ti.UI.createLabel({
	text: "Favorite Food",
	top: "30dp",
	right: "15dp",
	left: "15dp",
});

var foodField = Ti.UI.createTextField({
	left: "15dp",
	right: "15dp",
	top: "3dp",
	height: "30dp",
	borderSize: "1dp",
	borderColor: "black",
});

var addButton = Ti.UI.createButton({
	title: "Add Friend",
	height: "30dp",
	top: "25dp",
	left: "20dp",
	right: "20dp",
	backgroundColor: "green",
});


addButton.addEventListener("click", function(e){
		alert("create");
		var newName = nameField.value;
		var newFood = foodField.value;
		nameField.value = "";
		foodField.value = "";
		code.create(newName, newFood);
		code.read();
});	


tabs.addTab(tab1);
tabs.addTab(tab2);
tabs.open();


window1.add(table);
window2.add(name);
window2.add(nameField);
window2.add(food);
window2.add(foodField);
window2.add(addButton);

// Database install
var url = "htp://api.reddit.com/r/food";

Ti.Database.install("Week4.sqlite", "ASDweek4");



var infoArray = [];
var Read = function() {
    var getInfo = JSON.parse(this.responseText);
    var header = getInfo.data.children;

    for (var i = 0, j = title.length; i < j; i++) {
        var title = header[i].data.title;
        infoArray.push({
            title: title,
            saved: 0,
        });
    }
    save(infoArray);
};

var Create = function(arg) {
    var db = Ti.Database.open('ASDweek4');
    arg.forEach(function(item) {
        db.execute('INSERT INTO foodTitles (recipie) VALUES (?)', item.title, item.saved);
        var rowID = db.lastInsertRowId;
    });
    db.execute("COMMIT");
    db.close();
    compile();
};

var mainInfo = [];

var compile = function() {
    var db = Ti.Database.open("ASDweek4");
    var dbRows = db.execute("SELECT name, recipie FROM foodTitles");
    while (dbRows.isValidRow()) {
        mainInfo.push({
            title: dbRows.fieldByName("recipie"),
        });
        dbRows.next();
    }
    dbRows.close();
    db.close();
    getUI();
};

var getUI = function(data) {
        for (var i = 0, j = data.length; i < j; i++) {
            var mainWindow = Ti.UI.createView({
                top: 5,
                backgroundColor: "fff",
                height: 80,
                bottom: 2,
                layout: "vertical"
            });

            var label = Ti.UI.createLabel({
                text: data[i].title,
                top: "5%",
                bottom: 2,
                textAlign: "left",
            });
            mainWindow.add(label);
            scrollView.add(mainWindow);
        }
    


        var saveRecipie = function() {
            var db = Ti.Database.open("ASDweek4");
            var recipieView = Ti.UI.createView({
                top: 15,
                backgroundColor: "white",
                height: 80,
                bottom: 2,
            });

            var recipieLabel = Ti.UI.createlabel({
                text: dataContent[dataContent - 1].title,
                color: "black",
                textAlign: "left"
            });

            var deleteRecipie = Ti.UI.createView({
                right: 10,
                height: 15,
                width: 15,
                bottom: 5,
                borderRadius: 4,
                backgroundColor: "black",
            });
            recipieView.add(deleteRecipie);
            recipieView.add(recipieLabel);
            scroll2.add(recipieView);
    };
            theDeleteButton.addEventListener("click", deleteSavedRecipie);
            label.addEventListener("click", saveRecipie);
            
            db.execute('UPDATE foodTitles SET recipie? WHERE id=?', this.id);
            db.close();
    };

       

        var deleteRecipie = function(e) {
            var db = Ti.Database.open("ASDweek4");
            deleteRow(e.source);
            db.execute("DELETE FROM ASDweek4 WHERE id=?", e.source.id);
            db.close();

        };


        var error = function() {
            alert("Please Check Network Connection!");
        };

        var client = Ti.Network.createHTTPClient({
            onload: Read,
            onerror: error,
            timeout: 5000,
        });

        client.open("GET", url);

        client.send();
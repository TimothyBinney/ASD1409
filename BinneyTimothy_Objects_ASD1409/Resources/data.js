// Objects in Literal Notation

var bikeOne = {
	"Manufacturer": "Kawasaki",
	"Engine": 65,
	"Price": 3699,
	"Bank": 3000,
	"Affordable": function(){
	if(bikeOne.Price < bikeOne.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	}
};

var bikeTwo = {
	"Manufacturer": "Kawasaki",
	"Engine": 85,
	"Price": 4349,
	"Bank": 4348,
	"Affordable": function(){
	if(bikeTwo.Price < bikeTwo.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	}
};

var bikeThree = {
	"Manufacturer": "Kawasaki",
	"Engine": 100,
	"Price": 4599,
	"Bank": 250,
	"Affordable": function(){
	if(bikeThree.Price < bikeThree.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	}
};

var bikeFour = {
	"Manufacturer": "Kawasaki",
	"Engine": 250,
	"Price": 7599,
	"Bank": 3000,
	"Affordable": function(){
	if(bikeFour.Price < bikeFour.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	}
};

var bikeFive = {
	"Manufacturer": "Kawasaki",
	"Engine": 450,
	"Price": 8699,
	"Bank": 7000,
	"Affordable": function(){
	if(bikeFive.Price < bikeFive.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	}
};

var arrayOne = [bikeOne,bikeTwo,bikeThree,bikeFour,bikeFive];

for (var i=0, j=arrayOne.length; i<j; i++){
	var rowLiteral = Ti.UI.createTableViewRow({
		title: arrayOne[i].Manufacturer + " " + arrayOne[i].Engine,
		color: "black",
		});
		sectionOne.add(rowLiteral);
		rowLiteral.addEventListener("click", arrayOne[i].Affordable); //redundant event lisenter. can be added to tableView instead; use event propagation.
		}
		
// Objects in Dot Notation

var bikeSix = new Object();
	bikeSix.Manufacturer = "Suzuki";
	bikeSix.Engine = 85;
	bikeSix.Price = 4099;
	bikeSix.Bank = 8363;
	bikeSix.Affordable = function(){
	if(bikeSix.Price < bikeSix.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	};

var bikeSeven = new Object();
	bikeSeven.Manufacturer = "Suzuki";
	bikeSeven.Engine = 250;
	bikeSeven.Price = 7599;
	bikeSeven.Bank = 9000;
	bikeSeven.Affordable = function(){
	if(bikeSeven.Price < bikeSeven.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	};

var bikeEight = new Object();
	bikeEight.Manufacturer = "Suzuki";
	bikeEight.Engine = 450;
	bikeEight.Price = 8749;
	bikeEight.Bank = 12000;
	bikeEight.Affordable = function(){
	if(bikeEight.Price < bikeEight.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	};

var bikeNine = new Object();
	bikeNine.Manufacturer = "Yamaha";
	bikeNine.Engine = "250";
	bikeNine.Price = 7590;
	bikeNine.Bank = 8363;
	bikeNine.Affordable = function(){
	if(bikeNine.Price < bikeNine.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	};


var bikeTen = new Object();
	bikeTen.Manufacturer = "Yamaha";
	bikeTen.Engine = 450;
	bikeTen.Price = 8590;
	bikeTen.Bank = 15000;
	bikeTen.Affordable = function(){
	if(bikeTen.Price < bikeTen.Bank){
			alert("Congratulations you can afford this bike!");
			}
			else
			{
			alert("You cannot afford this bike sorry!");
			}
	};

var arrayTwo = [bikeSix,bikeSeven,bikeEight,bikeNine,bikeTen];

for (var i=0, j=arrayTwo.length; i<j; i++){
	var rowDot = Ti.UI.createTableViewRow({
		title: arrayTwo[i].Manufacturer + " " + arrayTwo[i].Engine,
		color: "black",
		});
		sectionTwo.add(rowDot);
		rowDot.addEventListener("click", arrayTwo[i].Affordable); //redundant event lisenter. can be added to tableView instead; use event propagation.
		}

var tableSectionInfo = [sectionOne,sectionTwo];
table.setData(tableSectionInfo);

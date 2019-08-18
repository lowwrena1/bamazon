const mysql = require ("mysql");
const inquirer = require ("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db",
    
});
//connect to mysql sever and database
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
var start = function(){
inquirer.prompt({
	name:"idAndHowMany",
	type:"rawlist",
	message: "Welcom to bamazon!! would you please select the item id of the object you like to pruchase.",
	choices:["Ttem ID", "How Many?"]
})
};
 
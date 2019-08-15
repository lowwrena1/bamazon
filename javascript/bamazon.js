var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: root,
    password: Elpaso30,
    database: bamazon,
});
//connect to mysql sever and database
connection.connect (function(err){
    if (err) throw err;
    start();
});
//function which prompts the user which action they should take
function start(){
inquirer
.prompt ({ //refer to greatbay assignment for better detail.
    name: tbd,
    type: tbd,
    message: tbd,
    choices: tbd,
})
   //greatbay used if else statment but since I have several options I prefer to use a switch statement for the function.
.then(function(answer){
 
})
}
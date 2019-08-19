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
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
    displayItems();
    // run the start function after the connection is made to prompt the user
   
  });

	// Display Inventory from database once MySQL connection is established
function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
      //welcome message in the terminal
        console.log(" WELCOME TO BAMAZON \n");
        

        for (var i = 0; i < res.length; i++) {
            console.log (
                "Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].department_name + " | Price: $" + res[i].price + " | Stock Quantity: " + res[i].stock_quantity +
                "\n------------------------------------------------------------------------------------------------------------------------------------"
			);   
			//lines are to add between items in my terminal to make it easier to read and cleaner.
            console.log("------------------------------------------------------------------------------------------------------------------------------------");
        };

        purchasePrompt();
    });
};

// Prompt that ask user for item id and amount of how much they'd like of that item.
function purchasePrompt () {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
  
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "Please enter Item ID you would like to purchase => ",

                // Validate input for whole non-zero number
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return "Please enter a valid item ID with whole non-zero number.";
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "Please enter quantity of selected item you would like to purchase => ",

                // Validate input for whole non-zero number
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return "Please enter a valid quantity of chosen item with whole non-zero number.";
                }
            }
        ]).then(function(answer){
                // 1st product's index number is 0. Make sure to minus one from the ID
            var wantToBuy = res[answer.id-1];
            var currentStock = res[answer.id-1].stock_quantity;
            var wantedQuantity = answer.quantity;
            var remainQuantity = currentStock - wantedQuantity;

            // If the quantity desired by the user is in the stock,
            if (currentStock >= wantedQuantity) {
                connection.query (
                    // this updates the quantity 
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: remainQuantity,
                        },
                        {
                            item_id: wantToBuy.item_id,
                        }
                    ], 
                    function (err, res) {
                        if (err) throw err;
                            console.log (
                               
                                "\n*** Your Order Summary ***" + 
                                "\n------------------------------------------------------------------------------------------------------------------------------------" + 
                                "\nItem ID: " + wantToBuy.item_id + 
                                "\nProduct Name: " + wantToBuy.product_name + 
                                "\nDepartment: " + wantToBuy.department_name + 
                                "\nUnit Price: $" + wantToBuy.price + 
                                "\nPurchased Quantity: " + wantedQuantity + 
                                "\n------------------------------------------------------------------------------------------------------------------------------------" +
                                "\n<< Updated Stock Quantity for " + wantToBuy.product_name + ": " + remainQuantity + " left >>" +
                                "\n------------------------------------------------------------------------------------------------------------------------------------"
                            );

                            var totalCost = (wantToBuy.price * wantedQuantity).toFixed(2);

                            console.log (
                                "\n------------------------------------------------------------------------------------------------------------------------------------" +
                                "\n*** Your Total is $" + totalCost + " ***" +
                                "\n------------------------------------------------------------------------------------------------------------------------------------" +
                                "\n*** Your Order has been placed! ***" +
                                "\n*** Thank you for shopping with us! ***" +
                                "\n------------------------------------------------------------------------------------------------------------------------------------"
                            );
                    }
                ); 

            // If the quantity desired by the user is NOT in the stock,
            } else {
                console.log(
                    "\n------------------------------------------------------------------------------------------------------------------------------------" +
                    "\n*** We are very Sorry! We currently do not have enough stock at this moment ***" +
                    "\n------------------------------------------------------------------------------------------------------------------------------------"
                );

                console.log(
                    "\n------------------------------------------------------------------------------------------------------------------------------------" +
                    "\n*** Please Modify your Order. ***" +
                    "\n------------------------------------------------------------------------------------------------------------------------------------"
                );
            }
            
            // End the Database Connection
            connection.end();

        });
    });
}
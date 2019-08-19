# Bamazon
Bamazon is a backend development project that uses mySQL as it's database. 

# What Bamazon Does
The customer interface allows the user to view the current inventory of products with,
* Item IDs
* Product Names
* Department Names
* Prices
* Quantity Levels
The user then is able to purchase one of the listed items by inputting the Item ID and quantity. The order gets fulfilled by displaying the product's total price and updated stock level, if there is enough stock. But if there is not enough stock, the order does not get fulfilled, and shows a message to modify the user's order.

# system requirements:
* Gitbash or Terminal
* mySQL & mySQL workbench, Sequel Pro or comparable MySQL database interface.
* Nodejs

# instructions:
 * Open your terminal.
 * In the command line type : node bamazon
 * This will display all items, their id numbers, name of items, departments, price and quanity remaing for that item.
 * The user will select an item by inputting the id number of the item they wish to "purchase".
 * This will prompt a new question in the terminal asking the user how many they'd like to purchase. The user will type in the disired        amount at that time.
 * Once quantity is selected the application will display a message telling the user what they bought, how many and the total price. If the    quantity the user would like is unavaible the terminal will display a message telling the user that unfortunetly they don't have enough    in stocked, and well restock soon.
# Images of the code running/in progress.
mySQL data base
![](images/https://github.com/lowwrena1/bamazon/blob/master/images/bamazon_db.PNG)
Yulling stock info
![](images/https://github.com/lowwrena1/bamazon/blob/master/images/bamazon1.PNG)
User typing in id number & quantity
![](images/https://github.com/lowwrena1/bamazon/blob/master/images/bamazon2.PNG)
Final information being shown
![](images/https://github.com/lowwrena1/bamazon/blob/master/images/bamazon.PNG)
